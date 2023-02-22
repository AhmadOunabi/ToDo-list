let input = document.querySelector('#input');
let btn = document.querySelector('#button-addon2');
let tasks = document.querySelector('#list');
let dele= document.querySelector('#delete');

arrayOfTasks = [];

btn.onclick = function one () {
    if (input.value !== '') {
        addTaskToArray(input.value);
        input.value = '';
    }
}

function addTaskToArray(text) {

    const task = {
        id: Date.now(),
        value: text,
        complete: false
    };

    arrayOfTasks.push(task);
    addElements(arrayOfTasks);

};

function addElements(arrayOfTasks) {
    arrayOfTasks.forEach((task) => {
        if (task.complete === false) {
            let div = document.createElement('div');
            div.className = 'task'
            div.setAttribute('id', task.id);
            div.appendChild(document.createTextNode(task.value));
            let span = document.createElement('div');
            span.className = 'del';
            span.appendChild(document.createTextNode('DELETE'))
            dele.appendChild(span);
            tasks.appendChild(div);
            task.complete = true;
        }
    })
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      btn.onclick();
    }
  });