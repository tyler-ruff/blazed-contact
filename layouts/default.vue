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
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    *::-webkit-scrollbar{
        width:10px;
    }

    *::-webkit-scrollbar-track{
        background:#727a8a;
    }

    *::-webkit-scrollbar-thumb{
        background-color:#afb4bd;
        border-radius:20px;
        border:1px solid #5b626e;
    }

    *::-webkit-scrollbar-thumb:hover{
        background-color:#5b626e;
    }

    ::selection{
        background: rgba(0, 0, 23, 0.8);
        color: rgba(255,255,255,0.7);
    }

    ::-moz-selection{
        background: rgba(0, 0, 23, 0.8);
        color: rgba(255,255,255,0.7);
    }
</style>