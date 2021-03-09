import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'fp-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  loader = false
  // promise: Promise<boolean> = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(true);
  //   }, 5000)
  // });

  obs$: Observable<number> = new Observable<number>(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    setTimeout(() => {
      observer.next(5);
    }, 5000)
  })

  // obs2$: Observable<number> = of([1, 2, 3, 4, 5])
  // // obs2$: Observable<PointerEvent> = fromEvent(htmlElement, 'click')
  // obs2$: Observable<number> = from([1, 2, 2, 2, 2, 3, 4, 5, 2])
  obs2$: Observable<number> = interval(1000);

  subj = new Subject();
  private bsubj = new BehaviorSubject(0);
  b$ = this.bsubj.asObservable()
  constructor() { }

  ngOnInit(): void {
    this.loader = true;
    // this.obs2$
    // .pipe(
    //   distinctUntilChanged(),
    //   filter(val => val%2 === 0),
    //   tap(v => console.log(v)),
    //   map(val => val*2),
    //   takeWhile(v => v < 100)
    // )
    // .subscribe(val => {
    //   console.log(val);
    // });

    this.bsubj.next(1)

    this.bsubj.subscribe(val => console.log(val));

    this.bsubj.complete()

    // this.promise.then((res)=> {
    //   console.log(res)
    // }).finally(()=> this.loader = false)
  }


}
