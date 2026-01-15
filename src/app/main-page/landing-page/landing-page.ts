import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import {TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  imports: [TranslatePipe,],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {

  mailIsHovered = false;
  gitIsHovered = false;
  linkedIsHovered =false;
  
  spans: string[] = [
  'Available for remote work',
  '·',
  'Full Stack Developer',
  '·',
  'Based in Berlin',
  '·',
  'Open to relocate',
  '·'
];

}
