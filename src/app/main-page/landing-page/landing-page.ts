import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  imports: [TranslatePipe],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage implements OnInit {

  mailIsHovered = false;
  gitIsHovered = false;
  linkedIsHovered = false;

  spans: string[] = [];

  private translate = inject(TranslateService);

  ngOnInit() {
    this.updateSpans();
    this.translate.onLangChange.subscribe(() => this.updateSpans());
  }

  private updateSpans() {
    const keys = ['banner.remote', 'banner.title', 'banner.location', 'banner.relocate'];
    this.translate.get(keys).subscribe(t => {
      this.spans = [t['banner.remote'], '·', t['banner.title'], '·', t['banner.location'], '·', t['banner.relocate'], '·'];
    });
  }

}
