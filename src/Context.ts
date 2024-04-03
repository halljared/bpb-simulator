import { Player } from '@/models/Player';
import { Artifact } from '@/models/atrifacts/Artifact';
import { ArtifactResolver } from '@/models/atrifacts/ArtifactResolver';
import { BuffArtifact } from '@/models/atrifacts/Buff';
import { Subject } from 'rxjs';

export class Context {
  public static buffs = new Subject<BuffArtifact>();
  public static artifacts = new Subject<Artifact>();
  public static artifactResolver: ArtifactResolver = new ArtifactResolver();
  constructor(
    public player1: Player,
    public player2: Player
    ) {

  }
  static initialize(): void {
    Context.buffs.subscribe(Context.artifacts); // artifacts observes all buffs
  }
}