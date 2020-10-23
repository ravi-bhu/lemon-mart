import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule],
  exports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule],
})
export class MaterialModule {}
