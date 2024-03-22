import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusModel } from '../Models/status-model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WoStatusService {

  constructor(private httpClient : HttpClient) { }

  getAllStatuses() : Observable<StatusModel[]> {
    return this.httpClient.get<StatusModel[]>('https://localhost:44307/api/WO_Status');
  }
}

