import { Component } from '@angular/core';
import { Point } from '../../models/point';
import { PointService } from 'src/app/services/point-service/point.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  newPoint: Point = { name: '', x: 0, y: 0 };

  constructor(private pointService: PointService) {}

  addNewPoint() {
    if (this.pointValidation(this.newPoint)) {
      this.pointService.addPoint({ ...this.newPoint });
      this.newPoint = { name: '', x: 0, y: 0 };
    } else {
      alert('Please fill the name for adding a point');
    }
  }

  get points() {
    return this.pointService.getPoints();
  }

  pointValidation(newPoint: Point): boolean {
    if (newPoint.name == '') return false;
    return true;
  }
}
