(ns pongcljs.universe.core
  "All the objects, such as the game world, the player, the opponents and the objects live in the universe.
   This namespace is used to simplify the core namespace and to organise the objects in the game/universe"
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.universe.game-world :as game-world]
            [pongcljs.universe.opponents.boss :as boss]
            [pongcljs.universe.player :as player]
            [pongcljs.universe.puck :as puck]
            [pongcljs.score :as score]))

;;; Update Functions
;; (def update-game-world game-world/update) ; TODO
(def update-boss boss/update)
(def update-player player/update)
(def update-puck puck/update)
(def update-score score/update)

;;; Draw Functions
(def draw-game-world game-world/draw)
(def draw-boss boss/draw)
(def draw-player player/draw)
(def draw-puck puck/draw)
(def draw-score score/draw) ; These function names mean something different in Association Football

(defn order-of-draw-functions
  "Work out the order to draw of the objects in the universe"
  [state ks]
  ;;TODO this is temporary until I've moved all the game objects together in one place in the state
  (let [a (select-keys state ks)
        b (get-in state [:universe :boss])
        g (get-in state [:universe :game-world])
        p (get-in state [:universe :puck])
        pl (get-in state [:universe :player])
        c (into {:boss b :game-world g :puck p :player pl} a)
        ]
  ;;  (enable-console-print!)
  ;;  (println c)
    (->>
     c
     (sort-by (comp :y :pos val)) ; sort by the y position
     (map (comp :draw :functions val)))))

;; (defn order-of-draw-functions
;;   "Work out the order to draw of the objects in the universe"
;;   [state ks]
;;   (->>
;;    (select-keys state ks)
;;    (sort-by (comp :y :pos val)) ; sort by the y position
;;    (map (comp :draw :functions val))))
