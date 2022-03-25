import { Component } from '@angular/core';
import { ResultItem } from '../models/item.model';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  items: ResultItem[] = [
    {
      text: 'text1',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      views:1000,
      likes:100,
      dislikes:10,
      comments:5,

    },
    {
      text: 'text2',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      views:1000,
      likes:100,
      dislikes:10,
      comments:5,
    },
    {
      text: 'text3',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      views:1000,
      likes:100,
      dislikes:10,
      comments:5,
    },
    {
      text: 'text4',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      views:1000,
      likes:100,
      dislikes:10,
      comments:5,
    },
    {
      text: 'text5',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      views:1000,
      likes:100,
      dislikes:10,
      comments:5,
    },
  ];
}
