export const data = JSON.parse("{\"key\":\"v-d5d13fc0\",\"path\":\"/tags/test/\",\"title\":\"test | Tags\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"test | Tags\",\"layout\":\"Tags\",\"blog\":{\"type\":\"category\",\"name\":\"test\",\"key\":\"tag\"}},\"excerpt\":\"\",\"headers\":[],\"filePathRelative\":null}")

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
