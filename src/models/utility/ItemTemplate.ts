import { GridObjectTemplate } from "@/models/utility/GridObjectTemplate"

export interface ItemTemplate extends GridObjectTemplate {
  cooldown: number
}
export interface WeaponTemplate extends ItemTemplate {
  damage: number;
}