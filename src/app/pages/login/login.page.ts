import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userLogin: any;

  constructor() { }

  ngOnInit() {


  }

}
