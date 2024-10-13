export function isValidYouTubeLink(url: string): boolean {
    const regex = /^(https?:\/\/)?(www\.)?youtube\.com\/@[\w-]+$/;
    return regex.test(url);
}

export function isValidFacebookLink(url: string): boolean {
    const regex = /^(https?:\/\/)?(www\.)?facebook\.com\/[\w-]+$/;
    return regex.test(url);
}

export function isValidGithubLink(url: string): boolean {
    const regex = /^(https?:\/\/)?(www\.)?github\.com\/[\w-]+$/;
    return regex.test(url);
}

export function isValidLinkedInLink(url: string): boolean {
    const regex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[\w-]+\/?$/;
    return regex.test(url);
}

export function isValidTwitterLink(url: string): boolean {
    const regex = /^(https?:\/\/)?(www\.)?(x\.com|twitter\.com)\/[\w-]+$/;
    return regex.test(url);
}