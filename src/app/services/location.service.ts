import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }
  getLocation() {
    // return this.http.get('http://ip-api.com/json/')
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
