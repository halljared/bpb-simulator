import { Context } from "@/Context";
import { Item } from "@/models/items/Item";
import { ArtifactResolver } from "@/models/atrifacts/ArtifactResolver";

export class Board {
  height: number = 7;
  width: number = 9;
  items: Item[] = [];
  artifactResolver: ArtifactResolver = new ArtifactResolver();
  constructor(
    public context: Context
  ) {
    
  }
  placeItem(item: Item) {
    this.items.push(item);
    item.placed && item.placed();
  }
  update(dt: number, context: Context) {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i].update(dt, context);
    }
  }
}