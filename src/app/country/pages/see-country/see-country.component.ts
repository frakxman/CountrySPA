import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

// Service
import { CountyService } from '../../service/county.service';
import { Country } from '../../interface/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [`

    h1 {
      text-align: center;
    }

    img {
      width: 80%;
      margin: 0 auto;
    }

    .box {
      margin-left: 5%;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, #0d6efd, #fff );
      border-radius: 8px;
      color: #000;
      font-size: 20px;
      padding: 5px;
    }

    .box-small {
      background: #fff;
      display: block;
      padding: 1em 2em;
      border-radius: 6px;
    }
  `]
})
export class SeeCountryComponent implements OnInit {

  country!: Country;

  constructor( private activatedRoute: ActivatedRoute, private countryService: CountyService ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.getCountryUId( id )),
        tap( console.log )
      )
        .subscribe( country => this.country = country );
  }

}
