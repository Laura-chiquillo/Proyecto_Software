import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ListaUsuario }from '../entity/ListaUsuario';
import { Observable } from "rxjs";
import { Usuario } from 'src/app/entity/Usuario';

@Injectable({
    providedIn: 'root'
}) 
export class ListaUsiarioService {

    
    constructor(private http:HttpClient){}
    Url = 'http://localhost:8080/api/v1';
 
    loginAut(): Observable<ListaUsuario[]>{
        return this.http.get<ListaUsuario[]>(this.Url+"/api/users");
    }
    actualizar(usuario: Usuario): Observable<any> {
        return this.http.put(this.Url+"/api/desbloquear", usuario)
    }
    bloquear(usuario: Usuario): Observable<any> {
        return this.http.put(this.Url+"/api/bloquear", usuario)
    }
}