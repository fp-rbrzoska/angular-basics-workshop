import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'fp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  counter: number;
  constructor(private counterService: CounterService) {
    this.subscription.add( counterService.counter$.subscribe(counter => {
      this.counter = counter;
      console.log('counter update: ' +  counter)
    }));
  }

  ngOnInit(): void {
  }

  increment() {
    this.counterService.increment();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
