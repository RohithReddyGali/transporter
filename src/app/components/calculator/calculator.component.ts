import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  items!: MenuItem[];
  activeIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Select a Route',
        command: (event: any) => {
          this.activeIndex = 0;
        },
      },
      {
        label: 'Price',
        command: (event: any) => {
          this.activeIndex = 1;
        },
      },
      {
        label: 'Confirmation',
        command: (event: any) => {
          this.activeIndex = 2;
        },
      },
      {
        label: 'Finish',
        command: (event: any) => {
          this.activeIndex = 3;
        },
      },
    ];
  }
}
