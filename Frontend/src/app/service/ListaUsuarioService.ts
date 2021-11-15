import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ListaUsuario }from '../entity/ListaUsuario'
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
}) 
export class ListaUsiarioService {

    constructor(private http:HttpClient){}
    Url = 'http://localhost:8080/api/v1/api/users';
 
    loginAut(): Observable<ListaUsuario[]>{
        return this.http.get<ListaUsuario[]>(this.Url);
    }
}