# Qwirkle Software Architecture

## Data

- Color: red | blue | green | yellow | orange | violet
- Shape: circle | flower | octothorb | spiked | square | star
- Tile
  - uuid: string
  - color: Color
  - shape: Shape
- Player
  - uuid: string
  - name: string
  - tiles: Tile[]
  - points: int
- Game
  - uuid: string
  - turn: int
  - players: Player[]
  - tiles: Tile[]

global
  - games: Game[]

## Procedures

- create new game
- place tiles
- calculate points
- end game
- restock tiles
