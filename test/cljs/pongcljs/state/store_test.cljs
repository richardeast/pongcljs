(ns pongcljs.state.store-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [pongcljs.state.store :as store]))

;; lein test :only pongcljs.state.store-test/call-the-store

(def state {:thing "cat"})

(deftest settingState
  (testing "save a map to a cookie"
    (is (= state (store/set state)))))

(deftest gettingState
  (testing "read a map from a cookie"
    (let [s (store/set state)
          g (store/get)]
      (is (= s g)))))

(deftest deleteState
  (testing "delete a cookie"
    (let [s (store/set state)
          g (store/get)
          d (store/delete)]
      (is (= s g))
      (is (= d nil)))))

(deftest isStateStored
  (testing "check if state is stored"
    (let [s (store/set state)
          e1 (store/empty?)
          d (store/delete)
          e2 (store/empty?)]
      (is (false? e1))
      (is (true? e2)))))

;; (run-tests)
