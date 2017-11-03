import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-organization-searchbox',
  templateUrl: './organization-searchbox.component.html',
  styleUrls: ['./organization-searchbox.component.scss']
})
export class OrganizationSearchboxComponent implements OnInit {

  @Input() title: string;
  @Input() buttonText: string;
  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  public searchTerm: string;

  constructor() { }

  ngOnInit() {
  }

  public doSearch(): void {
    this.search.emit(this.searchTerm);
  }

}
