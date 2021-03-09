import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'fp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [CounterService]
})
export class AboutComponent implements OnInit {

  todayDate =  new Date();
  testObj = {
    a: 1,
    b: 'asdasd'
  };
  counter: number;

  constructor(private counterService: CounterService) {
    this.counter = counterService.counter;
  }

  ngOnInit(): void {
  }

  handleClick(event: PointerEvent): void {
    console.log(event);
    this.todayDate = new Date();
  }

}
