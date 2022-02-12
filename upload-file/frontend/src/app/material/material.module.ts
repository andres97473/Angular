import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTreeModule,
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [
    MatToolbarModule,
    MatTreeModule,
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
  ],
})
export class MaterialModule {}
