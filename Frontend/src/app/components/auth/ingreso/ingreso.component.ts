import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Impuesto } from 'src/app/entity/Impuesto';
import { Concepto } from 'src/app/entity/Concepto';
import { Beneficiario } from 'src/app/entity/Beneficiario';
import { CuentaBancaria } from 'src/app/entity/CuentaBancaria';
import { MetodoPago } from 'src/app/entity/MetodoPago';
import { Retencion } from 'src/app/entity/Retencion';
import { ListaExtrasService } from 'src/app/service/ListaExtrasService';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  public ingresoForm: FormGroup;
  public listaImpuesto: Impuesto[] = [];
  public listaConcepto: Concepto[] = [];
  public listaBenef: Beneficiario[] = [];
  public listaCuenta: CuentaBancaria[] = [];
  public listaMetodo: MetodoPago[] = [];
  public listaRetencion: Retencion[] = [];
  public isDesabled: Boolean;
  public numMovim: number;

  constructor(private router: Router, private service: ListaExtrasService, 
    private formBuilder: FormBuilder) {

      this.ingresoForm = this.createForm();

    }

  ngOnInit(): void {

    this.service.getImpuesto().subscribe(impuesto => {
      this.listaImpuesto = impuesto;
    })

    this.service.getBeneficiario().subscribe(benef => {
      this.listaBenef = benef;
    })

    this.service.getConceptoIngreso().subscribe(concepto => {
      this.listaConcepto = concepto;
    })

    this.service.getMetodoPago().subscribe(pago => {
      this.listaMetodo = pago;
    })

    this.service.getRetencion().subscribe(retencion => {
      this.listaRetencion = retencion;
    })

    this.service.getCuenta().subscribe(cuenta => {
      this.listaCuenta = cuenta;
    })

    this.service.getNumMov().subscribe(num => {
      this.numMovim = num;
    })

  }

  get fecha() { return this.ingresoForm.get('fecha'); }
  get beneficiario() { return this.ingresoForm.get('beneficiario'); }
  get cuentaBancaria() { return this.ingresoForm.get('cuentaBancaria'); }
  get metodoPago() { return this.ingresoForm.get('metodoPago'); }
  get notasAdicionales() { return this.ingresoForm.get('notasAdicionales'); }
  get concepto() { return this.ingresoForm.get('concepto'); }
  get valor_concepto() { return this.ingresoForm.get('valor_concepto'); }
  get impuesto() { return this.ingresoForm.get('impuesto'); }
  get cantidad() { return this.ingresoForm.get('cantidad'); }
  get notasAdicionales2() { return this.ingresoForm.get('notasAdicionales2'); }
  get tipoRetencion() { return this.ingresoForm.get('tipoRetencion'); }
  get extra() { return this.ingresoForm.get('extra'); }

  createForm() {
    return new FormGroup({
      fecha: new FormControl('', [Validators.required]),
      beneficiario: new FormControl('', [Validators.required]),
      cuentaBancaria: new FormControl('', [Validators.required]),
      metodoPago: new FormControl('', [Validators.required]),
      notasAdicionales: new FormControl('', [Validators.required]),
      concepto: new FormControl('', [Validators.required]),
      valor_concepto: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
      impuesto: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
      notasAdicionales2: new FormControl('', [Validators.required]),
      tipoRetencion: new FormControl(''),
      extra: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')])
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

  onResetForm(): void {
    this.ingresoForm.reset();
  }

  onSaveForm(): void {
    console.log(this.ingresoForm.value);
  }  

  numMov(){
    return this.numMovim;
  }

}
