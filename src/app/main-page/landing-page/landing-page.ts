import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  imports: [Header, TranslatePipe, TranslateDirective],
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
    '·',
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
