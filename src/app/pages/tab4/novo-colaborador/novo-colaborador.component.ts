import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-novo-colaborador',
  templateUrl: './novo-colaborador.component.html',
  styleUrls: ['./novo-colaborador.component.scss'],
})
export class NovoColaboradorComponent implements OnInit {


  formNovoColaboador: FormGroup;

  constructor(private modalController: ModalController,
    public alertController: AlertController,
    private fb: FormBuilder,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.formNovoColaboador = this.fb.group({
      nome: "",
      email: "",
      empresa: "",
      foto: "",
      status: "",
      colaboradorRede: this.fb.group({
        usuario: "",
        senha: ""
      }),
      colaboradorWindows: this.fb.group({
        usuario: "",
        senha: ""
      })
    })
  }

  fecharModal() {
    this.modalController.dismiss();
  }

  async btnCadastrado() {
    let alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Colaborador Cadastrado !!',
      buttons: ['Confirmar']
    })
    await alert.present();
  }
  async errocadastro() {
    let alert = await this.alertController.create({
      header: 'Erro',
      message: 'Colaborador não cadastrado !!',
      buttons: ['Confirmar']
    })
    await alert.present();
  }

  async salvarColaborador() {
    let data = this.formNovoColaboador.getRawValue();
    data.status = "Ativo";

    this.httpClient.post("http://sites.consulfarma.com/abefarma-suporte/api/colaboradores", data)
      .pipe(take(1)).subscribe((data: any) => {
        this.btnCadastrado();
        this.modalController.dismiss();
      }, (erro: any) => {
       this.errocadastro();
      })

  }

}

