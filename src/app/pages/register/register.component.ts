import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  // styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  public headerText: string = 'Now create your account';

  public dataForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      last_name: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/)]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/)]],
      repeatPassword: ['', [Validators.required]],
    }, 
    { validators: [this.passwordsMatch] });
  }

  public passwordsMatch(group: FormGroup) {
    const password = group.get('password')?.value;
    const repeatPassword = group.get('repeatPassword')?.value;
    return password === repeatPassword ? null : { passwordsNotMatch: true };
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