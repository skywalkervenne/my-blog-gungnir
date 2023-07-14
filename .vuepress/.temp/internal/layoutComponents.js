import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/9_Auto_backup/0_Me/blog/my-blog-gungnir/node_modules/vuepress-theme-gungnir/lib/client/layouts/404.vue")),
  "HomePage": defineAsyncComponent(() => import("D:/9_Auto_backup/0_Me/blog/my-blog-gungnir/node_modules/vuepress-theme-gungnir/lib/client/layouts/HomePage.vue")),
  "Layout": defineAsyncComponent(() => import("D:/9_Auto_backup/0_Me/blog/my-blog-gungnir/node_modules/vuepress-theme-gungnir/lib/client/layouts/Layout.vue")),
  "Links": defineAsyncComponent(() => import("D:/9_Auto_backup/0_Me/blog/my-blog-gungnir/node_modules/vuepress-theme-gungnir/lib/client/layouts/Links.vue")),
  "Post": defineAsyncComponent(() => import("D:/9_Auto_backup/0_Me/blog/my-blog-gungnir/node_modules/vuepress-theme-gungnir/lib/client/layouts/Post.vue")),
  "Tags": defineAsyncComponent(() => import("D:/9_Auto_backup/0_Me/blog/my-blog-gungnir/node_modules/vuepress-theme-gungnir/lib/client/layouts/Tags.vue")),
}
