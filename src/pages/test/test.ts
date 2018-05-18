import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, HtmlInfoWindow, MarkerCluster, Marker, MarkerOptions } from '@ionic-native/google-maps';
import { MarkerService } from '../../services/marker-service';
import { CustomHtmlInfoWindow } from '../../model/inner-html-model';
import { LiveMarker } from '../../model/marker-model';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  map: GoogleMap;
  markerCounter: number = 0;
  markerList: MarkerOptions[] = [];
  markerCluster: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public markerService: MarkerService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
    let restMarkerList = this.markerService.pullData().subscribe(
      data => {
        data.eventi.forEach(element => {
          let liveMarker: LiveMarker = new LiveMarker(element);
          this.markerList.push(liveMarker.getMarker());
        });
        this.loadMap();
      },
      err => {
        console.log("There was a problem! " + err);
        this.loadMap();
      },
      () => console.log('Marker search complete!'));
  }

  clickEvent() {
    alert("clicked!");
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 41.8919300,
          lng: 12.5113300
        },
        zoom: 10,
        tilt: 40,
      },
      'mapType': 'MAP_TYPE_NORMAL'
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
        // this.fillMarkersList();

        this.markerCluster = this.map.addMarkerClusterSync({
          markers: this.markerList,
          icons: [
            {
              min: 2, max: 40,
              url: "assets/imgs/markercluster/cluster1.png",
              label: {
                fontSize: 20,
                color: "white"
              },
              size: {
                width: 60,
                height: 60
              }
            },
            {
              min: 40,
              url: "assets/imgs/markercluster/cluster2.png",
              label: {
                fontSize: 20,
                color: "green"
              },
              size: {
                width: 60,
                height: 60
              }
            }
          ]
        });
        this.markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe(params => {
          console.log("ONCLICK ON CLUSTER: param[1]=" + JSON.stringify(params[1]));
          let marker: Marker = params[1];
          let customInfoWindow = new CustomHtmlInfoWindow(marker, "");
          customInfoWindow.htmlInfo.open(marker);
        });

/*         this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((e) => {
          let position = JSON.parse(e);
          this.markerCounter++;

          let newMarker = {
            name: "Marker" + this.markerCounter,
            icon: 'red',
            animation: 'DROP',
            position: {
              lat: position.lat,
              lng: position.lng
            }
          };
          this.markerCluster.addMarker(newMarker)
          this.markerList.push(newMarker);
        }); 
*/
      });

  }

  fillMarkersList() {
    let marker1 = {
      name: 'Test1',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.94643,
        lng: 12.651919
      },
      visible: true
    };
    let marker2 = {
      name: 'Test2',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.911442,
        lng: 12.615583
      },
      visible: true
    };
    let marker3 = {
      name: 'Test3',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.915193,
        lng: 12.666318
      },
      visible: true
    };
    let marker4 = {
      name: 'Test4',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.903507,
        lng: 12.641422
      },
      visible: true
    };
    let marker5 = {
      name: 'Test5',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.958241,
        lng: 12.622082
      },
      visible: true
    };
    let marker6 = {
      name: 'Test6',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.904507,
        lng: 12.641422
      },
      visible: true
    };
    let marker7 = {
      name: 'Test7',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.934241,
        lng: 12.622082
      },
      visible: true
    };
    let marker8 = {
      name: 'Test8',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.915507,
        lng: 12.644122
      },
      visible: true
    };
    let marker9 = {
      name: 'Test9',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.936741,
        lng: 12.625467
      },
      visible: true
    };
    let marker10 = {
      name: 'Test10',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.903200,
        lng: 12.642311
      },
      visible: true
    };
    let marker11 = {
      name: 'Test11',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.974532,
        lng: 12.622999
      },
      visible: true
    };

    this.markerList.push(marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10, marker11);
  }
}
