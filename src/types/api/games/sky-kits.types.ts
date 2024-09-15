import { Timeframe } from "../../enums";

interface Statistics_SKY_KITS {
    xp: number;
    played: number;
    victories: number;
    kills: number;
    deaths: number;
    mystery_chests_destroyed: number;
    ores_mined: number;
    spells_used: number;
    selected_kit: string;
}

interface Statistics_SKY_KITS_AllTime extends Statistics_SKY_KITS {
    UUID: string;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_SKY_KITS_AllTime;
    [Timeframe.Monthly]: never;
}
export type SkyKitsStatistics<T extends Timeframe> = StatisticVariants[T];
