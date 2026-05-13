import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, CommonModule],
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

  burgerOpen = false;
  isHovered = false;
  hidden = false;
  private lastScrollY = 0;
  private translate = inject(TranslateService);
  private elRef = inject(ElementRef);
  currentLang: string = "";

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (this.burgerOpen && !this.elRef.nativeElement.contains(event.target)) {
      this.burgerOpen = false;
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    const currentY = window.scrollY;
    this.hidden = currentY > this.lastScrollY && currentY > 80;
    this.lastScrollY = currentY;
  }

  useLanguage(language: string): void {
      this.translate.use(language);
      this.currentLang = language;      
  }

  toggleBurger(){
    this.burgerOpen = !this.burgerOpen;
  }
}
