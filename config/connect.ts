import { socialConfig } from '@/config/site';

import { SocialAccounts, SocialAccount } from "~/utils/connect";

const socialDirectory = {
    facebook: [
        {
            label: "Blazed Labs (Page)",
            provider: "Facebook",
            url: socialConfig.facebook
        } as SocialAccount,
        {
            label: "Blazed Nation (Page)",
            provider: "Facebook",
            url: "https://www.facebook.com/blznation"
        } as SocialAccount,
        {
            label: "Blazed Development (Group)",
            provider: "Facebook",
            url: "https://www.facebook.com/groups/blzdev"
        } as SocialAccount,
        {
            label: "Blazed National Forum (Group)",
            provider: "Facebook",
            url: "https://www.facebook.com/groups/blazedforum"
        } as SocialAccount,
    ]
} as SocialAccounts