import { Component } from '@angular/core';

import { LanguageService } from '../language.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedLanguage:string;
  constructor( private languageService: LanguageService){
    this.selectedLanguage = this.languageService.getDefaultLanguage();
  }
  languageChanged(){
    this.languageService.setLanguage(this.selectedLanguage);
  }

}
