import { Component } from '@angular/core';
import { ResultItem } from '../../models/item.model';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  isDesc = true;

  sortingBy = 'likes';

  items: ResultItem[] = [
    {
      text: 'text1',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      views:100,
      likes:100,
      dislikes:10,
      comments:50,

    },
    {
      text: 'text2',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      views:10,
      likes:9,
      dislikes:4,
      comments:52,
    },
    {
      text: 'text3',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      views:1,
      likes:5,
      dislikes:3,
      comments:53,
    },
    {
      text: 'text4',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      views:2,
      likes:4,
      dislikes:2,
      comments:54,
    },
    {
      text: 'text5',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      views:1000,
      likes:100,
      dislikes:1,
      comments:55,
    },
  ];

  changeOrder(value:string){
    this.sortingBy = value;
  }
}
