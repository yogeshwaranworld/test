import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employee:any[]=[
    {  
      "fname": "ram",
      "lname": "krish",
      "email": "ram@gmail.com",
      "password": "q123",
      "gender": "male"
   },
   {
      
      "fname": "karthik",
      "lname": "keyan",
      "email": "karthik@gmail.com",
      "password": "w123",
      "gender": "male"
   },
   {
      
      "fname": "jinan",
      "lname": "ram",
      "email": "jinan@gmail.com",
      "password": "e123",
      "gender": "male"
   },
   {
    
      "fname": "bhavin",
      "lname": "krish",
      "email": "bhavin@gmail.com",
      "password": "r123",
      "gender": "male"
   },
   {
    
    "fname": "aadvik",
    "lname": "ram",
    "email": "aadvik@gmail.com",
    "password": "t123",
    "gender": "male"
 },
 {
    
    "fname": "navin",
    "lname": "krish",
    "email": "navin@gmail.com",
    "password": "y123",
    "gender": "male"
 }
  ]
}
