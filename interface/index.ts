export interface linkDetail {
    id: number,
    platFormName: PlatformName,
    link: string;
}

export type PlatformName = "github" | "youtube" | "linkedin" | "";