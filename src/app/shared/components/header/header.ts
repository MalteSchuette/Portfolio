import { Component, inject } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  constructor() {
    this.currentLang = this.translate.getDefaultLang() || 'en';

    this.translate.onLangChange.subscribe(event => {
    this.currentLang = event.lang;
  });
  }


  private translate = inject(TranslateService);
  currentLang: string = "";

  useLanguage(language: string): void {
      this.translate.use(language);
      this.currentLang = language;      
  }
}
