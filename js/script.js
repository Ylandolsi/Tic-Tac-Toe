import { TicTacToe } from './TicTacToe.js';




let body = document.querySelector('body');
let dialog = document.getElementById('choice-dialog');
let cells = document.querySelectorAll('[class^="cell"]');
let X = document.querySelector('.X');
let O = document.querySelector('.O');
let status = document.querySelector('.status-text');
let restart = document.querySelector('.reset');





function closeDialog() {
    dialog.close();
    body.classList.remove('dialog-open');
}



let player1 , player2 , game ; 


function start_game() {

    dialog.showModal();
    body.classList.add('dialog-open');
    let choiceX = document.querySelector('.choice-x');
    let choiceO = document.querySelector('.choice-o');

    choiceX.addEventListener('click', choosed);
    choiceO.addEventListener('click', choosed);

}


function choosed (e) {
    player1 = e.target.textContent;
    player2 = player1 === 'X' ? 'O' : 'X';
    if ( player1 === 'X') {
        X.classList.add('selected');
        O.classList.remove('selected');
    }
    else {
        O.classList.add('selected');
        X.classList.remove('selected');
    }
    closeDialog();
    
    game = new TicTacToe(player1, player2);


}

restart.addEventListener('click', refresh);

function refresh () {
    game.finish();
    cells.forEach(cell => {
        cell.textContent = '';
    });
    X.classList.remove('selected');
    O.classList.remove('selected');
    status.textContent = '';
    start_game();
}

start_game();

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if ( game.hasWon || game.endGame()){
            return ;
        }

        let row = cell.getAttribute('data-row') - 1;
        let col = cell.getAttribute('data-col') -1;

        const role = game.current;

        if (!game.makeMove(row, col)) {
            console.log("Invalid move, try again.");
        }

        cell.textContent = role;
  
        if (game.hasWon) {
            status.textContent = `Player ${role} has won!`;
        }
        if (game.endGame()) {
            status.textContent = `Player ${role} has won!`;
        }
        if ( role === 'O') {
            X.classList.add('selected');
            O.classList.remove('selected');
        }
        else {
            O.classList.add('selected');
            X.classList.remove('selected');
        }
    }) ; 
}) ; 

