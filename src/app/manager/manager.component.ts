import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  template: `
    <mat-toolbar color="accent">
      <a mat-button routerLink="home" routerLinkActive="active-link">
        Manager's Dashboard
      </a>
      <a mat-button routerLink="users" routerLinkActive="active-link">
        User Management
      </a>
      <a mat-button routerLink="recipts" routerLinkActive="active-link">
        Receipt Lookup
      </a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .active-link {
        font-weight: bold;
        border-bottom: 2px solid #005005;
      }
    `,
  ],
})
export class ManagerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
