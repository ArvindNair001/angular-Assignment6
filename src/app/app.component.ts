import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') signUpForm: NgForm;
  defaultPlan = 'basic';
  user = {
    email: '',
    plan: '',
  };

  submitted_form = false;

  ngOnInit() {
    this.submitted_form = false;
  }

  onSubmit() {
    this.submitted_form = true;
    console.log(this.signUpForm.value);
    this.user.email = this.signUpForm.value.email;
    this.user.plan = this.signUpForm.value.subscriptions;

  }
}
