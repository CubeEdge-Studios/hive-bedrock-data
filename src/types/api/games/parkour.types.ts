import { Timeframe } from "../../enums";

type ParkourWorld = {
    [key: string]: ParkourCourse;
} & { parkour_stars: number };
type ParkourCourse = {
    best_run_time: number | null;
    best_checkpoint_times: ParkourCheckpoint;
    collected_stars: string[];
    course_stars: number;
};
type ParkourCheckpoint = {
    [key: string]: number;
};
interface Statistics_PARKOUR {
    parkours: {
        [key: string]: ParkourWorld;
    } & { total_stars: number };
}

interface Statistics_PARKOUR_AllTime extends Statistics_PARKOUR {
    UUID: string;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_PARKOUR_AllTime;
    [Timeframe.Monthly]: never;
}
export type ParkourStatistics<T extends Timeframe> = StatisticVariants[T];
