import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  employees: any;
  email: String = '';
  password: String = '';
  constructor(private http: HttpClient) { }
  async ngOnInit() {
    try {
      this.employees = await this.http.get('/assets/employee.json').toPromise();
      console.log(this.employees);
    } catch (error) {
      console.log(error);
    }

  }
  validate() {
   
   
    let isValid = false;
    this.employees.forEach((employee: any) => {
      if (employee.email === this.email && employee.password === this.password) {
        isValid = true;
      }
    });
    if (isValid) {
      alert('valid username and password')
    }
    else {
      alert('Invalid username and password')
    }
    return false;
  }
}

