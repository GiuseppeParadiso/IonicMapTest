import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, HtmlInfoWindow, MarkerCluster, Marker, MarkerOptions } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  map: GoogleMap;
  markerCounter: number = 0;
  markerContentStyle: string = ".test_div{margin: 3px; }" +
    "h3{color: rgb(90, 14, 14); font-style:italic;} " +
    "h4 { color: rgb(200, 100, 70); font-style: bold;}";

  markerList: MarkerOptions[] = [];
  markerCluster: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
    this.loadMap();
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
      'mapType': 'MAP_TYPE_TERRAIN'
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        this.addMarkers();

        this.markerCluster = this.map.addMarkerClusterSync({
          markers: this.markerList,
          icons: [
            {
              min: 3, max: 9,
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
              min: 10,
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
        this.markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
          console.log("ONCLICK ON CLUSTER: params=" + JSON.stringify(params));
          let marker: Marker = params[1];
          marker.setTitle(marker.get("name"));
          marker.setSnippet(marker.get("address"));
          marker.showInfoWindow();
          
        });


        this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((e) => {
          let position = JSON.parse(e);
          this.markerCounter++;

          let newMarker = {
            name: "Marker" + this.markerCounter,
            icon: 'red',
            animation: 'BOUNCE',
            position: {
              lat: position.lat,
              lng: position.lng
            }
          };
          this.markerList.push(newMarker);

          this.map.addMarker(newMarker)
          // this.markerCluster.addMarker(newMarker)
            .then(marker => {
              marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
                let htmlInfoWindow = new HtmlInfoWindow();
                let frame: HTMLElement = document.createElement('div');
                frame.innerHTML = [
                  '<style>' + this.markerContentStyle + '</style>',
                  '<div class="test_div">',
                  '<h3>' + marker.get("name") + '</h3>',
                  '<h4> Qui saranno presenti altre info</h4>',
                  '<button onclick="javascript:alert(\'clicked!\');">Clicca qui!</button>',
                  '</div>'
                ].join("");
                htmlInfoWindow.setContent(frame, {
                  width: "200px",
                  height: "150px"
                });
                htmlInfoWindow.setBackgroundColor("DarkTurquoise");
                htmlInfoWindow.open(marker);
              });
            });
        });

        // markerCluster.then((markerCluster: MarkerCluster) => {
        //   markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
        //     console.log("ONCLICK ON CLUSTER: params=" + JSON.stringify(params));
        //     let marker: Marker = params[1];
        //     marker.setTitle(marker.get("name"));
        //     marker.setSnippet(marker.get("address"));
        //     marker.showInfoWindow();
        //   });

        // });

        // this.map.addMarker({
        //   title: 'Ionic',
        //   icon: 'blue',
        //   animation: 'DROP',
        //   position: {
        //     lat: 41.8919300,
        //     lng: 12.5113300
        //   }

        // })
        //   .then(marker => {
        //     marker.on(GoogleMapsEvent.MARKER_CLICK)
        //       .subscribe(() => {
        //         alert('clicked');
        //       });
        //   });

      });

  }



  addMarkers() {
    let marker1 = {
      title: 'Test1',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.94643,
        lng: 12.651919
      },
      visible: true
    };
    let marker2 = {
      title: 'Test2',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.911442,
        lng: 12.615583
      },
      visible: true
    };
    let marker3 = {
      title: 'Test3',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.915193,
        lng: 12.666318
      },
      visible: true
    };
    let marker4 = {
      title: 'Test4',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.903507,
        lng: 12.641422
      },
      visible: true
    };
    let marker5 = {
      title: 'Test5',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.958241,
        lng: 12.622082
      },
      visible: true
    };
    let marker6 = {
      title: 'Test6',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.904507,
        lng: 12.641422
      },
      visible: true
    };
    let marker7 = {
      title: 'Test7',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.934241,
        lng: 12.622082
      },
      visible: true
    }; let marker8 = {
      title: 'Test8',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.915507,
        lng: 12.644122
      },
      visible: true
    };
    let marker9 = {
      title: 'Test9',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.936741,
        lng: 12.625467
      },
      visible: true
    }; let marker10 = {
      title: 'Test10',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.903200,
        lng: 12.642311
      },
      visible: true
    };
    let marker11 = {
      title: 'Test11',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 41.974532,
        lng: 12.622999
      },
      visible: true
    };

    this.markerList.push(marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10, marker11);
    // this.map.addMarker(marker1);
    // this.map.addMarker(marker2);
    // this.map.addMarker(marker3);
    // this.map.addMarker(marker4);
    // this.map.addMarker(marker5);
    // this.map.addMarker(marker6);
    // this.map.addMarker(marker7);
    // this.map.addMarker(marker8);
    // this.map.addMarker(marker9);
    // this.map.addMarker(marker10);
    // this.map.addMarker(marker11);
  }
}
