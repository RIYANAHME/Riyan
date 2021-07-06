
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:ProductlistService,
    private router:Router) { }
    'isloding':boolean = false;

    user:any;
  
    ngOnInit(): void {
      this.user = new FormGroup({
        username:new FormControl(),
        password:new FormControl()
      })
    }
  
    login()
    {
       this.isloding = true;
       this.userService.login(this.user.value).subscribe(res=>{
        console.log(res.body.username);
        localStorage.setItem('userItem',res.body.username);
        localStorage.setItem('email',res.body.email);
        localStorage.setItem('phone',res.body.phone);
        localStorage.setItem('userType',res.body.userType);
        localStorage.setItem('token',res.body.token);
        this.router.navigate(['/dash-board']);
        
      })
    }
    
  
  }
  
