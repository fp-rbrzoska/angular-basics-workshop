import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CounterService {

  private counterSubj = new BehaviorSubject<number>(0);
  counter$ = this.counterSubj.asObservable()

  constructor() { }

  increment() {
    this.counterSubj.next(this.counterSubj.value + 1)  }
}
