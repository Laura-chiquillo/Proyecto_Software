import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Retencion } from 'src/app/entity/Retencion';

@Injectable({
    providedIn: 'root'
})
export class ListaRetencionService {


    constructor(private http: HttpClient) { }
    Url = 'http://localhost:8080/api/v1/api/retencion';

    getRetencion(){
        return this.http.get<Retencion[]>(this.Url);
    }
}