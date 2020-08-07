import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxWso2AuthenticationService } from 'ngx-wso2-authentication';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public authService: NgxWso2AuthenticationService) { }


  ngOnInit() {
  }

  // ngOnDestroy() {
  //   localStorage.removeItem('currentPage');
  // }

  // public login(){
  //   localStorage.setItem('currentPage', this.router.url );
  //   this.authService.redirectToLoginPage();
  // }

  // public logout(){
  //   this.authService.logout();
  // }

}
