(ns movieglurp.model.movie.movie-dao
  (:require [wlh.helper.solr-helper :refer :all]
            [movieglurp.service.db.db :as db]
            [movieglurp.model.movie.movie-schema :as schema]))

(defn find-by-imdb-id [imbd-id]
  (-> (db/connection :q (str "imdb-id:" imbd-id))
      schema/get-movie-record-from-query-result
      first))

(def collection db/core-slr-sample)

(defn find-list
  ([]
   (-> (query db/connection collection :q (str "imdb-id:*"))))

  ([start limit]
   (-> (query db/connection collection :q (str "imdb-id:*")
              :start start :rows limit)))

  ([start limit order asc]
   (-> (query db/connection collection :q (str "imdb-id:*")
              :start start :rows limit)))

  ([start limit order asc p-query]
   (-> (query db/connection collection :q p-query
              :start start :rows limit))))

(defn find-list-for-home [session params]
  (let [;; Parameters
        offset (Integer. (or (:offset params) 1))
        limit (Integer. (or (:limit params) 10))
        order :alloid
        asc :ASC
        genre (:genre params)]
    
    (let [genre-list (if genre
                       (clojure.string/split genre #",")
                       [""])
          q (when (and genre (not= genre ""))
              (clojure.string/join
               ""
               ["genre: " "(" (clojure.string/join " " (into []  genre-list)) ")"]))
          select-response (find-list offset limit order asc q)]
      {:total (-> select-response
                  :response :numFound)
       :count (-> select-response
                  :response :docs count)
       :offset offset
       :limit limit
       :records (schema/get-movie-record-from-query-result select-response)})))

(defn get-movie-facet [genre]
  (->> (query db/connection collection :q (str "imdb-id:*")
              :facet "on" :facet-field "genre")
       :facet_counts :facet_fields :genre
       (partition 2)
       (map (fn [m]
              {:label (first m)
               :count (second m)}))))
