<template><div><p>
  <a href="https://www.npmjs.com/package/vuepress-plugin-giscus/v/next" target="_blank">
    <img src="https://img.shields.io/npm/v/vuepress-plugin-giscus/next.svg?style=flat-square&logo=npm" style="display: inline; margin: 0 4px 0 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/giscus" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-vuepress--plugin--giscus-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0 4px 0 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/giscus/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
</p>
<p><code v-pre>vuepress-plugin-giscus@next</code> 插件：在 <a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress 2</a> 中使用基于 <a href="https://docs.github.com/en/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a> 的评论系统 <a href="https://github.com/giscus/giscus" target="_blank" rel="noopener noreferrer">Giscus</a>。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<CodeGroup>
<CodeGroupItem title="PNPM" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> vuepress-plugin-giscus@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="YARN" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vuepress-plugin-giscus@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="NPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vuepress-plugin-giscus@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>
<p>首先你需要：</p>
<ul>
<li>建一个公开的 Github 仓库并<a href="https://docs.github.com/cn/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository" target="_blank" rel="noopener noreferrer">启用 Discussions</a></li>
<li>安装 <a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">Giscus app</a>，在选择仓库时至少要把上述仓库选进去</li>
<li>查看 <a href="https://giscus.app" target="_blank" rel="noopener noreferrer">Giscus 官网</a>并在上面生成你的 repo id、category id 以及别的必要信息</li>
</ul>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<p>在 <code v-pre>.vuepress/config.js</code> 中引入这个插件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> giscusPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"vuepress-plugin-giscus"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">giscusPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">"[仓库]"</span><span class="token punctuation">,</span>  <span class="token comment">// 必须，string，格式：user_name/repo_name</span>
      <span class="token literal-property property">repoId</span><span class="token operator">:</span> <span class="token string">"[仓库 ID]"</span><span class="token punctuation">,</span>  <span class="token comment">// 必须，string，在 Giscus 官网上生成</span>
      <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"[discussion 分类名]"</span><span class="token punctuation">,</span>  <span class="token comment">// 必须，string</span>
      <span class="token literal-property property">categoryId</span><span class="token operator">:</span> <span class="token string">"[discussion 分类 ID]"</span><span class="token punctuation">,</span>  <span class="token comment">// 必须，string，在 Giscus 官网上生成</span>
      <span class="token literal-property property">mapping</span><span class="token operator">:</span> <span class="token string">"[页面 &lt;-> discussion 映射]"</span><span class="token punctuation">,</span>  <span class="token comment">// 可选，string，default="title"</span>
      <span class="token literal-property property">reactionsEnabled</span><span class="token operator">:</span> <span class="token string">"[是否启用 reaction]"</span><span class="token punctuation">,</span>  <span class="token comment">// 可选，boolean，default=true</span>
      <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">"[主题]"</span><span class="token punctuation">,</span> <span class="token comment">// 可选，string，default="light"</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">"[语言]"</span><span class="token punctuation">,</span>  <span class="token comment">// 可选，string，default="auto"（跟随网站语言，如果 Giscus 不支持你的网站的语言，则会使用 "en"）</span>
      <span class="token literal-property property">lazyLoad</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 可选，boolean，default=false（如果设为 true，Giscus 的加载将延迟到用户滚动到评论容器附近）</span>
      <span class="token literal-property property">crossorigin</span><span class="token operator">:</span> <span class="token string">"[crossorigin]"</span>  <span class="token comment">// 可选，string，default="anonymous"</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<p>这时 <code v-pre>Giscus</code> 就已经被注册为一个 Vue 组件了，因此你可以直接在 Vuepress 中使用它。你也可以通过传入 props 来实时改变 Giscus 的主题、语言和启用或关闭 reaction（<a href="https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#parent-to-giscus-message-events" target="_blank" rel="noopener noreferrer">工作原理</a>）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;Giscus :theme="theme" :lang="lang" :reactionsEnabled="reactionsEnabled" />
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="开源协议" tabindex="-1"><a class="header-anchor" href="#开源协议" aria-hidden="true">#</a> 开源协议</h2>
<p><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/giscus/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a></p>
</div></template>
