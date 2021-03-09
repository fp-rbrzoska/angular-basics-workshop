import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
