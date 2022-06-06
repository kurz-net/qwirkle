export const COLORS: Color[] = [
  "red", "blue", "green", "yellow", "orange", "violet"
]

export const SHAPES: Shape[] = [
  "circle", "flower", "octothorb", "spiked", "square", "star"
]

export type Color =
  "red" | "blue" | "green" | "yellow" | "orange" | "violet"

export type Shape =
  "circle" | "flower" | "octothorb" | "spiked" | "square" | "star"

export type Tile = {
  uuid: string,
  color: Color,
  shape: Shape
}

export type Player = {
  uuid: string,
  name: string,
  tiles: Tile[],
  points: number
}

export type Game = {
  uuid: string,
  turn: number,
  players: Player[],
  tiles: Tile[]
}
