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
      url: '/assets/icons/kids.png',
      description: ''
    },
    {
      name: 'Family psychologist',
      url: '/assets/icons/child_psy.png',
      description: ''
    },
    {
      name: 'Psychologist sexologist',
      url: '/assets/icons/love.png',
      description: ''
    },
    {
      name: 'Psychotherapist',
      url: '/assets/icons/psy02.png',
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
