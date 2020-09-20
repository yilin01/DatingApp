import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public authServices: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authServices.login(this.model).subscribe(next => {
      this.alertify.success('logged successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn(){
    return this.authServices.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alertify.message('logout sucessfully');
  }

}
