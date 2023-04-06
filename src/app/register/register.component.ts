import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  formdata = { fname: "",lname: "", email: "",gender:"" };
  submit = false;
  constructor() {

  }
  ngOnInit(): void {

  }
  onSubmit(lgform: NgForm) {
    console.log(this.formdata);
  }
}