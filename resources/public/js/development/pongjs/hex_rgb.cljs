(ns pongjs.hex-rgb
  "Helper functions for turning css-hex codes into rgb and for drawing them using quil.
  Note: Processing allows this, but from my investigations, Quil does not. https://processing.org/reference/stroke_.html"
  (:require [quil.core :as q :include-macros true]
            [pongjs.hex-rgb-conversion :as h]))

;;Note: A lot of the Type hinting is not enforced in ClojureScript. I've kept it here because it's not excessive and it's helped readability for me.

(def ^:private opaque 255) ;; alpha layer in quill goes from 0 (Transparent) to 255 (Opaque)
;; if no alpha is passed then it defaults to opaque.
;; I'm using the default of opaque to write less code.

(defn- call
  "helper function to call a quil function. All the calling functions needed to transform hex to rgb, therefore we can do it all in one go here.
   A lot of quil color functions follow the pattern of (Function Red Green Blue Alpha)"
  [f ^String s ^Integer alpha]
  (let [[r g b] (h/hex->rgb s)]
    (f r g b alpha)))

;; To test these, they need to be called within a quil sketch
(defn fill
  "Set css hex color to fill shapes. Same as http://quil.info/api/color/setting#fill, but using hex."
  ([^String s] (fill s opaque))
  ([^String s ^Integer alpha] (call q/fill s alpha)))

(defn stroke
  "Set css hex color to stroke. Same as http://quil.info/api/color/setting#stroke, but using hex."
  ([^String s] (stroke s opaque))
  ([^String s ^Integer alpha] (call q/stroke s alpha)))

(defn background
  "Set css hex color to the background. Same as http://quil.info/api/color/setting#background but using hex."
  ([^String s] (background s opaque))
  ([^String s ^Integer alpha] (call q/background s alpha)))
