import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ListaUsuario }from '../entity/ListaUsuario';
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

    registrarUsuario2(id: string,empleado: any): Observable<any> {
        return this.http.post<any>(this.Url + `${empleado.id_emp}`, empleado)
    }

    eliminar(id: string, empleado: any): Observable<any> {
        return this.http.delete<any>(this.Url + `${empleado.id_emp}`)
    }

    actualizar(id: string, empleado: any): Observable<any> {
        return this.http.patch<any>(this.Url + `${empleado.id_emp}`, empleado)
    }
}