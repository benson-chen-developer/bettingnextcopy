import Cookies from 'universal-cookie';
const cookies = new Cookies();

export type LoadedObj = {
    league: string, 
    loaded: boolean
}

// export type LoadedGamesCookie = {
//     games: Game[],
//     loadeds: LoadedObj[]
// }

// export const setLoadedGamesCookie = (games: Game[], loaded: LoadedObj[]) => {
//     const data = { games, loadeds: loaded };
//     cookies.set("LoadedGames", JSON.stringify(data), {
//         path: '/',
//         maxAge: 30 * 24 * 60 * 60 // 30 days
//     });
//     console.log("Cookie set:", cookies.get("LoadedGames"));
// }; 

// export const getLoadedGamesCookie = (): LoadedGamesCookie => {
//     const cookieValue = cookies.get("LoadedGames");
//     console.log('Cookie get:', cookieValue); // Added for debugging
//     return cookieValue;
// };