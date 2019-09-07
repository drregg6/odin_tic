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

// Universal variables
const BUTTON = document.querySelector('#play');
const GAMESPACES = document.querySelectorAll('.gamespace');
const MSG = document.querySelector('#msg');

let game;


// Creating a Game Obj
function Gameplay(gameboard, player1, player2) {
  let gamemode = false;
  let turn = player1.piece;

  const getGamemode = () => gamemode;
  const getGameboard = () => gameboard.getGameboard();
  const getGamespace = index => gameboard.getGamespace(index);
  const getTurn = () => turn;
  // const getGameboard = () => gameboard.getGameboard();
  // const getGamespace = index => gameboard.getGamespace(index);

  const startGame = () => {
    if (!gamemode) {
      gamemode = true;
    } else {
      console.log('Error');
    }
  }

  const setTurn = () => {
    if (turn === player1.piece) {
      turn = player2.piece;
    } else {
      turn = player1.piece;
    }

    console.log(turn);
  }

  const endGame = () => {
    if (gamemode) {
      gamemode = false;
    } else {
      console.log('Error');
    }
  }

  const checkWinner = (gameboard) => {
    console.log(gameboard);
    console.log('Eh?');
  }

  const setPiece = (piece, index) => {
    gameboard.addPiece(piece, index);
    setTurn();
    console.log(gameboard.getGameboard());
  }

  return {
    getGamemode,
    getGameboard,
    getGamespace,
    getTurn,
    setPiece,
    checkWinner,
    startGame,
    endGame
  }
}

function Gameboard() {
  // const gameboard = new Gameboard;
  // gameboard.getGameboard = ['', '', '', '', '', '', '', '', '']

  let gameboard = ['', '', '', '', '', '', '', '', ''];
  const getGameboard = () => gameboard;
  const getGamespace = index => gameboard[index];
  const addPiece = (piece, index) => {
    if (gameboard[index] === '') {
      gameboard[index] = piece;
    }
    return gameboard;
  } 

  return { getGameboard, getGamespace, addPiece };
}

function Player(name='Player 1', piece='X') {
  const hello = () => {
    return `My name is ${name}`;
  }

  return { name, piece, hello };
}

function Game(player1, player2) {
  this.game = function() {
    return `${player1.piece} wins and ${player2.piece} loses`;
  }
}

const player1 = new Player();
const player2 = new Player('Player 2', 'O');
const gameboard = new Gameboard();
// const game = new Gameplay(gameboard, player1, player2);

console.log(player1.hello());
console.log(gameboard.getGameboard());
console.log(gameboard.addPiece('X', 2));
console.log(gameboard.addPiece('O', 0));
console.log(gameboard.addPiece('X', 6));
console.log(gameboard.addPiece('O', 2));

// BUTTON.addEventListener('click', function(event) {
//   // Create two instances of Players
//   let x_name = PLAYER1.value;
//   let o_name = PLAYER2.value;
//   if (PLAYER1.value === '') {
//     x_name = 'Player 1';
//   }
//   if (PLAYER2.value === '') {
//     o_name = 'Player 2';
//   }
//   const playerX = new Player(x_name);
//   const playerO = new Player(o_name, 'O');
//   console.log(playerX, playerO);

//   // Create new instace of Gameboard
//   const gameboard = new Gameboard();

//   // Create new instance of Gameplay
//   game = new Gameplay(gameboard, playerX, playerO);
//   console.log(game.getGamemode());
//   game.startGame();
//   console.log(game.getGamemode());
//   MSG.textContent = `New game has begun. It is ${playerX.name}'s turn!`;
// });

for (let i = 0; i < GAMESPACES.length; i++) {
  GAMESPACES[i].addEventListener('click', function(event) {
    if (game.getGamemode()) {
      if (game.getGamespace(GAMESPACES[i].dataset.position) === '') {
        game.setPiece(game.getTurn(), GAMESPACES[i].dataset.position);
      }
      game.getGameboard().forEach(space => {
        if (space !== '') {
          GAMESPACES[i].textContent = space;
        }
      });
    }
  });
}










// HTML elements
const PLAY = document.querySelector('#play');
const END = document.querySelector('#end');
const PLAYER1 = document.querySelector('#player1');
const PLAYER2 = document.querySelector('#player2');

// Object Creators
const playerFactory = (name='name', piece='X') => {
  return {
    name,
    piece
  }
}

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

PLAY.addEventListener('click', function() {
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
});

END.addEventListener('click', function() {
  console.log(gameBoard.mode());
  console.log(gameBoard.display());
  gameBoard.resetGame();
  console.log(gameBoard.display());
  console.log(gameBoard.mode());
});
