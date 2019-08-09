/*

Gameboard object with a gameboard array
Player object
Game object to control the flow of the game


Gameboard Obj - gameboard arr
Player Obj - Control Player 1 and Player 2 (later - CPU)
Game Obj - Control the flow of the game

*/

const BUTTON = document.querySelector('#play');
BUTTON.addEventListener('click', (event) => {
  console.log('Play game!');
});

const Gameplay = (gameboard, player1, player2) => {
  const checkWinner = (gameboard) => {
    // gameboard = [{},{},{},{},{},{},{},{},{}]
    // let count = 1;
    /*
  
    gameboard.forEach(space => {
      if (space.col === )
    })

    */
  }

  const setPiece = () => {
    console.log('Hello world!');
  }

  return {
    setPiece,
    checkWinner
  }
}

function Gameboard() {
  // const gameboard = new Gameboard;
  // gameboard.generateGameboard = ['', '', '', '', '', '', '', '', '']

  this.getGameboard = function() {
    return ['', '', '', '', '', '', '', '', ''];
  }
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

const game = new Game(player1, player2);
console.log(player1.hello());
console.log(game.game());
console.log(gameboard.getGameboard());