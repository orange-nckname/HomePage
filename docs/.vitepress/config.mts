import { defineConfig } from 'vitepress'

const base = "HomePage";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base,
    title: "FabricDocs",
    description: "Fabric Docs",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '快速开始', link: '${base}01-第一个物品' },
        ],

        sidebar: [
            {
                text: '物品',
                items: [{ text: '01-第一个物品', link: '${base}01-第一个物品' },
                { text: '02-物品栏', link: '${base}02-物品栏' },
                { text: '03-方块', link: '${base}03-方块' }
                ],
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
    }
})
