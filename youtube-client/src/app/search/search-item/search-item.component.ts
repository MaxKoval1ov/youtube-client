import { Component, Input } from '@angular/core';

type ResultItem = {
  text: string;
  image: string;
};
@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input()
    item!: ResultItem;
}
