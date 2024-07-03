import { Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { Leaderboards } from "../api.types";

export type Response_SeasonLeaderboard<G extends Game> = Leaderboards<G, Timeframe.AllTime>[];

export type Route_SeasonLeaderboard<T extends string> =
    T extends `/game/season/${infer G}/${number}`
        ? G extends Game
            ? Response_SeasonLeaderboard<G>
            : never
        : never;
