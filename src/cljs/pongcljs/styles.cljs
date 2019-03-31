(ns pongcljs.styles)

;; https://www.shutterstock.com/blog/neon-color-palettes
;; 25 Eye-Catching Neon Color Palettes to Wow Your Viewers by Alex Clem February 6, 2019
;; "Discover a neon color palette for every occasion, from bold party invitations to dramatic website designs. Get these hex color codes for the best neon hues."
;; TODO - move to an edn file and read in.
;; I'm lining up the css-hex codes to help identify typos.
(def color-palettes {:geometric-glow      ["#08F7FE" "#09FBD3" "#FE53BB" "#F5D300"]
                     :neon-lights         ["#FFACFC" "#F148FB" "#7122FA" "#560A86"]
                     :psychedelic-pattern ["#75D5FD" "#B76CFD" "#FF2281" "#011FFD"]
                     :vivid-ferns         ["#FDC7D7" "#FF9DE6" "#A5D8F3" "#E8E500"]
                     :abstract-wall       ["#00FECA" "#FDF200" "#FF85EA" "#7B61F8"]
                     :colorful-cottage    ["#FFD300" "#DE38C8" "#652EC7" "#33135C"]
                     :cosmic-burst        ["#3B27BA" "#E847AE" "#13CA91" "#FF9472"]
                     :pops-of-pink        ["#FFDEF3" "#FF61BE" "#3B55CE" "#35212A"]
                     :algave-glitch       ["#FDD400" "#FDB232" "#02B8A2" "#01535F"]
                     :fluorescent-fish    ["#FEC763" "#EA55B1" "#A992FA" "#00207F"]
                     :glowing-coral       ["#79FFFE" "#FEA0FE" "#FF8B8B" "#F85125"]
                     :luxurious-lights    ["#CE96FB" "#FF8FCF" "#00C2BA" "#037A90"]
                     :luminous-lines      ["#01FFC3" "#01FFFF" "#FFB3FD" "#9D72FF"]
                     :sharp-stationery    ["#A0EDFF" "#EBF875" "#28CF75" "#FE6B35"]
                     :bright-bokeh        ["#FCF340" "#7FFF00" "#FB33DB" "#0310EA"]})
(def palette (:algave-glitch color-palettes))

(def color-a (first palette))
(def color-b (second palette))
(def color-c (nth palette 2))
(def color-d (last palette))
