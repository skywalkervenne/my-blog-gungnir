<template><div><p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-md-plus/v/next" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-md-plus/next.svg?style=flat-square&logo=npm" style="display: inline; margin: 0 4px 0 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/md-plus" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--md--plus-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0 4px 0 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/md-plus/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
</p>
<p><code v-pre>@renovamen/vuepress-plugin-md-plus</code> 插件，可以在 <a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress 2</a> 的 Markdown 中加入更多语法和功能。目前支持：</p>
<ul>
<li>脚注（基于 <a href="https://github.com/markdown-it/markdown-it-footnote" target="_blank" rel="noopener noreferrer">markdown-it-footnote</a>）</li>
<li>高亮标记（基于 <a href="https://github.com/markdown-it/markdown-it-footnote" target="_blank" rel="noopener noreferrer">markdown-it-footnote</a>）</li>
<li>下标 (基于 <a href="https://github.com/markdown-it/markdown-it-sub" target="_blank" rel="noopener noreferrer">markdown-it-sub</a>)</li>
<li>上标 (基于 <a href="https://github.com/markdown-it/markdown-it-sup" target="_blank" rel="noopener noreferrer">markdown-it-sup</a>)</li>
</ul>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<CodeGroup>
<CodeGroupItem title="PNPM" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> @renovamen/vuepress-plugin-md-plus@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="YARN" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @renovamen/vuepress-plugin-md-plus@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="NPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @renovamen/vuepress-plugin-md-plus@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<p>你可以在 <code v-pre>.vuepress/config.js</code> 中一键启用所有功能：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> mdPlusPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@renovamen/vuepress-plugin-md-plus"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdPlusPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">all</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 全部启用，优先级高于其他配置项（默认：false）</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以分别启用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdPlusPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">footnote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 脚注（默认：false）</span>
      <span class="token literal-property property">mark</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 高亮标记（默认：false）</span>
      <span class="token literal-property property">sub</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 下标（默认：false）</span>
      <span class="token literal-property property">sup</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 上标（默认：false）</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<h3 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h3>
<p>给文字加上脚注<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p>
<details class="custom-container details"><summary>语法</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>给文字加上脚注[^1]

[^1]: 脚注内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="高亮标记" tabindex="-1"><a class="header-anchor" href="#高亮标记" aria-hidden="true">#</a> 高亮标记</h3>
<p>高亮标记重要的内容：衬衫的价格是 <mark>九磅十五便士</mark></p>
<details class="custom-container details"><summary>语法</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>衬衫的价格是 ==九磅十五便士==
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h3 id="下标" tabindex="-1"><a class="header-anchor" href="#下标" aria-hidden="true">#</a> 下标</h3>
<p>H<sub>2</sub>O</p>
<details class="custom-container details"><summary>语法</summary>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>H<span class="token strike"><span class="token punctuation">~</span><span class="token content">2</span><span class="token punctuation">~</span></span>O
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h3 id="上标" tabindex="-1"><a class="header-anchor" href="#上标" aria-hidden="true">#</a> 上标</h3>
<p>29<sup>th</sup></p>
<details class="custom-container details"><summary>语法</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>29^th^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<hr>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>脚注内容 <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>
