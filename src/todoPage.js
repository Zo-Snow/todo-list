import { openTodoList } from "./DOMfunctions";

function createToDoPage() {
    const main = document.querySelector("#content");

    const div = document.createElement("div");
    div.classList = "todo";
    main.appendChild(div);

    const h1 = document.createElement("h1");
    h1.classList = "todo-heading";
    h1.textContent = "To Do Lists";
    div.appendChild(h1);

    const div2 = document.createElement("div");
    div2.classList = "todo-items";
    div.appendChild(div2);

    const div3 = document.createElement("div");
    div3.classList = "todays-btn";
    div3.textContent = "Today";
    div2.appendChild(div3);

    const div4 = document.createElement("div");
    div4.classList = "upcoming-btn";
    div4.textContent = "Upcoming";
    div2.appendChild(div4);

    div3.addEventListener('click', () => {
        openTodoList("today");
    })

    div4.addEventListener('click', () => {
        openTodoList("upcoming");
    })

}

export default createToDoPage;