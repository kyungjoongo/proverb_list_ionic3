import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RandomProverbPage } from './random-proverb';
import { IonicImageLoader} from "ionic-image-loader";

@NgModule({
  declarations: [
    RandomProverbPage,
  ],
  imports: [
    IonicPageModule.forChild(RandomProverbPage),
      IonicImageLoader
  ],
})
export class RandomProverbPageModule {}
