const todos = document.querySelectorAll('.to-dos'); // list of our to do lists (mon, tue, wed, etc.)

const day = document.getElementById('monday');
const todoBar = document.getElementById('todo-bar');
const addBtn = document.getElementById('add-btn');

let dragged = null;




const addToDoItem = (item) => {
    // create a div w id list-item and add to monday column with item as content
    let div = document.createElement('div');
    div.classList.add('list-item');
    div.setAttribute('draggable', true);
    let text = document.createTextNode(item);
    div.appendChild(text);
    const deleteBtn = document.createElement('btn');
    deleteBtn.classList.add('delete')
    const deleteIcon = document.createTextNode('X');
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.addEventListener('click', (e)=> {
        e.preventDefault();

        e.target.parentNode.parentNode.removeChild(div);
    })
    div.appendChild(deleteBtn);
    div.addEventListener('drag', (e) => {
        e.preventDefault();

        // e.target should be the div.list-item
        let listItem = e.target;
        listItem.style.visibility = "hidden";
        dragged = listItem;
    })

    div.addEventListener('dragend', (e) => {
        let listItem = e.target;
        listItem.style.visibility = "";
    })
    day.appendChild(div);
}

addBtn.addEventListener('click', ( )=> {
    const todo = todoBar.value;
    addToDoItem(todo);
})

todos.forEach(todo => {
    todo.addEventListener('dragenter', (e) => {
        // e.preventDefault();
        // e.target.style.background = "blue";
        e.target.classList.add('dragover');
    })

    todo.addEventListener('dragleave', (e) => {
        // e.preventDefault();
        // e.target.style.background = "pink";
        e.target.classList.remove('dragover')
    })

    todo.addEventListener('dragover', (e) => {
    //    console.log(e.target) // target is div#day
    //    console.log(dragged) // dragged is the list item
       e.preventDefault();
       e.target.appendChild(dragged);
    })
})