import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  imports: [],
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

  showImage(image: string) {
    this.currentImage = image;
  }

  clearImage() {
    this.currentImage = null;
  }

}
