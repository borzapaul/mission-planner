import { Component } from '@angular/core';
import { Point } from 'src/app/models/point';
import { PointService } from 'src/app/services/point-service/point.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  points: Point[];
  isMoving: boolean = false;
  constructor(private pointService: PointService) {
    this.points = pointService.getPoints();
  }
  startMoving() {
    this.isMoving = true;
  }

  stopMoving() {
    this.isMoving = false;
  }
}
