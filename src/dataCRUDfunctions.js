import sampleObject from "./data";

if (localStorage.length === 0) {
    localStorage.setItem("todoObject", JSON.stringify(sampleObject));
} 

let todoObject = JSON.parse(localStorage.getItem("todoObject"));
let newObj = todoObject;

const createProject = (projectTitle) => {
    let newProject = {title: projectTitle,
                      projectTodos: []}
    newObj.projects.push(newProject);
    newObj = newObj;
    
    console.log("hello!");
        console.log(newObj);
        localStorage.setItem("todoObject", JSON.stringify(newObj));
    console.log("hello!");
}

const deleteProject = (projectIndex) => {
    newObj.projects.splice(projectIndex, 1);

    localStorage.setItem("todoObject", JSON.stringify(newObj));

}

const editProjectTitle = (projectIndex, inputTitle) => {
    let newTitle = inputTitle;
    newObj.projects[projectIndex].title = newTitle;

    localStorage.setItem("todoObject", JSON.stringify(newObj));

}

const addTodo = (ListToAddTo, todoToAdd) => {
    ListToAddTo.push(todoToAdd);

    localStorage.setItem("todoObject", JSON.stringify(newObj));
}

const deleteTodo = (deleteFromList, todoIndex) => {
    deleteFromList.splice(todoIndex, 1);

    localStorage.setItem("todoObject", JSON.stringify(newObj));
}

const createTodo = (title, description, dueDate, urgency) => {
    let todoTitle = title;
    let todoDescription = description;
    let todoDueDate = dueDate;
    let todoUrgency = urgency

    return {title: todoTitle, dueDate: todoDueDate, description: todoDescription, urgency: todoUrgency, status: false};
}

const editTodo = (todoToEdit, newTitle, newDescription, newDate, newUrgency) => {
    let currentTodo = todoToEdit;

    currentTodo.title = newTitle;
    currentTodo.description = newDescription;
    currentTodo.dueDate = newDate;
    currentTodo.urgency = newUrgency;

    localStorage.setItem("todoObject", JSON.stringify(newObj));
    
}

const toggleTodoStatus = (todoToToggle) => {
    todoToToggle.status = !todoToToggle.status;
    localStorage.setItem("todoObject", JSON.stringify(newObj));
} 

export { newObj, createProject, deleteProject, editProjectTitle, createTodo, addTodo, deleteTodo, editTodo, toggleTodoStatus }