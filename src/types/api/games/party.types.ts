import { AllTimeStatistics, MonthlyStatistics } from "./default.types";

interface Statistics_PARTY {
  xp: number;
  played: number;
  victories: number;
  powerups_collected: number;
  rounds_survived: number;
}

export type AllTimeStatistics_PARTY = AllTimeStatistics & Statistics_PARTY;
export type MonthlyStatistics_PARTY = MonthlyStatistics & Statistics_PARTY;
export type AllTimeLeaderboard_PARTY = AllTimeStatistics & Statistics_PARTY;
export type MonthlyLeaderboard_PARTY = MonthlyStatistics & Statistics_PARTY;