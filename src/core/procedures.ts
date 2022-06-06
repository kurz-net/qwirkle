import { Game, Player, Tile, Shape, Color, COLORS, SHAPES } from "./data"
import { shuffleArray } from "./common"
import { v4 as uuidv4 } from "uuid"

export function createTileBag(): Tile[] {
  const tiles: Tile[] = COLORS.map(color => {
    return SHAPES.map(shape => {
      return [shape, color] as [Shape, Color]
    })
  })
    .reduce((acc, cur) => [...acc, ...cur], [])
    .map(([shape, color]) => {
      const res: Tile[] = []
      for (let i = 0; i < 3; i++) {
        res.push({
          uuid: uuidv4(),
          color, shape
        })
      }
      return res
    })
    .reduce((acc, cur) => [...acc, ...cur], [])
  shuffleArray(tiles)

  return tiles
}

export function initGame(
  playerNames: string[]
): Game {
  const uuid = uuidv4()
  const tiles = createTileBag()

  const players: Player[] = playerNames.map(name => {
    const hand: Tile[] = []
    for (let i = 0; i < 6; i++) {
      const tile = tiles.pop()
      if (tile) {
        hand.push(tile)
      }
    }
    return {
      uuid: uuidv4(),
      tiles: hand,
      points: 0,
      name
    }
  })

  return { players, tiles, uuid, turn: 0 }
}
