import { Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { Leaderboards } from "../api.types";

export type Response_SpecificMonthlyLeaderboard<G extends Game> = Leaderboards<
    G,
    Timeframe.Monthly
>[];

export type Route_SpecificMonthlyLeaderboard<T extends string> =
    T extends `/game/monthly/${infer G}/${number}/${number}/${number}/${number}`
        ? G extends Game
            ? Response_SpecificMonthlyLeaderboard<G>
            : never
        : never;
