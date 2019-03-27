(ns pongcljs.hex-rgb-conversion-test
  (:require [clojure.test :refer :all]
            [pongcljs.hex-rgb-conversion :refer :all]))

;;; Test data
(def black [0 0 0])
(def white [255 255 255])
(def orange [255 102 0])

(deftest hex->num-test
  (testing "simple numbers"
    (is (zero? (hex->num "0")))
    (is (zero? (hex->num "00")))
    (is (= 1 (hex->num "01")))
    (is (= 9 (hex->num "9"))))
  (testing "hex values")
    (is (= 15 (hex->num "f")))
    (is (= 153 (hex->num "99")))
    (is (= 255 (hex->num "ff"))))

(deftest hex->rgb-long-test
  (testing "Simple numbers"
    (is (= (hex->rgb "#000000") black))
    (is (= (hex->rgb "#020202") [2 2 2])))
  (testing "hex values"
    (is (= (hex->rgb "#ffffff") white))
    (is (= (hex->rgb "#FFFFFF") white))
    (is (= (hex->rgb "#ff6600") orange))))

(deftest hex->rgb-short-test
  (testing "Shorthand Hex Colors"
    (is (= (hex->rgb "#fff") white))
    (is (= (hex->rgb "#FFF") white))
    (is (= (hex->rgb "#000") black))
    (is (= (hex->rgb "#F60") orange))))

(deftest hex->rgb-test
  (testing "Simple numbers"
    (is (= (hex->rgb "#000000") black))
    (is (= (hex->rgb "#010101") [1 1 1])))
  (testing "hex values"
    (is (= (hex->rgb "#ffffff") white))
    (is (= (hex->rgb "#FFFFFF") white))
    (is (= (hex->rgb "#ff6600") orange)))
  (testing "Shorthand Hex Colors"
    (is (= (hex->rgb "#fff") white))
    (is (= (hex->rgb "#000") black))
    (is (= (hex->rgb "#f60") orange))))

