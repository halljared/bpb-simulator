import { Context } from "@/Context";
import { DamageArtifact } from "@/models/atrifacts/Damage";
import { Item } from "@/models/items/Item";
import { Weapon } from "@/models/items/weapons/Weapon";

export class WoodenSword extends Weapon {
  constructor() {
    const template = Item.fetchWeaponTemplate("wooden-sword");
    super(template);
  }
  update(dt: number, context: Context): void {
    console.log('Update: Wooden Sword');
    this.emitArtifact(new DamageArtifact(context.player2, this.damage), context);
  };
}