# Hive Bedrock Data

A repo to store and calculate data and type definitions from The Hive: Bedrock Edition server. This includes infomation for each game avaliable on the server, helper functions to calulate different game statistic infomation and type definitions for the public API.

## Games

This repo contains metadata infomationm for each game, including content, statistical and game variant infomation.

This is an example of the data return for The Bridge:

```ts
Games[Game.TheBridge] = {
    id: Game.TheBridge,
    short_name: "BRIDGE",
    name: "The Bridge",

    description: "Bridge to victory in this fast-paced PvP game.",
    icon_url: IMAGE_CDN + "/icons/hub/games/bridge.png",

    max_level: 20,
    can_prestige: false,
    max_prestige: null,
    level_increment: 300,
    level_cap: null,
    level_multiplier: 1.08,

    colours: ["#7a4b4f", "#d05548", "#1a90d6", "#0d5196", "#8f9e9e"],

    modes: [
        {
            id: "bridge",
            type: Game_Variant_Type.Regular,
            name: "Solos",
            team_size: 1,
            team_amount: 2,
            limited: false,
            queue_type: Game_Variant_Queue_Type.SkillBased,
        },
        {
            id: "bridge-duos",
            type: Game_Variant_Type.Duos,
            name: "Duos",
            team_size: 2,
            team_amount: 2,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
};
```

## Math Calculations

This repo contains functions to get levels and other statistical infomation.

```ts
// calculates the level from a given xp and game_id
function calculateLevelFromXP(xp: number, game_id: Game): number | null;

// claculates the total xp from a given level and game_id
function calculateXPFromLevel(level: number, game_id: Game): number | null;

// calculates the percentage complete of a game based on the xp amounts from a given xp and game_id
function calculatePercentageComplete(xp: number, game_id: Game): number;

// calculates the percentage of the current level from a given xp and game_id
function calculateLevelPercentageComplete(xp: number, game_id: Game): number;

// calculates the total xp amount for a given level and game_id
function calculateLevelXP(level: number, game_id: Game): number | null;

// calculates if a player has reached max level given a xp amount and game_id
function hasCompleted(xp: number, game_id: Game): boolean;
```

## API Type Definitions

This repo has type definitions for the different routes on the public api.

```ts
Routes<"/game/all/sky"> = Response_AllTimeLeaderboard<Game.SkyWars>;
```
