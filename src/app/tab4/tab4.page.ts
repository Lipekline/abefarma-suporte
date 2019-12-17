import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DetalhesComponent } from './detalhes/detalhes.component';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  colaboradoresAbefarma = [
    {
      nome: "Dougleta Jones",
      usuariowifi: "teste",
      senha: "teste"
    }
  ];
  colaboradoresConsulfarma = [
    {
      nome: "Dougleta Jones",
      usuariowifi: "teste",
      senha: "teste"
    },
    {
      nome: "Luizeta Jones",
      usuariowifi: "teste",
      senha: "teste"
    },
    {
      nome: "Dougleta Jones",
      usuariowifi: "teste",
      senha: "teste"
    },
    {
      nome: "Dougleta Jones",
      usuariowifi: "teste",
      senha: "teste"
    }
  ]

  constructor(private alertController: AlertController, public modalController: ModalController) { }

  ngOnInit() {
  }

  async exibirInformacoes(colaborador: any) {

    const modal = await this.modalController.create({
      component: DetalhesComponent,
      componentProps: { colaborador: colaborador }

    });
    return await modal.present();

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

}
