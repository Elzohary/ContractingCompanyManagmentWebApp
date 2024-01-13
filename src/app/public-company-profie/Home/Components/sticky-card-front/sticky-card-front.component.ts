import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { StickyCard } from 'src/app/public-company-profie/Models/sticky-card';
import { FocusStickyCardsService } from 'src/app/public-company-profie/Services/focus-sticky-cards.service';

@Component({
  selector: 'app-sticky-card-front',
  templateUrl: './sticky-card-front.component.html',
  styleUrls: ['./sticky-card-front.component.scss']
})
export class StickyCardFrontComponent implements OnInit {
  @Input() cardData? : StickyCard;
  sharedData$!: Observable<boolean>;

  constructor(public isInViewService : FocusStickyCardsService) {}

  ngOnInit(): void {
    this.sharedData$ = this.isInViewService.sharedData$;
  }
  
}
