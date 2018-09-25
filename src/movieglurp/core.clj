(ns movieglurp.core
  (:require [net.cgrand.enlive-html :as html]
            [clojure.string :as str])
  (:use [clj-webdriver.taxi]
        [clj-webdriver.driver :only [init-driver]]))

(import 'org.openqa.selenium.phantomjs.PhantomJSDriver
        'org.openqa.selenium.remote.DesiredCapabilities)

(set-driver! (init-driver {:webdriver (PhantomJSDriver. (DesiredCapabilities.))}))

(defn cleanup [str]
  "Removes excess spaces at the beginning and end of the chain, as well as line
breaks."
  (if str (-> (clojure.string/replace str #"\n" "")
              (clojure.string/replace #" +$" "")
              (clojure.string/replace #"^ +" "")
              (clojure.string/replace #"" ""))
      ""))

(defn get-parsed-html-from-url [url]
  (get-url url)
  (html/html-snippet (html "body")))

(def get-parsed-html-from-url-memoized (memoize get-parsed-html-from-url))

(defn get-movie-list-data [url]
  (let [parsed-html (get-parsed-html-from-url-memoized url)
        items (-> parsed-html
                  (html/select [:.list_item]))
        html-row (take 1 items)]
    (letfn [(get-id [html-row]
              (try (second (re-find #"\/title\/(\w+)\/"
                                    (-> html-row
                                        (html/select [:.overview-top :h4 :a])
                                        first :attrs :href)))
                   (catch Exception e "-")))
            (get-title [html-row]
              (try (-> html-row
                       (html/select [:.overview-top :h4 :a])
                       first :content first cleanup)
                   (catch Exception e "-")))
            (get-pg [html-row]
              (try (-> html-row
                       (html/select [:.certimage])
                       first :attrs :title cleanup)
                   (catch Exception e "-")))
            (get-time [html-row]
              (try (-> html-row
                       (html/select [:time])
                       first :content first cleanup
                       (str/replace " min" "")
                       (Integer.))
                   (catch Exception e "-")))
            (get-genre [html-row]
              (try (-> html-row
                       (html/select [:.cert-runtime-genre :span])
                       first :content first cleanup)
                   (catch Exception e "-")))
            (get-short-description [html-row]
              (try (-> html-row
                       (html/select [:.outline])
                       first :content first cleanup)
                   (catch Exception e "-")))
            (get-director [html-row]
              (try (let [a (-> html-row
                               (html/select [:.txt-block])
                               first (html/select [:a]) first)]
                     {:name (-> a :content first cleanup)
                      :id (second (re-find #"\/name/(\w+)\/" (-> a :attrs :href)))})
                   (catch Exception e "-")))
            (get-stars [html-row]
              (into [] (map (fn [m]
                              {:name (-> m :content first cleanup)
                               :id (second (re-find #"\/name\/(\w+)\/" (-> m :attrs :href)))})
                            (-> html-row
                                (html/select [:.txt-block])
                                second (html/select [:a])))))
            (get-poster [html-row]
              (-> html-row
                  (html/select [:.poster])
                  first :attrs :src))
            (map-list-data [html-row]
              {:director (get-director html-row)
               :genre (get-genre html-row)
               :pg (get-pg html-row)
               :poster (get-poster html-row)
               :short-description (get-short-description html-row)
               :stars (get-stars html-row)
               :time (get-time html-row)
               :title (get-title html-row)
               :imdb-id (get-id html-row)})]
      (map map-list-data items))))
