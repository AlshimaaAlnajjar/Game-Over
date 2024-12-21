import { UI } from "./UI.js";

export class GameService {
    static options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '70fa188a58msh82881a8548b4b06p12691cjsn8024926284ee',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    static async getGames(category = "mmorpg") {
        try {
            UI.displayLoader(true);
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, this.options);
            const result = await response.json();
            UI.displayGames(result);
            UI.displayLoader(false);
        } catch (error) {
            console.error(error);
            UI.displayLoader(false);
        }
    }
}
