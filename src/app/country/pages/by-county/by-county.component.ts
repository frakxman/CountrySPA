import { Component, OnInit } from '@angular/core';

// Interface
import { Country } from '../../interface/country.interface';

// Service
import { CountyService } from '../../service/county.service';

@Component({
  selector: 'app-by-county',
  templateUrl: './by-county.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class ByCountyComponent implements OnInit {

  term = '';
  hasError = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions = false;

  constructor( private countryService: CountyService ) { }

  ngOnInit(): void {
  }

  search( term: string ): void {
    this.showSuggestions = false;
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

  suggestions( term: string ): void {
    this.hasError = false;
    this.term =  term;
    this.showSuggestions = true;

    this.countryService.searchCountry( term )
      .subscribe( 
        countries => this.suggestedCountries = countries.splice( 0, 5 ),
        ( err ) => this.suggestedCountries = []
      );
  }

  suggestionSearch( term: string ) {
    this.search( term );
  }

}
