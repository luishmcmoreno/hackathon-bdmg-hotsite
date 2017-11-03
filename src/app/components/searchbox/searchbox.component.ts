import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent {

  public filtered: boolean = false;

  setFiltered() {
    this.filtered = true;
  }

}
