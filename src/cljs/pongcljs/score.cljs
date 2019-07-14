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
       (puck/toggle-direction)
       ))

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

;;TODO make the score for each side, the same colour as the player's bat/paddle
(defn draw
  "Show the score"
  [state]
  (let [[a b] (get-in state [:score :values])]
    (hex/fill (styles/color-b state))
    (q/text-size 40)
    ;; TODO Use the colors set in Boss and Player namespace
    (q/text (str a  " : " b) 680 60)))
