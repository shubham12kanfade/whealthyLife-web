import { ApiCallService } from './api/apicall.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient,public ApiCall:ApiCallService) { }
  getLocation() {
    // return this.http.get('http://ip-api.com/json/')
  }


getCountry(){
  return this.ApiCall.getData('country/');
}

getState(countryId){
  return this.ApiCall.getData('country/'+countryId+'/state/')
}

getCity(stateId){
  console.log("LocationService -> getCity -> stateId", stateId)
  return this.ApiCall.getData('country/state/22/city/')
}





  public getPosition(): Observable<Position> {
    return Observable.create(
      (observer) => {
        navigator.geolocation.watchPosition((pos: Position) => {
          observer.next(pos);
        }),
          () => {
            console.log('Position is not available');
          },
        {
          enableHighAccuracy: true
        };
      });
  }
}
