(ns pongcljs.state.defaults)

;; "It is better to have 100 functions operate on one data structure than 10 functions on 10 data structures." — Alan Perlis, Epigrams on Programming,
;; https://en.wikipedia.org/wiki/Epigrams_on_Programming

;; There's a good argument to move this to resources/edn, and slurp it in, but this is a Clients-side ClojureScript project,
;; there's too many ways we can read the data. Keeping it in its own namespace keeps it simple and works with both Java and JavaScript.
;; To read the file in Clojure see: https://github.com/clojure-cookbook/clojure-cookbook/blob/master/04_local-io/4-04_get-local-resource.asciidoc

;; Clojure excels at turning data from one form to another.
;; That philosophy is informing this implementation.
;; It focuses on updating the state. The drawing functions will be just a view of this stae.

(def starting-state
  {:camera { ;The view of the game world
              ;Over-head will be 0
            :angle 0
            :max-angle 100
            :min-angle -100} ;; TODO these min/max angles are a smell. Ought to make it a real angle, like 90 degrees.
   :event nil
   :game-world {:pos {:x 0 :y 0}
                :color nil
                :functions {:update nil
                            :draw nil}
                :horizon nil}
   :hud {:show true}
   :mouse-wheel nil
   :messages {:active-state :welcome
              :background-transparency 100 ;; TODO move to the colors
              :functions {:update nil
                          :draw nil}
              :lang :eng
              :languages nil
              :style :bright-bokeh
              :colors {:text nil :background nil :border nil}
              :text-size 20}
   :paddle {:width 100 :height 30} ; TODO might be nice for these to be relative to the screen size
   :paused true
   :player {:color nil
            :functions {:update nil
                        :draw nil}
            :pos {:x 0
                  :y 0}}
   :score {:color nil
           :functions {:update nil
                       :draw nil}
           :values [0 0]}
   :screen {:size [850 600]} ; TODO might be nice for this to be dynamically adjusted, based on the browser window
   :style :algave-glitch
   :universe {:boss {:color nil
                     :functions {:update nil
                                 :draw nil}
                     :pos {:x 0
                           :y 0}
                     :angle 0.0}
              :puck {:color nil
                     :functions {:update nil
                                 :draw nil}
                     :pos {:x 0
                           :y 0}
                     :direction nil
                     :height 25  ; TODO might be nice for these to be relative to the screen size
                     :width 50
                     :depth 5}

              }



   })
