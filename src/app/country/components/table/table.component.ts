import { Component, Input, OnInit } from '@angular/core';

// Interface
import { Country } from '../../interface/country.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [`
    img {
      width: 80px;
      height: 50px;
    }
  `]
})
export class TableComponent implements OnInit {

  @Input() countries: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
