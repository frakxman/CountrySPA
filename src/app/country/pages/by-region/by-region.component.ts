import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/country.interface';
import { CountyService } from '../../service/county.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class ByRegionComponent implements OnInit {

  regions: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania' ];
  activeRegion = '';
  countries: Country[] = [];

  constructor( private countryService: CountyService ) { }

  ngOnInit(): void {
  }

  getClassCSS( region: string ) {
    return ( region === this.activeRegion ) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activatedRegion( region: string ): void {

    if ( region === this.activeRegion ) { return; }
    this.activeRegion = region;
    this.countries = [];
    this.countryService.getRegion( region )
      .subscribe( countries => this.countries = countries );
  }

}
