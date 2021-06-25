export default class GameView {


    constructor(){
        console.log("init game")
    }

    updateBoard(game) {
        this.updateTurn(game);
        for(let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile 
            [data-index= '${i}']`);
            tile.textContent = game.board[i];
        }
    }
    
    updateTurn(game){
        let playerX = document.querySelector(".player-x")
        let playerO = document.querySelector(".player-o")
    }


}