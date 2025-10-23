import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  imports: [],
  templateUrl: './reference.html',
  styleUrl: './reference.scss'
})
export class Reference {

references = [
  {
    name: 'Rick Astley',
    comment: `We're no strangers to love
              You know the rules and so do I
              A full commitment's what I'm thinkin' of
              You wouldn't get this from any other guy
              I just wanna tell you how I'm feeling
              Gotta make you understand`
  },
  {
    name: 'Rick Astley',
    comment: `Never gonna give you up, never gonna let you down
              Never gonna run around and desert you
              Never gonna make you cry, never gonna say goodbye
              Never gonna tell a lie and hurt you`
  },
  {
    name: 'Rick Astley',
    comment: `We've known each other for so long
              Your heart's been aching, but you're too shy to say it
              Inside, we both know what's been going on
              We know the game and we're gonna play it`
  }
];


}
