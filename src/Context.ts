import { Player } from '@/models/Player';
import { Artifact } from '@/models/atrifacts/Artifact';
import { ArtifactResolver } from '@/models/atrifacts/ArtifactResolver';
import { BuffArtifact } from '@/models/atrifacts/Buff';
import { DamageArtifact } from '@/models/atrifacts/Damage';
import { Subject } from 'rxjs';

export class Context {
  public static buffs = new Subject<BuffArtifact>();
  public static damages = new Subject<DamageArtifact>();
  public static artifacts = new Subject<Artifact>();
  public static artifactResolver: ArtifactResolver = new ArtifactResolver();
  constructor(
    public player1: Player,
    public player2: Player
    ) {
      //non-static initialization
  }
  static initialize(): void {
      //static initialization
    Context.buffs.subscribe(Context.artifacts); // artifacts observes all sub-artifacts
    Context.damages.subscribe(Context.artifacts);
  }
}