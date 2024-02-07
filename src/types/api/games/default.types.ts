export interface AllTimeStatistics {
    UUID: string;
    first_played: number;
}

export interface MonthlyStatistics {
    index: number;
    human_index: number;
    uncapped_xp?: number;
}

export interface AllTimeLeaderboard {
    index: number;
    human_index: number;
    UUID: string;
    username: string;
}

export interface MonthlyLeaderboard {
    index: number;
    human_index: number;
    UUID: string;
    username: string;
    uncapped_xp?: number;
}
