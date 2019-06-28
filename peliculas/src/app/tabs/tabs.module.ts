import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';
import { ModalPageComponent } from '../components/modal-page/modal-page';
import { ModalPage } from '../modal/modal.page';


import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage, ModalPageComponent, ModalPage],
  entryComponents: [ModalPage]
})
export class TabsPageModule {}
