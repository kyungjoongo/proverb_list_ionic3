import {Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import { ImageLoaderConfig} from "ionic-image-loader";

/**
 * Generated class for the RandomProverbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-random-proverb',
    templateUrl: 'random-proverb.html',
})
export class RandomProverbPage {

    randomNumber: any;

    randProverOneContent : string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider,

                public imageLoaderConfig : ImageLoaderConfig
    ) {


        imageLoaderConfig.setHeight("500");
        imageLoaderConfig.setWidth("500");


        this.getRandomInt(1,10000);

        this.getOneRandomProverb();
    }

    getRandomInt(min, max) {
        let beMadeRandNo =  Math.floor(Math.random() * (max - min + 1)) + min;

        this.randomNumber = beMadeRandNo

        //alert(randNo);
    }


    getRandomIntReturn (min, max) {
        let beMadeRandNo =  Math.floor(Math.random() * (max - min + 1)) + min;

        return beMadeRandNo;
    }



    getRefresh(){

        this.navCtrl.setRoot(this.navCtrl.getActive().component);

    }


    getOneRandomProverb() {

        let _randNo = this.getRandomIntReturn(55,450);

        this.httpProvider.getRandomProverOne(_randNo).subscribe(jsonResult => {

                this.randProverOneContent = jsonResult.content;

            },
            error => {
                alert('애러다 이놈아');
            },
            () => {
                // loading.dismiss();
                // alert('완료했어요 ~~~');
            }
        );
    }



    ionViewDidLoad() {
        console.log('ionViewDidLoad RandomProverbPage');
    }

}
