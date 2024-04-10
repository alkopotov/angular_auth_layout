import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './reset.component.html',
  // styleUrl: './reset.component.css'
})
export class ResetComponent implements OnInit{
  public headerText: string = 'Reset access';

  public dataForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email, Validators.pattern(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/)]],
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
