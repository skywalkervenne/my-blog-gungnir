export const data = JSON.parse("{\"key\":\"v-b345de12\",\"path\":\"/docs/plugins/intro.html\",\"title\":\"Plugins\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Plugins\",\"date\":\"2021-12-12T00:00:00.000Z\"},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":1,\"words\":131},\"filePathRelative\":\"docs/plugins/intro.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
