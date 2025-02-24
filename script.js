import TicTacToe from './TicTacToe.js';

let player1 = prompt("please choose your symbol: X or O");
while (player1 !== 'X' && player1 !== 'O') {
    player1 = prompt("please choose your symbol: X or O");
}

const player2 = player1 === 'X' ? 'O' : 'X'; 
const game = new TicTacToe(player1, player2);
game.start();
