import {Pipe, PipeTransform} from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: "completeness",
  pure: false
})
export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], desiredCompleteness, desiredPriority) {
    var output: Task[] = [];
    if(desiredCompleteness === "notDone" && desiredPriority === "high") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].done === false && input[i].priority === "high") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "notDone" && desiredPriority === "medium") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].done === false && input[i].priority === "medium") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "notDone" && desiredPriority === "low") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].done === false && input[i].priority === "low") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "notDone" && desiredPriority === "all") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "isDone") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}



// import {Pipe, PipeTransform} from '@angular/core';
// import { Task } from './task.model';
//
// @Pipe({
//   name: "priority",
//   pure: false
// })
//
// export class PriorityPipe implements PipeTransform {
//    transform(input: Task[], desiredPriority) {
//      var output: Task[] = [];
//      if(desiredPriority === "high") {
//        for(var i = 0; i < input.length; i++) {
//          if(input[i].priority === "high") {
//            output.push(input[i]);
//          }
//        }
//        return output;
//      } else if (desiredPriority === "medium") {
//        for(var i = 0; i < input.length; i++) {
//          if(input[i].priority === "medium") {
//            output.push(input[i]);
//          }
//        }
//        return output;
//      } else if (desiredPriority === "low") {
//        for(var i = 0; i <input.length; i++) {
//          if(input[i].priority === "low") {
//            output.push(input[i]);
//          }
//        }
//        return output;
//      } else {
//        return input;
//      }
//    }
// }
