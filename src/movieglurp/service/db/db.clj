(ns movieglurp.service.db.db
  ;; (:require [korma.db :refer :all])
  )

;; (def db {:classname "org.sqlite.JDBC"
;;          :subprotocol "sqlite"
;;          :subname "resources/databases/allocine.db"})

(def connection {:username ""
                 :password ""
                 :address "127.0.0.1:8983"
                 :core "Solr_sample"})

(def core-slr-sample "Solr_sample")

;; (defdb movieglurp db)
