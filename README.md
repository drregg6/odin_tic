# odin_tic
Tic Tac Toe

Goal
-----
The object of this project was to create Tic-Tac-Toe with JavaScript Objects.

Listeners
----------
* Play: When PLAY is clicked, the game will begin. If gameMode is true, PLAY will have no effect - shown within game.playGame() method
* End: When END is clicked, the game will end. If gameMode is set to false, END will have no effect - otherwise, Players are returned to null, the board resets, and gameMode is turned to false.
* Gamespaces: Gamespaces can only be clicked when gameMode is true. When Gamespaces are clicked, it acts as a turn for the player, as shown with game.turn. The Gamespace will be owned by the player, and the next turn will go in effect. If the Gamespace is taken, it will request that the player reselect.

Gameboard
---------
* gameBoard Function has access to the gameboard, and GAMESPACES to access the HTML
* getGameboard allows game to view the gameboard
* checkAvailability checks a certain index of the gameboard
* addPiece will insert a piece into the gameboard
* resetBoard set all spaces to an empty string, and reset all HTML GAMESPACES to empty strings

Start Game
----------
* Player 1 and Player 2 are generated when PLAY is clicked. They are made through the playerFactory function
* Player 1 and Player 2 have the option of inputing their names. Player 1 has piece X as default.
* Gameplay begins with gameMode turning to true. Then a player is randomly selected to choose first.
* Whoever's turn it is becomes currentPlayer. This is how a turn is tracked.

Gameplay
--------
* currentPlayer selects a Gamespace.
* gameBoard checks if Gamespace is available.
* If it is, the piece is set onto the gameBoard and the gameCount goes up.
* If the Gamespace is unavailable, currentPlayer needs to select a new space.
* Once a valid move is made, game will checkForWinner
* If not, game will then checkGameCount
* If gameCount is 9, game ends without a winner
* If gameCount is not 9, there is no winner, and currentPlayer makes a valid move
* currentPlayer becomes the opposite player and gameplay continues

Winner
------
* To checkForWinner, winningArr has a set of which indexes needs matching symbols in order to win
* If one of those arrays within winningArr consists of only one symbol for all three spaces
* A winner is declared and the game ends
* When a winner is declared, the game congratulates the winner.
* Inputs become enabled, and players may change their names
* gameMode is set to false


Questions, comments, or concerns, please feel free to contact me
