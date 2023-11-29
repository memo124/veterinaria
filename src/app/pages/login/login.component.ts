import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit{
  public mostrarPassword: boolean = false;
  public loginForm: FormGroup;
  constructor(private router:Router,private route: ActivatedRoute
    ,private loginS:LoginService
    ){
    this.loginForm = new FormGroup({
      correo : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    })
  }

  ngOnInit(){

  }
  async ingresar(form:object){
    this.router.navigate(['inicio'])

    this.loginS.login(form).subscribe({
      next:data=>{
        let dataResponse:any = data;
        if (dataResponse.status === "ok") {
          localStorage.setItem("token",dataResponse.result.token);
          // this.router.navigate(['/dashboard/default'], { relativeTo: this.route.parent });
          this.router.navigate(['inicio'])
        } else {
          Swal.fire({
            title: "error",
            text: "mensaje",
            icon: "warning"
          })
        }
      },
      error: err=>{
        console.error(err);

      }

      });
  }
}
