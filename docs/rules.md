# Qwirkle Rules

Qwirkle is a board game that can be played by 2-4 players.
It comes with a set of 108 square tiles, made up of 6 different
colors and 6 different patterns.

![Square](/assets/square.svg)
![Circle](/assets/circle.svg)
![Flower](/assets/flower.svg)
![Ocothorb](/assets/octothorb.svg)
![Spiked](/assets/spiked.svg)
![Star](/assets/star.svg)

Every player can have up to 6 tiles on his hand when it is their turn.
The rest of the tiles should be stored in a bag, not visible to the players.
When a player made a move, they can restock their hand again, should there be
tiles left in the bag.

Players take turns laying down tiles from their hand, until the first person
has used all their tiles and is unable to restock their hand.

The following rules apply when laying down tiles:
- Connected tiles must be of the same color and not repeat symbols in their row or column
- Connected tiles must be of different color and the same symbol in their row or column.
- At least one tile must connect to another tile (unless it is the first move of the game)
- You can only lay down tiles in one direction (vertically or horizontally)

After a player has layed down their tiles he is awarded a number of points through
the following system. We sum up the number of tiles of all the rows and columns
the layed down tiles connect to.

![Circle](/assets/circle.svg)
![Flower](/assets/flower.svg)
![Square](/assets/square.svg)

For example, if the player just layed down the square tile, they are awarded 3 points.

![Circle](/assets/circle.svg)
![Flower](/assets/flower.svg)
![Ocothorb](/assets/octothorb.svg)

![Flower](/assets/flower.svg)
![Square](/assets/square.svg)

The player who plays the last hand is awarded an additional 6 points - for ending
the fun for everyone.

## Examples

Let's show a couple of examples

