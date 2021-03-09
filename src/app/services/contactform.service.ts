import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ContactformService {
  constructor(private http: HttpClient) {}

  addData(data) {
    return this.http.post("datatosend", data);
  }
}
