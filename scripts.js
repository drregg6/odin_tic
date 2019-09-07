/*

-- Optional --
User chooses to play CPU or Player 2
-- Optional --

Two players will take turns selecting available squares on a gameboard
If the square is available, the square will be marked with the player's piece
If the square is not available, the player will be have to select a new square

1. User turns on game (button on click)
2. -- Random player's turn --
3. PLAYER chooses SPACE
4. If SPACE is available
    Activate finish turn
  Else
    Allow player to choose a space until they choose an available space
5. Finish turn
    Check for winner

*/

// Object Creators
const playerFactory = (name='name', piece='X') => {
  return {
    name,
    piece
  }
}

const displayController = (() => {
  const PLAY = document.querySelector('#play');
  const END = document.querySelector('#end');
  const TEST = document.querySelector('#test');

  const gameListeners = () => {
    PLAY.addEventListener('click', game.playGame);
    END.addEventListener('click', game.endGame);
    TEST.addEventListener('click', game.testGame);
  }


  return {
    gameListeners
  }
})();

const gameBoard = (() => {
  // Variables
  let gameMode = false;
  const gameboard = ['', '', '', '', '', '', '', '', ''];

  // Methods
  const display = () => gameboard;
  const mode = () => gameMode;
  const activateGame = () => gameMode = true;

  const addPiece = (index) => {
    if (gameboard[index] === '') {
      gameboard[index] = 'X';
    }
  }

  const resetBoard = () => {
    for (let i = 0; i < gameboard.length; i++) {
      gameboard[i] = '';
    }
  }
  const resetMode = () => gameMode = false;
  const resetGame = () => {
    resetBoard();
    resetMode();
  }

  // Return
  return {
    mode,
    activateGame,
    display,
    addPiece,
    resetGame
  }
})();

const game = (() => {
  const PLAYER1 = document.querySelector('#player1');
  const PLAYER2 = document.querySelector('#player2');

  const playGame = () => {
    if (gameBoard.mode()) {
      console.log('You\'re already playing!');
      return;
    }
    // Player creation
    let x_name = PLAYER1.value;
    let o_name = PLAYER2.value;
    if (x_name === '') x_name = 'Player 1';
    if (o_name === '') o_name = 'Player 2';
  
    const player1 = playerFactory(x_name);
    const player2 = playerFactory(o_name, 'O');
    console.log(`Player 1's name is ${player1.name} and their symbol is ${player1.piece}`);
    console.log(`Player 2's name is ${player2.name} and their symbol is ${player2.piece}`);
  
    // gameBoard testing
    console.log(gameBoard.mode());
    gameBoard.activateGame();
    console.log(gameBoard.display());
    gameBoard.addPiece(4);
    console.log(gameBoard.display());
    console.log(gameBoard.mode());
  }

  const endGame = () => {
    if (!gameBoard.mode()) {
      console.log('Game is not running...');
      return;
    }
    console.log(gameBoard.mode());
    console.log(gameBoard.display());
    gameBoard.resetGame();
    console.log(gameBoard.display());
    console.log(gameBoard.mode());
  }

  const testGame = () => {
    console.log('This is a test');
  }

  return {
    playGame,
    endGame,
    testGame
  }
})();

displayController.gameListeners();