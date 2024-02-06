import { GAME } from "../../games.types";
import { AllTimeLeaderboard } from "../api.types";

export type Path_AllTimeLeaderboard<G extends GAME> = `/game/all/${G}`;
export type Route_AllTimeLeaderboard<G extends GAME> = AllTimeLeaderboard[G][];
