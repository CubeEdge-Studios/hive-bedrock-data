import { Game } from "../../games.types";
import { MonthlyStatistics } from "../api.types";
import { MonthlyStatistics as MonthlyStatisticsBase } from "../games/default.types";

export type Path_SpecificMonthlyStatistics<
    G extends Game | "all",
    P extends string,
    Y extends number,
    M extends number
> = `/game/monthly/player/${G}/${P}/${Y}/${M}`;
export type Route_SpecificMonthlyStatistics<G extends Game | "all"> =
    G extends Game
        ? MonthlyStatistics[G]
        : G extends "all"
        ? Route_SpecificMonthlyStatistics_All
        : unknown;

export type Route_SpecificMonthlyStatistics_All = {
    [key in Game]: MonthlyStatistics[key] | MonthlyStatisticsBase;
};
