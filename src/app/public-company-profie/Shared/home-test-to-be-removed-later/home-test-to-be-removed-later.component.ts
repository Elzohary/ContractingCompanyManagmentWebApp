import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-test-to-be-removed-later',
  templateUrl: './home-test-to-be-removed-later.component.html',
  styleUrls: ['./home-test-to-be-removed-later.component.scss']
})
export class HomeTestToBeRemovedLaterComponent {

  scrollPosition: number = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.scrollPosition = window.scrollY;
  }


}
