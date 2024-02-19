import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  readonly githubLink: string = 'https://github.com/borzapaul/mission-planner';

  constructor() {}
  
  openLink() {
    window.open('https://github.com/borzapaul/mission-planner', '_blank');
  }
}
