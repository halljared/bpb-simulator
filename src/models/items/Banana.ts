import { Item } from "@/models/Item";
import items from "@/models/items/itemGrids.json"
import { GridConfig, translateJsonGrid } from "@/models/utility/GridConfig";
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
}