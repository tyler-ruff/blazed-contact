import { brandConfig } from '@/config/site';

import { Emails, Telephones, Websites } from '@/utils/contact';

const contactEmails = {
    main: brandConfig.email,
    sales: "sales@blazed.space",
    support: "support@blazed.space",
    systems: "hello@blazed.systems",
    telecom: "hello@blazed.tel",
    publishing: "hello@blazed.xyz",
    pm: "hello@blazed.quest"
} as Emails;

const contactTelephones = {
    main: brandConfig.telephone,
    management: "+18338870061",
    publishing: "+18882008103",
    telecom: "+18559764121",
    marketing: "+19088679329",
    systems: "+19292071810"
} as Telephones;

const websitesDirectory = {
    main: "https://blazedlabs.com/",
    corporate: "https://blazed.company/",
    developers: "https://blazed.dev/",
    community: "https://blazed.city/",
    telecom: "https://blazed.tel/",
    cloud: "https://blazed.systems/",
    publishing: "https://blazed.xyz/",
    planning: "https://blazed.quest/",
    social: "https://blz.one/",
    marketing: "https://beez.top/",
    management: "https://ruff-manage.com/",
    logistics: "https://rtmtransit.com/"
} as Websites;

export {
    contactEmails,
    contactTelephones,
    websitesDirectory
};