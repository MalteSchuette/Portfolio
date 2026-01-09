import { Component } from '@angular/core';
import { LandingPage } from './landing-page/landing-page';
import { AboutMe } from './about-me/about-me';
import { SkillSet } from './skill-set/skill-set';
import { FeaturedProjects } from './featured-projects/featured-projects';
import { Reference } from './reference/reference';
import { Contact } from './contact/contact';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-main-page',
  imports: [LandingPage, AboutMe, SkillSet, FeaturedProjects, Reference, Contact,],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
