import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
  ],
  exports: [
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
  ],
})
export class MaterialModule {}
