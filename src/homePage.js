import createNavbar from "./navbar";
import createProjectsPage from "./projectsPage";
import createToDoPage from "./todoPage";




function createHomePage() {

    
    
    const main = document.querySelector("#content");

    const div = document.createElement("div");
    div.classList = "home";
    main.appendChild(div);

    const h1 = document.createElement("h1");
    div.classList = "heading";
    h1.innerHTML = '<div class="home-row">Home<img class="home-icon" src="./images/home.png" /><div/>';
    div.appendChild(h1);

    const div2 = document.createElement("div");
    div2.classList = "home-items";
    div.appendChild(div2);

    const div3 = document.createElement("div");
    div3.classList = "projects-btn";
    div3.textContent = "Projects";
    div2.appendChild(div3);

    const div4 = document.createElement("div");
    div4.classList = "todo-btn";
    div4.textContent = "Todo";
    div2.appendChild(div4);

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

export default createHomePage;