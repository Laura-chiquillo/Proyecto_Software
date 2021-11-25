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
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {

  public gastoForm: FormGroup;
  public listaImpuesto: Impuesto[] = [];
  public listaConcepto: Concepto[] = [];
  public listaBenef: Beneficiario[] = [];
  public listaCuenta: CuentaBancaria[] = [];
  public listaMetodo: MetodoPago[] = [];
  public listaRetencion: Retencion[] = [];
  public numMovim: number;

  constructor(private router: Router, private service: ListaExtrasService,
    private formBuilder: FormBuilder) {

    this.gastoForm = this.createForm();

  }

  ngOnInit(): void {

    this.service.getImpuesto().subscribe(impuesto => {
      this.listaImpuesto = impuesto;
    })

    this.service.getBeneficiario().subscribe(benef => {
      this.listaBenef = benef;
    })

    this.service.getConceptoGasto().subscribe(concepto => {
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

  get fecha() { return this.gastoForm.get('fecha'); }
  get beneficiario() { return this.gastoForm.get('beneficiario'); }
  get cuentaBancaria() { return this.gastoForm.get('cuentaBancaria'); }
  get metodoPago() { return this.gastoForm.get('metodoPago'); }
  get notasAdicionales() { return this.gastoForm.get('notasAdicionales'); }
  get concepto() { return this.gastoForm.get('concepto'); }
  get valor_concepto() { return this.gastoForm.get('valor_concepto'); }
  get impuesto() { return this.gastoForm.get('impuesto'); }
  get cantidad() { return this.gastoForm.get('cantidad'); }
  get notasAdicionales2() { return this.gastoForm.get('notasAdicionales2'); }
  get tipoRetencion() { return this.gastoForm.get('tipoRetencion'); }

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

  onResetForm(): void {
    this.gastoForm.reset();
  }

  onSaveForm(): void {
    console.log(this.gastoForm.value);
  }

  numMov(){
    return this.numMovim;
  }

}
