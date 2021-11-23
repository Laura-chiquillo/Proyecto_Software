import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Impuesto } from "../entity/Impuesto";

@Injectable({
    providedIn: 'root'
})
export class ListaImpuestoService {


    constructor(private http: HttpClient) { }
    Url = 'http://localhost:8080/api/v1/api/impuesto';

    getImpuesto() {
        return this.http.get<Impuesto[]>(this.Url);
    }

}