import { PlatformLinkItem, PlatformName } from "@/interface";
import { isValidGithubLink, isValidLinkedInLink, isValidYouTubeLink } from "@/utilities/linkValidation";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

export enum LinkBgColor {
    github = "bg-black",
    youtube = "bg-red-600",
    linkedin = "bg-indigo-600"
}

export const PlatformLinkPreviewDetails: Record<PlatformName, PlatformLinkItem> = {
    "github": {
        name: "GitHub",
        icon: < TbBrandGithubFilled size={18} color='white' />,
        validation: (url: string) => isValidGithubLink(url)
    },
    "youtube": {
        name: "YouTube",
        icon: <FaYoutube size={18} color='white' />,
        validation: (url: string) => isValidYouTubeLink(url)
    },
    "linkedin": {
        name: "Linkedin",
        icon: <FaLinkedin size={18} color='white' />,
        validation: (url: string) => isValidLinkedInLink(url)
    }
} as const;