import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StickyCard } from 'src/app/public-company-profie/Models/sticky-card';
import { FocusStickyCardsService } from 'src/app/public-company-profie/Services/focus-sticky-cards.service';

@Component({
  selector: 'app-sticky-bg',
  templateUrl: './sticky-bg.component.html',
  styleUrls: ['./sticky-bg.component.scss'],
})
export class StickyBGComponent implements OnInit {

  sharedData$!: Observable<boolean>;

  constructor(public isInViewService : FocusStickyCardsService) {}

  ngOnInit(): void {
    this.sharedData$ = this.isInViewService.sharedData$;
  }
}
