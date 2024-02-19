import { Injectable } from '@angular/core';
import { Point } from 'src/app/models/point';

@Injectable({
  providedIn: 'root'
})
export class PointService {

  points: Point[] = [];

  constructor() { }

  addPoint(point: Point) {
    this.points.push(point);
  }

  getPoints() {
    return this.points;
  }
}
