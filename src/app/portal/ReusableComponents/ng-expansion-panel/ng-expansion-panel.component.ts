import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-ng-expansion-panel',
  standalone: true,
  imports: [
    MatExpansionModule
  ],
  templateUrl: './ng-expansion-panel.component.html',
  styleUrl: './ng-expansion-panel.component.scss'
})
export class NgExpansionPanelComponent {

}
