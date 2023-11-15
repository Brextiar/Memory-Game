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
let victory = 12
let firstTileSelected
let firstTileSrc
let SecondTileSelected
let secondTileSrc

shuffleArray(SHUFFLE_IMG_PATH)
// console.log(SHUFFLE_IMG_PATH)

let associatedPathAndTile = new Map()
pathWithTile(associatedPathAndTile)
// console.log(associatedPathAndTile)

window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        shuffleArray(SHUFFLE_IMG_PATH)
        // console.log(SHUFFLE_IMG_PATH)
        pathWithTile(associatedPathAndTile)
        // console.log(associatedPathAndTile)
        $card.forEach(tile => {
            tile.src = HIDE_IMG_PATH
        })
        score = 0
        document.getElementById('score').innerText = score
        count = 0
    }
})

$card.forEach(tile => {

    tile.addEventListener('click', () => {
        if (count < 2) {
            if (tile.src == firstTileSrc) {
                return
            }
            count++
            tile.src = associatedPathAndTile.get(tile.id)
            if (count == 1) {
                score++
                document.getElementById('score').innerText = score
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
                    
                    $card.forEach(tile => {
                        if (!tile.src.endsWith('question.svg')) {
                            victory--
                        } else {
                            victory = 12
                        }
                    })
                    if (victory <= 0) {
                        document.getElementById('score').innerText = `${score}. Victoire! Vous pouvez recommencer une partie en appuyant sur la barre d'espace.`
                        victory = 12
                        score = 0
                        count = 0
                    }
                }, 1000);
            }
        }
        // $card.forEach(tile => {
        //     if (tile.src.endsWith('question.svg')) {
        //         victory--
        //     }
        // })
        // console.log(victory)
        // if (victory <= 0) {
        //     document.getElementById('score').innerText = `${score}. Victoire! Vous pouvez recommencer une partie en appuyant sur la barre d'espace.`
        //     victory = 12
        //     score = 0
        //     count = 0
        // }
    })
})

export { $card, SHUFFLE_IMG_PATH}