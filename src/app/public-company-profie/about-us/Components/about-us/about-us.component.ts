import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  isSticky: boolean = false;
  isMenuOpen: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY >= 100;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
