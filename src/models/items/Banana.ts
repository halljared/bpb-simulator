import { Context } from "@/Context";
import { Item } from "@/models/Item";
import { Artifact } from "@/models/atrifacts/Artifact";
import { BuffArtifact } from "@/models/atrifacts/Buff";
import { AttributeType } from "@/models/attributes/AttributeTypes";
import { ScalarAttribute } from "@/models/attributes/ScalarAttribute";
import items from "@/models/items/itemGrids.json"
import { BuffType } from "@/models/utility/BuffTypes";
import { translateJsonGrid } from "@/models/utility/GridConfig";
import { ItemTemplate } from "@/models/utility/ItemTemplate";

export class Banana extends Item {
  constructor() {
    let bananaJson = items["banana"];
    let bananaGrid = translateJsonGrid(bananaJson.grid);
    let bananaConfig: ItemTemplate = {
      cooldown: bananaJson.cooldown,
      gridConfig: bananaGrid
    }
    super(bananaConfig);
  }
  update(dt: number, context: Context): Artifact[] {
    console.log('Update: Banana');
    return [new BuffArtifact(BuffType.EMPOWER, 1)];
  }
}