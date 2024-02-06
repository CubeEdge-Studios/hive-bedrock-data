import { AllTimeStatistics, MonthlyStatistics } from "./default.types";

interface Statistics_CTF {
  xp: number;
  played: number;
  victories: number;
  deaths: number;
  kills: number;
  assists: number;
  flags_captured: number;
  flags_returned: number;
}

export type AllTimeStatistics_CTF = AllTimeStatistics & Statistics_CTF;
export type MonthlyStatistics_CTF = MonthlyStatistics & Statistics_CTF;
export type AllTimeLeaderboard_CTF = AllTimeStatistics & Statistics_CTF;
export type MonthlyLeaderboard_CTF = MonthlyStatistics & Statistics_CTF;
