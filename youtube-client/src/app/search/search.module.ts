import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [SearchItemComponent, SearchFormComponent, SearchComponent],
  imports: [CommonModule, MaterialModuleModule],
  exports: [SearchComponent],
})
export class SearchModule {}
