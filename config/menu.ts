import { FooterLinks, Menu } from "~/utils/config";

const navMenu = {
    _id: "base",
    nav: [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Directory",
            href: "/dir"
        },
        {
            label: "Sales",
            href: "/sales"
        },
        {
            label: "Support",
            href: "/support"
        }
    ],
    cta: {
        label: "Live Chat",
        href: "/live-chat"
    }
} as Menu;

const footerMenu = [
    {
        title: "Company",
        links: [
            {
                label: "Home",
                href: "https://blazedlabs.com/"
            },
            {
                label: "About",
                href: "https://blazedlabs.com/about"
            },
            {
                label: "Solutions",
                href: "https://blazedlabs.com/solutions"
            },
            {
                label: "Products",
                href: "https://blazedlabs.com/products"
            }
        ]
    },
    {
        title: "Community",
        links: [
            {
                label: "Developers",
                href: "https://blazed.dev/"
            },
            {
                label: "R&D",
                href: "https://blazed-space.github.io/"
            },
            {
                label: "City",
                href: "https://blazed.city/"
            }
        ]
    },
    {
        title: "Contact",
        links: [
            {
                label: "Directory",
                href: "/dir"
            },
            {
                label: "Sales Inquiries",
                href: "/sales"
            },
            {
                label: "Support",
                href: "/support"
            },
            {
                label: "Live Chat",
                href: "/live-chat"
            }
        ]
    }
] as FooterLinks[];

export {
    navMenu,
    footerMenu
};