/*

Gameboard object with a gameboard array
Player object
Game object to control the flow of the game


Gameboard Obj - gameboard arr
Player Obj - Control Player 1 and Player 2 (later - CPU)
Game Obj - Control the flow of the game

*/

const BUTTON = document.querySelector('#play');
const GAMESPACES = document.querySelectorAll('.gamespace');

function Gameplay() {
  let gamemode = false;
  let playerX = new Player('Player 1');
  let playerO = new Player('Player 2', 'O');
  let gameboard = new Gameboard();

  const getGamemode = () => gamemode;
  const getGameboard = () => gameboard.getGameboard();
  const getGamespace = index => gameboard.getGamespace(index);
  const startGame = () => {
    if (!gamemode) {
      gamemode = true;
    } else {
      console.log('Error');
    }
  }

  const endGame = () => {
    if (gamemode) {
      gamemode = false;
    } else {
      console.log('Error');
    }
  }
  const checkWinner = (gameboard) => {
    console.log('Eh?');
  }

  const setPiece = (piece, index) => {
    gameboard.addPiece(piece, index)
    console.log(gameboard.getGameboard());
  }

  return {
    getGamemode,
    getGameboard,
    getGamespace,
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
const game = new Gameplay(gameboard, player1, player2);

console.log(player1.hello());
console.log(gameboard.getGameboard());
console.log(gameboard.addPiece('X', 2));
console.log(gameboard.addPiece('O', 0));
console.log(gameboard.addPiece('X', 6));
console.log(gameboard.addPiece('O', 2));

BUTTON.addEventListener('click', function(event) {
  console.log(game.getGamemode());
  game.startGame();
  console.log(game.getGamemode());
});

for (let i = 0; i < GAMESPACES.length; i++) {
  GAMESPACES[i].addEventListener('click', function(event) {
    if (game.getGamemode()) {
      if (game.getGamespace(GAMESPACES[i].dataset.position) === '') {
        game.setPiece(player1.piece, GAMESPACES[i].dataset.position);
      }
      game.getGameboard().forEach(space => {
        if (space !== '') {
          GAMESPACES[i].textContent = space;
        }
      });
    }
  });
}