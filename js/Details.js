import { UI } from "./UI.js";

export class DetailsService {
    static options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '70fa188a58msh82881a8548b4b06p12691cjsn8024926284ee',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    static async getDetails(id) {
        try {
            UI.displayLoader(true); // Show loader
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, this.options);
            const game = await response.json();
            UI.displayDetails(game); // Display game details
            UI.displayLoader(false); // Hide loader
        } catch (error) {
            console.error("Error fetching game details:", error);
            UI.displayLoader(false); // Ensure loader is hidden on error
        }
    }
}
