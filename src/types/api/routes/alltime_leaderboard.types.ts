import { Game } from "../../games.types";
import { AllTimeLeaderboard } from "../api.types";

export type Path_AllTimeLeaderboard<G extends Game> = `/game/all/${G}`;
export type Route_AllTimeLeaderboard<G extends Game> = AllTimeLeaderboard[G][];
