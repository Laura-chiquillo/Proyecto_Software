import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


export interface PeriodicElement {
  beneficiario: string;
  numero: number;
  fecha: string;
  tipo: string;
  monto: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {numero: 1, beneficiario: 'Juanca', fecha: "17/11/2021", tipo: 'H', monto:800000},
 
];

@Component({
  selector: 'app-conciliacion-bancaria',
  templateUrl: './conciliacion-bancaria.component.html',
  styleUrls: ['./conciliacion-bancaria.component.css']
})
export class ConciliacionBancariaComponent {
  options: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  displayedColumns: string[] = ['numero', 'beneficiario', 'fecha', 'tipo','monto'];
  dataSource = ELEMENT_DATA;
  

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
    });
  }
  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }

  

}
