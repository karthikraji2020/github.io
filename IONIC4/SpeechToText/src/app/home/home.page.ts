import { Component,OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core'
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  bgcolor: string = 'white';
  matches: string[] = [];
  isRecording = false;
  constructor(public speechRecognition: SpeechRecognition, private ChangeDetectorRef: ChangeDetectorRef) {

  }
  ngOnInit() {

    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            );
        }

      });
  }
  start() {
    let options={
      language:'en-US'
    }
    this.speechRecognition.startListening().subscribe(
        (matches: Array<string>) => {
    
          Object.assign(this.matches, matches);
       Object.assign(this.bgcolor,matches[0]);
          this.ChangeDetectorRef.detectChanges();
        });
    this.isRecording = true;

  }



}

