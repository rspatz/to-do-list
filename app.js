let task = prompt('Enter a todo');
const toDo = [' '];
while (task !== 'quit' && task !== 'q') {
  if (task === 'list') {
    console.log('*********************');
    for (let i = 0; i < toDo.length; i++) {
      console.log(`${i}: ${toDo[i]}`);
    }
    console.log('*********************');
  } else if (task === 'new') {
    const newTask = prompt('Okay, what is the new task?');
    toDo.push(newTask);
    console.log(`${newTask} added to list.`);
  }
  task = prompt('What would you like to do?');
}
console.log('Okay, you quit the app.');
