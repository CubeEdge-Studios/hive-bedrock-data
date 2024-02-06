import { GAME } from "../../games.types";
import { MonthlyLeaderboard } from "../api.types";

export type Path_SpecificMonthlyLeaderboard<
    G extends GAME,
    Y extends number,
    M extends number,
    A extends number,
    S extends number
> = `/game/monthly/${G}/${Y}/${M}/${A}/${S}`;
export type Route_SpecificMonthlyLeaderboard<G extends GAME> =
    MonthlyLeaderboard[G][];
