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

export interface GAME_ALT {
    [GAME.HideAndSeek]: "HIDE";
    [GAME.DeathRun]: "DR";
    [GAME.TreasureWars]: "WARS";
    [GAME.MurderMystery]: "MURDER";
    [GAME.SurvivalGames]: "SG";
    [GAME.Skywars]: "SKY";
    [GAME.CaptureTheFlag]: "CTF";
    [GAME.BlockDrop]: "DROP";
    [GAME.GroundWars]: "GROUND";
    [GAME.JustBuild]: "BUILD";
    [GAME.BlockParty]: "PARTY";
    [GAME.TheBridge]: "BRIDGE";
    [GAME.Gravity]: "GRAV";
}

export interface GAME_NAME {
    [GAME.HideAndSeek]: "Hide And Seek";
    [GAME.DeathRun]: "Deathrun";
    [GAME.TreasureWars]: "Treasure Wars";
    [GAME.MurderMystery]: "Murder Mystery";
    [GAME.SurvivalGames]: "Survival Games";
    [GAME.Skywars]: "SkyWars";
    [GAME.CaptureTheFlag]: "Capture The Flag";
    [GAME.BlockDrop]: "Block Drop";
    [GAME.GroundWars]: "Ground Wars";
    [GAME.JustBuild]: "Just Build";
    [GAME.BlockParty]: "Block Party";
    [GAME.TheBridge]: "The Bridge";
    [GAME.Gravity]: "Gravity";
}

export interface GAME_NAME_ALT {
    [GAME.HideAndSeek]: "HideAndSeek";
    [GAME.DeathRun]: "Deathrun";
    [GAME.TreasureWars]: "TreasureWars";
    [GAME.MurderMystery]: "MurderMystery";
    [GAME.SurvivalGames]: "SurvivalGames";
    [GAME.Skywars]: "SkyWars";
    [GAME.CaptureTheFlag]: "CaptureTheFlag";
    [GAME.BlockDrop]: "BlockDrop";
    [GAME.GroundWars]: "GroundWars";
    [GAME.JustBuild]: "JustBuild";
    [GAME.BlockParty]: "BlockParty";
    [GAME.TheBridge]: "TheBridge";
    [GAME.Gravity]: "Gravity";
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
    level_increment: number;
    level_cap: number | null;
    level_multiplier?: number;

    colours: string[];

    modes: IGAME_MODE[];
}
