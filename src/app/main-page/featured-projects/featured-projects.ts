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
    './assets/img/Join1x.webp',
    './assets/img/Sharkie.png',
    './assets/img/pokedex.png'
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
    this.showOverlay = !this.showOverlay
    this.modi = modi;
  }

  nextProject() {
    if(this.modi < 3) {
      this.modi++
    } else {
      this.modi = 1
    }
  }
}
