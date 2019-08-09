// // Gameboard object with a gameboard array
// // Player object
// // Game object to control the flow of the game
// /*

// Gameboard Obj - gameboard arr
// Player Obj - Control Player 1 and Player 2 (later - CPU)
// Game Obj - Control the flow of the game

// */

// const BUTTON = document.querySelector('#play');
// BUTTON.addEventListener('click', (event) => {
//   Gameboard.renderGameboard(Gameboard.gameboard());
// });



// const Gameboard = (() => {
//   const gameboard = () => {
//     return [
//       {
//         row: 1,
//         column: 1,
//         piece: null
//       },
//       {
//         row: 1,
//         column: 2,
//         piece: null
//       },
//       {
//         row: 1,
//         column: 3,
//         piece: null
//       },
//       {
//         row: 2,
//         column: 1,
//         piece: null
//       },
//       {
//         row: 2,
//         column: 2,
//         piece: null
//       },
//       {
//         row: 2,
//         column: 3,
//         piece: null
//       },
//       {
//         row: 3,
//         column: 1,
//         piece: null
//       },
//       {
//         row: 3,
//         column: 2,
//         piece: null
//       },
//       {
//         row: 3,
//         column: 3,
//         piece: null
//       }
//     ]
//   }

//   const renderGameboard = (gameboard) => {
//     const CONTAINER = document.querySelector('.container');
//     const GAMEBOARD = document.createElement('div');
//     GAMEBOARD.classList.add('gameboard');

//     gameboard.forEach(space => {
//       const GAMESPACE = document.createElement('div');
//       GAMESPACE.classList.add('gamespace');

//       // DISPLAY => which player occupies the space
//       if (space.piece) {
//         GAMESPACE.textContent = space.piece;
//       }
//       // EFFECT -> highlights space when available
//       if (!space.piece) {
//         GAMESPACE.addEventListener('mouseenter', event => {
//           event.target.classList.add('highlight');
//         });
//         GAMESPACE.addEventListener('mouseleave', event => {
//           event.target.classList.remove('highlight');
//         });
//       }

//       // Add GAMESPACE to GAMEBOARD
//       GAMEBOARD.appendChild(GAMESPACE);
//     });

//     // Add GAMEBOARD to CONTAINER
//     CONTAINER.appendChild(GAMEBOARD);
//   }

//   return {
//     gameboard,
//     renderGameboard
//   }
// })();



// const Player = () => {
//   const piece = () => 'X';

//   return {
//     piece
//   }
// }



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
  this.gameboard = (function() {
    let count = 0;
    let arr = [];
    while (count < 9) {
      arr.push('');
      count++
    }
    return arr;
  })();
}

function Player(piece='X') {
  this.piece = piece;
}

function Game(player1, player2) {
  this.game = function() {
    return `${player1.piece} wins`;
  }
}

const player1 = new Player();
const player2 = new Player('O');
const gameboard = new Gameboard();

const game = new Game(player1, player2);
console.log(game.game());
console.log(gameboard.gameboard);