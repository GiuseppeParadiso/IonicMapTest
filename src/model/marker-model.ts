import { MarkerOptions } from "@ionic-native/google-maps";

export class LiveMarker {
    id: number;
    position: {
        lat: number,
        lng: number
    };
    cp: string;
    descr: string;
    pre: string;
    dir: string;
    ico: number;
    km: string;
    loc: string;
    note: string;
    cs: string;
    nome: string;
    idh: string;

    constructor(element: any) {
        this.parse(element);
    }

    parse(element: any) {
        let toParse = element;

        this.id = toParse.id;

        this.position = {
            lat: +toParse.lat,
            lng: +toParse.lon
        };

        this.cp = toParse.cp;

        this.descr = toParse.descr;

        this.pre = toParse.pre;

        this.dir = toParse.dir;

        this.ico = toParse.ico;

        this.km = toParse.km;

        this.loc = toParse.loc;

        this.note = toParse.note;

        this.cs = toParse.cs;

        this.nome = toParse.nome;

        this.idh = toParse.idh;
    }

    getMarker() {
        let marker: MarkerOptions = {
            name: this.nome,
            position: {
                lat: this.position.lat,
                lng: this.position.lng
            },
            icon: 'red',
            visible: true,
            "descr": this.descr ,
            "idM": this.id,
            "cp": this.cp,
            "dir": this.dir,
            "km": this.km,
            "loc": this.loc,
            "note": this.note,
            "cs": this.cs,
            "idh": this.idh,
            "pre": this.pre
        }
        return marker;
    }

}