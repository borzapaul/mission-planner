import { Component } from '@angular/core';
import { Point } from '../../models/point';
import { PointService } from 'src/app/services/point-service/point.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
} from 'src/app/shared/constants/app-constants';
import { AppStore } from 'src/app/app-store';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  form: FormGroup;

  canvasH = CANVAS_HEIGHT;
  canvasW = CANVAS_WIDTH;

  constructor(private pointService: PointService, private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      x: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.max(this.canvasW),
        ],
      ],
      y: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.max(this.canvasH),
        ],
      ],
    });
  }

  addNewPoint() {
    if (this.form.valid) {
      const point = this.form.value as Point;
      this.pointService.addPoint(point);
      this.form.reset();
      Object.keys(this.form.controls).forEach((key) => {
        this.form.get(key)?.setErrors(null);
      });
    } else {
      alert('Please resolve the errors before adding a point');
    }
  }

  get points() {
    let _points: Point[] = [];
    AppStore.points$.subscribe((points) => {
      _points = points;
    });
    return _points;
  }

  get nameFormControl() {
    return this.form.get('name') as FormControl;
  }
  get xFormControl() {
    return this.form.get('x') as FormControl;
  }
  get yFormControl() {
    return this.form.get('y') as FormControl;
  }

  getErrorMessage(controlName: string) {
    const formControl = this.form.get(controlName) as FormControl;
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }

    if (formControl.hasError('pattern')) {
      return 'Value must be a number';
    }

    if (formControl.hasError('max')) {
      return (
        'Value must be a number less ' +
        Math.max(this.canvasH, this.canvasW).toString()
      );
    }

    return '';
  }
}
