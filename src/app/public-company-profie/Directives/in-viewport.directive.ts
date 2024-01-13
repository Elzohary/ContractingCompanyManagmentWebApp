import { Directive, ElementRef, NgZone, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInViewport]'
})
export class InViewportDirective {
  private observer: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2, private ngZone: NgZone) {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.handleIntersection();
        }
      });
    });
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // The element has entered the viewport
            this.handleIntersection();
          }
        });
      });

      this.observer.observe(this.el.nativeElement);
    });
  }

  private handleIntersection() {
    // Add your logic or trigger events here
    const sectionName = this.el.nativeElement.dataset.section;
    console.log(`Section ${sectionName} has entered the viewport.`);
    console.log(10);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
