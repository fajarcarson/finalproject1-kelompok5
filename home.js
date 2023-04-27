function hover_card(me) {
    me.style.transform = "scale(1.05)";
    me.style.boxShadow = "0 .5rem 2rem rgb(109, 196, 224)";
    me.style.transition = "1s";
}

function out_card(me) {
    me.style.transform = "scale(1)";
    me.style.boxShadow = "0 .5rem 2rem rgba(0,0,0,.15)";
    me.style.transition = "1s";
}

let popup = document.getElementById("xPopup");

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

// NEWS UPDATE USE FILTER
const dated = [1,5,10,15,25,30];

document.getElementById("blog-updatee").innerHTML = dated.filter(checkDate);

function checkDate(item) {
  return item >= 4;
}


/** todos **/
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items');

let todos = [];

todoForm.addEventListener('submit', function (event) {
    // prevent the page from reloading when submitting the form
    event.preventDefault();
    addTodo(todoInput.value); // call addTodo function with input box current value
});

function addTodo(item) {
    if (item !== '') {
        const todo = {
            id: Date.now(),
            name: item,
            completed: false
        };

        todos.push(todo);
        addToLocalStorage(todos); // then store it in localStorage

        todoInput.value = '';
    }
}

function renderTodos(todos) {
    todoItemsList.innerHTML = '';

    todos.forEach(function (item) {
        const checked = item.completed ? 'checked' : null;

        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);
        if (item.completed === true) {
            li.classList.add('checked');
        }

        li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
        todoItemsList.append(li);
    });

}

function addToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
}

function getFromLocalStorage() {
    const reference = localStorage.getItem('todos');
    if (reference) {
        todos = JSON.parse(reference);
        renderTodos(todos);
    }
}

function toggle(id) {
    todos.forEach(function (item) {
        if (item.id == id) {
            item.completed = !item.completed;
        }
    });

    addToLocalStorage(todos);
}

function deleteTodo(id) {
    todos = todos.filter(function (item) {
        return item.id != id;
    });

    addToLocalStorage(todos);
}

getFromLocalStorage();

todoItemsList.addEventListener('click', function (event) {
    if (event.target.type === 'checkbox') {
        toggle(event.target.parentElement.getAttribute('data-key'));
    }

    if (event.target.classList.contains('delete-button')) {
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
});

