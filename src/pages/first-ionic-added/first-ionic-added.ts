import { Component, Input } from '@angular/core';
import { ActionSheetController, Platform, NavParams, NavController, AlertController } from 'ionic-angular';
import { AlertInputOptions } from 'ionic-angular/components/alert/alert-options';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
declare var cordova: any;


@Component({
  selector: 'page-first-ionic-added',
  templateUrl: 'first-ionic-added.html',
})
export class FirstIonicAddedPage {
  listRadio: Array<AlertInputOptions> = [];
  listCheck: Array<AlertInputOptions> = [];
  selected: string = "selected";
  selectedCheck = [];
  followers = 0;
  helloIonicPage = HelloIonicPage;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {
    console.log("created");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstIonicAddedPage');
  }

  openMenu(event) {
    console.log("Hai cliccato");
    let actionSheet = this.actionsheetCtrl.create(
      {
        title: 'Albums',
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'trash' : null,
            handler: () => {
              alert('Delete clicked');
            }
          },
          {
            text: 'Share',
            icon: !this.platform.is('ios') ? 'share' : null,
            handler: () => {
              alert('Share clicked');
            }
          },
          {
            text: 'Play',
            icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
            handler: () => {
              alert('Play clicked');
            }
          },
          {
            text: 'Favorite',
            icon: !this.platform.is('ios') ? 'heart-outline' : null,
            handler: () => {
              alert('Favorite clicked');
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              alert('Cancel clicked');
            }
          }
        ]
      });
    actionSheet.present();
  }

  radioAlertEvent() {
    let alert = this.alertCtrl.create();

    alert.setTitle("Radio Controller");
    this.fillRadioList();
    this.listRadio.forEach(element => {
      alert.addInput(element);
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        // this.testRadioOpen = false;
        this.selected = data;
        console.log(data);
      }
    });
    alert.present();
  }

  checkBoxAlertEvent() {
    let alert = this.alertCtrl.create();
    alert.setTitle("Checkbox Controller");
    this.fillCheckList();
    this.listCheck.forEach(element => {
      alert.addInput(element);
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.selectedCheck = data;
        console.log(data);
      }
    });
    alert.present();
  }

  openBasicAlert() {
    let alertDialog = this.alertCtrl.create({
      title: "Questo è un alert di base!",
      subTitle: "Qui c'è il suo sottotitlo",
      buttons: ["Cancel", {
        text: "OK",
        handler: data => {
          alert("You clicked OK!");
        }
      }]
    });
    alertDialog.present();
  }
  addFollower() {
    this.followers++;
  }

  // Always get the accurate path to your apps folder
  // public pathForImage(img) {
  //   console.log("entrato con param: " + img);
  //   if (img === null) {
  //     return '';
  //   } else {
  //     return cordova.file.dataDirectory + img;
  //   }
  // }
  fillRadioList() {
    this.listRadio = [];
    this.listRadio.push({
      value: "Primo",
      label: "Primo",
      type: 'radio',
      checked: this.selected == "Primo"
    });
    this.listRadio.push({
      value: "Secondo",
      label: "Secondo",
      type: 'radio',
      checked: this.selected == "Secondo"
    });
    this.listRadio.push({
      value: "Terzo",
      label: "Terzo",
      type: 'radio',
      checked: this.selected == "Terzo"
    });
  }


  fillCheckList() {
    this.listCheck = [];
    this.listCheck.push({
      value: "Primo",
      label: "Primo",
      type: 'checkbox',
      checked: this.selectedCheck.indexOf("Primo") != -1
    });
    this.listCheck.push({
      value: "Secondo",
      label: "Secondo",
      type: 'checkbox',
      checked: this.selectedCheck.indexOf("Secondo") != -1
    });
    this.listCheck.push({
      value: "Terzo",
      label: "Terzo",
      type: 'checkbox',
      checked: this.selectedCheck.indexOf("Terzo") != -1
    });
    this.listCheck.push({
      value: "Quarto",
      label: "Quarto",
      type: 'checkbox',
      checked: this.selectedCheck.indexOf("Quarto") != -1
    });
    this.listCheck.push({
      value: "Quinto",
      label: "Quinto",
      type: 'checkbox',
      checked: this.selectedCheck.indexOf("Quinto") != -1
    });
  }
}
