import { Context } from "@/Context";
import { Artifact } from "@/models/atrifacts/Artifact";
import { BuffArtifact } from "@/models/atrifacts/Buff";

export class ArtifactResolver {
  
  constructor() {
    
  }
  resolve(artifact: Artifact, context: Context): void {
    artifact.acceptResolve(this, context);
  }
  resolveBuff(buff: BuffArtifact, context: Context): void {
    Context.buffs.next(buff);
    console.log(`Resolve: Buff ${buff.amount.evaluate()} ${buff.type}`)
  }
}