import { Context } from "@/Context";
import { ArtifactResolver } from "@/models/atrifacts/ArtifactResolver";

export abstract class Artifact {
  constructor() {
    
  }
  abstract acceptResolve(resolver: ArtifactResolver, context: Context): void;
}