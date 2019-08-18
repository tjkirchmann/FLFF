import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

    public favDriver: string;
    public favTeam: string;
    public favSwitch: boolean;
   

    constructor(
        private modalController: ModalController,
        private navParams: NavParams
    ) { }

    ngOnInit() {
        this.favSwitch = false;
  }

    async closeModal() {
        this.modalController.dismiss({
            favDriver: this.favDriver,
            favTeam: this.favTeam,
        })
    }
        
 
}
