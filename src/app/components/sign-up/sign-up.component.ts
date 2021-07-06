
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService:ProductlistService,private router:Router) { }

  user:any;
  'isloding':boolean = false;

  ngOnInit(): void {
    this.user = new FormGroup({
      username:new FormControl(),
      password:new FormControl(),
      phone:new FormControl(),
      email:new FormControl(),
      userType:new FormControl() 
    })
  }

  signup()
  {
    this.isloding = true;
    console.log(this.user.value);
    this.userService.signup(this.user.value).subscribe(res=>{
      this.router.navigate(['/login'])
      console.log(res);
    })
  }

  
}
