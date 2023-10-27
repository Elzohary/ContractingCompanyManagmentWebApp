import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private isSideNavOpen = new BehaviorSubject<boolean>(false);

  toggleSideNav() {
    this.isSideNavOpen.next(!this.isSideNavOpen.value);
  }

  getIsSideNavValue() {
    return this.isSideNavOpen.value;
  }

  setIsSideNavFalse() {
    this.isSideNavOpen.next(false);
  }

  getSideNavState() {
    return this.isSideNavOpen.asObservable();
  }
}
