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

@Component({
  selector: 'app-conciliacion-bancaria',
  templateUrl: './conciliacion-bancaria.component.html',
  styleUrls: ['./conciliacion-bancaria.component.css'],
})
export class ConciliacionBancariaComponent implements OnInit {
  public ConciliacionBancaria: FormGroup;
  displayedColumns: string[] = [
    'id_movim',
    'fecha_movim',
    'id_tipo_mov',
    'total_movim',
  ];
  dataSource = new MatTableDataSource<any>();

  constructor(private router: Router, private serviceMov: MovimientoService) {
    this.ConciliacionBancaria = this.createForm();
   
  }
  ngOnInit(): void {
    this.serviceMov.getlistMovimientos().subscribe((movimientos) => {
      this.dataSource = new MatTableDataSource(movimientos);
    });
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

  createForm() {
    return new FormGroup({
      CuentaBancaria: new FormControl('', [Validators.required]),
      SaldoBancario: new FormControl('', [Validators.required]),
      fechaHasta: new FormControl('', [Validators.required]),
      fechaInicial: new FormControl('', [Validators.required]),
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
}
