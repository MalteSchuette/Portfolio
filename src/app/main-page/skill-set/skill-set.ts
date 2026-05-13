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
  { src: './assets/icons/Property 1=HTML.png',           label: 'HTML' },
  { src: './assets/icons/Property 1=CSS.png',            label: 'CSS' },
  { src: './assets/icons/Property 1=JavaScript.png',     label: 'JavaScript' },
  { src: './assets/icons/Property 1=Material Design.png',label: 'Material Design' },
  { src: './assets/icons/Property 1=TypeScript.png',     label: 'TypeScript' },
  { src: './assets/icons/Property 1=Angular.png',        label: 'Angular' },
  { src: './assets/icons/Property 1=Firebase.png',       label: 'Firebase' },
  { src: './assets/icons/Property 1=Git.png',            label: 'Git' },
  { src: './assets/icons/Property 1=Rest-Api.png',       label: 'REST API' },
  { src: './assets/icons/Property 1=Scrum.png',          label: 'Scrum' },
  { src: './assets/icons/Property 1=GrowthMindset.png',  label: 'Growth Mindset' },
]

}
