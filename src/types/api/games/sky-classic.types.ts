import { Timeframe } from "../../enums";

interface Statistics_SKY_CLASSIC {
    xp: number;
    played: number;
    victories: number;
    kills: number;
    deaths: number;
    selected_kit: string;
}

interface Statistics_SKY_CLASSIC_AllTime extends Statistics_SKY_CLASSIC {
    UUID: string;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_SKY_CLASSIC_AllTime;
    [Timeframe.Monthly]: never;
}
export type SkyClassicStatistics<T extends Timeframe> = StatisticVariants[T];
