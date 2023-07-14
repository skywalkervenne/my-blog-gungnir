<template><div><h2 id="内置搜索" tabindex="-1"><a class="header-anchor" href="#内置搜索" aria-hidden="true">#</a> 内置搜索</h2>
<p>主题内置的搜索组件修改自 <a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-search</a>，它只支持搜索<strong>博客文章</strong>（即不支持文档文章）。它在本地生成你的博客文章的搜索索引，然后在用户访问站点时加载搜索索引文件，即它不会进行任何外部请求。</p>
<p>效果可以参考<a href="https://blog.zxh.io" target="_blank" rel="noopener noreferrer">这里</a>（点击导航栏的 Search）。</p>
<h3 id="导航栏配置项" tabindex="-1"><a class="header-anchor" href="#导航栏配置项" aria-hidden="true">#</a> 导航栏配置项</h3>
<h4 id="searchtext" tabindex="-1"><a class="header-anchor" href="#searchtext" aria-hidden="true">#</a> searchText</h4>
<ul>
<li>
<p>类型：<code v-pre>string</code></p>
</li>
<li>
<p>默认值</p>
<ul>
<li>en: <code v-pre>&quot;Search&quot;</code></li>
<li>zh: <code v-pre>&quot;搜索&quot;</code></li>
</ul>
</li>
<li>
<p>详情</p>
<ul>
<li>在导航栏中搜索按钮中显示的文字</li>
<li>可以作为一般配置使用，也可以在 <a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#locales" target="_blank" rel="noopener noreferrer">locales</a> 配置项内使用</li>
</ul>
</li>
<li>
<p>示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 一般配置</span>
    <span class="token literal-property property">searchText</span><span class="token operator">:</span> <span class="token string">"Search"</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// locales 配置项</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"/"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">searchText</span><span class="token operator">:</span> <span class="token string">"Search"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">"/zh/"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">searchText</span><span class="token operator">:</span> <span class="token string">"搜索"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="searchicon" tabindex="-1"><a class="header-anchor" href="#searchicon" aria-hidden="true">#</a> searchIcon</h4>
<ul>
<li>
<p>类型：<code v-pre>string</code></p>
</li>
<li>
<p>默认值：<code v-pre>&quot;ri-search-2-line&quot;</code></p>
</li>
<li>
<p>详情：在导航栏搜索按钮中显示的图标，需要提前引入</p>
</li>
<li>
<p>示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">searchIcon</span><span class="token operator">:</span> <span class="token string">"bi-search"</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>参考：<RouterLink to="/zh/docs/advanced/icons.html">进阶 &gt; 图标支持</RouterLink></p>
</li>
</ul>
<h3 id="插件配置项" tabindex="-1"><a class="header-anchor" href="#插件配置项" aria-hidden="true">#</a> 插件配置项</h3>
<h4 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h4>
<ul>
<li>
<p>类型：<code v-pre>Record&lt;string, { placeholder: string }&gt;</code></p>
</li>
<li>
<p>默认值：<code v-pre>&quot;$ grep ...&quot;</code></p>
</li>
<li>
<p>详情：搜索框在不同 locales 下的文字</p>
</li>
<li>
<p>示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">themePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">"/"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">"Search"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string-property property">"/zh/"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">"搜索"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>参考：<a href="https://v2.vuepress.vuejs.org/zh/guide/i18n.html" target="_blank" rel="noopener noreferrer">指南 &gt; 多语言支持</a></p>
</li>
</ul>
<h4 id="hotkeys" tabindex="-1"><a class="header-anchor" href="#hotkeys" aria-hidden="true">#</a> hotKeys</h4>
<ul>
<li>
<p>类型：<code v-pre>string[]</code></p>
</li>
<li>
<p>默认值：<code v-pre>['s', '/']</code></p>
</li>
<li>
<p>详情</p>
<ul>
<li>
<p>指定热键的 <a href="http://keycode.info/" target="_blank" rel="noopener noreferrer">event.key</a> ，当按下热键时，搜索框会被聚焦</p>
</li>
<li>
<p>将该配置项设为空数组可以禁用热键功能</p>
</li>
</ul>
</li>
</ul>
<h4 id="maxsuggestions" tabindex="-1"><a class="header-anchor" href="#maxsuggestions" aria-hidden="true">#</a> maxSuggestions</h4>
<ul>
<li>
<p>类型：<code v-pre>number</code></p>
</li>
<li>
<p>默认值：<code v-pre>10</code></p>
</li>
<li>
<p>详情：指定搜索结果的最大条数</p>
</li>
</ul>
<h4 id="issearchable" tabindex="-1"><a class="header-anchor" href="#issearchable" aria-hidden="true">#</a> isSearchable</h4>
<ul>
<li>
<p>类型：<code v-pre>(page: Page) =&gt; boolean</code></p>
</li>
<li>
<p>默认值：<code v-pre>() =&gt; true</code></p>
</li>
<li>
<p>详情：</p>
<p>一个函数，用于判断一个页面是否应该被包含在搜索索引中</p>
<ul>
<li>返回 <code v-pre>true</code> 来包含该页面。</li>
<li>返回 <code v-pre>false</code> 来排除该页面。</li>
</ul>
</li>
<li>
<p>示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">themePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// exclude a specified post</span>
        <span class="token function-variable function">isSearchable</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=></span> page<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token string">"/posts/2021-12-25-hello.html"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="getextrafields" tabindex="-1"><a class="header-anchor" href="#getextrafields" aria-hidden="true">#</a> getExtraFields</h4>
<ul>
<li>
<p>类型：<code v-pre>(page: Page) =&gt; string[]</code></p>
</li>
<li>
<p>默认值：<code v-pre>() =&gt; []</code></p>
</li>
<li>
<p>详情：</p>
<p>一个函数，用于在页面的搜索索引中添加额外字段。</p>
<p>默认情况下，该插件会将页面标题和小标题作为搜索索引。该配置项可以帮助你添加更多的可搜索字段。</p>
</li>
<li>
<p>示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">themePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// allow searching the `tags` frontmatter</span>
        <span class="token function-variable function">getExtraFields</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=></span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>tags <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h3>
<p>你可以通过 CSS 变量来自定义搜索界面的样式：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.search-page</span> <span class="token punctuation">{</span>
  <span class="token property">--search-bg-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">--search-accent-color</span><span class="token punctuation">:</span> #377bb5<span class="token punctuation">;</span>
  <span class="token property">--search-text-color</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
  <span class="token property">--search-item-title-color</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
  <span class="token property">--search-item-subtitle-color</span><span class="token punctuation">:</span> #7f7f7f<span class="token punctuation">;</span>
  <span class="token property">--searc-page-z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="禁用" tabindex="-1"><a class="header-anchor" href="#禁用" aria-hidden="true">#</a> 禁用</h3>
<p>如果你需要禁用本主题的默认搜索组件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
  
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">themePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuepress-官方搜索插件" tabindex="-1"><a class="header-anchor" href="#vuepress-官方搜索插件" aria-hidden="true">#</a> VuePress 官方搜索插件</h2>
<p>如果你有搜索文档文章的需求，可以考虑使用官方搜索插件 <a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-search</a> 或 <a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-docsearch</a>。按照官方文档上的方式安装和配置即可，配置完后本主题会把搜索框添加到导航栏，效果参考本站右上角。同时你可能会想要<a href="#%E7%A6%81%E7%94%A8">禁用</a>默认搜索组件。</p>
<p>在使用 <code v-pre>@vuepress/plugin-search</code> 时，你可能会想要排除掉首页、标签页和链接页：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> searchPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@vuepress/plugin-search"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function-variable function">isSearchable</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span><span class="token punctuation">[</span><span class="token string">"Tags"</span><span class="token punctuation">,</span> <span class="token string">"Links"</span><span class="token punctuation">,</span> <span class="token string">"HomePage"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>layout<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
