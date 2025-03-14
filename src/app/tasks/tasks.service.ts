import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

// Maakt een class en service injectable
@Injectable({providedIn: 'root'})

export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basics',
      dueDate: '30-10-2024', 
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Learn all the basics',
      dueDate: '30-10-2024', 
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Learn all the basics',
      dueDate: '30-10-2024', 
    }
  ];

  // function die automatisch wordt uitgevoerd
  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}