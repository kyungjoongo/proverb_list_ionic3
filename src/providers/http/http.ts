import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalVars} from "../../app/constants";

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
    url2: any;
    result: any;
    url: string = 'http://kyungjoon.ipdisk.co.kr:3000/proverbJson/'

    constructor(public http: Http, public globalvars: GlobalVars) {
        console.log('Hello HttpProvider Provider');
        this.url2 = globalvars.imageFetchUrl + 'proverbJson';

    }

    getJsonData(pageNo: number) {

        this.result=  this.http.get(this.url + 'list?page=' + pageNo).map(res => {


            let jsonResult = res.json()

            let list: string[] = [];

            jsonResult.forEach(jsonElementOne => {

                let definedContent = (jsonElementOne.content).substring(0, jsonElementOne.content.length - 2);

                jsonElementOne.content2 = definedContent;

                list.push(jsonElementOne);

            })

            return list;

        });

        return this.result;
    }

    getRandomProverOne(id: string) {

        this.result = this.http.get(this.url + 'getOne/' + id).map(res => res.json());
        console.log(this.result);
        return this.result;
    }


}
