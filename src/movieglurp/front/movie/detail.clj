(ns movieglurp.front.movie.detail
  (:require [clojure.string :as str]
            [movieglurp.component.card :as card]
            ;; [movieglurp.process.movie.movie :as movie]
            [movieglurp.front.main :as main]
            [movieglurp.model.movie.movie-dao :as movie-dao]))

(defn get-thumb-path [movie-record]
  (str/join ["../../" "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]))

(defn get-html [request]
  (let [session (:session request)
        params (:params request)
        context (:context request)]
    (let [imdb-id (:imdb-id params)
          movie-record (movie-dao/find-by-imdb-id imdb-id)]
      (-> [:div {:style "padding-top: 20px;"}
           (card/card-html (:context request)
                           (:imdb-id movie-record)
                           (:title movie-record)
                           (:short-description movie-record)
                           (get-thumb-path movie-record)
                           (:genre movie-record))]
          (main/wrap-page-html request)))))
