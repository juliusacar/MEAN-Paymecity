import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import Employee from '../Employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: Employee[];

  constructor(private bs: EmployeeService) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Employee[]) => {
        this.employees = data;
    });
  }

}
