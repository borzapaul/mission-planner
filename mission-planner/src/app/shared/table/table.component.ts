import { Component, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Point } from 'src/app/models/point';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges{
  @Input() points: Point[] =[];
  displayedColumns: string[] = ['index','name', 'X', 'Y'];
  dataSource!: MatTableDataSource<Point>;

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.points);
  }
}
