import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

// TODO: Add Angular decorator.
export abstract class Destroyable implements OnDestroy {
  protected $destroyed = new Subject();

  ngOnDestroy() {
    this.$destroyed.next();
  }
}
