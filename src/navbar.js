import createHomePage from "./homePage";
import createProjectsPage from "./projectsPage";
import createToDoPage from "./todoPage";

function createNavbar() {
    const main = document.querySelector("#content");

    let div = document.createElement("div");
    div.classList = "navbar";
    main.appendChild(div);

    let div2 = document.createElement("div");
    div2.classList = "nav-home";
    div2.textContent = "Home";
    div.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList = "nav-projects";
    div3.textContent = "Projects";
    div.appendChild(div3);

    let div4 = document.createElement("div");
    div4.classList = "nav-todos";
    div4.textContent = "Todos";
    div.appendChild(div4);

    div2.addEventListener('click', () => {
        main.innerHTML = "";
        createNavbar();
        createHomePage();
    })

    div3.addEventListener('click', () => {
        main.innerHTML = "";
        createNavbar();
        createProjectsPage();
    })

    div4.addEventListener('click', () => {
        main.innerHTML = "";
        createNavbar();
        createToDoPage();
    })
}

export default createNavbar;