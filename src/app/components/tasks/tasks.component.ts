import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TaskService } from 'src/app/services/task.service';
import {TASKS} from "../../mock-tasks";



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
// what is going on here???
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    
  this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks)

  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  //toggle states
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    // console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe()
    
  }
  addTask(task: Task) {
    console.log(task);
    this.taskService.addTask(task).subscribe((task)=> (this.tasks.push(task)))
    

  }

}
