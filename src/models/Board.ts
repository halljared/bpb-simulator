import { Context } from "@/Context";
import { Item } from "@/models/Item";
import { ArtifactResolver } from "@/models/atrifacts/ArtifactResolver";

export class Board {
  height: number = 7;
  width: number = 9;
  items: Item[] = [];
  artifactResolver: ArtifactResolver = new ArtifactResolver();
  constructor() {
    
  }
  placeItem(item: Item) {
    //temporary implementation as scaffolding
    this.items.push(item);
  }
  update(dt: number, context: Context) {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const artifacts = item.update(dt, context);
      for (let j = 0; j < artifacts.length; j++) {
        const artifact = artifacts[j];
        this.artifactResolver.resolve(artifact, context);
      }
    }
  }
}