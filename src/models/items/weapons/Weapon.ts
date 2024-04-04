import { Item } from "@/models/items/Item";
import { WeaponTemplate } from "@/models/utility/ItemTemplate";

export abstract class Weapon extends Item {
  public damage: number;
  constructor(template: WeaponTemplate) {
    super(template);
    this.damage = template.damage;
  }
}