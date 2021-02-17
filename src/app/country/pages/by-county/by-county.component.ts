import { Component, OnInit } from '@angular/core';

// Interface
import { Country } from '../../interface/country.interface';

// Service
import { CountyService } from '../../service/county.service';

@Component({
  selector: 'app-by-county',
  templateUrl: './by-county.component.html',
  styles: []
})
export class ByCountyComponent implements OnInit {

  term = '';
  hasError = false;
  countries: Country[] = [];

  constructor( private countryService: CountyService ) { }

  ngOnInit(): void {
  }

  search( term: string ): void {
    this.hasError = false;
    this.term = term;
    this.countryService.searchCountry( term )
      .subscribe(
        ( country ) => this.countries = country,
        ( err ) => {
          this.hasError = true;
          this.countries = [];
        }
      );
  }

}
