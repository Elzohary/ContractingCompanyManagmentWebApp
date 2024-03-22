import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {CdkTableModule} from '@angular/cdk/table';
import { workOrdersTableService } from '../../Services/allWoTable.Service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { IWosTable } from '../../Models/iwos-table';
import { Router } from 'express';

@Component({
  selector: 'app-work-orders',
  standalone: true,
  imports: [
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatFormField,
    MatLabel,
    MatButtonToggleModule,
    FormsModule,
    MatInputModule,
    MatFormField,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  templateUrl: './work-orders.component.html',
  styleUrl: './work-orders.component.scss'
})


export class WorkOrdersComponent implements AfterViewInit, OnInit{

  displayedColumns: string[] = ['wo-number', 'wo-address', 'wo-type', 'wo-status', 'wo-progress'];
  dataSource! : MatTableDataSource<IWosTable>;
  toggleValue = '';
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor (private workOrders : workOrdersTableService, private router : Router) {
  }

  ngOnInit(): void {
    this.getAllTableData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllTableData() {
    this.workOrders.getAllTableData().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateToWo(woNumber : string) {
    
  }

  /* all() {
    if(this.toggleValue == 'Completed') {
      this.dataSource.filter = 'Completed';
      console.log(this.toggleValue);
    }
    else if(this.toggleValue == 'all') {
      this.dataSource.filter = '';
    }
    else if(this.toggleValue == 'In Progress') {
      this.dataSource.filter = 'In Progress';
    }
  } */
}
