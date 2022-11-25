import { Component, OnInit, EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public  ng! : FormGroup
dropdownList: any;
  dropdownSettings: any;
  public multi!: FormGroup;
  initForm: any;
  formBuilder: any;
  
  
  // get email(){
  //   return this.ng.get('name')
  //  }
  //  get password(){
  //   return this.ng.get('password')
  //  }

  

  constructor(private router:Router, private fb : FormBuilder ,public dialog: MatDialog){ }

  // onOpenDialogClick() {
  //   this.dialog.open(PopupComponent);
  // }
  ngOnInit(): void {
   this.ng= this.fb.group({
      name : new FormControl ('', Validators.required),
      email : new FormControl ('',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]),
      date: new FormControl ('', Validators.required),
      gen: new FormControl (''),
      mobile : new FormControl ('',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]),
      state : new FormControl (''),  
      dist : new FormControl (''),
      password : new FormControl ('',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]), 
      address : new FormControl ('', Validators.required),
      
  
      Language: [this.initForm,[Validators.required]],
    })
    // this.multi = this.fb.group({
    //   language: [this.initForm]
    // })
    // this.initForm();
    console.log(this.dropdownList);
    this.dropdownList = this.getData();
    console.log(this.dropdownList);
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All'
    };
  }
  // getData(): any {
  //   throw new Error('Method not implemented.');
  // }
  displayStyle="none";
 
  login(){
    if(this.ng.invalid){
      this.ng.markAllAsTouched();
      return
    }
    else{
      localStorage.setItem('registerDetails',JSON.stringify(this.ng.value))
     this.displayStyle="block";
      // 
      // this.dialog.open(PopupComponent);
    
    }
    
    console.log(this.ng)
  }
  closepop(){
  this.displayStyle = "none";
  }

  getData() : Array<any>{
    return [
      { item_id: 1, item_text: 'Tamil', group : 'F' },
      { item_id: 2, item_text: 'English', group : 'F' },
      { item_id: 3, item_text: 'Hindi', group : 'V' },
      { item_id: 4, item_text: 'Malayalam', group : 'V' },
      { item_id: 5, item_text: 'Telugu', group : 'V' }
    ];
  }
  public onItemSelect(item: any) {
    console.log(item);
    
  }
 
}

  


