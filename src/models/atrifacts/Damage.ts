import { Context } from "@/Context";
import { Player } from "@/models/Player";
import { Artifact } from "@/models/atrifacts/Artifact";
import { ArtifactResolver } from "@/models/atrifacts/ArtifactResolver";
import { AttributeType } from "@/models/attributes/AttributeTypes";
import { ScalarAttribute } from "@/models/attributes/ScalarAttribute";

export class DamageArtifact extends Artifact {
  public amount: ScalarAttribute;
  constructor(
    target: Player,
    amount: number
  ) {
    super(target); 
    this.amount = new ScalarAttribute(amount, AttributeType.DAMAGE);
  }
  acceptResolve(resolver: ArtifactResolver, context: Context): void {
    resolver.resolveDamage(this, context);
  }
}