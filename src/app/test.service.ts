import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  changeData() {
    this.testData.a++;
  }

  getProfile() {
    return this.http.get<any>('http://localhost:3000/profile')
  }

}
