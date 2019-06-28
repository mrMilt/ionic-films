import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { ModalPage } from 'src/app/modal/modal.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  favorites:any = [];
  urlBaseImg:string = environment.urlBaseImg;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    console.log(environment.favorites);
    this.favorites = environment.favorites;
  }


  async verMas(peli:any) {
    console.log(peli);
    
    localStorage.setItem('peli', JSON.stringify(peli));
    let modal = await this.modalCtrl.create({component: ModalPage});
    await modal.present();
  }

  deleteOfFavorites(peli:any) {
      console.log(this.favorites.indexOf(peli));
      this.favorites.splice(this.favorites.indexOf(peli), 1);
  }
}
