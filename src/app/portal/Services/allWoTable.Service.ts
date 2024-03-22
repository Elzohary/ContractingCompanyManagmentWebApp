import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWosTable } from '../Models/iwos-table';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class workOrdersTableService {

  constructor(private httpClient : HttpClient) { 
  }

  getAllTableData() : Observable<IWosTable[]> {
    return this.httpClient.get<IWosTable[]>(environment.apiUrl+'WorkOrders/woTableData')
  }

}

