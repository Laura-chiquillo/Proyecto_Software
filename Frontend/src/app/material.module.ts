import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


import {MatTableDataSource} from '@angular/material/table'
//import {MatTableDataSource} from '@angular/material/table';

const myModule = [MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule, MatTableModule,
  MatPaginatorModule]


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, myModule],
  exports: [myModule]
})

export class MaterialModule { }
