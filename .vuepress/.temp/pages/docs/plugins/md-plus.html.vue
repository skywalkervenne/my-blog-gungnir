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
<p>A plugin for enhancing Markdown in <a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress 2</a>. Now the following features are supported:</p>
<ul>
<li>footnote (supported by <a href="https://github.com/markdown-it/markdown-it-footnote" target="_blank" rel="noopener noreferrer">markdown-it-footnote</a>)</li>
<li>mark (supported by <a href="https://github.com/markdown-it/markdown-it-mark" target="_blank" rel="noopener noreferrer">markdown-it-footnote</a>)</li>
<li>Subscript (supported by <a href="https://github.com/markdown-it/markdown-it-sub" target="_blank" rel="noopener noreferrer">markdown-it-sub</a>)</li>
<li>Superscript (supported by <a href="https://github.com/markdown-it/markdown-it-sup" target="_blank" rel="noopener noreferrer">markdown-it-sup</a>)</li>
</ul>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2>
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
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>
<p>You can enable all features simply by:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> mdPlusPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@renovamen/vuepress-plugin-md-plus"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdPlusPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">all</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// Enable all features or not, this will rewrite all the following options (default: false)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or enable them separately:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdPlusPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">footnote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Enable footnote or not (default: false)</span>
      <span class="token literal-property property">mark</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// Enable mark or not (default: false)</span>
      <span class="token literal-property property">sub</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// Enable Subscript or not (default: false)</span>
      <span class="token literal-property property">sup</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// Enable Superscript or not (default: false)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h3 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> Footnote</h3>
<p>Add footnotes for text<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p>
<details class="custom-container details"><summary>Syntax</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Add footnotes for text[^1]

[^1]: Write your footnote here.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> Mark</h3>
<p>Mark important information: &quot;Excuse me. Can you tell me how much the shirt is?&quot; &quot;Yes, it's <mark>nine fifteen</mark>.&quot;</p>
<details class="custom-container details"><summary>Syntax</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Mark important information: "Excuse me. Can you tell me how much the shirt is?" "Yes, it's ==nine fifteen==."
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h3 id="subscript" tabindex="-1"><a class="header-anchor" href="#subscript" aria-hidden="true">#</a> Subscript</h3>
<p>H<sub>2</sub>O</p>
<details class="custom-container details"><summary>Syntax</summary>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>H<span class="token strike"><span class="token punctuation">~</span><span class="token content">2</span><span class="token punctuation">~</span></span>O
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h3 id="superscript" tabindex="-1"><a class="header-anchor" href="#superscript" aria-hidden="true">#</a> Superscript</h3>
<p>29<sup>th</sup></p>
<details class="custom-container details"><summary>Syntax</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>29^th^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<hr>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>Write your footnote here. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>
