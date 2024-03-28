import { ArtifactResolver } from "@/models/atrifacts/ArtifactResolver";

export abstract class Artifact {
  constructor() {
    
  }
  abstract acceptResolve(resolver: ArtifactResolver): void;
}