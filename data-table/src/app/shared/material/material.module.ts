import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatTableModule, MatPaginatorModule],
  exports: [MatCardModule, MatTableModule, MatPaginatorModule],
})
export class MaterialModule {}
