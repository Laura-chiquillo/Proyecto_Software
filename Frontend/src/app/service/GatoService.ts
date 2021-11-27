import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { Movimiento } from "../entity/Movimiento";

@Injectable({
    providedIn: 'root'
}) 
export class TipoUsuarioService {

    constructor(private http:HttpClient){}
    Url = 'http://localhost:8080/api/v1/api/movimiento';

    loginAut(credenciales:Movimiento){
        return this.http.post(this.Url, credenciales)
    }
}