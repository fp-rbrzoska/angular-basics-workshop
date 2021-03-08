import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: PointerEvent): void {
    console.log(event);
    this.todayDate = new Date();
  }

}
