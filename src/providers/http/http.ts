import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalVars} from "../../app/constants";


@Injectable()
export class HttpProvider {
    url2: any;
    result: any;
    // url: string = 'http://kyungjoon.ipdisk.co.kr:3000/proverbJson/'

    url: string = 'http://35.201.241.181:3000/proverbJson/'

    constructor(public http: Http, public globalvars: GlobalVars) {
        console.log('Hello HttpProvider Provider');
        this.url2 = globalvars.imageFetchUrl + 'proverbJson';

    }

    getJsonData(pageNo: number) {

        this.result=  this.http.get(this.url + 'list?page=' + pageNo).map(res => {

            let jsonResult = res.json()
            return jsonResult;

        });

        return this.result;
    }

    getRandomProverOne(id: string) {

        this.result = this.http.get(this.url + 'getOne/' + id).map(res => res.json());
        console.log(this.result);
        return this.result;
    }


}
