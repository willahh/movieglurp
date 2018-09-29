(ns movieglurp.core-test
  (:require [clojure.test :refer :all]
            [movieglurp.process.imbd-scrapper.list :refer :all]
            [movieglurp.service.db.db :as db]))

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 0 1))))





;; (add-docs connection (core/get-movie-list-data-from-search "https://www.imdb.com/search/title?genres=comedy&explore=title_type,genres&page=9"))
;; (-> (query connection :q "*:*"
;;            :facet "on"
;;            :facet-field "genre")
;;     :facet_counts :facet_fields :genre)

;; (-> (query connection :q "items:*"))

;; (-> (query connection :q "items:*"))




;; (client/post (str "http://" (connection :address)
;;                   "/solr/" (connection :core)
;;                   "/update")
;;              {:form-params {:delete {:query "ites:*"}}
;;               :content-type :json})