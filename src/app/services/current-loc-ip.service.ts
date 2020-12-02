import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentLocIpService {

  constructor(private http:HttpClient) {
    
   }
   public getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      const request: string = 'http://ip-api.com/json';
      // // console.log('data', request);
      this.http
        .get(request)
        .subscribe(
          data => resolve(data),
          error => reject(error)
        );
    });
  }

}
