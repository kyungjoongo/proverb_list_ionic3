import {Injectable} from '@angular/core';

@Injectable()
export class GlobalVars {

    public imageFetchUrl: string;

    constructor() {
        //this.imageFetchUrl = "http://kyungjoon.ipdisk.co.kr:8080/";

        //this.imageFetchUrl = "http://35.194.150.240:8080/";

        //this.imageFetchUrl = 'http://35.201.241.181:3000/';

        this.imageFetchUrl = 'http://kyungjoon.ipdisk.co.kr:3000/';

        /*this.imageFetchUrl = "http://kyungjoon.ipdisk.co.kr:8080/";*/
    }

}
