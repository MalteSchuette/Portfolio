import { Component, signal, inject } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { Footer } from './shared/components/footer/footer';
import { Header } from './shared/components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');

}
