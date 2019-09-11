// gst-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;
  id: String;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: EmployeeService,
    private fb: FormBuilder) {
      this.createForm();
 }


 ngOnInit() {
  this.route.params.subscribe(params => {
    this.bs.editBusiness(params['id']).subscribe(res => {
      this.business = res;
      this.id = params.id;
    });
  });
}

  createForm() {
    this.angForm = this.fb.group({
      employee_name: ['', Validators.required ],
      job_position: ['', Validators.required ],
      payrate: ['', Validators.required ]
      });
    }

    updateBusiness(employee_name, job_position, payrate) {
      this.bs.updateBusiness(employee_name, job_position, payrate, this.id).subscribe(() => {
        this.router.navigate(['employees']);
        console.log('Done')
      });
   }
 }
