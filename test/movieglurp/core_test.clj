(ns movieglurp.core-test
  (:require [clojure.test :refer :all]
            [wlh.helper.solr-helper :as solr-helper]
            [movieglurp.process.imbd-scrapper.list :refer :all]
            [movieglurp.service.db.db :as db]))

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 0 1))))

(solr-helper/add-docs db/connection db/core-movie true
                      (get-movie-list-data-from-search "https://www.imdb.com/search/title?genres=comedy&explore=title_type,genres&page=9"))

(def a (get-movie-list-data-from-search "https://www.imdb.com/search/title?genres=comedy&explore=title_type,genres&page=10"))
(def b [{:genre "Action, Comedy, Crime",
         :pg "Tous publics",
         :director "Rawson Marshall Thurber",
         :short-description
         "After he reconnects with an awkward pal from high school through Facebook, a mild-mannered accountant is lured into the world of international espionage.",
         :time "107",
         :title "Agents presque secrets",
         :imdb-id "tt1489889",
         :poster
         "https://m.media-amazon.com/images/M/MV5BMjA2NzEzNjIwNl5BMl5BanBnXkFtZTgwNzgwMTEzNzE@._V1_UX67_CR0,0,67,98_AL_.jpg",
         :stars "6,3"}])

b
(solr-helper/add-docs db/connection db/core-movie true b)

