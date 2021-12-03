import { DataSource } from '@angular/cdk/collections';
import { Component, ɵɵclassMapInterpolate5} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ListaUsuario } from 'src/app/entity/ListaUsuario';
import { Usuario } from 'src/app/entity/Usuario';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';
@Component({
  selector: 'app-grafico1',
  templateUrl: './grafico1.component.html',
  styleUrls: ['./grafico1.component.css']
})
export class Grafico1Component {
  datos: any;
  usuario: Usuario = new Usuario();
  masculino: number;
  femenino: number;
  otros: number;
  
  constructor(public service: ListaUsiarioService) {
    this.service.generoM().subscribe(impuesto => {
      this.masculino = impuesto;
    })
    this.service.generoF().subscribe(impuesto => {
      this.femenino = impuesto;
    })
    this.service.generoOtro().subscribe(impuesto => {
      this.otros = impuesto;
    })
  }
  genero: string[] = ['genero'];
  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {

  }
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartLabels: Label[] = ['Femenino', 'Masculino', 'Otros'];
  doughnutChartData: MultiDataSet = [
    [Number(this.service.generoF.length),
     Number(this.service.generoM.length),
     Number(this.service.generoOtro.length)]
  ];

}

