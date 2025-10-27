import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';

@Component({
  selector: 'app-landing-page',
  imports: [Header],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {

spans: string[] = [
  'Available for remote work',
    '·',
    'Full Stack Developer',
    '·',
    'Based in Berlin',
    '·',
    'Open to relocate',
    '·'
]

}
