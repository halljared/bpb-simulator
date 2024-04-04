import { Context } from "@/Context";
import { Artifact } from "@/models/atrifacts/Artifact";
import { BuffArtifact } from "@/models/atrifacts/Buff";
import { DamageArtifact } from "@/models/atrifacts/Damage";

export class ArtifactResolver {
  
  constructor() {
    
  }
  resolve(artifact: Artifact, context: Context): void {
    artifact.acceptResolve(this, context);
  }
  resolveBuff(buff: BuffArtifact, context: Context): void {
    console.log(`Resolve: Buff ${buff.amount.evaluate()} ${buff.type}`);
    Context.buffs.next(buff);
  }
  resolveDamage(dmg: DamageArtifact, context: Context): void {
    console.log(`Resolve: Damage ${dmg.amount.evaluate()}`);
    Context.artifacts.next(dmg); // should be damages instead of artifacts
  }
}