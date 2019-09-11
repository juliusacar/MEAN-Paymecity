import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import Employee from '../Employee';

@Component({
  selector: 'app-employee-get',
  templateUrl: './employee-get.component.html',
  styleUrls: ['./employee-get.component.css']
})
export class EmployeeGetComponent implements OnInit {

  businesses: Employee[];

  constructor(private bs: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Employee[]) => {
        this.businesses = data;
    });
  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
