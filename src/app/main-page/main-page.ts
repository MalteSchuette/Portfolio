import { Component } from '@angular/core';
import { LandingPage } from './landing-page/landing-page';
import { AboutMe } from './about-me/about-me';

@Component({
  selector: 'app-main-page',
  imports: [LandingPage, AboutMe],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
