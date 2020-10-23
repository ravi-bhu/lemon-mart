import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lemon-mart';
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'lemon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg')
    );
  }
}
