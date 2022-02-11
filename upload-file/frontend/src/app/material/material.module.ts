import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatTreeModule, MatExpansionModule],
  exports: [MatToolbarModule, MatTreeModule, MatExpansionModule],
})
export class MaterialModule {}
