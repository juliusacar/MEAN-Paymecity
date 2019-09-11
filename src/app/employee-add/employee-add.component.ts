import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employeeAdded: Boolean = false;
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: EmployeeService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      employee_name: ['', Validators.required ],
      job_position: ['', Validators.required ],
      payrate: ['', Validators.required ]
    });
  }

  addBusiness(employee_name, job_position, payrate) {
    this.bs.addBusiness(employee_name, job_position, payrate);
    this.angForm.reset();
    this.employeeAdded = true;
  }



  ngOnInit() {
  }

}
