import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  private counterValue = 0;
  get counter() {
    return this.counterValue;
  }

  constructor() { }

  increment() {
    this.counterValue++;
  }
}
