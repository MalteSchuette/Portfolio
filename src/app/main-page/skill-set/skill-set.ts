import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  imports: [ TranslatePipe],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss'
})
export class SkillSet {

skillIcons = [
  './assets/icons/HTML.svg',
  './assets/icons/CSS.svg',
  './assets/icons/JavaScript.svg',
  './assets/icons/MaterialDesign.svg',
  './assets/icons/TypeScript.svg',
  './assets/icons/Angular.svg',
  './assets/icons/Firebase.svg',
  './assets/icons/GIT.svg',
  './assets/icons/Rest-Api.svg',
  './assets/icons/Scrum.svg',
  './assets/icons/GrowthMindset.svg'
]

}
