import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent {

  public filtered: boolean = false;
  @Input() title: string = '';

  setFiltered() {
    this.filtered = true;
  }

}
