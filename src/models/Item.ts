import { Context } from "@/Context";
import { GridObject } from "@/models/GridObject";
import { Artifact } from "@/models/atrifacts/Artifact";
import { ItemTemplate } from "@/models/utility/ItemTemplate";

export abstract class Item extends GridObject {
  baseCooldown: number;
  constructor(template: ItemTemplate) {
    super(template);
    this.baseCooldown = template.cooldown;
  }
  abstract update(dt: number, context: Context): Artifact[];
}