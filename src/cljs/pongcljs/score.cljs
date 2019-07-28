(ns pongcljs.score
  (:refer-clojure :exclude [update])
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.universe.game-world :as game-world]
            [pongcljs.universe.puck :as puck]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.styles :as styles]))

(defn player-scored?
  "They score if they have gone over the horizon"
  [y state] (< y (game-world/horizon-height state)))

(defn opponent-scored?
  "They score if they have gone off the bottom of screen"
  [y] (> y (q/height)))

 (defn update-state
   "Update the state based on the effects of someone scoring"
   [state score]
   (-> (assoc-in state [:score :values] score)
       (puck/reset-in-centre)
       (puck/toggle-direction)))

(defn update
  "Update the score"
  [state]
  (let [y (get-in state [:universe :puck :pos :y]) ;; when calculating score we only care about up and down the board. :x position is irrelevant.
        [opponent player] (get-in state [:score :values])]
    (cond
      (player-scored? y state) (update-state state [opponent (inc player)])
      (opponent-scored? y) (update-state state [(inc opponent) player])
      :else
       state)))

(defn draw
  "Show the score"
  [state]
  (let [boss-color (get-in state [:universe :boss :colors :fill-color])
        player-color (get-in state [:universe :player :colors :fill-color])
        {:keys [values colors pos separator]} (get-in state [:score])
        {:keys [stroke-color stroke-weight fill-color fill-transparency text-size]} colors
        {:keys [x y]} pos
        [a b] values]
    (q/text-size text-size)
    ;; Using the Boss and Player colors in the score to aid the player to know the results.
    ;; TODO If boss's score is too big, it merges into the text separator
    (hex/fill boss-color fill-transparency)
    (q/text a x y)
    (hex/fill fill-color fill-transparency)
    (q/text separator (+ x 20) y)
    (hex/fill player-color fill-transparency)
    (q/text b (+ x 60) y)))
