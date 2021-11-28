import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface PeriodicElement {
  beneficiario: string;
  numero: number;
  fecha: string;
  tipo: string;
  monto: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { numero: 1, beneficiario: 'Juanca', fecha: "17/11/2021", tipo: 'H', monto: 800000 },

];

@Component({
  selector: 'app-conciliacion-bancaria',
  templateUrl: './conciliacion-bancaria.component.html',
  styleUrls: ['./conciliacion-bancaria.component.css']
})
export class ConciliacionBancariaComponent {
  public ConciliacionBancaria: FormGroup;
  displayedColumns: string[] = ['numero', 'beneficiario', 'fecha', 'tipo', 'monto'];
  dataSource = ELEMENT_DATA;


  constructor(private router: Router) {
    this.ConciliacionBancaria = this.createForm();
  }
  get CuentaBancaria(){ return this.ConciliacionBancaria.get('CuentaBancaria'); }
  get SaldoBancario(){ return this.ConciliacionBancaria.get('SaldoBancario'); }
  get fechaHasta(){ return this.ConciliacionBancaria.get('fechaHasta'); }
  get fechaInicial(){ return this.ConciliacionBancaria.get('fechaInicial'); }

  createForm() {
    return new FormGroup({
      CuentaBancaria: new FormControl('', [Validators.required]),
      SaldoBancario: new FormControl('', [Validators.required]),
      fechaHasta: new FormControl('', [Validators.required]),
      fechaInicial: new FormControl('', [Validators.required]),
    })
  }


  

  onSaveForm(): void {

  }


}
