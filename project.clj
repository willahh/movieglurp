(defproject movieglurp "0.1.0-SNAPSHOT"
  :description ""
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[cheshire "5.8.1"]
                 [cheshire "5.8.1"]
                 [clj-http "3.9.1"]
                 [clj-tagsoup "0.3.0"]
                 [clj-webdriver "0.7.2"]
                 [com.github.detro.ghostdriver/phantomjsdriver "1.0.3"]
                 [compojure "1.6.1"]
                 [enlive "1.1.6"]
                 [hiccup "1.0.5"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/data.json "0.2.6"]
                 [ring "1.6.3"]
                 [ring/ring-defaults "0.3.1"]
                 [ring/ring-json "0.4.0"]]
  :plugins [[lein-ring "0.7.3"]]
  :ring {:handler movieglurp.route/app})
