import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {CdkTableModule} from '@angular/cdk/table';
import { workOrdersTableService } from '../../Services/work-orders.service';
import { WorkOrdersTableViewModel } from '../../viewModel/work-orders-table';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';

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


export class WorkOrdersComponent implements AfterViewInit{

  displayedColumns: string[] = ['wo-id', 'wo-location', 'wo-type', 'wo-status'];
  dataSource = new MatTableDataSource(this.workOrders.getAllWorkOrders());
  toggleValue = '';
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor (private workOrders : workOrdersTableService) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  all() {
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
  }
}
