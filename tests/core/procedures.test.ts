import "jest"
import { createTileBag, initGame } from "../../src/core/procedures"
import { Color, Shape } from "../../src/core/data"

describe("procedures", () => {
  test("create tile bag", () => {
    const bag = createTileBag()
    expect(bag.length).toBe(108)

    const colors: {[k: string]: number} = {}
    const shapes: {[k: string]: number} = {}
    bag.forEach(tile => {
      if (!colors[tile.color]) {
        colors[tile.color] = 0
      }
      if (!shapes[tile.shape]) {
        shapes[tile.shape] = 0
      }

      colors[tile.color] += 1
      shapes[tile.shape] += 1
    })

    expect(shapes).toEqual({
      "circle": 18,
      "flower": 18,
      "octothorb": 18,
      "spiked": 18,
      "square": 18,
      "star": 18
    })
    expect(colors).toEqual({
      "red": 18,
      "blue": 18,
      "green": 18,
      "yellow": 18,
      "orange": 18,
      "violet": 18
    })
  })

  test("init game", () => {
    const game = initGame(["p1", "p2"])
    expect(game.turn).toBe(0)
    expect(game.tiles.length).toBe(108 - 6*2)
    expect(game.players.length).toBe(2)

    expect(game.players[0].points).toBe(0)
    expect(game.players[0].name).toBe("p1")
    expect(game.players[0].tiles.length).toBe(6)

    expect(game.players[1].points).toBe(0)
    expect(game.players[1].name).toBe("p2")
    expect(game.players[1].tiles.length).toBe(6)
  })
})
