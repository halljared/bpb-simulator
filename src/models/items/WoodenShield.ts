import { Context } from "@/Context";
import { ValueType } from "@/models/values/ValueTypes";
import { ScalarValue } from "@/models/values/ScalarValue";
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
        const mod = new FlatModifier(new ScalarValue(-1, ValueType.MODIFIER));
        damage.amount.addModifier(mod);
      }
    });
  }
}