import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CuentaBancaria } from 'src/app/entity/CuentaBancaria';

@Injectable({
    providedIn: 'root'
})
export class ListaCuentaService {


    constructor(private http: HttpClient) { }
    Url = 'http://localhost:8080/api/v1/api/cuenta';

    getCuenta(){
        return this.http.get<CuentaBancaria[]>(this.Url);
    }

}