import { Component, signal, inject } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { MainPage } from './main-page/main-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
