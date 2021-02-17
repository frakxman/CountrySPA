import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { ByCityComponent } from './pages/by-city/by-city.component';
import { ByCountyComponent } from './pages/by-county/by-county.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { TableComponent } from './components/table/table.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    ByCityComponent,
    ByCountyComponent,
    ByRegionComponent,
    SeeCountryComponent,
    TableComponent,
    InputComponent
  ],
  exports: [
    ByCityComponent,
    ByCountyComponent,
    ByRegionComponent,
    SeeCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
