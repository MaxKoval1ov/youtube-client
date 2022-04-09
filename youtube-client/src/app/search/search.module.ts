import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';
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
