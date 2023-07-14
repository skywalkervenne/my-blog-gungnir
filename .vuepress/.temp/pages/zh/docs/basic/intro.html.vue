<template><div><p><a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/v2" target="_blank" rel="noopener noreferrer">Gungnir v2</a> 是一个基于 <a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">Vuepress 2</a> 的博客主题。</p>
<p>
  <a href="https://www.npmjs.com/package/vuepress-theme-gungnir/v/next" target="_blank">
    <img src="https://img.shields.io/npm/v/vuepress-theme-gungnir/next.svg?style=flat-square&logo=npm" style="display: inline; margin: 0 4px 0 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Gungnir-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0 4px 0 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/renovamen.github.io/blob/master/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
  <a href="https://github.com/vuepress/awesome-vuepress/blob/main/v2.md#themes" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/sindresorhus/awesome@a7b5b7805ecc00b3396acb35022cf6e2c0699e03/media/badge-flat.svg" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
</p>
<p><img src="/img/docs/gungnir.jpg" alt="theme-gungnir"></p>
<h2 id="演示站点" tabindex="-1"><a class="header-anchor" href="#演示站点" aria-hidden="true">#</a> 演示站点</h2>
<ul>
<li><a href="https://vuepress-theme-gungnir.vercel.app" target="_blank" rel="noopener noreferrer">vuepress-theme-gungnir.vercel.app</a></li>
<li><a href="https://blog.zxh.io" target="_blank" rel="noopener noreferrer">我的博客</a></li>
</ul>
<h2 id="灵感来源" tabindex="-1"><a class="header-anchor" href="#灵感来源" aria-hidden="true">#</a> 灵感来源</h2>
<p>Gungnir 最初是一个基于 <a href="https://jekyllrb.com/" target="_blank" rel="noopener noreferrer">Jekyll</a> 的主题，在 <a href="https://github.com/Huxpro/huxpro.github.io" target="_blank" rel="noopener noreferrer">Huxpro/huxpro.github.io</a> 的基础上瞎改而成，同时<s>照搬</s>借鉴了很多其他主题的代码或设计，包括但不限于 <a href="https://github.com/mashirozx/Sakura/" target="_blank" rel="noopener noreferrer">mashirozx/Sakura</a>、<a href="https://github.com/kitian616/jekyll-TeXt-theme" target="_blank" rel="noopener noreferrer">kitian616/jekyll-TeXt-theme</a>、<a href="https://github.com/Fechin/hexo-theme-diaspora" target="_blank" rel="noopener noreferrer">Fechin/hexo-theme-diaspora</a>、<a href="https://github.com/liuzc/LeaveIt" target="_blank" rel="noopener noreferrer">liuzc/LeaveIt</a> 等（这么看来似乎也没多少东西是我自己写的了，逃</p>
<p>总之感谢上面提到或没有提到的所有给过我灵感与帮助的项目。</p>
<p>后来出于一些说来话长的理由，我决定把它用 <a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress</a> 重写一遍。再后来 <a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">Vuepress 2</a> 出了，于是我开始升级它。</p>
<p><strong>Gungnir</strong>，冈格尼尔，北欧神话中主神奥丁使用的用世界树树枝做成的武器，和本主题并没有什么关系但我就是用了这个名字。</p>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2>
<p>实际上下面有几点在 Jekyll 主题中大概还勉强能算是特性，但在 VuePress 主题中就完全不算了，不过我还是写在这了：</p>
<ul>
<li>简洁美观（反正这点我说是就是了）</li>
<li>响应式</li>
<li>多级目录</li>
<li>可切换的首页大图</li>
<li>明亮和夜间模式：识别系统的外观设置并自动切换模式，也支持用户手动切换</li>
<li>搜索</li>
<li>文章目录</li>
<li>支持代码块全屏（从 WordPress 主题 <a href="https://github.com/mashirozx/Sakura" target="_blank" rel="noopener noreferrer">Sakura</a> 搬过来的功能）</li>
<li>基于 <a href="https://github.com/KaTeX/KaTeX" target="_blank" rel="noopener noreferrer">Katex</a> 的公式支持</li>
<li>在文章中使用图表：<a href="https://www.chartjs.org" target="_blank" rel="noopener noreferrer">Chart.js</a>、<a href="https://mermaid-js.github.io" target="_blank" rel="noopener noreferrer">Mermaid</a></li>
<li>一些 Markdown 增强样式，目前支持：
<ul>
<li>脚注（基于 <a href="https://github.com/markdown-it/markdown-it-footnote" target="_blank" rel="noopener noreferrer">markdown-it-footnote</a>）</li>
<li>高亮（基于 <a href="https://github.com/markdown-it/markdown-it-mark" target="_blank" rel="noopener noreferrer">markdown-it-mark</a>）</li>
</ul>
</li>
<li>站点统计（<a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">Google Analytics</a> 和 <a href="https://tongji.baidu.com/" target="_blank" rel="noopener noreferrer">百度统计</a>）</li>
<li>评论（基于 <a href="https://github.com/giscus/giscus" target="_blank" rel="noopener noreferrer">Giscus</a>）</li>
<li>RSS</li>
<li>阅读时间估计</li>
<li>多语言支持（英文、简体中文）</li>
<li>带标签的归档页和链接页</li>
</ul>
<h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h2>
<ul>
<li><a href="https://github.com/jwilber/roughViz" target="_blank" rel="noopener noreferrer">roughViz.js</a> 和 <a href="https://github.com/gera2ld/markmap" target="_blank" rel="noopener noreferrer">markmap</a></li>
</ul>
<h2 id="其他版本" tabindex="-1"><a class="header-anchor" href="#其他版本" aria-hidden="true">#</a> 其他版本</h2>
<p>如上所述，Gungnir 最初是</p>
<ul>
<li><a href="https://jekyllrb.com/" target="_blank" rel="noopener noreferrer">Jekyll</a> 主题：🖥️ <a href="https://jekyll-theme-gungnir.vercel.app" target="_blank" rel="noopener noreferrer">[主页 / 演示站点]</a> 📖 <a href="https://jekyll-theme-gungnir.vercel.app/theme/" target="_blank" rel="noopener noreferrer">[文档]</a> 🧐 <a href="https://github.com/Renovamen/jekyll-theme-gungnir" target="_blank" rel="noopener noreferrer">[Github]</a></li>
<li><a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress 1</a> 主题：🖥️ <a href="https://vuepress-theme-gungnir.vercel.app" target="_blank" rel="noopener noreferrer">[主页 / 演示站点]</a> 📖 <a href="https://vuepress-theme-gungnir.vercel.app/docs/" target="_blank" rel="noopener noreferrer">[文档]</a> 🧐 <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank" rel="noopener noreferrer">[Github]</a></li>
</ul>
</div></template>
