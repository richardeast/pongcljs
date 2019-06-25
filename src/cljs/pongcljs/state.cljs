(ns pongcljs.state
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.game-world :as game-world]
            [pongcljs.messages :as messages]
            [pongcljs.puck :as puck]
            [pongcljs.universe :as universe]))

;; "There's a simple rule that everybody follows - put all your app-state in one place" - David Nolen https://clojurescriptpodcast.com/ S1E1

;; "It is better to have 100 functions operate on one data structure than 10 functions on 10 data structures." —Alan Perlis, Epigrams on Programming,
;; https://en.wikipedia.org/wiki/Epigrams_on_Programming

;; There's a good argument to move this to resources/edn, and slurp it in, but this is a Clients-side ClojureScript project,
;; there's too many ways we can read the data. Keeping it in its own namespace keeps it simple and works with Java.
;; To read the file in Clojure see: https://github.com/clojure-cookbook/clojure-cookbook/blob/master/04_local-io/4-04_get-local-resource.asciidoc

(def starting-state
  {:boss {:color nil
          :functions {:update universe/update-boss
                      :draw universe/draw-boss}
          :pos nil
          :angle 0.0}
   :camera { ;The view of the game world
              ;Over-head will be 0
            :angle 0
            :max-angle 100
            :min-angle -100} ;; TODO these min/max angles are a smell. Ought to make it a real angle, like 90 degrees.
   :event nil
   :game-world {:pos {:x 0 :y 0}
                :color nil
                :functions {:update nil
                            :draw universe/draw-game-world}
                :horizon nil}
   :hud {:show false}
   :mouse-wheel nil
   :messages {:active-state :welcome
              :background-transparency 100
              :functions {:update nil
                          :draw nil}
              :lang :eng
              :languages nil
              :style :bright-bokeh
              :text-size 20}
   :paddle {:width 100 :height 30}
   :paused true
   :player {:color nil
            :functions {:update universe/update-player
                        :draw universe/draw-player}
            :pos nil}
   :puck {:color nil
          :functions {:update universe/update-puck
                      :draw universe/draw-puck}
          :pos nil
          :direction nil
          :height 25
          :width 50
          :depth 5}
   :score {:color nil
           :functions {:update universe/update-score
                       :draw universe/draw-score}
           :values [0 0]}
   :screen {:size [850 600]}
   :style :algave-glitch})

(defn get-starting-state
  "Get the starting state of the application, but inject in additional environmental data."
  []
  ;; TODO memorize because q/sketch and core.setup both want data from this. We want ot make sure it's the same data and we don't need to repeat this effort.
  ;; TODO Give some meaning to these numbers
  (->
   starting-state
   (assoc-in [:boss :pos] (let [h (/ (q/height) 5.5)
                                w (- (/ (q/width) 2)
                                     (/ (get-in starting-state [:paddle :width]) 2))]
                            {:x w
                             :y h}))
   (assoc-in [:game-world :horizon] (/ (q/height) 6))
   (assoc-in [:messages :languages] messages/text)
   (assoc-in [:player :pos] (let [h (- (q/height) 100)
                                  w (/ (q/width) 2)]
                              {:x w
                               :y h}))
   (assoc-in [:puck :direction] puck/away)
   (assoc-in [:puck :pos] (game-world/centre))))
