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
<p>Plugin <code v-pre>vuepress-plugin-giscus@next</code> for adding comment system <a href="https://github.com/giscus/giscus" target="_blank" rel="noopener noreferrer">Giscus</a> powered by <a href="https://docs.github.com/en/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a> to <a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress 2</a>.</p>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2>
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
<h2 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation" aria-hidden="true">#</a> Preparation</h2>
<p>First you need to:</p>
<ul>
<li>Create a public Github repository and <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository" target="_blank" rel="noopener noreferrer">enable Discussions</a> for it</li>
<li>Install <a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">Giscus app</a></li>
<li>Browse <a href="https://giscus.app/" target="_blank" rel="noopener noreferrer">Giscus's website</a> and generate your repo id, category id and other things on the website</li>
</ul>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>
<p>Add the plugin to your <code v-pre>.vuepress/config.js</code>:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> giscusPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"vuepress-plugin-giscus"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">giscusPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">"[repo]"</span><span class="token punctuation">,</span>  <span class="token comment">// required, string, format: user_name/repo_name</span>
      <span class="token literal-property property">repoId</span><span class="token operator">:</span> <span class="token string">"[repo id]"</span><span class="token punctuation">,</span>  <span class="token comment">// required, string, generate it on Giscus's website</span>
      <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"[category name]"</span><span class="token punctuation">,</span>  <span class="token comment">// required, string</span>
      <span class="token literal-property property">categoryId</span><span class="token operator">:</span> <span class="token string">"[category id]"</span><span class="token punctuation">,</span>  <span class="token comment">// required, string, generate it on Giscus's website</span>
      <span class="token literal-property property">mapping</span><span class="token operator">:</span> <span class="token string">"[page &lt;-> discussion mapping]"</span><span class="token punctuation">,</span>  <span class="token comment">// optional, string, default="title"</span>
      <span class="token literal-property property">reactionsEnabled</span><span class="token operator">:</span> <span class="token string">"[enable reactions or not?]"</span><span class="token punctuation">,</span>  <span class="token comment">// optional, boolean, default=true</span>
      <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">"[theme]"</span><span class="token punctuation">,</span>  <span class="token comment">// optional, string, default="light"</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">"[language]"</span><span class="token punctuation">,</span>  <span class="token comment">// optional, string, default="auto" (follow the site's language, fell to "en" if your site's language is not supported by Giscus)</span>
      <span class="token literal-property property">lazyLoad</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// optional, boolean, default=false (if true, loading of Giscus will be deferred until the user scrolls near the comments container)</span>
      <span class="token literal-property property">crossorigin</span><span class="token operator">:</span> <span class="token string">"[crossorigin]"</span>  <span class="token comment">// optional, string, default="anonymous"</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2>
<p>After that, <code v-pre>Giscus</code> will have already been registered as a Vue component, so you can use it in Vuepress directly. You can also change Giscus' theme, language and enablement on-the-fly by pass props to the component (<a href="https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#parent-to-giscus-message-events" target="_blank" rel="noopener noreferrer">how it works</a>):</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;Giscus :theme="theme" :lang="lang" :reactionsEnabled="reactionsEnabled" />
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/giscus/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a></p>
</div></template>
