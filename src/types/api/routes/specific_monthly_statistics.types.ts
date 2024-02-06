import { GAME } from "../../games.types";
import { MonthlyStatistics } from "../api.types";

export type Path_SpecificMonthlyStatistics<
    G extends GAME | "all",
    P extends string,
    Y extends number,
    M extends number
> = `/game/monthly/player/${G}/${P}/${Y}/${M}`;
export type Route_SpecificMonthlyStatistics<G extends GAME | "all"> =
    G extends GAME ? MonthlyStatistics[G] : Route_SpecificMonthlyStatistics_All;

export type Route_SpecificMonthlyStatistics_All = {
    [key in GAME]: MonthlyStatistics[key];
};
