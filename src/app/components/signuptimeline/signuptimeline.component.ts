import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signuptimeline',
  templateUrl: './signuptimeline.component.html',
  styleUrls: ['./signuptimeline.component.scss']
})
export class SignuptimelineComponent implements OnInit {

  @Input() step = 1;

  public showDetail: boolean;

  constructor() { }

  toggleDetail() {
    this.showDetail = !this.showDetail;
  }

  ngOnInit() {
  }

}
