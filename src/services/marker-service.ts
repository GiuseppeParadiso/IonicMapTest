import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MarkerService {

    constructor(private http: Http) {
        console.log("MarkerService created!");
    }

    pullData() {
        var url = 'https://vai-app.stradeanas.it/outputJsonData/jsonArrMarkerRmt.php?mode=gzip';
        var response = this.http.get(url).map(res => {
            console.log("RESJSON => " + JSON.stringify(res.json()));
            return res.json();
        });
        return response;
    }
}