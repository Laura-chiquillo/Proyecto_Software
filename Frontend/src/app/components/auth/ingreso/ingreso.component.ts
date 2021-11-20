import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoUsuarioService } from 'src/app/service/TipoUsuarioService';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  public registroForm: FormGroup;

  constructor(private router: Router, private service: TipoUsuarioService) {
    this.registroForm = this.createForm();
  }

  get fecha() { return this.registroForm.get('fecha'); }
  get beneficiario() { return this.registroForm.get('beneficiario'); }
  get cuentaBancaria() { return this.registroForm.get('cuentaBancaria'); }
  get metodoPago() { return this.registroForm.get('metodoPago'); }
  get extra() { return this.registroForm.get('extra'); }
  get notasAdicionales() { return this.registroForm.get('notasAdicionales'); }
  get concepto() { return this.registroForm.get('concepto'); }
  get valor_concepto() { return this.registroForm.get('valor_concepto'); }
  get impuesto() { return this.registroForm.get('impuesto'); }
  get cantidad() { return this.registroForm.get('cantidad'); }
  get notasAdicionales2() { return this.registroForm.get('notasAdicionales2'); }
  get tipoRetencion() { return this.registroForm.get('tipoRetencion'); }


  ngOnInit(): void {
  }

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
    this.registroForm.reset();
  }

  onSaveForm():void {
    
  }

}
