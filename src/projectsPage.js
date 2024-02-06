import { displayProjects } from "./DOMfunctions";
 
function createProjectsPage() {
    const main = document.querySelector("#content");

    const div = document.createElement("div");
    div.classList = "projects";
    main.appendChild(div);

    const h1 = document.createElement("h1");
    h1.classList = "heading";
    h1.textContent = "Projects";
    div.appendChild(h1);

    const div2 = document.createElement("div");
    div2.classList = "project-cards";
    div.appendChild(div2);

    displayProjects();
}

export default createProjectsPage;