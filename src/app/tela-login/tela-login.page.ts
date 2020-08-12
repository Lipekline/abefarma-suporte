import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
})
export class TelaLoginPage implements OnInit {
  public userLogin: User = {};  

  constructor() { }

  ngOnInit() {

    async login(){
       await this.presentLoading();

       try{
         await this.authService.login(this.userLogin)
       } catch (error){
         this.presentToast(error.message);
       } finally{
         this.loading.dismiss();
       }
    }
  }

}
