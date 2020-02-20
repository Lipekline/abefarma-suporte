import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, ModalController, LoadingController } from '@ionic/angular';
import { take } from "rxjs/operators";
import { async } from 'q';
import { TelaLoginComponent } from './tela-login/tela-login.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.4,
    speed: 400
  };

  slide2Opts = {
    initialSlide: 0,
    slidesPerView: 1.2,
    speed: 1000
  };

  viewBag: any;

  constructor(public httpClient: HttpClient, public loadingController: LoadingController, public alertController: AlertController, public modalController: ModalController) { }



  async ngOnInit() {

    await this.carregarChamados();

  }

  async carregarChamados() {
    const loading = await this.loadingController.create({
      message: 'Carregando Chamados...'
    });
    await loading.present();
    this.httpClient.get("http://sites.consulfarma.com/abefarma-suporte/api/atendimentos").pipe(take(1)).subscribe((data: any) => {
      console.log(data);
      this.viewBag = data;
    }, (err: any) => {
      alert('deu erro');
    }, () => {
      loading.dismiss();
    });
  }

  async finalizarChamado(atendimentoId) {
    const loading = await this.loadingController.create({
      message: 'Finalizando Chamado...'
    });
    await loading.present();


    this.httpClient.put("http://sites.consulfarma.com/abefarma-suporte/api/atendimentos/" + atendimentoId, {}).pipe(take(1)).subscribe(async (data: any) => {
      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'Chamado  ' + atendimentoId + ' Finalizado',
        buttons: [{
          text: "Ok",
          handler: async () => {
            await this.carregarChamados();
          }
        }]
      });

      await alert.present();
    }, (err: any) => {
      alert('deu erro');
    }, () => {
      loading.dismiss();
    });


  }

  async telaLogin() {

    const modal = await this.modalController.create({
      component: TelaLoginComponent,
    });
    return await modal.present();
  }
}



