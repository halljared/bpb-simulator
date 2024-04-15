import { Context } from "@/Context";
import { Player } from "@/models/Player";
import { Artifact } from "@/models/atrifacts/Artifact";
import { ArtifactResolver } from "@/models/atrifacts/ArtifactResolver";
import { ValueType } from "@/models/values/ValueTypes";
import { ScalarValue } from "@/models/values/ScalarValue";
import { BuffType } from "@/models/utility/BuffTypes";

export class BuffArtifact extends Artifact {
  public amount: ScalarValue;
  constructor(
    public type: BuffType,
    target: Player,
    amount: number
  ) {
    super(target); 
    this.amount = new ScalarValue(amount, ValueType.EMPOWER);
  }
  acceptResolve(resolver: ArtifactResolver, context: Context): void {
    resolver.resolveBuff(this, context);
  }
}