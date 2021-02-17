import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ByCityComponent } from './pages/by-city/by-city.component';
import { ByCountyComponent } from './pages/by-county/by-county.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';


@NgModule({
  declarations: [
    ByCityComponent,
    ByCountyComponent,
    ByRegionComponent,
    SeeCountryComponent
  ],
  exports: [
    ByCityComponent,
    ByCountyComponent,
    ByRegionComponent,
    SeeCountryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountryModule { }
