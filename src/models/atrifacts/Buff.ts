import { Context } from "@/Context";
import { Artifact } from "@/models/atrifacts/Artifact";
import { ArtifactResolver } from "@/models/atrifacts/ArtifactResolver";
import { BuffType } from "@/models/utility/BuffTypes";

export class BuffArtifact extends Artifact {
  constructor(public type: BuffType, public amount: number) {
    super(); 
  }
  acceptResolve(resolver: ArtifactResolver, context: Context): void {
    resolver.resolveBuff(this, context);
  }
}