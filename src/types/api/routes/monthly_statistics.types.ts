import { GAME } from "../../games.types";
import { MonthlyStatistics } from "../api.types";

export type Path_MonthlyStatistics<
    G extends GAME | "all",
    P extends string
> = `/game/monthly/player/${G}/${P}`;
export type Route_MonthlyStatistics<G extends GAME | "all"> = G extends GAME
    ? MonthlyStatistics[G]
    : Route_MonthlyStatistics_All;

export type Route_MonthlyStatistics_All = {
    [key in GAME]: MonthlyStatistics[key];
};
