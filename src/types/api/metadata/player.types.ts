import { PlayerRank } from "../../enums";

export interface PlayerMetadata {
    UUID: string;
    xuid: number;

    username: string;
    username_cc: string;
    rank: PlayerRank;

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
    backblings: string[];
}

export interface PlayerMetadata_Nested {
    main: PlayerMetadata;
}

export interface PlayerMetadata_Avatar {
    url: string;
    name: string;
}
