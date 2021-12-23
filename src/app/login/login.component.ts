import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking partner"
  accno="account number please"
  acno=""
  pwd=""
  users:any={
    1000:{acno:1000,uname:"Neer",password:"1000",balance:5000},
    1001:{acno:1001,uname:"rohitha",password:"1001",balance:5000}
    
  }

  constructor() { }

  ngOnInit(): void {
  }
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }
  pwdChange(event:any){
    this.pwd=event.target.value
    console.log(this.pwd);
    
  }


  // login(){
  //   var acno = this.acno
  //   var password=this.pwd
  //   var database=this.users
  //   if (acno in database){
  //     if(password == database[acno]["password"]){
  //       alert("login successfully completed")
  //     }
  //     else{
  //       alert("incorrect pwd")
  //     }
  //   }
  //   else{
  //     alert("invalid")
  //   }
  //   alert("login clicked")
  // }
  login(a:any,p:any){
    console.log(a);
    
    var acno = a.value
    var password=p.value
    let database=this.users
    if (acno in database){
      if(password == database[acno]["password"]){
        alert("login successfully completed")
      }
      else{
        alert("incorrect pwd")
      }
    }
    else{
      alert("invalid")
    }
    // alert("login clicked")
  }
}
