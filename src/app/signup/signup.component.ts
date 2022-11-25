
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public fg! : FormGroup
  

  loginDetails: any;
  // dropdownList: any;
  // dropdownSettings: any;
  // public multi!: FormGroup;
  // initForm: any;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  
  // get email(){
  //   return this.fg.get('email')
  //  }
  //  get pwd(){
  //   return this.fg.get('password')
  //  }

//  fg = new FormGroup({
//   email: new FormControl('',[ Validators.required]),
//   password: new FormControl('',[Validators.required])
// })


  
  ngOnInit(): void {
    
      this.fg = this.formBuilder.group({
        uemail : ['',[Validators.required,  Validators.pattern("[a-zA-Z0-9]*@gmail.com")]] ,
        upassword : ['',[Validators.required, ,Validators.pattern("[a-zA-z@_]{6,}")]]
      })
    }
    displayStyle="none";

    signup(){
      if(this.fg.invalid){
        this.fg.markAllAsTouched();
        return
      }
      else{
        // this.router.navigateByUrl("/navbar")
        this.loginDetails=JSON.parse(localStorage.getItem('registerDetails') as string);
        if(this.loginDetails.email == this.fg.value.uemail && this.loginDetails.password == this.fg.value.upassword)
        {
          // alert("LoggedIn successfully!........")
          this.displayStyle="block";
          localStorage.setItem("token",JSON.stringify(this.fg.value))
        }
        else{
          alert("Invalid details.......")
          this.router.navigateByUrl("")
        }
      }
    }
    closepop(){
      this.displayStyle="none";
    }
  }





































    //   signup(){
    //     if(this.fg.invalid){
    //       this.fg.markAllAsTouched();
    //       return
    //     }
    //     else
    //     {
          
    //       this.router.navigateByUrl("/view")
    //     this.loginDetails=JSON.parse(localStorage.getItem('registerDetails') as string);
    //     if(this.loginDetails.email == this.fg.value.uemail  && this.loginDetails.password  == this.fg.value.upassword  )
    //   {
    //     alert("loggedIn successful!.....")
    //     localStorage.setItem("token",JSON.stringify(this.fg.value))
    //   }
    //   else{
    //     alert("Invalid details....")
    //     this.router.navigateByUrl("")
    //   }
    // }
  
      
    // }
    // }  


 
 
    
  









  
     
   
    
    
    
     
    
  
  


function signup() {
  throw new Error('Function not implemented.');
}

