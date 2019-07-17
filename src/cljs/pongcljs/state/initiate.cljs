(ns pongcljs.state.initiate
  (:require [pongcljs.logging :as log]
            [pongcljs.messages :as messages]
            [pongcljs.styles :as styles]
            [pongcljs.universe.core :as universe]
            [pongcljs.universe.game-world :as game-world]
            [pongcljs.universe.puck :as puck]))

(defn init
  "returns state"
  [state]
  ;; TODO consider using the functions with the objects, then I can remove a lot of universe functions
  ;; the downside of this, is there's a lot of order to having them here
  ;; TODO Give some meaning to these numbers
  ;; TODO remove the need for the q namespace. Base it on the :screen :size instead
  ;;      the advantage of this is that this state is independent of quil, so is one less barrier to moving it to another framework.
  (log/info "init application")
  (let [default-style (:style state)
        [screen-width screen-height] (get-in state [:screen :size])
        halfway-across (/ screen-width 2)]
    (->
     state
     (assoc-in [:universe :boss :colors :fill-color] (styles/style->color default-style second))
     (assoc-in [:universe :boss :pos] (let [h (/ screen-height 5.5)
                                            w (- halfway-across
                                                 (/ (get-in state [:paddle :width]) 2))]
                                        {:x w
                                         :y h}))
     (assoc-in [:universe :boss :functions :draw] universe/draw-boss)
     (assoc-in [:universe :boss :functions :update] universe/update-boss)

     (assoc-in [:universe :game-world :items :ground :colors :fill-color] (styles/style->color default-style #(nth % 2)))
     (assoc-in [:universe :game-world :items :sky :colors :fill-color] (styles/style->color default-style last))
     (assoc-in [:universe :game-world :items :tennis-court :colors :fill-color] 0)
     (assoc-in [:universe :game-world :items :tennis-court :colors :stroke-color] (styles/style->color default-style first))
     (assoc-in [:universe :game-world :horizon] (/ screen-height 6))
     (assoc-in [:universe :game-world :functions :draw] universe/draw-game-world)

     (assoc-in [:universe :player :colors :fill-color] (styles/style->color default-style first))
     (assoc-in [:universe :player :pos] {:x halfway-across
                                         :y (- screen-height 100)})
     (assoc-in [:universe :player :functions :update] universe/update-player)
     (assoc-in [:universe :player :functions :draw] universe/draw-player)

     (assoc-in [:universe :puck :direction] puck/away)
     (assoc-in [:universe :puck :pos] (game-world/centre state))
     (assoc-in [:universe :puck :functions :update] universe/update-puck)
     (assoc-in [:universe :puck :functions :draw] universe/draw-puck)
     (assoc-in [:messages :languages] messages/text)
     (assoc-in [:score :functions :update] universe/update-score)
     (assoc-in [:score :functions :draw] universe/draw-score)
     ;; (save)
     )))
