import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      },
    );
  }
  
  public onSubmit() {
    if (this.dataForm.invalid) {
       console.log('Form is invalid');
       ;
    } else {
    
      this.authService.login(this.dataForm.value)
        .subscribe({
          next: data => this.router.navigate(['posts']),
          error: error => alert("Authorization failed")
        });
      this.dataForm.reset();
    }
  }


}
