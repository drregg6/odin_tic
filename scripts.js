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

// Player Creator
const playerFactory = (name='name', piece='X') => {
  const getName = () => name;
  const getPiece = () => piece;
  return {
    getName,
    getPiece
  }
}

const displayController = (() => {
  const PLAY = document.querySelector('#play');
  const END = document.querySelector('#end');
  const TEST = document.querySelector('#test');

  const oneInput = () => document.querySelector('#player1').value;
  const twoInput = () => document.querySelector('#player2').value;

  const gameListeners = () => {
    PLAY.addEventListener('click', game.playGame);
    END.addEventListener('click', game.endGame);
    TEST.addEventListener('click', game.testGame);
  }


  return {
    gameListeners,
    oneInput,
    twoInput
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
  // gameMode, resetGame, playGame, etc should all be in here
  let player1;
  let player2;

  const createPlayers = () => {
    let x_name = displayController.oneInput();
    let o_name = displayController.twoInput();

    if (x_name === '') x_name = 'Player 1';
    if (o_name === '') o_name = 'Player 2';

    player1 = playerFactory(x_name);
    player2 = playerFactory(o_name, 'O');
  }

  const playGame = () => {
    if (gameBoard.mode()) {
      console.log('You\'re already playing!');
      return;
    }
    // Player creation
    createPlayers();
    console.log(`Player 1's name is ${player1.getName()} and their symbol is ${player1.getPiece()}`);
    console.log(`Player 2's name is ${player2.getName()} and their symbol is ${player2.getPiece()}`);
  
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