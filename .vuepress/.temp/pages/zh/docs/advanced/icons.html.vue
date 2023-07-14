<template><div><p>主题内置了 Vue 图标组件 <code v-pre>oh-vue-icons</code>（我写的 hhh）作为图标支持。<code v-pre>oh-vue-icons</code> 集成了多个常用图标库，能让你轻松从不同的图标库引入 SVG 图标。</p>
<p>在<a href="https://github.com/Renovamen/oh-vue-icons" target="_blank" rel="noopener noreferrer">这里</a>查看 <code v-pre>oh-vue-icons</code> 的文档和更多信息。</p>
<h2 id="引入图标" tabindex="-1"><a class="header-anchor" href="#引入图标" aria-hidden="true">#</a> 引入图标</h2>
<p><code v-pre>oh-vue-icons</code> 支持 tree-shaking，没有引入的图标不会出现在打包文件中。因此你可以只引入你想要使用的图标，从而减小打包体积。</p>
<p>主题默认引入了以下图标：</p>
<ul>
<li><code v-pre>FaRegularUser</code>: <v-icon name="fa-regular-user" /></li>
<li><code v-pre>FaRegularCalendar</code>: <v-icon name="fa-regular-calendar" /></li>
<li><code v-pre>FaSun</code>: <v-icon name="fa-sun" /></li>
<li><code v-pre>FaMoon</code>: <v-icon name="fa-moon" /></li>
<li><code v-pre>FaMagic</code>: <v-icon name="fa-magic" /></li>
<li><code v-pre>FaChevronLeft</code>: <v-icon name="fa-chevron-left" /></li>
<li><code v-pre>FaChevronRight</code>: <v-icon name="fa-chevron-right" /></li>
<li><code v-pre>FaChevronUp</code>: <v-icon name="fa-chevron-up" /></li>
<li><code v-pre>FaChevronDown</code>: <v-icon name="fa-chevron-down" /></li>
<li><code v-pre>FaListUl</code>: <v-icon name="fa-list-ul" /></li>
<li><code v-pre>FaPencilAlt</code>: <v-icon name="fa-pencil-alt" /></li>
<li><code v-pre>FaCircle</code>: <v-icon name="fa-circle" /></li>
<li><code v-pre>FaGithubAlt</code>: <v-icon name="fa-github-alt" /></li>
<li><code v-pre>FaLinkedinIn</code>: <v-icon name="fa-linkedin-in" /></li>
<li><code v-pre>FaFacebookF</code>: <v-icon name="fa-facebook-f" /></li>
<li><code v-pre>FaTwitter</code>: <v-icon name="fa-twitter" /></li>
<li><code v-pre>FaEnvelope</code>: <v-icon name="fa-envelope" /></li>
<li><code v-pre>RiWeiboFill</code>: <v-icon name="ri-weibo-fill" /></li>
<li><code v-pre>RiZhihuLine</code>: <v-icon name="ri-zhihu-line" /></li>
<li><code v-pre>RiRssFill</code>: <v-icon name="ri-rss-fill" /></li>
<li><code v-pre>RiSearch2Line</code>: <v-icon name="ri-search-2-line" /></li>
<li><code v-pre>RiTimerLine</code>: <v-icon name="ri-timer-line" /></li>
<li><code v-pre>HiTranslate</code>: <v-icon name="hi-translate" /></li>
<li><code v-pre>BiLayoutSidebarInset</code>: <v-icon name="bi-layout-sidebar-inset" /></li>
</ul>
<p>如果想要引入别的图标，需要在 <code v-pre>oh-vue-icons</code> 的<a href="https://oh-vue-icons.js.org/cn" target="_blank" rel="noopener noreferrer">网站</a>上搜索图标的名称，然后在你的项目的 <code v-pre>.vuepress/client.js</code> 文件（如果没有的话就新建一个）中全局引入图标：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> addIcons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"oh-vue-icons"</span><span class="token punctuation">;</span>

<span class="token comment">// 引入想要使用的图标</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OiGitCompare<span class="token punctuation">,</span> RiBook2Fill <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"oh-vue-icons/icons"</span><span class="token punctuation">;</span>
<span class="token function">addIcons</span><span class="token punctuation">(</span>OiGitCompare<span class="token punctuation">,</span> RiBook2Fill<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然你也可以在你的自定义组件中局部引入。</p>
<h2 id="使用图标" tabindex="-1"><a class="header-anchor" href="#使用图标" aria-hidden="true">#</a> 使用图标</h2>
<p>然后你就可以在 Markdown 或自定义组件中使用引入的图标了：</p>
<v-icon name="oi-git-compare" /> <v-icon name="ri-book-2-fill" />
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>oi-git-compare<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ri-book-2-fill<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>oh-vue-icons</code> 还支持定制图标的颜色、大小、翻转、动画等，这是一些例子：</p>
<v-icon name="oi-git-compare" scale="2" /> <v-icon name="oi-git-compare" flip="vertical" /> <v-icon name="oi-git-compare" fill="orange" /> <v-icon name="oi-git-compare" animation="flash" />
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>oi-git-compare<span class="token punctuation">"</span></span> <span class="token attr-name">scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>oi-git-compare<span class="token punctuation">"</span></span> <span class="token attr-name">flip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>oi-git-compare<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orange<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>oi-git-compare<span class="token punctuation">"</span></span> <span class="token attr-name">animation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flash<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多的功能和示例请参考 <code v-pre>oh-vue-icons</code> 的<a href="https://oh-vue-icons.js.org/cn/docs" target="_blank" rel="noopener noreferrer">文档</a>。</p>
</div></template>
