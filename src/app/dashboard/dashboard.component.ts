import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  viewDetails: any;
  x:any;

  constructor() { }

  ngOnInit(): void {
    this.viewDetails=JSON.parse(localStorage.getItem('token') as string);
  } 
  }


