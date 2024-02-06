import { AllTimeStatistics, MonthlyStatistics } from "./default.types";

interface Statistics_BRIDGE {
  xp: number;
  played: number;
  victories: number;
  deaths: number;
  goals: number;
  kills: number;
}

interface StatisticsAlt_BRIDGE {
  xp: number;
  m_solo_played: number;
  m_solo_victories: number;
  m_solo_kills: number;
  m_solo_deaths: number;
  m_solo_goals: number;
}

export type AllTimeStatistics_BRIDGE = AllTimeStatistics & Statistics_BRIDGE;
export type MonthlyStatistics_BRIDGE = MonthlyStatistics & StatisticsAlt_BRIDGE;
export type AllTimeLeaderboard_BRIDGE = AllTimeStatistics & Statistics_BRIDGE;
export type MonthlyLeaderboard_BRIDGE = MonthlyStatistics & Statistics_BRIDGE;
