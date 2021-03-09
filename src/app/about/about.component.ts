import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'fp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  todayDate =  new Date();
  testObj = {
    a: 1,
    b: 'asdasd'
  };
  counter$: Observable<number>;

  constructor(private counterService: CounterService) {
    this.counter$ = counterService.counter$;
  }

  ngOnInit(): void {
  }

  handleClick(event: PointerEvent): void {
    console.log(event);
    this.todayDate = new Date();
  }

}
