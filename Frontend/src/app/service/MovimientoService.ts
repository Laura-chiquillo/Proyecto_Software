import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movimiento } from "src/app/entity/Movimiento"

@Injectable({
    providedIn: 'root'
})
export class MovimientoService {


    constructor(private http: HttpClient) { }
    Url = 'http://localhost:8080/api/v1';

    registro(mov: Movimiento){
        return this.http.post(this.Url+'/api/registroMov', mov);
    }

}