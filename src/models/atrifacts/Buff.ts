import { Context } from "@/Context";
import { Artifact } from "@/models/atrifacts/Artifact";
import { ArtifactResolver } from "@/models/atrifacts/ArtifactResolver";
import { AttributeType } from "@/models/attributes/AttributeTypes";
import { ScalarAttribute } from "@/models/attributes/ScalarAttribute";
import { BuffType } from "@/models/utility/BuffTypes";

export class BuffArtifact extends Artifact {
  public amount: ScalarAttribute;
  constructor(public type: BuffType, amount: number) {
    super(); 
    this.amount = new ScalarAttribute(amount, AttributeType.EMPOWER);
  }
  acceptResolve(resolver: ArtifactResolver, context: Context): void {
    resolver.resolveBuff(this, context);
  }
}