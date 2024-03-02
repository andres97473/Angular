import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiBlockItemComponent } from './components/ui-block-item/ui-block-item.component';
import { UiFilterComponent } from './components/ui-filter/ui-filter.component';
import { UiItemComponent } from './components/ui-item/ui-item.component';
import { UiSearchComponent } from './components/ui-search/ui-search.component';

import { FormsModule } from '@angular/forms';
import { ShowCasePageComponent } from './page/show-case-page/show-case-page.component';

@NgModule({
  declarations: [
    UiBlockItemComponent,
    UiFilterComponent,
    UiItemComponent,
    UiSearchComponent,
    ShowCasePageComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class ShowCaseModule {}
