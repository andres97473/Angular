import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
  ],
  exports: [
    MatSliderModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
  ],
})
export class MaterialModule {}
