(ns pongcljs.universe.core
  "All the objects, such as the game world, the player, the opponents and the objects live in the universe.
   This namespace is used to simplify the core namespace and to organise the objects in the game/universe"
  (:refer-clojure :exclude [update])
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.logging :as log]
            [pongcljs.score :as score]
            [pongcljs.state.core :as state]
            [pongcljs.styles :as styles]
            [pongcljs.universe.game-world :as game-world]
            [pongcljs.universe.opponents.boss :as boss]
            [pongcljs.universe.player :as player]
            [pongcljs.universe.puck :as puck]))

;;; Update Functions
;; (def update-game-world game-world/update) ; TODO

(defn update [state]
  ;; threading macro used so the game state gets passed from function to the next
  (-> state
      score/update
      boss/update
      player/update
      puck/update))

;;; Draw Functions
(def draw-boss boss/draw)
(def draw-game-world game-world/draw)
(def draw-player player/draw)
(def draw-puck puck/draw)
;; TODO Not sure about score being here. May have to move it.
(def draw-score score/draw) ; These function names mean something different in Association Football

(defn order-of-draw-functions
  "Work out the order to draw of the objects in the universe"
  [state]
  (->>
   (:universe state)
   (sort-by (comp :y :pos val)) ; sort by the y position
   ;; TODO Can I just select keys instead?
   (map (comp :draw :functions val))))

(defn change-colors
  [state]
  ;; TODO Make more like the order-of-draw-functions
  (log/info "change colors")
  (-> state
      (assoc-in [:style] (styles/random-style))
      (boss/change-colors)
      (player/change-colors)
      (puck/change-colors)
      (game-world/change-colors)
      (state/save)))
