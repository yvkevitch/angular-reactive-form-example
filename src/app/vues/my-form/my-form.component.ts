import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.less']
})
export class MyFormComponent {

  fg: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mail: ['',[Validators.required,Validators.email]]
    });


  }

  get fc() { return this.fg.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.fg.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.fg.value, null, 4));
  }

  onReset() {
    this.submitted = false;
  }
}
