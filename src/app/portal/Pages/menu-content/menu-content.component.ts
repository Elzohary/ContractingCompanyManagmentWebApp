import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import { projectMenuItems } from '../../Shared/menu-items';
import {MatTabsModule} from '@angular/material/tabs';



@Component({
  selector: 'app-menu-content',
  standalone: true,
  imports: [
    RouterModule,
    RouterLinkActive,
    MatList,
    MatListItem,
    MatIcon,
    MatDivider,
    DatePipe,
    MatChipsModule,
    MatTabsModule,
    
  ],
  templateUrl: './menu-content.component.html',
  styleUrl: './menu-content.component.scss'
})
export class MenuContentComponent {

  projectMenu = projectMenuItems;

}
