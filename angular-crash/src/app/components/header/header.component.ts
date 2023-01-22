import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;
  // runs when component is instantiated
  constructor(private uiService: UiService, private router: Router) {
    // the subscription is subscribed to the uiService's subject, and runs this function any time it changes
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  // runs when component loads (similar to useEffect?)
  ngOnInit(): void {}

  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
