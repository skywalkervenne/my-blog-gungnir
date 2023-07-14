<template><div><h2 id="built-in-search-component" tabindex="-1"><a class="header-anchor" href="#built-in-search-component" aria-hidden="true">#</a> Built-in Search Component</h2>
<p>The built-in search component of this theme is adapted from <a href="https://v2.vuepress.vuejs.org/reference/plugin/search.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-search</a>, it only supports searching for <strong>blog article</strong> contents, which means searching for documentation article contents is not avaliable. It generates search index from your pages locally and loads the search index file when users enter your site, which means it doesn't require any external requests.</p>
<p>See <a href="https://blog.zxh.io" target="_blank" rel="noopener noreferrer">here</a> for a demo (click the &quot;Search&quot; button in navbar).</p>
<h3 id="navbar-options" tabindex="-1"><a class="header-anchor" href="#navbar-options" aria-hidden="true">#</a> Navbar Options</h3>
<h4 id="searchtext" tabindex="-1"><a class="header-anchor" href="#searchtext" aria-hidden="true">#</a> searchText</h4>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default</p>
<ul>
<li>en: <code v-pre>&quot;Search&quot;</code></li>
<li>zh: <code v-pre>&quot;搜索&quot;</code></li>
</ul>
</li>
<li>
<p>Details</p>
<ul>
<li>Text of the search button in the navbar</li>
<li>Can be used as normal config, and can also be used in the <a href="https://v2.vuepress.vuejs.org/reference/default-theme/config.html#locales" target="_blank" rel="noopener noreferrer">locales</a> option</li>
</ul>
</li>
<li>
<p>Example:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// normal config</span>
    <span class="token literal-property property">searchText</span><span class="token operator">:</span> <span class="token string">"Search"</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// locales option</span>
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
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>&quot;ri-search-2-line&quot;</code></p>
</li>
<li>
<p>Details: Icon of the search button in the navbar</p>
</li>
<li>
<p>Example:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">searchIcon</span><span class="token operator">:</span> <span class="token string">"bi-search"</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Also see: <RouterLink to="/docs/advanced/icons.html">Advanced &gt; Icons</RouterLink></p>
</li>
</ul>
<h3 id="plugin-options" tabindex="-1"><a class="header-anchor" href="#plugin-options" aria-hidden="true">#</a> Plugin Options</h3>
<h4 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h4>
<ul>
<li>
<p>Type: <code v-pre>Record&lt;string, { placeholder: string }&gt;</code></p>
</li>
<li>
<p>Default: <code v-pre>&quot;$ grep ...&quot;</code></p>
</li>
<li>
<p>Details: The text of the search box in different locales</p>
</li>
<li>
<p>Example:</p>
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
<p>Also see: <a href="https://v2.vuepress.vuejs.org/guide/i18n.html" target="_blank" rel="noopener noreferrer">Guide &gt; I18n</a></p>
</li>
</ul>
<h4 id="hotkeys" tabindex="-1"><a class="header-anchor" href="#hotkeys" aria-hidden="true">#</a> hotKeys</h4>
<ul>
<li>
<p>Type: <code v-pre>string[]</code></p>
</li>
<li>
<p>Default: <code v-pre>['s', '/']</code></p>
</li>
<li>
<p>Details:</p>
<ul>
<li>Specify the <a href="http://keycode.info/" target="_blank" rel="noopener noreferrer">event.key</a> of the hotkeys</li>
<li>When hotkeys are pressed, the search box input will be focused</li>
<li>Set to an empty array to disable hotkeys</li>
</ul>
</li>
</ul>
<h4 id="maxsuggestions" tabindex="-1"><a class="header-anchor" href="#maxsuggestions" aria-hidden="true">#</a> maxSuggestions</h4>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Default: <code v-pre>10</code></p>
</li>
<li>
<p>Details: Specify the maximum number of search results</p>
</li>
</ul>
<h4 id="issearchable" tabindex="-1"><a class="header-anchor" href="#issearchable" aria-hidden="true">#</a> isSearchable</h4>
<ul>
<li>
<p>Type: <code v-pre>(page: Page) =&gt; boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>() =&gt; true</code></p>
</li>
<li>
<p>Details:</p>
<p>A function to determine whether a page should be included in the search index</p>
<ul>
<li>Return <code v-pre>true</code> to include the page</li>
<li>Return <code v-pre>false</code> to exclude the page</li>
</ul>
</li>
<li>
<p>Example:</p>
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
<p>Type: <code v-pre>(page: Page) =&gt; string[]</code></p>
</li>
<li>
<p>Default: <code v-pre>() =&gt; []</code></p>
</li>
<li>
<p>Details:</p>
<p>A function to add extra fields to the search index of a page.</p>
<p>By default, this plugin will use page title and headers as the search index. This option could help you to add more searchable fields.</p>
</li>
<li>
<p>Example:</p>
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
<h3 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h3>
<p>You can customize the style of the search component via CSS variables:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.search-page</span> <span class="token punctuation">{</span>
  <span class="token property">--search-bg-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">--search-accent-color</span><span class="token punctuation">:</span> #377bb5<span class="token punctuation">;</span>
  <span class="token property">--search-text-color</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
  <span class="token property">--search-item-title-color</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
  <span class="token property">--search-item-subtitle-color</span><span class="token punctuation">:</span> #7f7f7f<span class="token punctuation">;</span>
  <span class="token property">--searc-page-z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="disable" tabindex="-1"><a class="header-anchor" href="#disable" aria-hidden="true">#</a> Disable</h3>
<p>Disable the built-in search component:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
  
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">themePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuepress-official-search-plugins" tabindex="-1"><a class="header-anchor" href="#vuepress-official-search-plugins" aria-hidden="true">#</a> VuePress Official Search Plugins</h2>
<p>If you need support for documentation articles, consider <a href="https://v2.vuepress.vuejs.org/reference/plugin/search.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-search</a> or <a href="https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-docsearch</a>. This theme will add search box to the navbar (see the top right-hand corner of this site) once you configure the plugin correctly. Before that, you may want to <a href="#disable">disable</a> the built-in search component.</p>
<p>When using <code v-pre>@vuepress/plugin-search</code>, you may want to exclude Home, Tags and Links page:</p>
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
