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
  const GAMESPACES = document.querySelectorAll('.gamespace');

  const oneInput = () => document.querySelector('#player1');
  const twoInput = () => document.querySelector('#player2');

  const gameListeners = () => {
    PLAY.addEventListener('click', game.playGame);
    END.addEventListener('click', game.endGame);
    TEST.addEventListener('click', game.testGame);

    for (let i = 0; i < GAMESPACES.length; i++) {
      // GAMESPACES[i].addEventListener('click', function() {
      //   gameBoard.addPiece(i, 'O');
      // });
      GAMESPACES[i].addEventListener('click', function() {
        console.log(GAMESPACES[i])
        game.turn(GAMESPACES[i]);
      });
    }
  }


  return {
    gameListeners,
    oneInput,
    twoInput
  }
})();



const gameBoard = (() => {
  // Variables
  const gameboard = ['', '', '', '', '', '', '', '', ''];

  // Methods
  const getGameboard = () => gameboard;

  const checkAvailability = (index) => {
    if (gameboard[index] === '') {
      return true;
    }
    return false;
  }

  const addPiece = (index, symbol) => {
    if (gameboard[index] === '') {
      gameboard[index] = symbol;
    }
  }

  const resetBoard = () => {
    for (let i = 0; i < gameboard.length; i++) {
      gameboard[i] = '';
    }
  }

  // Return
  return {
    getGameboard,
    checkAvailability,
    addPiece,
    resetBoard
  }
})();



const game = (() => {
  // Player variables
  let player1;
  let player2;
  let currentPlayer;

  // Game variables
  let gameMode = false;
  let gameCount = 1; // this will count up
  let isWinner = false;

  // Feedback
  const MSG = document.querySelector('#msg');

  const createPlayers = () => {
    let x_name = displayController.oneInput().value;
    let o_name = displayController.twoInput().value;

    if (x_name === '') x_name = 'Player 1';
    if (o_name === '') o_name = 'Player 2';

    player1 = playerFactory(x_name);
    player2 = playerFactory(o_name, 'O');

    displayController.oneInput().disabled = true;
    displayController.twoInput().disabled = true;

    let randomNumber = Math.round(Math.random());
    if (randomNumber === 0) {
      currentPlayer = player1;
    } else {
      currentPlayer = player2;
    }
  }

  const playGame = () => {
    if (gameMode) {
      MSG.innerHTML = `You're already playing! It is currently ${currentPlayer.getName()}'s turn`;
      return;
    }

    // Begin game
    createPlayers();
    toggleGameMode();
    MSG.innerHTML = `It is ${currentPlayer.getName()}'s turn!`;
  }

  const turn = (element) => {
    if (!gameMode) console.log('Not allowed');
    if (gameMode) {
      let index = Number(element.dataset.position);
      console.log(element.dataset.position);

      if (!gameBoard.checkAvailability(index)) {
        MSG.innerHTML = `Please select again, ${currentPlayer.getName()}...`;
        return;
      }

      element.innerHTML = currentPlayer.getPiece();
      gameBoard.addPiece(index, currentPlayer.getPiece());
      toggleCurrentPlayer();
      MSG.innerHTML = `It is ${currentPlayer.getName()}'s turn!`;
      // toggleCurrentPlayer();
    };
    // Player selects a space
    // IF gamespace is unavailable
      // DISPLAY select new space
    // ELSE
      // addPiece to gamespace
    // Check for winner
    // IF winner
      // DISPLAY congrats
    // ELSE
      // Oppo player's turn
      // turnCount++

  }

  const resetGame = () => {
    gameBoard.resetBoard();
    gameMode = false;
    player1 = undefined;
    player2 = undefined;
    currentPlayer = undefined;

    MSG.innerHTML = `--- Game resetting ---`;
  }

  const endGame = () => {
    if (!gameMode) {
      console.log('Game is not running...');
      return;
    }
    // console.log(gameBoard.mode());
    // console.log(gameBoard.display());
    // gameBoard.resetGame();
    // console.log(gameBoard.display());
    // console.log(gameBoard.mode());

    // isWinner = false;
    // isGameMode = false;
    gameBoard.resetBoard();
  }

  const testGame = () => {
    console.log('This is a test');
  }

  // Private methods
  const toggleCurrentPlayer = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }

  const toggleGameMode = () => {
    if (gameMode) {
      gameMode = false;
    } else {
      gameMode = true;
    }
  }

  const checkForWinner = (symbol) => {
    let result = `Not a winner`;
    const winningArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    const currentBoard = gameBoard.getGameboard();
    
    winningArr.forEach(arr => {
      let count = 0;
      console.log(arr);
      arr.forEach(index => {
        currentBoard.forEach((space, i) => {
          if (i === index) {
            if (space === symbol) {
              console.log(space)
              count = count + 1;
            }
          }
        });
      });
      if (count === 3) {
        isWinner = true;
        result = `Winner!`;
      }
    });

    return result;
  }

  const checkEndGame = () => {
    if (gameCount === 9) {
      isGameMode = false;
    } else if (isWinner === true) {
      isGameMode = false;
    }
  }

  return {
    playGame,
    turn,
    endGame,
    testGame
  }
})();

displayController.gameListeners();


/*

Once the playGame button is pressed
--- isGameMode is set to true
--- players are created
--- a player's turn is selected at random
--- turn begins is set to true

Turn begins
--- let whosTurn = 'X' (or player.symbol)
      turn(whosTurn)
        at the end of the turn, check for winner
        if no winner and gameCount !== 9
          if (whosTurn === 'X') whosTurn = 'O' elseif (whosTurn === 'O') whosTurn = 'X'
--- isPlayersTurn is set to true
--- turn takes in a player
--- GAMESPACE listener (if isPlayersTurn) {let player click the square} else {dont allow player to click square}

*/