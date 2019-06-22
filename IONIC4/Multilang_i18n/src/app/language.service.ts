import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(
    private translate: TranslateService
  ) { }
 
  getDefaultLanguage(){
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }
 
  setLanguage(setLang) {
    this.translate.use(setLang);
  }
}
