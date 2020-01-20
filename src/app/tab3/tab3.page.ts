import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  impressoras = [
    {
      nome: "ADM_Abefarma",
      ip: "192.168.0.18",
      toner: "Toner CF226A ou CF226X"
    },
    {
      nome: "Comercial_Abefarma",
      ip: "192.168.0.19",
      toner: "Toner CF226A ou CF226X"

    },
    {
      nome: "DIRETORIA",
      ip: "192.168.0.15",
      toner:"CF510 - PRETO, CF511 - AZUL, CF512A - AMARELO, CF513A - MAGENTA"
    },
    {
      nome: "Comercial_Consulfarma",
      ip: "192.168.0.14",
      toner: "Toner CF226A ou CF226X"
    },
    {
      nome: "ADM_Consulfarma",
      ip:"192.168.0.17",
      toner:"Toner CF226A ou CF226X"
    }
  ]

  constructor(private alertController: AlertController) { }

  async exibirInformacoes(impressora: any) {

    let message = "";

      if (impressora.ip)
      message += this.adicionarNovaLinhaMensagem(message, "IP: " + impressora.ip);

      if (impressora.toner)
      message += this.adicionarNovaLinhaMensagem(message, "Toner: " + impressora.toner);

    let alert = await this.alertController.create({
      header: impressora.nome,
      message: message
    });

    await alert.present();

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