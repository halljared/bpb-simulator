import { GridObject } from "@/models/GridObject";
import { ItemTemplate } from "@/models/utility/ItemTemplate";

export class Item extends GridObject {
  baseCooldown: number;
  constructor(template: ItemTemplate) {
    super(template);
    this.baseCooldown = template.cooldown;
  }
}