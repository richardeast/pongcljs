(ns pongcljs.hex-rgb-conversion
  "Helper functions for turning css-hex codes into rgb and for drawing them using quil"
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn hex->num
  "Turn a string in hex format into a decimal number"
  [^String s]
  #?(:clj (Integer/parseInt s 16)
     :cljs (js/parseInt s 16)))

(defn hex->rgb-long
  "Turn css hex in '#abcdef' format into RGB seq"
  [^String s]
  (->> (rest s)       ;; drop # and turn into a seq.
       (partition 2)
       (map #(apply str %))
       (map hex->num)))

(defn hex->rgb-short
  "Turn css hex in the shorthand form of '#abc' into RGB seq"
  [^String s]
  (->> (rest s)       ;; drop # and turn into a seq.
       (partition 1)
       (map #(str (first %) (first %)))
       (map hex->num)))

(defn hex->rgb
  "Turn css hex into RGB seq"
  [^String s]
  (condp = (bounded-count 8 s)
    7 (hex->rgb-long s)
    ;; normal hex, otherwise presume shorthand hex code.
    ;;else
    (hex->rgb-short s)))
