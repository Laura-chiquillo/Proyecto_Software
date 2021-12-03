import { DataSource } from '@angular/cdk/collections';
import { Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
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
  
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartLabels: Label[] = ['Femenino', 'Masculino', 'Otros'];
  doughnutChartData: MultiDataSet = [
  
  ];
  
  

  constructor(public service: ListaUsiarioService) {
  
  }
  genero: string[] = ['genero'];
  dataSource = new MatTableDataSource<any>();
  
  ngOnInit(): void {
    this.service.loginAut().subscribe(data => {
      console.log(data)
      const Label = [0,0,0]
      data.forEach(i =>{
        if(i.sexo_emp == "F"){
          Label [0] ++
        }

        if(i.sexo_emp == "M"){
          Label [1] ++
        }else Label[2]++

      })

      this.dataSource = new MatTableDataSource(Label);
      this.datos = Label;
    })

    
  }

}

