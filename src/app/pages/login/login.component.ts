import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  // styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{


  public headerText: string = 'Nice to see you again';

  public dataForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email, Validators.pattern(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/)]],
      password: ['', [Validators.required]],
      },
    );
  }
  
  public onSubmit() {
    if (this.dataForm.invalid) {
       console.log('Form is invalid');
       ;
    } else {
      console.log(this.dataForm.value);
      this.dataForm.reset();
    }
  }


}
