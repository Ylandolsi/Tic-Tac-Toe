class TicTacToe {
    constructor(player1, player2) {
        this.gameBoard = [
            ['','',''],
            ['','',''],
            ['','','']
        ];
        this.player1 = player1;
        this.player2 = player2;
        this.current = player1;
        this.hasWon = false;
    }
    
    checkRow(xo, row) {
        return row[0] === xo && row[1] === xo && row[2] === xo;
    }
    
    checkCol(xo, col) {
        return this.gameBoard[0][col] === xo && this.gameBoard[1][col] === xo && this.gameBoard[2][col] === xo;
    }
    
    check(xo) {
        for (let i = 0; i < 3; i++) {
            if (this.checkRow(xo, this.gameBoard[i])) return true;
            if (this.checkCol(xo, i)) return true;
            if (this.gameBoard[0][0] === xo && this.gameBoard[1][1] === xo && this.gameBoard[2][2] === xo) return true;
            if (this.gameBoard[0][2] === xo && this.gameBoard[1][1] === xo && this.gameBoard[2][0] === xo) return true;
        }
        return false;
    }
    
    endGame() {
        for (let i = 0; i < 3; i++) {
            if (this.gameBoard[i].includes('')) return false;
        }
        return true;
    }
    
    makeMove(row, col) {
        if (row < 0 || col < 0 || row > 2 || col > 2 || this.gameBoard[row][col] !== '') {
            return false;
        }
        this.gameBoard[row][col] = this.current;
        if (this.check(this.current)) {
            console.log(`Player ${this.current} has won!`);
            this.hasWon = true;
        }
        this.current = this.current === this.player1 ? this.player2 : this.player1;
        return true;
    }
    finish() {
        this.gameBoard = [
            ['','',''],
            ['','',''],
            ['','','']
        ];
        this.current = this.player1;
        this.hasWon = false;

    }
    

}


export { TicTacToe };
