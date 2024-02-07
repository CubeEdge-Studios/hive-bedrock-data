import { Game } from "../../games.types";

export interface GlobalStatisticsMetadata {
    unique_players: GlobalStatisticsMetadata_UniquePlayers;
}

export type GlobalStatisticsMetadata_UniquePlayers = {
    [G in Game]: number;
} & {
    global: number;
    main: number;
};
