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
   :frame-rate 25
   :hud {:show true
         :colors {:text-color "#00ff00"
                  :text-size-data 20
                  :text-size-position 12}}
   :mouse-wheel nil
   :messages {:active-state :welcome
              :background-transparency 100 ; TODO move to the colors
              :functions {:draw nil}
              :lang :eng
              :languages nil
              :style :bright-bokeh
              :colors {:text nil :background nil :border nil}
              :text-size 20}
   :paddle {:width 100 :height 30} ; TODO might be nice for these to be relative to the screen size
   :paused true
   :score {:colors {:stroke-color nil
                    :stroke-weight 3
                    :fill-color nil
                    :fill-transparency 255
                    :text-size 40}
           :functions {:draw nil}
           :separator " : "
           :pos {:x 680 :y 60}
           :values [0 0]}
   :screen {:size [850 600]} ; TODO might be nice for this to be dynamically adjusted, based on the browser window
   :sound {:on true}
   :style :algave-glitch
   :universe {:boss {:angle 0.0
                     :colors {:stroke-color nil
                              :stroke-weight 3
                              :fill-color nil
                              :fill-transparency 200}
                     :functions {:draw :boss} ; TODO - Don't need in the long run
                     :pos {:x 0
                           :y 0}
                     :speed 50}
              :game-world {:pos {:x 0 :y 0}
                           :color nil
                           :functions {:draw :game-world} ; TODO - Don't need in the long run
                           :horizon 0
                           :items {:sky {:colors {:fill-color nil}}
                                   :ground {:colors {:fill-color nil}}
                                   :tennis-court {:colors {:stroke-color nil
                                                           :stroke-weight 3
                                                           :fill-color nil}
                                                  :circle {:diameter 200}}}}
              :player {:colors {:stroke-color nil
                                :stroke-weight 3
                                :fill-color nil
                                :fill-transparency 200}
                       :collision false
                       :functions {:draw :player} ; TODO - Don't need in the long run
                       :pos {:x 0
                             :y 0}}
              :puck {:acceleration {:x nil ; Change in velocity over time
                                    :y nil} ; TODO Not used yet
                     :angle nil
                     :colors {:stroke-color nil
                             :stroke-weight 1
                             :fill-color nil
                             :fill-transparency 255}
                     :functions {:draw :puck ; TODO - Don't need in the long run
                                 :direction :away
                                 ;; TODO :direction {:x :away :y :away}
                                 }
                     :pos {:x 0
                           :y 0}
                     :speed {:x 5 :y 5}
                     :diameter 30 ; TODO might be nice for these to be relative to the screen size
                     :depth 5}}})
;; That'll do pig, that'll do
