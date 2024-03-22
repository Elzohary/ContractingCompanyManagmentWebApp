import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../ReusableComponents/breadcrumb/breadcrumb.component';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { NgExpansionPanelComponent } from '../../ReusableComponents/ng-expansion-panel/ng-expansion-panel.component';
import { NgCardComponent } from '../../ReusableComponents/ng-card/ng-card.component';
import { BarChartComponent } from '../../ReusableComponents/bar-chart/bar-chart.component';
import { WoStatusService } from '../../Services/wo-status.service';
import { StatusModel } from '../../Models/status-model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wo',
  standalone: true,
  imports: [
    RouterModule,
    BreadcrumbComponent,
    NgExpansionPanelComponent,
    NgCardComponent,
    BarChartComponent,
    MatExpansionModule,
    MatDatepickerModule,
    MatCardModule,
    MatButton,
    MatDatepicker,
    MatFormFieldModule,
  ],
  templateUrl: './wo.component.html',
  styleUrl: './wo.component.scss'
})
export class WOComponent implements OnChanges, OnInit{
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  statusList!: StatusModel[];

  constructor(private statusService : WoStatusService) {}

  ngOnInit(): void {
    this.getAllStatus();
  }


  ngOnChanges(changes: SimpleChanges): void {
  }

  getAllStatus() {
    this.statusService.getAllStatuses().subscribe(
      statuses => {
        console.log(statuses);
        this.statusList = statuses;
      }
    );

  }
}
