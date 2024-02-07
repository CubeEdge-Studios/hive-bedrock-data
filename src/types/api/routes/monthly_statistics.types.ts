import { Game } from "../../games.types";
import { MonthlyStatistics } from "../api.types";

export type Path_MonthlyStatistics<
    G extends Game | "all",
    P extends string
> = `/game/monthly/player/${G}/${P}`;
export type Route_MonthlyStatistics<G extends Game | "all"> = G extends Game
    ? MonthlyStatistics[G]
    : G extends "all"
    ? Route_MonthlyStatistics_All
    : unknown;

export type Route_MonthlyStatistics_All = {
    [key in Game]: MonthlyStatistics[key];
};
