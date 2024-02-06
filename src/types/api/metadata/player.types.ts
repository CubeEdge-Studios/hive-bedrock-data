export interface PlayerMetadata {
    UUID: string;
    xuid: number;

    username: string;
    username_cc: string;
    rank: PlayerMetadata_Rank;

    first_played: number;
    daily_login_streak?: number;
    longest_daily_login_streak?: number;

    quest_count?: number;
    friend_count?: number;

    hub_title_count: number;
    hub_title_unlocked?: string[];
    equipped_hub_title?: string;

    avatar_count: number;
    avatar_unlocked?: PlayerMetadata_Avatar[];
    equipped_avatar?: PlayerMetadata_Avatar;

    costume_count: number;
    costume_unlocked?: string[];
    equipped_costume?: string;

    pets: string[];
    mounts: string[];
    hats: string[];
    backblinds: string[];
}

export interface PlayerMetadata_Nested {
    main: PlayerMetadata;
}

export interface PlayerMetadata_Avatar {
    url: string;
    name: string;
}

export enum PlayerMetadata_Rank {
    Regular = "REGULAR",
    Plus = "PLUS",
    Youtuber = "YOUTUBER",
    Streamer = "STREAMER",
    Tiktok = "TIKTOK",
    VIP = "VIP",
    Helper = "HELPER",
    Moderator = "MODERATOR",
    Hive = "HIVE_TEAM",
    StaffManager = "STAFF_MANAGER",
    CommunityManager = "COMMUNITY_MANAGER",
    Owner = "OWNER",
}
