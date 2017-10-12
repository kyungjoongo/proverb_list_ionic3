import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {LocalNotifications} from '@ionic-native/local-notifications';
import {MyApp} from './app.component';
import {ProverbListPage} from '../pages/home/proverb_list';
import {List01Page} from "../pages/list01/list01";
import {AboutPage} from "../pages/about/about";
import {HttpProvider} from '../providers/http/http';
import {AdMobPro} from '@ionic-native/admob-pro';
import {GlobalVars} from "./constants";
import {DataProvider} from '../providers/data/data';
import {RandomProverbPage} from "../pages/random-proverb/random-proverb";

import {IonicImageLoader} from "ionic-image-loader";
import {SearchModalPage} from "../pages/search-modal/search-modal";
import {Toast} from "@ionic-native/toast";
import { SocialSharing} from "@ionic-native/social-sharing";
import { Dialogs} from "@ionic-native/dialogs";


@NgModule({
    declarations: [
        MyApp,
        ProverbListPage,
        List01Page,
        AboutPage,
        SearchModalPage,
        RandomProverbPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        IonicImageLoader.forRoot()

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ProverbListPage,
        List01Page,
        AboutPage,
        SearchModalPage,
        RandomProverbPage
    ],
    providers: [
        StatusBar,
        GlobalVars,
        SplashScreen,
        AdMobPro,
        InAppBrowser,
        LocalNotifications,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        HttpProvider,
        DataProvider,
        SocialSharing,
        Toast,
        Dialogs

    ]
})
export class AppModule {
}
