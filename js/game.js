import { shuffleArray, pathWithTile } from "./modules/display.js";

const $card = document.querySelectorAll('.card')
const HIDE_IMG_PATH = `./assets/img/question.svg`
const PATH = `./assets/img/alphabet-scrabble/`
const IMG_PATH = [`${PATH}1.png`,
`${PATH}1.png`,
`${PATH}2.png`,
`${PATH}2.png`,
`${PATH}3.png`,
`${PATH}3.png`,
`${PATH}4.png`,
`${PATH}4.png`,
`${PATH}5.png`,
`${PATH}5.png`,
`${PATH}6.png`,
`${PATH}6.png`]
const SHUFFLE_IMG_PATH = IMG_PATH
let count = 0
let score = 0
let firstTileSelected
let firstTileSrc
let SecondTileSelected
let secondTileSrc
shuffleArray(SHUFFLE_IMG_PATH)
console.log(SHUFFLE_IMG_PATH)

let associatedPathAndTile = new Map()
pathWithTile(associatedPathAndTile)
console.log(associatedPathAndTile);

$card.forEach(tile => {

    tile.addEventListener('click', () => {
        if (count < 2) {
            count++
            tile.src = associatedPathAndTile.get(tile.id)
            if (count == 1) {
                firstTileSelected = tile
                firstTileSrc = tile.src
            } else {
                SecondTileSelected = tile
                secondTileSrc = tile.src
            }
            if (count == 2) {
                setTimeout(() => {
                    if (firstTileSrc != secondTileSrc) {
                        firstTileSelected.src = HIDE_IMG_PATH
                        firstTileSrc = ''
                        SecondTileSelected.src = HIDE_IMG_PATH
                        secondTileSrc = ''
                        count = 0
                    } else {
                        firstTileSrc = ''
                        secondTileSrc = ''
                        count = 0
                    }
                }, 1000);
            }
        }
    })
})

export { $card, SHUFFLE_IMG_PATH }