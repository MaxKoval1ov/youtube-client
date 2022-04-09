import { Component, Input } from '@angular/core';
import { ResultItem } from '../../models/item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  isLiked = false;

  @Input()
    item!: ResultItem;

  toggleLike(): void {
    this.isLiked = !this.isLiked;
    this.item.likes++;
  }
}
