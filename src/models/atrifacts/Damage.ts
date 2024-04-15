import { Context } from "@/Context";
import { Player } from "@/models/Player";
import { Artifact } from "@/models/atrifacts/Artifact";
import { ArtifactResolver } from "@/models/atrifacts/ArtifactResolver";
import { ValueType } from "@/models/values/ValueTypes";
import { ScalarValue } from "@/models/values/ScalarValue";

export class DamageArtifact extends Artifact {
  public amount: ScalarValue;
  constructor(
    target: Player,
    amount: number
  ) {
    super(target); 
    this.amount = new ScalarValue(amount, ValueType.DAMAGE);
  }
  acceptResolve(resolver: ArtifactResolver, context: Context): void {
    resolver.resolveDamage(this, context);
  }
}