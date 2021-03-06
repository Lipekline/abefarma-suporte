import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  wifis = [
    {
      nome: "Alunos",
      usuario: "",
      senha: "alunoscosmet"
    },
    {
      nome: "Rede",
      usuario: "teste.01",
      senha: "Mudar123456",
      ip: "192.168.0.63",
      mascara: "23",
      dns: "192.168.0.46",
      gateway: "192.168.0.254"

    },
    {
      nome: "Abefarma-CEL",
      usuario: "(Ficha do usuario)",
      senha: "(Ficha do usuario)"
    },
    {
      nome: "Consulfarma-CEL",
      usuario: "(Ficha do usuario)",
      senha: "(Ficha do usuario)"
    }
  ];
  
    emails = [
      {
        nome: "Abefarma EMAIL",
        login: "abefarma",
        senha: "Silvinha99"
      },
      {
        nome: "Consulfarma EMAIL",
        login: "novo_admin",
        senha: "admin9090",
  
      }
  ];

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

  async exibirInformacoesWifi(wifi: any) {
  
    let message = "";

    if (wifi.usuario)
      message += this.adicionarNovaLinhaMensagem(message, "Usuário: " + wifi.usuario);

    if (wifi.senha)
      message += this.adicionarNovaLinhaMensagem(message, "Senha: " + wifi.senha);

      if (wifi.ip)
      message += this.adicionarNovaLinhaMensagem(message, "IP: " + wifi.ip);

      if (wifi.mascara)
      message += this.adicionarNovaLinhaMensagem(message, "Mascara: " + wifi.mascara);

      if (wifi.dns)
      message += this.adicionarNovaLinhaMensagem(message, "DNS: " + wifi.dns);

      if (wifi.gateway)
      message += this.adicionarNovaLinhaMensagem(message, "GATEWAY: " + wifi.gateway);

    let alert = await this.alertController.create({
      header: wifi.nome,
      message: message
    });

    await alert.present();
  }
    async exibirInformacoesEmail(email: any) {

      let message = "";
  
      if (email.login)
        message += this.adicionarNovaLinhaMensagem(message, "Login: " + email.login);
  
      if (email.senha)
        message += this.adicionarNovaLinhaMensagem(message, "Senha: " + email.senha);
  
  
      let alert = await this.alertController.create({
        header: email.nome,
        message: message
      });
  

    await alert.present();

  }
  async exibirInformacoesImpressora(impressora: any) {

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
