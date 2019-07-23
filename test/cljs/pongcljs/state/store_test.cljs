(ns pongcljs.state.store-test.cljs
  (:require [clojure.test :refer :all]
            [poncljs.state.store :refer :all]))

(def test call-the-store
  (testing "can call the store")
   (is (= "hello" (echo "hello"))))
