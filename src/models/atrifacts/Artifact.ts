import { Context } from "@/Context";
import { Player } from "@/models/Player";
import { ArtifactResolver } from "@/models/atrifacts/ArtifactResolver";

export abstract class Artifact {
  public target: Player;
  constructor(target: Player) {
    this.target = target;
  }
  abstract acceptResolve(resolver: ArtifactResolver, context: Context): void;
}