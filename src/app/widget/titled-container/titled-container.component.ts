import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-titled-container',
  templateUrl: './titled-container.component.html',
  styleUrls: ['./titled-container.component.css']
})
export class TitledContainerComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
