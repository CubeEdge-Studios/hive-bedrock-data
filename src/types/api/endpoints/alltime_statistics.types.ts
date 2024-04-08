import { APIVersion, Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { SimpleSpread } from "../../utils";
import {
    AllStatistics,
    PlayerMetadata,
    PlayerMetadata_Title,
    Statistics,
} from "../api.types";

export interface Endpoint_AllTimeStatistics<G extends Game | "all" | "main"> {
    [APIVersion.None]: Endpoint_AllTimeStatistics_None<G>;
    [APIVersion.V_2024_03_29]: Endpoint_AllTimeStatistics_V_2024_03_29<G>;
    [APIVersion.latest]: Endpoint_AllTimeStatistics<G>[APIVersion.V_2024_03_29];
}

export type PlayerMetadata_2024_03_29 = SimpleSpread<
    PlayerMetadata,
    {
        hub_title_unlocked: PlayerMetadata_Title[];
        equipped_hub_title?: PlayerMetadata_Title;
    }
>;

type Endpoint_AllTimeStatistics_None<G extends Game | "all" | "main"> =
    G extends Game
        ? Statistics<G, Timeframe.AllTime>
        : G extends "all"
        ? AllStatistics<Timeframe.AllTime> & { player: PlayerMetadata }
        : G extends "main"
        ? PlayerMetadata
        : unknown;

type Endpoint_AllTimeStatistics_V_2024_03_29<G extends Game | "all" | "main"> =
    G extends Game
        ? Statistics<G, Timeframe.AllTime>
        : G extends "all"
        ? AllStatistics<Timeframe.AllTime> & {
              player: PlayerMetadata_2024_03_29;
          }
        : G extends "main"
        ? PlayerMetadata_2024_03_29
        : unknown;
