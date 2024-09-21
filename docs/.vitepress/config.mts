import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "orange-nckname的主页",
    description: "orange-nckname\'s Home Page",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Fabric Mod 开发笔记', link: '/FabricDocs/01-第一个物品' },
            { text: '课程表下载', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://onw.cc/1drv.ms?url=https://1drv.ms/x/s!Ar8BtB6LV-uigWw5udDXJTIOyLtV?e=PtEv4S' }
        ],

        sidebar: [
            {
                text: '物品',
                items: [{ text: '01-第一个物品', link: '/FabricDocs/01-第一个物品' },
                { text: '02-物品栏', link: '/FabricDocs/02-物品栏' },
                { text: '03-方块', link: '/FabricDocs/03-方块' }
                ],
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/orange-nckname' },
            {
                icon: { svg: "<svg viewBox='0 0 24 24' display='inline-block' vertical-align='middle' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' ><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 10a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm5-7l2 3m6-3l-2 3m-5 7v-2m6 0v2'/></svg>" },
                link: "https://space.bilibili.com/512129097"
            }
        ]
    }
})
