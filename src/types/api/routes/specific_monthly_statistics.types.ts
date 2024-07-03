import { Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { Statistics } from "../api.types";

export type Response_SpecificMonthlyStatistics<G extends Game | "all"> = G extends Game
    ? Statistics<G, Timeframe.Monthly>
    : G extends "all"
    ? Response_SpecificMonthlyStatistics_All
    : never;

export type Route_SpecificMonthlyStatistics<T extends string> =
    T extends `/game/monthly/${infer G}/${string}/${number}/${number}`
        ? G extends Game | "all"
            ? Response_SpecificMonthlyStatistics<G>
            : never
        : never;

interface MonthlyStatisticsBase {
    index: number;
    human_index: number;
    username: string;
}

type Response_SpecificMonthlyStatistics_All = {
    [key in Game]: Statistics<key, Timeframe.Monthly> | MonthlyStatisticsBase;
};
