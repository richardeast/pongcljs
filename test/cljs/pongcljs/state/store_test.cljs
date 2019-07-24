(ns pongcljs.state.store-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [pongcljs.state.store :as store]))

;; lein test :only pongcljs.state.store-test/call-the-store

(deftest callstore
  (testing "can call the store"
    (is (= "hello" (store/echo "hello")))))

(deftest settingState
  (testing "save a map to a cookie")
  (let [state {:thing "cat"}]
    (is (= state (store/set state)))))

(deftest gettingState
  (testing "read a map from a cookie")
  (let [state {:thing "cat"}
        s (store/set state)]
    (is (= state (store/get)))))


;; (run-tests)
