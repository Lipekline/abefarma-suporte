import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {

  @Input() colaborador: any;
  viewBag: any;

  constructor(private modalController: ModalController,
    private loadingController: LoadingController,
    private httpClient: HttpClient,
    private alertController: AlertController) { }

  async ngOnInit() {
    await this.carregarColaborador();
  }

  async carregarColaborador() {
    const loading = await this.loadingController.create({
      message: 'Carregando Colaborador...'
    });
    await loading.present();
    this.httpClient.get("http://sites.consulfarma.com/abefarma-suporte/api/colaboradores/" + this.colaborador.colaboradorId).pipe(take(1)).subscribe((data: any) => {
      console.log(data);
      this.viewBag = data;
    }, (err: any) => {
      alert('deu erro');
    }, () => {
      loading.dismiss();
    });
  }

  fecharModal(data: any = {}) {
    this.modalController.dismiss(data);
  }

  async removerColaborador(_colaborador) {
    const loading = await this.loadingController.create({
      message: 'Removendo Colaborador...'
    });
    await loading.present();


    this.httpClient.delete("http://sites.consulfarma.com/abefarma-suporte/api/colaboradores/" + this.colaborador.colaboradorId, {}).pipe(take(1)).subscribe(async (data: any) => {
      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'Colaborador  ' + this.colaborador.nome + ' Removido',
        buttons: [{
          text: "Ok",
          handler: async () => {
            this.fecharModal({ recarregar: true });
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


}
