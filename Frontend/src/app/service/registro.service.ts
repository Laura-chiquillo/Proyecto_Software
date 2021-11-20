import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private API_SERVER = "http://localhost:8080/usuario/";
  constructor(private httpClient: HttpClient) { }

    public getAllusuarios(): Observable<any>{ 
      return this.httpClient.get(this.API_SERVER);
    }
    public saveUsuario (usuarios:any): Observable<any>{
      return this.httpClient.post(this.API_SERVER,usuarios)
    }
    public deleteUsuario(id):Observable<any>{
      return this.httpClient.delete(this.API_SERVER + "delete/"+id);
    }
}

