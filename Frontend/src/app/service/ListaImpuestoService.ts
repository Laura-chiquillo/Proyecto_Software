import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Impuesto } from "../entity/Impuesto";

@Injectable({
    providedIn: 'root'
})
export class ListaImpuestoService {


    constructor(private http: HttpClient) { }
    Url = 'http://localhost:8080/api/v1/api/ingreso';

    getImpuesto() {
        return this.http.get<Impuesto[]>(this.Url);
    }
}