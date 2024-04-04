import { Context } from "@/Context";
import { GridObject } from "@/models/GridObject";
import { Artifact } from "@/models/atrifacts/Artifact";
import { ItemTemplate, WeaponTemplate } from "@/models/utility/ItemTemplate";
import items from "@/models/items/itemGrids.json"
import { translateJsonGrid } from "@/models/utility/GridConfig";

export abstract class Item extends GridObject {
  baseCooldown: number | undefined;
  constructor(template: ItemTemplate) {
    super(template);
    this.baseCooldown = template.cooldown;
  }
  static fetchItemTemplate(key: keyof typeof items): ItemTemplate {
    let itemJSON = items[key];
    let itemGrid = translateJsonGrid(itemJSON.grid);
    const template : ItemTemplate = {
      ...itemJSON,
      gridConfig: itemGrid
    };
    return template;
  }
  static fetchWeaponTemplate(key: keyof typeof items): WeaponTemplate {
    const template = Item.fetchItemTemplate(key) as WeaponTemplate;
    let itemJSON = items[key] as any & {damage: number};
    template.damage = itemJSON.damage;
    return template;
  }
  abstract update(dt: number, context: Context): void;
  emitArtifact(artifact: Artifact, context: Context): void {
    Context.artifactResolver.resolve(artifact, context);
  }
  placed?(): void;
}