import { Component, Input} from '@angular/core';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { ModalPage } from 'src/app/modal/modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  text: string;

  @Input() value: number;

  films:any = [];
  show: boolean = false;
  peli:any;
  urlBaseImg:string = environment.urlBaseImg;

  constructor(private apiService: ApiService, public navCtrl: NavController, public modalCtrl: ModalController) {}

  searchFilm(event) {
    console.log(event.detail.value);
    let p:string = event.detail.value;
    if (p.length > 0) {
    this.apiService.searchFilm(p).subscribe(
      data => {
        this.films = data;
        this.films = this.films.results;  
        console.log(this.films);
              
      },
      err =>{
        console.log(err);
        
      }  
    );
    } else {
      this.films = [];
    }
  }

  verDetalles(event) {
    this.peli = this.films.filter(p=> p.id == event.target.id)[0];
    this.films = [];
    console.log(this.peli);
    this.show = true;
  }

  async verMas() {
    localStorage.setItem('peli', JSON.stringify(this.peli));
    let modal = await this.modalCtrl.create({component: ModalPage});
    await modal.present();
  }

  addToFavorites(peli:any) {
    console.log(peli);
    
    environment.favorites.unshift(peli);
  }
}
