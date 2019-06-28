import { Component, OnInit } from '@angular/core';
import { NavController,  NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  peli:any;
  urlBaseImg:string = environment.urlBaseImg;

  constructor(public nacCtrl: NavController, public navParams: NavParams, public viewCtrl: ModalController) { }

  ngOnInit() {
    this.peli = JSON.parse(localStorage.getItem('peli'));
    console.log(this.peli);
    
  }

  async cerrarModal() {
    let result = "se cerro";
    this.viewCtrl.dismiss();
  }
}
