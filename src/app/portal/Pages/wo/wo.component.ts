import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../ReusableComponents/breadcrumb/breadcrumb.component';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-wo',
  standalone: true,
  imports: [
    RouterModule,
    BreadcrumbComponent,
    MatExpansionModule,
    MatIcon,
    MatFormField,
    MatLabel,
    MatDatepickerModule
  ],
  templateUrl: './wo.component.html',
  styleUrl: './wo.component.scss'
})
export class WOComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
}
