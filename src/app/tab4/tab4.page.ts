import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, LoadingController } from '@ionic/angular';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { NovoColaboradorComponent } from './novo-colaborador/novo-colaborador.component';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  viewBag: any;
  queryText: any;

  constructor(private alertController: AlertController, public modalController: ModalController, private httpClient: HttpClient, public loadingController: LoadingController) { }

  async ngOnInit() {
    await this.carregarColaboradores();
  }

  async exibirInformacoes(colaborador: any) {

    const modal = await this.modalController.create({
      component: DetalhesComponent,
      componentProps: { colaborador: colaborador }

    });

    await modal.present();

    modal.onDidDismiss().then((data: any) => {
      console.log(data);
      if (data.data.recarregar == true)
        this.carregarColaboradores();
    })

    // let message = "";

    // if (colaborador.nome)
    // message += this.adicionarNovaLinhaMensagem(message, "Nome:" + colaborador.nome);

    //   if (colaborador.usuariowifi)
    //   message += this.adicionarNovaLinhaMensagem(message, "Usuario WIFI:" + colaborador.usuariowifi);

    //   if (colaborador.senha)
    //   message += this.adicionarNovaLinhaMensagem(message, "Senha: " + colaborador.senha);

    // let alert = await this.alertController.create({
    //   header: colaborador.nome,
    //   message: message
    // });

    // await alert.present();

  }
  adicionarNovaLinhaMensagem(mensagem: string, novaLinha: string) {

    if (mensagem.length == 0) {
      return novaLinha;
    }
    else {
      return "<br/>" + novaLinha;
    }

    return mensagem;

  }
  async cadastrarColaborador() {

    const modal = await this.modalController.create({
      component: NovoColaboradorComponent,
    });
    return await modal.present();
  }
  async carregarColaboradores() {
    const loading = await this.loadingController.create({
      message: 'Carregando Colaborador...'
    });
    await loading.present();
    this.httpClient.get("http://sites.consulfarma.com/abefarma-suporte/api/colaboradores").pipe(take(1)).subscribe((data: any) => {
      console.log(data);
      this.viewBag = data;
    }, (err: any) => {
      alert('deu erro');
    }, () => {
      loading.dismiss();
    });
  }

  buscaColaborador(colaborador: any) {

  }
}
