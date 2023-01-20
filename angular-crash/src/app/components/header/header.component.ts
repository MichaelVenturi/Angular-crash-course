import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  // runs when component is instantiated
  constructor() {}

  // runs when component loads (similar to useEffect?)
  ngOnInit(): void {}

  toggleAddTask(): void {
    console.log('toggle');
  }
}
