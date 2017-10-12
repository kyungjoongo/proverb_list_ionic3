import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProverbListPage} from "./proverb_list";
import {IonicImageLoader} from 'ionic-image-loader';

@NgModule({
    declarations: [
        ProverbListPage,
    ],
    imports: [
        IonicPageModule.forChild(ProverbListPage),
        IonicImageLoader
    ],
})
export class Proverb_listModule {


}
