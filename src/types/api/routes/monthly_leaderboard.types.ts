import { GAME } from "../../games.types";
import { MonthlyLeaderboard } from "../api.types";

export type Path_MonthlyLeaderboard<G extends GAME> = `/game/monthly/${G}`;
export type Route_MonthlyLeaderboard<G extends GAME> = MonthlyLeaderboard[G][];
