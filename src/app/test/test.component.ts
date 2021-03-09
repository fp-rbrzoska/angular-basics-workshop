import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { TestService } from '../test.service';

@Component({
  selector: 'fp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  profile$: Observable<any>

  constructor(private testService: TestService) {
    this.profile$ = this.testService.getProfile().pipe(
      share()
    )
    console.log(testService.data);
  }

  ngOnInit(): void {
  }

}
