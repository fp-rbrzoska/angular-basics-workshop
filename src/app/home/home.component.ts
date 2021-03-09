import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'fp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  counter: number;
  constructor(private counterService: CounterService) {
    this.counter = counterService.counter;
  }

  ngOnInit(): void {
  }

  increment() {
    this.counterService.increment();

    this.counter = this.counterService.counter;
    console.log(this.counterService.counter)
  }

}
