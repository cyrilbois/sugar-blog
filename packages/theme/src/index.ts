// override style
import './styles/index.scss'

// element-ui
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

// 引入时间线组件样式
import 'vitepress-markdown-timeline/dist/theme/index.css'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

// 图表渲染组件
import Mermaid from 'vitepress-plugin-mermaid/Mermaid.vue'
import BlogApp from './components/BlogApp.vue'
import { withConfigProvider } from './composables/config/blog'

// page
import TimelinePage from './components/TimelinePage.vue'
import UserWorksPage from './components/UserWorks.vue'

// 内置一些特殊的主题色
import './styles/theme/inline-theme.var.css'

export const BlogTheme: Theme = {
  ...DefaultTheme,
  Layout: withConfigProvider(BlogApp),
  enhanceApp(ctx) {
    enhanceAppWithTabs(ctx.app as any)
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('TimelinePage', TimelinePage)
    ctx.app.component('UserWorksPage', UserWorksPage)
    ctx.app.component('Mermaid', Mermaid as any)
  }
}

export * from './composables/config/index'

export default BlogTheme
