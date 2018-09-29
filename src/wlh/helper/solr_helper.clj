(ns wlh.helper.solr-helper
  (:require [clj-http.client :as client]
            [clojure.data.json :as json]
            [clojure.test :as t]))

(def connection {:username ""
                 :password ""
                 :address "127.0.0.1:8983"
                 :core "Solr_sample"})

(defn add-docs [connection docs]
  (client/post (str "http://" (connection :address)
                    "/solr/" (connection :core)
                    "/update")
               {:form-params docs :content-type :json}))

(defn ?assoc
  "Same as assoc, but skip the assoc if v is nil"
  [m & kvs]
  (->> kvs
       (partition 2)
       (filter second)
       (map vec)
       (into m)))

(defn query [connection &
             {:keys [q      ;; query
                     fq     ;; filter
                     sort   ;; sort
                     fl     ;; list of fields
                     df     ;; default field to search
                     start  ;; start page
                     rows   ;; number per row
                     indent ;; send response with newlines and tabs
                     hl     ;; highlighting?
                     hl-fl
                     facet ;; Use facet true or false
                     facet-field ;; Facet field value
                     ]
              :or  {q "*:*" indent true}}]
  (-> (client/get (str "http://"
                       (connection :address)
                       "/solr/"
                       (connection :core)
                       "/select")
                  {:query-params
                   (?assoc {"q"     q}
                           "fq"     fq
                           "sort"   sort
                           "fl"     fl
                           "df"     df
                           "wt"     "json" 
                           "start"  start
                           "rows"  rows
                           "hl"     hl
                           "hl.fl"  hl-fl
                           "indent" indent
                           "facet" facet
                           "facet.field" facet-field)}
                  )
      (:body)
      (json/read-json)))

