import { Context } from "@/Context";
import { Item } from "@/models/items/Item";
import { BuffArtifact } from "@/models/atrifacts/Buff";
import { BuffType } from "@/models/utility/BuffTypes";

export class Banana extends Item {
  constructor() {
    const template = Item.fetchItemTemplate("banana");
    super(template);
  }
  update(dt: number, context: Context): void {
    console.log('Update: Banana');
    this.emitArtifact(new BuffArtifact(BuffType.EMPOWER, context.player1, 1), context);
  }
}