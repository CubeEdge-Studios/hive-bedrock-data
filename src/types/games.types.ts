export enum Game {
    HideAndSeek = "hide",
    DeathRun = "dr",
    TreasureWars = "wars",
    MurderMystery = "murder",
    SurvivalGames = "sg",
    Skywars = "sky",
    SkywarsKits = "sky-kits",
    SkywarsClassic = "sky-classic",
    CaptureTheFlag = "ctf",
    BlockDrop = "drop",
    GroundWars = "ground",
    JustBuild = "build",
    BlockParty = "party",
    TheBridge = "bridge",
    Gravity = "grav",
    BedWars = "bed",
    ParkourWorlds = "parkour",
}

export enum Game_Variant_Type {
    Regular = "REGULAR",
    Duos = "DUOS",
    Trios = "TRIOS",
    Squads = "SQUADS",
    Mega = "MEGA",
    Royale = "ROYALE",
}

export enum Game_Variant_Queue_Type {
    Default = "DEFAULT",
    SkillBased = "SKILL",
}

export interface Game_Variant {
    id: string;
    type: Game_Variant_Type;
    name: string;
    team_size: number;
    team_amount: number;
    limited: boolean;
    queue_type: Game_Variant_Queue_Type;
}

export interface Game_Data<G extends Game> {
    id: G;
    short_name: string;
    name: string;
    discontinued: boolean;

    description: string;
    icon_url: string;

    has_levels: boolean;
    max_level: number;
    can_prestige: boolean;
    max_prestige: number | null;
    level_increment: number;
    level_cap: number | null;
    level_multiplier?: number;

    colours: string[];

    modes: Game_Variant[];
}
