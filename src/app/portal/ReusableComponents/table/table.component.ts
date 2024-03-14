import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { workOrdersTableService } from '../../Services/work-orders.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  displayedColumns: string[] = ['wo-id', 'wo-location', 'wo-type', 'wo-status'];
  dataSource = new MatTableDataSource(this.workOrders.getAllWorkOrders());

  constructor(private workOrders : workOrdersTableService) {}

}
