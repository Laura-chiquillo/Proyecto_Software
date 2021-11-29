import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cuenta',
  templateUrl: './agregar-cuenta.component.html',
  styleUrls: ['./agregar-cuenta.component.css']
})

export class AgregarCuentaComponent {
  public registroBancario: FormGroup;
  
  TipoDeCuenta: any = ['Cuenta Corriente', 'Cuenta De Ahorros', 'Cuenta de Nómina', 'Cuenta con chequera', 'Cuentas en dólares'];
  Bancos: any = ['Bancolombia', 'Scotiabank Colpatria', 'Banco Av Villas', 'Banco Caja Social', 'Banco de Bogotá','Banco de Occidente','Banco Itaú','Banco Popular','BBVA Colombia','Davivienda'];
  Pais:any = ['Colombia', 'Ecuador', 'Mexico', 'España', 'Estados Unidos','Brasil','Argentina','Canada','Suiza','Chile'];
  constructor(private router: Router) {
    this.registroBancario = this.createForm();
  }

  get TipoCuenta() { return this.registroBancario.get('TipoCuenta'); }
  get TipoBanco(){ return this.registroBancario.get('TipoBanco'); }
  get TipoPais(){ return this.registroBancario.get('TipoPais'); }
  get CuentaBancaria(){ return this.registroBancario.get('CuentaBancaria'); }
  get saldo(){ return this.registroBancario.get('saldo'); }
 

  createForm() {
    return new FormGroup({
      TipoCuenta: new FormControl('', [Validators.required]),
      TipoBanco: new FormControl('', [Validators.required]),
      TipoPais: new FormControl('', [Validators.required]),
      CuentaBancaria: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern('[- +()0-9]+')]),
      saldo: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]), 
    })
  }

  changeTipoCuenta(e) {
    this.TipoDeCuenta.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeTipoBanco(e) {
    this.Bancos.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeTipoPais(e) {
    this.Pais.setValue(e.target.value, {
      onlySelf: true
    })
  }
  onSaveForm():void {
    
  }
}



