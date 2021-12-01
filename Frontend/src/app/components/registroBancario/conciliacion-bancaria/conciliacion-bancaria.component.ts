import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Movimiento } from 'src/app/entity/Movimiento';
import { MovimientoService } from 'src/app/service/MovimientoService';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CuentaBancaria } from 'src/app/entity/CuentaBancaria';
import { ListaExtrasService } from 'src/app/service/ListaExtrasService';

@Component({
  selector: 'app-conciliacion-bancaria',
  templateUrl: './conciliacion-bancaria.component.html',
  styleUrls: ['./conciliacion-bancaria.component.css'],
})
export class ConciliacionBancariaComponent implements OnInit {

  public ConciliacionBancaria: FormGroup;
  public panel2: FormGroup;
  public saldo_total: number;
  public valorDiferencia: number = 0;
  public valorIngreso: number = 0;
  public valorGasto: number = 0;
  public valorExtracto: number = 0;
  public valorSaldoFinal: number = 0;
  public listaCuenta: CuentaBancaria[] = [];

  displayedColumns: string[] = [
    'id_movim',
    'fecha_movim',
    'id_tipo_mov',
    'total_movim',
    'acciones'
  ];
  dataSource = new MatTableDataSource<any>();

  constructor(private router: Router, private serviceMov: MovimientoService, private service: ListaExtrasService) {
    this.ConciliacionBancaria = this.createForm();
    this.panel2 = this.createForm2();
  }

  ngOnInit(): void {

    this.panel2.get('ingreso').disable()
    this.panel2.get('gasto').disable()
    this.panel2.get('saldoFinal').disable()

    this.service.getCuenta().subscribe(cuenta => {
      this.listaCuenta = cuenta;
    })

    this.serviceMov.getlistMovimientos().subscribe((movimientos) => {
      this.dataSource = new MatTableDataSource(movimientos);
    });

    this.panel2.get('ingreso').valueChanges.subscribe(data => {
      this.valorSaldoFinal = this.valorIngreso - this.valorGasto;
      this.panel2.get('saldoFinal').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorSaldoFinal).toString())

      this.valorDiferencia = this.valorSaldoFinal - this.valorExtracto;
      this.panel2.get('diferencia').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorDiferencia))

    })

    this.panel2.get('gasto').valueChanges.subscribe(data => {
      this.valorSaldoFinal = this.valorIngreso - this.valorGasto;
      this.panel2.get('saldoFinal').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorSaldoFinal).toString())

      this.valorDiferencia = this.valorSaldoFinal - this.valorExtracto;
      this.panel2.get('diferencia').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorDiferencia))

    })

    this.ConciliacionBancaria.get('SaldoBancario').valueChanges.subscribe(data => {
      this.valorExtracto = data;
      this.valorDiferencia = this.valorSaldoFinal - this.valorExtracto;
      this.panel2.get('diferencia').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorDiferencia))
    })

  }

  get CuentaBancaria() {
    return this.ConciliacionBancaria.get('CuentaBancaria');
  }
  get SaldoBancario() {
    return this.ConciliacionBancaria.get('SaldoBancario');
  }
  get fechaHasta() {
    return this.ConciliacionBancaria.get('fechaHasta');
  }
  get fechaInicial() {
    return this.ConciliacionBancaria.get('fechaInicial');
  }

  get ingreso() {
    return this.panel2.get('ingreso');
  }

  get gasto() {
    return this.panel2.get('gasto');
  }

  get saldoFinal() {
    return this.panel2.get('saldoFinal');
  }

  get diferencia() {
    return this.panel2.get('diferencia');
  }

  createForm() {
    return new FormGroup({
      CuentaBancaria: new FormControl('', [Validators.required]),
      SaldoBancario: new FormControl('', [Validators.required]),
      fechaHasta: new FormControl('', [Validators.required]),
      fechaInicial: new FormControl('', [Validators.required]),
    });
  }

  createForm2() {
    return new FormGroup({
      ingreso: new FormControl(''),
      gasto: new FormControl(''),
      saldoFinal: new FormControl('')
    });
  }

  onSaveForm(): void { }

  tipo(num: number): String {
    if (num == 1) {
      return "Ingreso";
    } else {
      return "Egreso";
    }
  }

  conciliar() {
    alert("bbbbb")
  }

  comprobar(): Boolean {
    if (this.valorDiferencia == 0) {
      return false;
    } else {
      return true;
    }
  }

  conciliarMov(movimiento: Movimiento){
    if(movimiento.id_tipo_mov == '1'){
      this.valorIngreso += Number.parseInt(movimiento.total_movim.toString());
      this.panel2.get('ingreso').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorIngreso))
      this.panel2.get('ingreso').statusChanges
    } else {
      this.valorGasto = this.valorGasto + Number.parseInt(movimiento.total_movim.toString());
      this.panel2.get('gasto').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorGasto))
      this.panel2.get('gasto').statusChanges
    }
  }
}
