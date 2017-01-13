import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div class="task-list">
    <h2>Meals Taken</h2>
    <select (change)="onChange($event.target.value)" class="form-control filter">
      <option value="all" selected="selected">Show All</option>
      
    </select>
    <select (change)="onPriority($event.target.value)" class="form-control filter">
      <option value="all" selected="selected">Show All Priorities</option>
      <option value="high">High Priority</option>
      <option value="medium">Medium Priority</option>
      <option value="low">Low Priority</option>
    </select>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness:selectedPriority">
      <task-display class="option" [task]="currentTask"></task-display>
      <button class="edit-btn"(click)="editButtonHasBeenClicked(currentTask)">(Edit)</button>
    </div>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "all";
  public selectedPriority: string = "all";

  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    // console.log(this.selectedCompleteness);
    // console.log(this.selectedPriority);
  }

  onPriority(optionFromMenu) {
    this.selectedPriority = optionFromMenu;
  }

  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
