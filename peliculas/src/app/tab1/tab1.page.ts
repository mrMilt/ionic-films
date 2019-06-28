import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { ModalPage } from 'src/app/modal/modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  categories:object[] = [{
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }];

  films:any = [];
  urlBaseImg:string = environment.urlBaseImg;

  constructor(private apiService: ApiService, public navCtrl: NavController, public modalCtrl: ModalController) {
    this.searchFilmByGenre(28);
  }

  searchFilmByGenre(event) {
    let id = event.target != undefined ? event.target.id : event;
    
    this.apiService.searchFilmByGenre(id).subscribe(
      data => {
        this.films = data;  
        this.films = this.films.results;    
        console.log(this.films);              
      },
      err =>{
        console.log(err);
        
      }  
    );
  }

  async verMas(peli:any) {
    console.log(peli);
    
    localStorage.setItem('peli', JSON.stringify(peli));
    let modal = await this.modalCtrl.create({component: ModalPage});
    await modal.present();
  }

  addToFavorites(peli:any) {
    console.log(peli);
    
    environment.favorites.unshift(peli);
  }
}
