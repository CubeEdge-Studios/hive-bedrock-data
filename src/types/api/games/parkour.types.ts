import { Timeframe } from "../../enums";

interface Statistics_PARKOUR {
    parkours: {
        [key: string]: {
            [key: string]: {
                best_run_time: number | null;
                best_checkpoint_times: {
                    [key: string]: number;
                };
            };
        } & { parkour_stars: number; collected_stars: string[] };
    } & { total_stars: number };
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_PARKOUR & { UUID: string };
}
export type ParkourStatistics<T extends Timeframe> = T extends Timeframe.AllTime
    ? StatisticVariants[T]
    : unknown;
