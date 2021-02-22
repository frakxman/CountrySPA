import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interface/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountyService {

  private apiUrl = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }

  searchCountry( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/name/${ term }`;
    return this.http.get<Country[]>( url );
  }

  searchCity( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/capital/${ term }`;
    return this.http.get<Country[]>( url );
  }
}
