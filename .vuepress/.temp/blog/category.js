export const categoryMap = {"tag":{"/":{"path":"/tags/","map":{"test":{"path":"/tags/test/","keys":["v-ba860320","v-610489c0","v-ea2bc074","v-3044e74c"]},"tag with space":{"path":"/tags/tag-with-space/","keys":["v-3044e74c"]},"中文标签":{"path":"/tags/%E4%B8%AD%E6%96%87%E6%A0%87%E7%AD%BE/","keys":["v-ea2bc074"]}}},"/zh/":{"path":"/zh/tags/","map":{}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
