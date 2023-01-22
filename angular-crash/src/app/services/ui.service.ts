import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  // subjects are an observable that can be observed by multiple sources, instead of just one

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // this returns the subject as an observable to its observers
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
