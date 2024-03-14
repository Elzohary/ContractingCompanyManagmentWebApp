import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgExpansionPanelComponent } from '../ng-expansion-panel/ng-expansion-panel.component';

@Component({
  selector: 'app-ng-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgExpansionPanelComponent
  ],
  templateUrl: './ng-card.component.html',
  styleUrl: './ng-card.component.scss'
})
export class NgCardComponent {

}
