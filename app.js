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
  } else if (task === 'delete') {
    const index = prompt(`OK, enter an index to delete:`);
    const deleted = toDo.splice(index, 1);
    console.log(`Ok, deleted ${deleted[0]}`);
  }
  task = prompt('What would you like to do?');
}
console.log('Okay, you quit the app.');

// Because Chrome acts strangely with prompts/alerts, you may also need to open the Chrome console first, and then open your .html page into that page (which has the already-opened console), and printing results should work better.
