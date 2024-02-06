export interface AllTimeStatistics {
    UUID: string;
    first_played: number;
}

export interface MonthlyStatistics {
    index: number;
    human_index: number;
    uncapped_xp?: number;
}