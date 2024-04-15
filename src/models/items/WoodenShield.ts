import { Context } from "@/Context";
import { AttributeType } from "@/models/attributes/AttributeTypes";
import { ScalarAttribute } from "@/models/attributes/ScalarAttribute";
import { Item } from "@/models/items/Item";
import { FlatModifier } from "@/models/modifiers/FlatModifier";

export class WoodenShield extends Item {
  constructor() {
    const template = Item.fetchItemTemplate("wooden-shield");
    super(template);
  }
  update(dt: number, context: Context): void {
    console.log('Update: WoodenShield');
    // this.emitArtifact(new BuffArtifact(BuffType.EMPOWER, context.player1, 1), context);
  }
  placed(): void {
    console.log('Placed: WoodenShield');
    Context.damages.subscribe((damage) => {
      if(damage.target == this.owner) {
        const mod = new FlatModifier(new ScalarAttribute(-1, AttributeType.MODIFIER));
        damage.amount.addModifier(mod);
      }
    });
  }
}