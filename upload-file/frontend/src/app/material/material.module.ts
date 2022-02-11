import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTreeModule,
    MatExpansionModule,
    MatSelectModule,
  ],
  exports: [
    MatToolbarModule,
    MatTreeModule,
    MatExpansionModule,
    MatSelectModule,
  ],
})
export class MaterialModule {}
