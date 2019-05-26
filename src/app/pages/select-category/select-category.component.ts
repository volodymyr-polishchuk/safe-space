import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {

  categories: Category[] = [
    {
      name: 'Child psychologist',
      url: 'https://cdn4.iconfinder.com/data/icons/car-services-36-icons/110/Car_servicess-19-512.png',
      description: ''
    },
    {
      name: 'Family psychologist',
      url: '',
      description: ''
    },
    {
      name: 'Psychiatrist',
      url: '/assets/icons/psychotherapy.png',
      description: ''
    },
    {
      name: 'Psychotherapist',
      url: '',
      description: ''
    },
  ];

  selectedCategory: Category[] = [];

  constructor() { }

  ngOnInit() {

  }

  toggleCategory(category: Category): void {
    if (this.selectedCategory.includes(category)) {
      this.selectedCategory = this.selectedCategory.filter(value => value !== category);
    } else {
      this.selectedCategory.push(category);
    }
  }

  isCategorySelected(category: Category): boolean {
    return this.selectedCategory.includes(category);
  }
}
