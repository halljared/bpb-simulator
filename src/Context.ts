import { Artifact } from '@/models/atrifacts/Artifact';
import { Subject } from 'rxjs';

export class Context {
  public artifacts = new Subject<Artifact>();
  constructor() {
  }
}