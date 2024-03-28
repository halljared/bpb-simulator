import { Artifact } from "@/models/atrifacts/Artifact";
import { BuffArtifact } from "@/models/atrifacts/Buff";

export class ArtifactResolver {
  
  constructor() {
    
  }
  resolve(artifact: Artifact): void {
    artifact.acceptResolve(this);
  }
  resolveBuff(buff: BuffArtifact): void {

  }
}