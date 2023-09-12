<script setup type="ts">
    import { siteConfig } from '~/config/site';
    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} - ${siteConfig.name}` : siteConfig.name;
        },
        link: [
            {
                rel: "icon",
                href: "https://blazed.sirv.com/logo/Beaker-Cobalt.png?w=32&h=32"
            }
        ]
    })
</script>
<template>
    <div>
        <header>
           <Header />
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>