import { Component, OnInit } from '@angular/core';
import { Movimiento } from 'src/app/entity/Movimiento';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovimientoService } from 'src/app/service/MovimientoService';

@Component({
  selector: 'app-ver-movimientos',
  templateUrl: './ver-movimientos.component.html',
  styleUrls: ['./ver-movimientos.component.css']
})
export class VerMovimientosComponent implements OnInit {
  public VerMovimientos: FormGroup;

  displayedColumns: string[] = ['id_movim', 'fecha_movim',
    'num_pago', 'valor_concepto', 'cantidad_movim',
    'total_movim', 'notas_info', 'notas_concepto', 'id_benef', 'id_pago',
    'id_concepto', 'id_cuenta', 'id_impuesto', 'id_retencion', 'id_tipo_mov', 'id_emp'];

  dataSource = new MatTableDataSource<any>();

  constructor(private router: Router, private serviceMov: MovimientoService) {
    this.VerMovimientos = this.createForm();
  }

  createForm(): FormGroup {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.serviceMov.getlistMovimientos().subscribe((movimientos) => {
      this.dataSource = new MatTableDataSource(movimientos);
    });
  }

onSaveForm(): void { }

}
