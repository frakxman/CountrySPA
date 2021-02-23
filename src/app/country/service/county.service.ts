import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interface/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountyService {

  private apiUrl = 'https://restcountries.eu/rest/v2';

  get httpParams(): HttpParams {
    return new HttpParams().set( 'fields', 'alpha2Code;capital;flag;name;population');
  }

  constructor( private http: HttpClient ) { }

  searchCountry( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/name/${ term }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  searchCity( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/capital/${ term }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getCountryUId( id: string ): Observable<Country> {
    const url = `${ this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  getRegion(region: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
}
