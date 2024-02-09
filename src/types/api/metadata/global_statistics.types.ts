import { Game } from "../../games.types";

export interface GlobalStatisticsMetadata {
    unique_players: GlobalStatisticsMetadata_UniquePlayers;
}

type GlobalStatisticsMetadata_UniquePlayers = {
    [G in Game]: number;
} & {
    global: number;
    main: number;
};
