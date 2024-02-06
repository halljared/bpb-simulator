import { GridConfig } from "@/models/utility/GridConfig"

export type ItemGridsJson = {
  [name: string]: {
    cooldown: number,
    grid: GridConfig
  }
}