export interface DevLinkType {
    id: number,
    platFormName: PlatformValue,
    link: string,
}

export type PlatformName = "github" | "youtube" | "linkedin";
export type PlatformValue = PlatformName | "";

export interface PlatformLinkItem {
    name: string;
    icon: JSX.Element;
    validation: (url: string) => boolean;
}