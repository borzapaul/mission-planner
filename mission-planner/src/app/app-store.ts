import { BehaviorSubject } from 'rxjs';
import { Point } from './models/point';

export class AppStore {
  public static points$ = new BehaviorSubject<Point[]>([]);
}
