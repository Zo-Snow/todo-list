import { newObj, deleteProject, createTodo, addTodo, deleteTodo, editTodo, toggleTodoStatus, createProject, editProjectTitle } from "./dataCRUDfunctions";
import createNavbar from "./navbar";

let theList = [];
let PBtnGotClickedFrom = "";
let TBtnGotClickedFrom = "";
let projectIndex = "";
let currentTodoToEdit = {};
let todoObject = newObj;
let todaysDate = "";

const displayProjects = () => {
    let obj = newObj;
    todoObject = obj
    
    const cards = document.querySelector(".project-cards");

    if (todoObject.projects.length != 0) {
      for (let i = 0; i < todoObject.projects.length; i++) {
        let div = document.createElement("div");
        div.classList = "card";
        div.textContent = todoObject.projects[i].title;
        cards.appendChild(div);

        let div2 = document.createElement("div");
        div2.classList = "trash";
        
        let div3 = document.createElement("div");
        div3.classList = "edit-title-name";

        div.appendChild(div3);
        div.appendChild(div2);
        }
        
    let trashButtons = document.querySelectorAll(".trash");
    let editTitleButtons = document.querySelectorAll(".edit-title-name");
    let cardsDiv = document.querySelector(".project-cards");
    let cardss = document.querySelectorAll(".card");
    let dialog = document.querySelector("#project-form");
    
    trashButtons.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            deleteProject(index);
            cardsDiv.innerHTML = "";
            displayProjects();  
            event.stopImmediatePropagation();
        })      
    })

    editTitleButtons.forEach((button, index) => { 
        button.addEventListener('click', (event) => {
            PBtnGotClickedFrom = "editProjectTitle";
            projectIndex = index;
            dialog.showModal();
            event.stopImmediatePropagation();
        })
    })

    cardss.forEach((card, index) => {
        card.addEventListener('click', () => {
            openProject(index);
        })
    })
   
    } else {
        let h2 = document.createElement("h2");
        h2.textContent = "Sorry, no projects to display.. Add a new project?";
        cards.appendChild(h2);
    }

    createAddProjectBtn(cards);
}

const createAddProjectBtn = (appendTo) => {
    let addProjectBtn = document.createElement("div");
    addProjectBtn.classList = "add-project-btn";
    addProjectBtn.textContent = "+"
    appendTo.appendChild(addProjectBtn);

    let dialog = document.querySelector("#project-form");

    addProjectBtn.addEventListener('click', () => {
        PBtnGotClickedFrom = "addProject";
        dialog.showModal();       
    })
}

let plusProjectBtn = document.querySelector(".plus-project-btn");

plusProjectBtn.addEventListener('click', () => {
    let cards = document.querySelector(".project-cards");
    let title = document.querySelector("#project-title").value;
    let form = document.querySelector(".project-form-element");
    let dialog = document.querySelector("#project-form");

    if (title != "") {
        cards.innerHTML = "";
        if (PBtnGotClickedFrom === "addProject") {
            createProject(title);    
        } else if (PBtnGotClickedFrom === "editProjectTitle") {
            editProjectTitle(projectIndex, title);
        }
        dialog.close();
        form.reset();
        displayProjects();
    }
})
const openProject = (index) => {
    let main = document.querySelector("#content");
    main.innerHTML = "";
    createNavbar();

    let h1 = document.createElement("h1");
    h1.classList = "heading";
    h1.textContent = todoObject.projects[index].title;
    main.appendChild(h1);

    displayTodos(main, todoObject.projects[index].projectTodos);
}

const openTodoList = (userSelection) => {
    let main = document.querySelector("#content");
    main.innerHTML = "";
    createNavbar();
    let currentList = [];

    let h1 = document.createElement("h1");
    h1.classList = "heading";

    if (userSelection === "today") {
        const today = new Date();
        const string = today.toDateString();
        const slicedToday = string.slice(0, 15);
        h1.textContent = slicedToday;
        todaysDate = slicedToday;
        currentList = todoObject.todays
    } else {
        h1.textContent = "Upcoming";
        currentList = todoObject.upcoming
    };
    main.appendChild(h1);
    displayTodos(main, currentList);
}

const displayTodos = (appendTo, todoList) => {

    if (todoList.length != 0) {
        for (let i = 0; i < todoList.length; i++) {
            let div = document.createElement("div");
            let checkStatus = "";
            let bgColor = "";
            if (todoList[i].status === true) {
                checkStatus = "checked";
            } else if (todoList[i].status === true) {
                checkStatus = "";
            }
            if (todoList[i].urgency === "high") {
                bgColor = "rgb(225, 132, 127)";
            } else if (todoList[i].urgency === "medium") {
                bgColor = "rgb(250, 250, 175)";
            } else if (todoList[i].urgency === "low") {
                bgColor = "white";
            }
            div.classList = "accordion";
            div.style.backgroundColor = bgColor;
            div.innerHTML = `<div class="accordion-expander">
                                    <input type="checkbox" class="accordion-input" ${checkStatus}/>
                                    <div class="accordion-btn">${todoList[i].title}</div> 
                                </div>
                                
                                <div class="accordion-content">
                                    <p class="todo-description">${todoList[i].description}</p>
                                    <p>Due Date: ${todoList[i].dueDate}</p>
                                    <p class="todo-urgency">Priority: ${todoList[i].urgency}</p>
                                    <div class="accordion-content-btns">
                                        <button class="delete-todo" type="button">Delete</button>
                                        <button class="edit-todo" type="button">Edit</button>
                                    </div>
                                </div>`
            appendTo.appendChild(div);            
        }
    } else {
        let h2 = document.createElement("h2");
        h2.textContent = "No tasks to display.. Add one?";
        appendTo.appendChild(h2);
    }   

    let deleteButtons = document.querySelectorAll(".delete-todo");

    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {

            let main = document.querySelector("#content");
            let currentH1Text = document.querySelector("h1").textContent;
            main.innerHTML = "";

            let newH1 = document.createElement("h1");
            newH1.classList = "heading";
            newH1.textContent = currentH1Text;

            deleteTodo(todoList, todoList[index]);
            createNavbar();
            main.appendChild(newH1);
            displayTodos(appendTo, todoList);
        })
    })

    let editButtons = document.querySelectorAll(".edit-todo");
    let dialog = document.querySelector("#todo-form");

    editButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            TBtnGotClickedFrom = "editTodo"
            currentTodoToEdit = todoList[index];
            dialog.showModal();
            theList = todoList;   
        }) 
    })

    let inputButtons = document.querySelectorAll(".accordion-input");

    inputButtons.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            toggleTodoStatus(todoList[index]);
            event.stopImmediatePropagation();
        })
    })

    let expanderButtons = document.querySelectorAll(".accordion-expander");

    expanderButtons.forEach((button) => {
        button.addEventListener('click', () => {
            button.classList.toggle('accordion-expander-active');
        })
    })

    createAddTodoBtn(appendTo, todoList);
}

const createAddTodoBtn = (appendTo, currentList) => {
    const btn = document.createElement("div");
    btn.classList = "add-todo-btn";
    btn.textContent = "+"
    appendTo.appendChild(btn);

    let dialog = document.querySelector("#todo-form");

    btn.addEventListener('click', () => {
        TBtnGotClickedFrom = "addTodo"
        dialog.showModal();
        theList = currentList;
    })
}

let plusTodoButton = document.querySelector(".plus-todo-btn");

plusTodoButton.addEventListener('click', () => {
    let title = document.querySelector("#title").value;
    let des = document.querySelector("#description").value;
    let date = document.querySelector("#date").value;
    let level = document.querySelector('input[name="urgency"]:checked').value;
    let form = document.querySelector(".tasks-form");
    let dialog = document.querySelector("#todo-form");

    if (title != "" && des != "" && date != "") {
        let currentH1Text = document.querySelector("h1").textContent;
        let main = document.querySelector("#content");
        main.innerHTML = "";

        let newH1 = document.createElement("h1");
        newH1.classList = "heading";
        newH1.textContent = currentH1Text;
        createNavbar();

        main.appendChild(newH1);

        if (TBtnGotClickedFrom === "addTodo") {
            if (newH1.textContent === todaysDate) {
                date = "Today";
            } 
            let newTodo = createTodo(title, des, date, level);
            addTodo(theList, newTodo);    
        } else if (TBtnGotClickedFrom === "editTodo") {
            if (newH1.textContent === todaysDate) {
                date = "Today";
            } 
            editTodo(currentTodoToEdit, title, des, date, level);     
        }
        dialog.close();
        form.reset();
        displayTodos(main, theList);
    }    
})

export { displayProjects, openProject, openTodoList } ;