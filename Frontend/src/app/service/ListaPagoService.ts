import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MetodoPago } from 'src/app/entity/MetodoPago';

@Injectable({
    providedIn: 'root'
})
export class ListaPagoService {


    constructor(private http: HttpClient) { }
    Url = 'http://localhost:8080/api/v1/api/pago';

    getMetodoPago(){
        return this.http.get<MetodoPago[]>(this.Url);
    }

}