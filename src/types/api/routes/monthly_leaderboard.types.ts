import { Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { Leaderboards } from "../api.types";

export type Response_MonthlyLeaderboard<G extends Game> = Leaderboards<G, Timeframe.Monthly>[];

export type Route_MonthlyLeaderboard<T extends string> = T extends `/game/monthly/${infer G}`
    ? G extends Game
        ? Response_MonthlyLeaderboard<G>
        : never
    : never;
