import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private API_SERVER = "http://localhost:8080/api/v1/api/registro";
  constructor(private httpClient: HttpClient) { }

    public saveUsuario (usuarios:any): Observable<any>{
      return this.httpClient.post(this.API_SERVER,usuarios)
    }
  
}

