import { Component, Input } from '@angular/core';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { ModalPage } from 'src/app/modal/modal.page';


/**
 * Generated class for the ModalPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-page',
  templateUrl: 'modal-page.html'
})
export class ModalPageComponent {

  text: string;

  @Input() value: number;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    console.log('Hello ModalPageComponent Component');
    this.text = 'Modal';
  }

  async abrirModal() {
    let modal = await this.modalCtrl.create({component: ModalPage});
    await modal.present();
  }
}
