import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { StickyCard } from '../Models/sticky-card';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  cardDataArray : StickyCard[] = [
    { cardNumber: 1, Title: 'Card 1', description: 'Description for Card 1', img:'../../../../../assets/card1.jpg' },
    { cardNumber: 2, Title: 'Tani Wa7ed', description: 'Description for Card 2', img:'../../../../../assets/card2.jpg' },
  ]

  ngOnInit(): void {
  }

  
}

