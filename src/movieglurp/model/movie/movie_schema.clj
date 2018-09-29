(ns movieglurp.model.movie.movie-schema
  (:require [clojure.string :as str]
            [wlh.helper.string-helper :refer [ellipsis]]))

(def movie-schema
  [{:name "id" :type "integer" :null false :primary true}
   {:name "alloid" :type "integer"}
   {:name "createDate" :type "datetime" :null false}
   {:name "updateDate" :type "datetime" :null false}
   {:name "title" :type "text"}
   {:name "description" :type "text"}
   {:name "director" :type "text"}
   {:name "genre" :type "text"}
   {:name "imageUrl" :type "text"}
   {:name "thumb" :type "text"}
   {:name "pressEval" :type "text"}
   {:name "specEval" :type "text"}])

(defn map-movie-record-to-card-record [movie-record-list]
  {:id (:imdb-id movie-record-list)
   :title (:title movie-record-list)
   :description (ellipsis (:short-description movie-record-list) 10)
   ;; :image (str/join ["../" (movie/get-image-path-from-alloid (:alloid movie-record))])
   :image (str/join ["../" "aaaaaaaaaaaaaaaaaaaaaaa"])
   :meta (:genre movie-record-list)})

(defn get-movie-record-from-query-result2 [query-result]
  (map (fn [m]
         {:genre (:genre m)
          :director (first (:director m))
          :short-description (first (:director m))
          :time (-> m :time first (Integer.))
          :title (-> m :title first)
          :imbd-id (-> m :imbd-id first)
          :poster (-> m :poster first)
          :id (-> m :id)
          :_version_ (-> m :_version_)})
       (-> query-result
           :response :docs)))
