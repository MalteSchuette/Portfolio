import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-featured-projects',
  imports: [TranslatePipe],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss'
})
export class FeaturedProjects {
  currentImage: string | null = null;

  projectImages = [
    './assets/img/Kanban.webp',
    './assets/img/ChatOnStage.webp',
    './assets/img/videoflix.webp'
  ]

  showOverlay:boolean = false;
  modi:number = 0;

  showImage(image: string) {
    this.currentImage = image;
  }

  clearImage() {
    this.currentImage = null;
  }

  toggleOverlay(modi:number) {
    this.showOverlay = !this.showOverlay;
    this.modi = modi;
    document.body.style.overflow = this.showOverlay ? 'hidden' : '';
    if (this.showOverlay) this.resetScroll();
  }

  nextProject() {
    this.modi = this.modi < 3 ? this.modi + 1 : 1;
    this.resetScroll();
  }

  private resetScroll() {
    setTimeout(() => {
      const el = document.getElementById('overlay_content_sides');
      if (el) el.scrollTop = 0;
    });
  }
}
