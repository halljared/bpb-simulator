import { Artifact } from '@/models/atrifacts/Artifact';
import { BuffArtifact } from '@/models/atrifacts/Buff';
import { Subject } from 'rxjs';

export class Context {
  public buffs = new Subject<BuffArtifact>();
  public artifacts = new Subject<Artifact>();
  constructor() {
    this.buffs.subscribe(this.artifacts); // artifacts observes all buffs
  }
}