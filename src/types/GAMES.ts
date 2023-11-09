export enum GAME {
    HideAndSeek = "hide",
    DeathRun = "dr",
    TreasureWars = "wars",
    MurderMystery = "murder",
    SurvivalGames = "sg",
    Skywars = "sky",
    CaptureTheFlag = "ctf",
    BlockDrop = "drop",
    GroundWars = "ground",
    JustBuild = "build",
    BlockParty = "party",
    TheBridge = "bridge",
    Gravity = "grav",
}

export enum GAME_MODE_TYPE {
    Regular = "REGULAR",
    Duos = "DUOS",
    Trios = "TRIOS",
    Squads = "SQUADS",
    Mega = "MEGA",
    Royale = "ROYALE",
}

export enum GAME_MODE_QUEUE_TYPE {
    Default = "DEFAULT",
    SkillBased = "SKILL",
}

export interface IGAME_MODE {
    id: string;
    type: GAME_MODE_TYPE;
    name: string;
    team_size: number;
    team_amount: number;
    limited: boolean;
    queue_type: GAME_MODE_QUEUE_TYPE;
}

export interface IGAME {
    id: GAME;
    short_name: string;
    name: string;

    description: string;
    icon_url: string;

    max_level: number;
    canPrestige: boolean;
    max_prestige: number | null;
    level_increment: number | null;
    level_cap: number | null;

    colours: string[];

    modes: IGAME_MODE[];
}
