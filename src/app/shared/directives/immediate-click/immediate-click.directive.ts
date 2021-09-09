import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/platform-detector.service';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[immediateClick]'
})
// tslint:disable-next-line: class-name
export class immediateClickDirective implements OnInit {

  constructor(
      private element: ElementRef<any>,
      private platFormDetector: PlatformDetectorService) {}

      ngOnInit(): void {
          // tslint:disable-next-line: no-unused-expression
          this.platFormDetector.isPlatformBrowser &&
          this.element.nativeElement.click();

  }
// tslint:disable-next-line: no-unused-expression
}
