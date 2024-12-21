import { UI } from "./UI.js";
import { GameService } from "./Game.js";

UI.displayCategories();

const navLinks = document.querySelectorAll(".nav-link");
navLinks[0].classList.add("active");
GameService.getGames();

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
        GameService.getGames(this.innerHTML);
    });
});
