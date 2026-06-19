import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-reference',
  imports: [TranslatePipe],
  templateUrl: './reference.html',
  styleUrl: './reference.scss'
})
export class Reference {

  activeIndex = 1;

  references = [
    {
      name: 'Jermaine Jérôme Bärwolf',
      comment: `Malte was consistently present and reliable throughout the entire group work. I would especially like to emphasize his active participation. Overall, working with him was pleasant and goal-oriented.`
    },
    {
      name: 'Tim Daubner',
      comment: `Malte was a very structured and reliable team member throughout our shared project work. He brings clear ideas to the table, is open to discussion, and helps maintain a productive workflow. Thanks to his strong logical thinking and quick understanding, he keeps an overview even when dealing with more complex tasks. I would happily work with Malte again at any time.`
    },
    {
      name: 'Dmitri Zyganow',
      comment: `I had the pleasure of working with Malte for a year in a marketing agency on a long-term project where he played a central managing role. His ability to handle stressful situations, adept to unexpected outcomes and stay motivated to constantly improve every aspect of his work made him a valuable asset of our team. As a colleague and a friend he earns my highest recommendation.`
    }
  ];

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.references.length;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.references.length) % this.references.length;
  }

  visibleReferences() {
    const len = this.references.length;
    const left = (this.activeIndex - 1 + len) % len;
    const right = (this.activeIndex + 1) % len;
    return [this.references[left], this.references[this.activeIndex], this.references[right]];
  }
}
