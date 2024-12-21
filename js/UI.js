import { DetailsService } from "./Details.js";

export class UI {
   static displayCategories() {
      const navbar = document.querySelector(".navbar-nav");
       const categories = ["Mmorpg", "Shooter", "Sailing", "Permadeath", "Superhero", "Pixel"];
       let cartona = '';
       for (let category of categories) {
           cartona += `
               <li class="nav-item">
                   <a role="button" class="nav-link text-uppercase">${category.toUpperCase()}</a>
               </li>`;
       }
       navbar.innerHTML = cartona;
   }

   static displayLoader(isLoading) {
       const spinner = document.getElementById("spinner");
       if (isLoading) {
           spinner.classList.replace("d-none", "d-flex");
       } else {
           spinner.classList.replace("d-flex", "d-none");
       }
   }

   static displayGames(data) {
       let gameCartona = '';
       for (let game of data) {
           gameCartona += `
               <div class="col">
                   <div class="card h-100 bg-transparent" role="button" data-game-id="${game.id}">
                       <div class="card-body">
                           <figure class="position-relative">
                               <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}">
                           </figure>
                           <figcaption>
                               <div class="hstack justify-content-between">
                                   <h3 class="h6 small">${game.title}</h3>
                                   <span class="badge text-bg-primary p-2">Free</span>
                               </div>
                               <p class="card-text small text-center opacity-50">
                                   ${game.short_description.split(' ').slice(0, 8).join(',')}
                               </p>
                           </figcaption>
                       </div>
                       <footer class="card-footer small hstack justify-content-between">
                           <span class="badge badge-color">${game.genre}</span>
                           <span class="badge badge-color">${game.platform}</span>
                       </footer>
                   </div>
               </div>`;
       }

       document.getElementById("gamesData").innerHTML = gameCartona;

       document.querySelectorAll('.card').forEach(card => {
           card.addEventListener('click', () => {
               const gameId = card.getAttribute('data-game-id');
               document.getElementById('home').classList.add('d-none');
               document.getElementById('details').classList.remove('d-none');
               DetailsService.getDetails(gameId);
           });
       });
   }

   static displayDetails(game) {
      console.log(game)
      const cartona = `
          <div class="col-md-4">
              <img src="${game.thumbnail}" class="w-100" alt="image details">
          </div>
          <div class="col-md-8">
              <h3>Title: ${game.title}</h3>
              <p>Category: <span class="badge text-bg-info">${game.genre}</span></p>
              <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
              <p>Status: <span class="badge text-bg-info">${game.status}</span></p>
              <p class="small">${game.description}</p>
              <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
          </div>`;
  
      document.getElementById('detailsContent').innerHTML = cartona;
  
      const closeButton = document.getElementById("btnClose");
      closeButton.addEventListener('click', () => {
          document.getElementById('details').classList.add('d-none');
          document.getElementById('home').classList.remove('d-none');
      });
  }
  
}
