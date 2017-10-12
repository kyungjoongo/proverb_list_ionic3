import {Component} from '@angular/core';
import {NavController, LoadingController, AlertController} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";
import {GlobalVars} from "../../app/constants";
import {AdMobPro} from "@ionic-native/admob-pro";
import {Platform, ModalController} from "ionic-angular";
import {LocalNotifications} from '@ionic-native/local-notifications';

@Component({
    selector: 'proverb-list',
    templateUrl: 'proverb_list.html',
    providers: [HttpProvider, GlobalVars, LocalNotifications]
})

export class ProverbListPage {
    imageUrl: string;
    items: any;
    pageNo: number;
    posts: any;
    loadingImgDiv = this.loadingController.create({content: '<ion-spinner></ion-spinner>'});


    constructor(public navCtrl: NavController, private httpProvider: HttpProvider
        , public loadingController: LoadingController
        , private inAppBrowser: InAppBrowser
        , public globalVars: GlobalVars
        , private admob: AdMobPro
        , private platform: Platform
        , public alertCtrl: AlertController, public localNotifications: LocalNotifications
        , public modalCtrl: ModalController
        , public modalcontroller: ModalController) {

        this.imageUrl = globalVars.imageFetchUrl;
        this.pageNo = 1;
        this.getProverbListToJson(this.pageNo);

    }//컨스트럭터 end


    doRefresh(refresher) {
        this.httpProvider.getJsonData(1).subscribe(jsonResult => {
            this.posts = jsonResult
        });
        refresher.complete();
    }


    getProverbListToJson(pageNo) {

        this.loadingImgDiv.present();
        this.httpProvider.getJsonData(pageNo).subscribe(jsonResult => {

                this.posts = jsonResult;

            },
            error => {
                alert('error!');
            },
            complete => {
                this.loadingImgDiv.dismiss();
            }
        );
    }


    doInfinite(infiniteScroll: any) {
        this.pageNo++;
        //alert(this.pageNo);
        this.httpProvider.getJsonData(this.pageNo).subscribe(jsonResult => {

                console.log(jsonResult);
                if (jsonResult.length > 0) {
                    for (var i = 0; i < jsonResult.length; i++) {
                        this.posts.push(jsonResult[i]);
                    }
                }
                infiniteScroll.complete();

            },
            error => {
                alert('애러다 이놈아');
            },
            complete => {

            }
        );


    }


}
