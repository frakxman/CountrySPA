import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ByCityComponent } from './country/pages/by-city/by-city.component';
import { ByCountyComponent } from './country/pages/by-county/by-county.component';
import { SeeCountryComponent } from './country/pages/see-country/see-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';

const routes: Routes = [
  { path: '', component: ByCityComponent, pathMatch: 'full' },
  { path: 'country', component: ByCountyComponent },
  { path: 'country/:id', component: SeeCountryComponent },
  { path: 'region', component: ByRegionComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
