// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    compelte: false
  };
  return task;
}

//prints out the provided task's details
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "take all the 💩 out of the litter box");
const task2 = newTask('Do Laundry', '😨')
const tasks = [task1, task2];

logTaskState(task1); //Clean cat litter has not been completed
completeTask(task1);
logTaskState(task1); //clean cat litter has been completed

console.log(tasks);
