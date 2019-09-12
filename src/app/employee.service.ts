// business.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://nodeangular-env.zqdvi2ntdr.us-east-2.elasticbeanstalk.com/employees';

  constructor(private http: HttpClient) { }

  addBusiness(employee_name, job_position, payrate) {
    const obj = {
      employee_name: employee_name,
      job_position: job_position,
      payrate: payrate
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateBusiness(employee_name, job_position, payrate, id) {
    const obj = {
      employee_name: employee_name,
      job_position: job_position,
      payrate: payrate
      };
      return this.http.post(`${this.uri}/update/${id}`, obj);
  }

  deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
