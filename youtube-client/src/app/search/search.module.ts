import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';
import { OrderByPipe } from './pipes/sort-pipe.pipe';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchFormComponent,
    SearchComponent,
    SortComponent,
    OrderByPipe,
  ],
  imports: [CommonModule, MaterialModuleModule],
  exports: [SearchComponent],
})
export class SearchModule {}
