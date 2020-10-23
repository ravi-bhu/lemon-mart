import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: `
    <mat-toolbar color="accent">
      <button mat-button routerLink="home" routerLinkActive="active-link">
        Inventory Dashboard
      </button>
      <button
        mat-button
        routerLink="stock-entry"
        routerLinkActive="active-link"
      >
        Stock Entry
      </button>
      <button mat-button routerLink="products" routerLinkActive="active-link">
        Products
      </button>
      <button mat-button routerLink="categories" routerLinkActive="active-link">
        Categories
      </button>
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
export class InventoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
