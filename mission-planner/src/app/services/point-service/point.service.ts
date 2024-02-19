import { Injectable } from '@angular/core';
import { AppStore } from 'src/app/app-store';
import { Point } from 'src/app/models/point';

@Injectable({
  providedIn: 'root',
})
export class PointService {
  points: Point[] = [];

  constructor() {}

  addPoint(point: Point) {
    this.points = [...this.points, point];
    AppStore.points$.next(this.points);
  }

  getPoints() {
    return this.points;
  }
}
