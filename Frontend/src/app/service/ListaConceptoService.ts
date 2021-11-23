import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Concepto } from 'src/app/entity/Concepto';

@Injectable({
    providedIn: 'root'
})
export class ListaConceptoService {


    constructor(private http: HttpClient) { }
    Url = 'http://localhost:8080/api/v1/api/concepto';

    getConcepto(){
        return this.http.get<Concepto[]>(this.Url);
    }

}