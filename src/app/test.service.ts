import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  private testData = {
    a: 1,
    b: 'costam'
  }

  get data() {
    return this.testData;
  }

  constructor() { }

  changeData() {
    this.testData.a++;
  }

}
