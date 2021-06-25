import Game from "./game.js"
import GameView from "./gameview.js"

let game = new Game();
let gameview = new GameView()

document.querySelector(".restart")
.addEventListener("click", () => {
    onRestartClick();
})
let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})


function onTileClick(i){
    // make a move
    game.makeMove(i)
    gameview.updateBoard(game);


}

function onRestartClick() {
    game = new Game();
    gameview.updateBoard(game);
}
