import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: false,
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.scss'
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Devin", "Cooper", "Devin@email.com", 50000),
    new SalesPerson("John", "Doe", "John@email.com", 40000),
    new SalesPerson("Claire", "Murphy", "Claire@email.com", 90000),
    new SalesPerson("Mai", "Truong", "Mai@email.com", 60000),
  ];

  constructor() {}
  
  ngOnInit() {}

}
