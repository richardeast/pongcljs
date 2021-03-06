(ns pongcljs.styles)

;; https://www.shutterstock.com/blog/neon-color-palettes
;; 25 Eye-Catching Neon Color Palettes to Wow Your Viewers by Alex Clem February 6, 2019
;; "Discover a neon color palette for every occasion, from bold party invitations to dramatic website designs. Get these hex color codes for the best neon hues."
;; TODO - move to an edn file and read in.
;; I'm lining up the css-hex codes to help identify typos.
;; TODO Add the active palette to the state.
(def color-palettes {:geometric-glow      ["#08F7FE" "#09FBD3" "#FE53BB" "#F5D300" "#000000"]
                     :neon-lights         ["#FFACFC" "#F148FB" "#7122FA" "#560A86" "#000000"]
                     :psychedelic-pattern ["#75D5FD" "#B76CFD" "#FF2281" "#011FFD" "#000000"]
                     :vivid-ferns         ["#FDC7D7" "#FF9DE6" "#A5D8F3" "#E8E500" "#000000"]
                     :abstract-wall       ["#00FECA" "#FDF200" "#FF85EA" "#7B61F8" "#000000"]
                     :colorful-cottage    ["#FFD300" "#DE38C8" "#652EC7" "#33135C" "#000000"]
                     :cosmic-burst        ["#3B27BA" "#E847AE" "#13CA91" "#FF9472" "#000000"]
                     :pops-of-pink        ["#FFDEF3" "#FF61BE" "#3B55CE" "#35212A" "#000000"]
                     :algave-glitch       ["#FDD400" "#FDB232" "#02B8A2" "#01535F" "#000000"]
                     :fluorescent-fish    ["#FEC763" "#EA55B1" "#A992FA" "#00207F" "#000000"]
                     :glowing-coral       ["#79FFFE" "#FEA0FE" "#FF8B8B" "#F85125" "#000000"]
                     :luxurious-lights    ["#CE96FB" "#FF8FCF" "#00C2BA" "#037A90" "#000000"]
                     :luminous-lines      ["#01FFC3" "#01FFFF" "#FFB3FD" "#9D72FF" "#000000"]
                     :sharp-stationery    ["#A0EDFF" "#EBF875" "#28CF75" "#FE6B35" "#000000"]
                     :bright-bokeh        ["#FCF340" "#7FFF00" "#FB33DB" "#0310EA" "#000000"]})

(defn random-style []
  (-> color-palettes
      keys
      rand-nth))

;; Functions for getting a color when style is taken from the state

(def get-current-style #(get-in % [:style]))
(def get-current-palette #(get color-palettes (get-current-style %)))
(defn pick-color [f state]
  (f (get-current-palette state)))

;; Functions for getting a color when style passed in
(defn style->color
  "Pick a color from a style -
   (style->color :bright-bokeh first) ;; gets first color for that style"
  [k f]
  (f (k color-palettes)))

(defn n->color
  "return hex color based on position in the style"
  [state n]
  (style->color (:style state) #(nth % n)))
