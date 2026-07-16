let todoList = [ {
    item: 'Read NewsPaper',
    dueDate: '16/07/2026'
},
{
    item:'Go to College',
    dueDate: '20/07/2026'
}
];

displayItems();

function addToDo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
 let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate:todoDate});

    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}
function displayItems() {
    let containerElement = document.querySelector('.container');

    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let {item,dueDate} = todoList[i];
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class='btn-delete' onclick="todoList.splice(${i},1); displayItems();">
                Delete
            </button>
    
        `;
    }

    containerElement.innerHTML = newHtml;
}