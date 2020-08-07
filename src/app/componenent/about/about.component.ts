import { NgxWso2AuthenticationService } from 'ngx-wso2-authentication';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // constructor(public router: Router) {}

  constructor(public router: Router, public authService: NgxWso2AuthenticationService) { }

  ngOnInit() {
  }


  // public login(){
  //   localStorage.setItem('currentPage', this.router.url );
  //   this.authService.redirectToLoginPage();
  // }

  // public logout(){
  //   this.authService.logout();
  // }

}
