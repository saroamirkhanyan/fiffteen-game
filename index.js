// Keycodes of keyboard control keys
const ARROW_RIGHT = 39
const ARROW_LEFT = 37
const ARROW_UP = 38
const ARROW_DOWN = 40
new Vue({
    el: "#app",
    data: {
        board: [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, null]
        ],
    },
    computed: {
        //check is finished
        isFinished() {
            const mergedBoard = this.board.flat(1).filter(f => f !== null)
            for (let i = 0; i < mergedBoard.length - 1; i++) {
                if (mergedBoard[i] + 1 !== mergedBoard[i + 1]) return false;
            }
            return true;
        },
    },
    //when load site shuffle board and add keyboard listener 
    mounted() {
        this.shuffleBoard()
        // add keyboard listener
        document.addEventListener('keydown', this.move)
    },
    methods: {

        move(e) {
            if (this.isFinished) return;
            switch (e.keyCode) {
                //ARROW RIGHT
                case ARROW_RIGHT:
                    this.moveRight()
                    break;
                case ARROW_LEFT:
                    this.moveLeft()
                    break;
                case ARROW_DOWN:
                    this.moveDown()
                    break;
                case ARROW_UP:
                    this.moveUp()
                    break;
            }

        },
        moveRight() {
            let board = Object.assign([], this.board)
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    if (board[i][j + 1] === null) {
                        board[i][j + 1] = board[i][j]
                        board[i][j] = null;
                    }
                }
            }
            this.board = board;
        },
        moveLeft() {
            let board = Object.assign([], this.board)
            for (let i = 0; i < board.length; i++) {
                for (let j = board[i].length - 1; j >= 0; j--) {
                    if (board[i][j - 1] === null) {
                        board[i][j - 1] = board[i][j];
                        board[i][j] = null
                    }
                }
            }
            this.board = board;
        },
        moveDown() {
            let board = Object.assign([], this.board)
            for (let i = 0; i < board.length - 1; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    if (board[i + 1][j] === null) {
                        board[i + 1][j] = board[i][j]
                        board[i][j] = null
                    }
                }
            }
            this.board = board;
        },
        moveUp() {
            let board = Object.assign([], this.board)
            for (let i = board.length - 1; i > 0; i--) {
                for (let j = 0; j < board[i].length; j++) {
                    if (board[i - 1][j] === null) {
                        board[i - 1][j] = board[i][j]
                        board[i][j] = null;
                    }
                }
            }
            this.board = board;
        },
        shuffleBoard() {
            let board = this.board.flat(1)
            board = shuffle(board)
            board = divideIntoParts(board, 4)
            this.board = board;
        },
    }
})


