(ns movieglurp.model.movie.movie-dao
  (:require [wlh.helper.solr-helper :refer :all]
            [movieglurp.model.movie.movie-schema :as schema]))

;; (defn insert! [record]
;;   "Insert a record into database."
;;   )

(defn find-by-alloid [imbd-id]
  (-> (query connection :q (str "imdb-id:" imbd-id))
      :response :docs first))

(defn find-list
  ([]
   (-> (query connection :q (str "imdb-id:*"))))

  ([start limit]
   (-> (query connection :q (str "imdb-id:*")
              :start start :rows limit)))

  ([start limit order asc]
   (-> (query connection :q (str "imdb-id:*")
              :start start :rows limit)))

  ([start limit order asc criteria-list]
   (-> (query connection :q (str "imdb-id:*")
              :start start :rows limit))))

(defn find-list-for-home [session params]
  (let [;; Parameters
        offset (Integer. (or (:offset params) 1))
        limit (Integer. (or (:limit params) 10))
        order :alloid
        asc :ASC
        genre (:genre params)]
    
    (def criteria-list `())

    ;; (when (and genre (not= genre ""))
    ;;   (def genre-list (str/split genre #","))
    ;;   (def criteria-list `((korma.core/where (~'or ~@(map (fn [m]
    ;;                                                         {:genre m}) genre-list))))))
    
    (let [select-response (find-list offset limit order asc)]
      {:total (-> select-response
                  :response :numFound)
       :count (-> select-response
                  :response :docs count)
       :offset offset
       :limit limit
       :records (schema/get-movie-record-from-query-result2 select-response)})))

(defn get-movie-facet []
  (->> (query connection :q (str "imdb-id:*")
              :facet "on" :facet-field "genre")
       :facet_counts :facet_fields :genre
       (partition 2)
       (map (fn [m]
              {:label (first m)
               :count (second m)}))))