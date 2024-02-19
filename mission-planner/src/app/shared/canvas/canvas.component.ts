import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { Point } from 'src/app/models/point';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements AfterViewInit, OnChanges {
  @ViewChild('myCanvas') canvasRef!: ElementRef;

  @Input() points: Point[] = [];
  @Input() isMoving: boolean = false;
  @Input() canvasW: number = 500;
  @Input() canvasH: number = 500;

  constructor() {}

  ngAfterViewInit(): void {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      this.points.forEach((point) => {
        if (point.x && point.y && point.name) {
          // Draw dots
          ctx.fillStyle = 'blue';
          ctx.beginPath();
          ctx.arc(point.x, point.y, 5, 0, Math.PI * 2); // x, y, radius, start angle, end angle
          ctx.fill();

          // Write names
          ctx.fillStyle = 'black';
          ctx.font = '12px Arial';
          ctx.fillText(point.name, point.x, point.y - 10); // avoiding overlap
        }
      });
    }
  }

  ngOnChanges() {
    if (this.isMoving) {
      const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
      const ctx = canvas.getContext('2d');
      if (ctx) this.drawLinesWithDelay(ctx, this.points, 0);
    }
  }

  drawLinesWithDelay(
    ctx: CanvasRenderingContext2D,
    dots: Point[],
    index: number
  ) {
    if (index >= dots.length - 1) return; // Stop if reached the last dot

    setTimeout(() => {
      this.drawLine(ctx, dots[index], dots[index + 1]);
      this.drawLinesWithDelay(ctx, dots, index + 1);
    }, 1000); // Delay of 1 second (1000 milliseconds)
  }

  drawLine(ctx: CanvasRenderingContext2D, startDot: Point, endDot: Point) {
    if (startDot.x && startDot.y && endDot.x && endDot.y) {
      ctx.strokeStyle = 'green';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(startDot.x, startDot.y);
      ctx.lineTo(endDot.x, endDot.y);
      ctx.stroke();
    }
  }
}
