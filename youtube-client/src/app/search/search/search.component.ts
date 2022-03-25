import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  items = [
    {
      text: 'text1',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      text: 'text2',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      text: 'text3',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      text: 'text4',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      text: 'text5',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
  ];
}
