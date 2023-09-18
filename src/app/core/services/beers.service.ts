import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private _http: HttpClient) { }

  getBers(){
    return this._http.get('https://run.mocky.io/v3/65f44a73-9653-4853-aea7-99eb2be07764')
    .pipe(
      map((res: any) => res.beers)
    )
  }
}
