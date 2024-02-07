import { Game } from "../../games.types";
import { MonthlyLeaderboard } from "../api.types";

export type Path_MonthlyLeaderboard<G extends Game> = `/game/monthly/${G}`;
export type Route_MonthlyLeaderboard<G extends Game> = MonthlyLeaderboard[G][];
