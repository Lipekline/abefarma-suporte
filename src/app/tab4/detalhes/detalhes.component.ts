import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
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

  constructor(private modalController: ModalController, private loadingController: LoadingController, private httpClient: HttpClient) { }

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

  fecharModal(){
    this.modalController.dismiss();
  }

}
