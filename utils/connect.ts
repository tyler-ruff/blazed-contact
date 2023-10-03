export interface SocialAccount{
    label: string;
    provider: string;
    url: string;
}
export interface SocialAccounts{
    facebook: SocialAccount[];
    twitter: SocialAccount[];
    linkedin: SocialAccount[];
    github: SocialAccount[];
    alignable: SocialAccount[];
    youtube: SocialAccount[];
    instagram: SocialAccount[];
}