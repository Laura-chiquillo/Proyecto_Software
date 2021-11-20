import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoUsuarioService } from 'src/app/service/TipoUsuarioService';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {

  public ingresoForm: FormGroup;

  constructor(private router: Router, private service: TipoUsuarioService) {
    this.ingresoForm = this.createForm();
  }

  get fecha() { return this.ingresoForm.get('fecha'); }
  get beneficiario() { return this.ingresoForm.get('beneficiario'); }
  get cuentaBancaria() { return this.ingresoForm.get('cuentaBancaria'); }
  get metodoPago() { return this.ingresoForm.get('metodoPago'); }
  get extra() { return this.ingresoForm.get('extra'); }
  get notasAdicionales() { return this.ingresoForm.get('notasAdicionales'); }
  get concepto() { return this.ingresoForm.get('concepto'); }
  get valor_concepto() { return this.ingresoForm.get('valor_concepto'); }
  get impuesto() { return this.ingresoForm.get('impuesto'); }
  get cantidad() { return this.ingresoForm.get('cantidad'); }
  get notasAdicionales2() { return this.ingresoForm.get('notasAdicionales2'); }
  get tipoRetencion() { return this.ingresoForm.get('tipoRetencion'); }


  createForm() {
    return new FormGroup({
      fecha: new FormControl('', [Validators.required]),
      beneficiario: new FormControl('', [Validators.required]),
      cuentaBancaria: new FormControl('', [Validators.required]),
      metodoPago: new FormControl('', [Validators.required]),
      extra: new FormControl('', [Validators.required]),
      notasAdicionales: new FormControl('', [Validators.required]),
      concepto: new FormControl('', [Validators.required]),
      valor_concepto: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
      impuesto: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
      notasAdicionales2: new FormControl('', [Validators.required]),
      tipoRetencion: new FormControl('')
    })

  }

  changeBeneficiario(e) {
    this.beneficiario.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeCuenta(e) {
    this.cuentaBancaria.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeMetodoPago(e) {
    this.metodoPago.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeConcepto(e) {
    this.concepto.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeImpuesto(e) {
    this.impuesto.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeRetencion(e) {
    this.tipoRetencion.setValue(e.target.value, {
      onlySelf: true
    })
  }

  onResetForm(): void{
    this.ingresoForm.reset();
  }

  onSaveForm():void {
    
  }

}
