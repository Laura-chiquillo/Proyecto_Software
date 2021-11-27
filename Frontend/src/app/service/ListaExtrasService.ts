import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CuentaBancaria } from 'src/app/entity/CuentaBancaria';
import { Beneficiario } from 'src/app/entity/Beneficiario';
import { Concepto } from 'src/app/entity/Concepto';
import { Impuesto } from "../entity/Impuesto";
import { MetodoPago } from 'src/app/entity/MetodoPago';
import { Retencion } from 'src/app/entity/Retencion';

@Injectable({
    providedIn: 'root'
})
export class ListaExtrasService {


    constructor(private http: HttpClient) { }
    Url = 'http://localhost:8080/api/v1';

    getCuenta(){
        return this.http.get<CuentaBancaria[]>(this.Url+'/api/cuenta');
    }

    getBeneficiario() {
        return this.http.get<Beneficiario[]>(this.Url+'/api/beneficiario');
    }

    getConceptoIngreso(){
        return this.http.get<Concepto[]>(this.Url+'/api/conceptoGasto');
    }

    getConceptoGasto(){
        return this.http.get<Concepto[]>(this.Url+'/api/conceptoIngreso');
    }

    getImpuesto() {
        return this.http.get<Impuesto[]>(this.Url+'/api/impuesto');
    }

    getMetodoPago(){
        return this.http.get<MetodoPago[]>(this.Url+'/api/pago');
    }

    getRetencion(){
        return this.http.get<Retencion[]>(this.Url+"/api/retencion");
    }

    getNumMov(){
        return this.http.get<number>(this.Url+"/api/numMov");
    }
    
}