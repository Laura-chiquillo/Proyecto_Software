import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Beneficiario } from 'src/app/entity/Beneficiario';

@Injectable({
    providedIn: 'root'
})
export class ListaBeneficiarioService {


    constructor(private http: HttpClient) { }
    Url = 'http://localhost:8080/api/v1/api/beneficiario';

    getBeneficiario() {
        return this.http.get<Beneficiario[]>(this.Url);
    }
}