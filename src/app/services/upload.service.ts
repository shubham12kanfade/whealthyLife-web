import { Injectable } from '@angular/core';
import { ApiCallService } from './api/apicall.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private apiCall: ApiCallService) { }
  upload(file: any) {
    const url = environment.apiUrl + this.apiCall.uploadUrl;
    return this.apiCall.upload(file, url);
  }
}
