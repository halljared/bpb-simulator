import { GridObjectTemplate } from "@/models/utility/GridObjectTemplate"

export interface ItemTemplate extends GridObjectTemplate {
  cooldown?: number;
  grid: string[][];
}
export interface WeaponTemplate extends ItemTemplate {
  damage: number;
}