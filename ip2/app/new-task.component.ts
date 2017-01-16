import { Component, Output, EventEmitter }  from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template:`
    <div class="new-task">
      <h3 class="center">Add a Meal</h3>
      <div>
        <label>Food Name:</label>
        <input class="form-control" #newDescription>
      </div>
      <div>
        <label>Details:</label>
        <input class="form-control" #newDetails>
      </div>
      <div>
        <label>Calories</label>
        <input class="form-control" #newId>
        </div>
      <div>
        <label>Calorie-Index</label>
        <select #newPriority class="form-control">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <br>
        <button class="btn btn-danger center-block" (click)="
        addClicked(newDescription.value, newDetails.value,newId.value, newPriority.value);
        newDescription.value='';
        newDetails.value='';
        newId.value='';
        newPriority.value='';

        ">Add</button>
      </div>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, details: string,  id: number, priority: string) {
    var newTaskToAdd: Task = new Task(description, details, id, priority);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
