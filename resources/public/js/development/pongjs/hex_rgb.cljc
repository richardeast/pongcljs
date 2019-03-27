(ns pongjs.hex-rgb
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
  (condp = (count s)
    7 (hex->rgb-long s)
    ;; normal hex, otherwise presume shorthand hex code.
    ;;else
    (hex->rgb-short s)))


;;To test these, they probably need to be done within a quil sketch
(defn fill
  "Set css hex color to fill shapes. Same as http://quil.info/api/color/setting#fill, but using hex."
  ([^String s]
   (let [[r g b] (hex->rgb s)]
     (q/fill r g b)))
  ([^String s alpha]
   (let [[r g b] (hex->rgb s)]
     (q/fill r g b alpha))))

;; (defn fill
;;   "Set css hex color to fill shapes. Same as http://quil.info/api/color/setting#fill, but using hex."
;;   [^String s & alpha]
;;   (let [[r g b] (hex->rgb s)]
;;     (if alpha (q/fill r g b alpha)
;;               (q/fill r g b))))

(defn stroke [^String s]
  (let [[r g b] (hex->rgb s)]
    (q/stroke r g b)))

(defn background [^String s]
  (let [[r g b] (hex->rgb s)]
    (q/background r g b)))
