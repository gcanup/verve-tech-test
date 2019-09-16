class Task {
  constructor( title, isCompleted, date) {
    this.title = title;   // Title of the todo, for example: Buy grocerry at 18:00
    this.isCompleted = isCompleted; // ture/false, Is task completed or now
    this.date = date; // The time the taks is complted
  }
}

class Todo {
  constructor(tasks) {
    this.tasks = tasks // List of tasks
  }
}


const tasks = [
  new Task("Buy grocerry at 16:00", false, "02.01.2010"),
  new Task("Buy grocerry at 16:00", false, "02.01.2010"),
  new Task("Buy grocerry at 16:00", false, "02.01.2010"),
  new Task("Buy grocerry at 16:00", false, "02.01.2010"),
  new Task("Buy grocerry at 16:00", false, "02.01.2010"),
]

const todo = new Todo(tasks);

console.log(todo.tasks.map(t => console.log({t})));
