import { GAME } from "../../games.types";

export interface GlobalStatisticsMetadata {
    unique_players: GlobalStatisticsMetadata_UniquePlayers;
}

export type GlobalStatisticsMetadata_UniquePlayers = {
    [G in GAME]: number;
} & {
    global: number;
    main: number;
};
