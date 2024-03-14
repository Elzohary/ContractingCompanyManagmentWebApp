import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../ReusableComponents/breadcrumb/breadcrumb.component';
import {MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatCalendar, MatDatepicker, MatDatepickerModule, matDatepickerAnimations} from '@angular/material/datepicker';
import {MatCardActions, MatCardModule} from '@angular/material/card';
import { MatActionList } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { DateAdapter } from '@angular/material/core';
import { NgExpansionPanelComponent } from '../../ReusableComponents/ng-expansion-panel/ng-expansion-panel.component';
import { NgCardComponent } from '../../ReusableComponents/ng-card/ng-card.component';
import { TableComponent } from '../../ReusableComponents/table/table.component';
import { BarChartComponent } from '../../ReusableComponents/bar-chart/bar-chart.component';

@Component({
  selector: 'app-wo',
  standalone: true,
  imports: [
    RouterModule,
    BreadcrumbComponent,
    NgExpansionPanelComponent,
    NgCardComponent,
    TableComponent,
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
export class WOComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
}
