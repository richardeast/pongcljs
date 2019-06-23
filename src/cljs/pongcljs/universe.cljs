(ns pongcljs.universe
  "All the objects, such as the game world, the player, the opponents and the objects live in the universe.
   This namespace is used to simplify the core namespace and to organise the objects in the game/universe"
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.game-world :as game-world]
            [pongcljs.opponents.boss :as boss]
            [pongcljs.player :as player]
            [pongcljs.puck :as puck]
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
