import { HtmlInfoWindow, MarkerOptions, Marker } from "@ionic-native/google-maps";

export class CustomHtmlInfoWindow {
    array: Array<string> = [];
    defaultMarkerContentStyle: string = ".test_div{margin: 3px; }" +
        "h3{ color: rgb(90, 14, 14); font-style:italic; font-size:1.2em;} " +
        "h4 { color: #2F4F4F; font-style: bold; font-size:1em;}";

    markerStyle: string;
    htmlInfo: HtmlInfoWindow;
    backgroundColor: string;

    constructor(marker: Marker, style?: string) {
        this.array = [
            '<style>' + (style == "" ? this.defaultMarkerContentStyle : style) + '</style>',
            '<div class="test_div">',
            '<h3>', (marker.get("name") == "" ? "" : marker.get("name")),
            '</h3>',
            '<h4>',
            marker.get("descr"),
            '<br/>',
            marker.get("km") + ', ' + marker.get("dir"),
            '</h4>',
            '</div>'
        ];
        this.htmlInfo = new HtmlInfoWindow();
        let frame: HTMLElement = document.createElement('div');
        frame.innerHTML = this.array.join("");
        this.htmlInfo.setContent(frame, {
            width: "200px",
            height: "150px"
        });
        this.htmlInfo.setBackgroundColor("Gainsboro");
    }

}