import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "orange-nckname的主页",
    description: "orange-nckname\'s Home Page",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '快速开始', link: './FabricDocs/01-第一个物品' },
        ],

        sidebar: [
            {
                text: '物品',
                items: [{ text: '01-第一个物品', link: './01-第一个物品' },
                { text: '02-物品栏', link: './02-物品栏' },
                { text: '03-方块', link: './03-方块' }
                ],
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/orange-nckname' }
        ]
    }
})
