<template><div><p>Gungnir uses Vue icon component <code v-pre>oh-vue-icons</code> (my another project lol) for icon support. <code v-pre>oh-vue-icons</code> is for including inline SVG icons from different popular icon packs easily.</p>
<p>See <a href="https://github.com/Renovamen/oh-vue-icons" target="_blank" rel="noopener noreferrer">here</a> for documentation and other details of <code v-pre>oh-vue-icons</code>.</p>
<h2 id="import-icons" tabindex="-1"><a class="header-anchor" href="#import-icons" aria-hidden="true">#</a> Import Icons</h2>
<p><code v-pre>oh-vue-icons</code> supports tree-shaking, icons that are not imported will not be included in your site's bundle files. So you can only import the icons you need to reduce the bundle size.</p>
<p>Gungnir has already imported the following icons:</p>
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
<p>To import other icons, you may need to search for icons' names <a href="https://oh-vue-icons.js.org" target="_blank" rel="noopener noreferrer">here</a> and globally import theme in your <code v-pre>.vuepress/client.js</code> file (create one if it dosen't exist):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/client.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> addIcons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"oh-vue-icons"</span><span class="token punctuation">;</span>

<span class="token comment">// import the icons you need</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OiGitCompare<span class="token punctuation">,</span> RiBook2Fill <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"oh-vue-icons/icons"</span><span class="token punctuation">;</span>
<span class="token function">addIcons</span><span class="token punctuation">(</span>OiGitCompare<span class="token punctuation">,</span> RiBook2Fill<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or you can also locally import them in your custom components.</p>
<h2 id="use-icons" tabindex="-1"><a class="header-anchor" href="#use-icons" aria-hidden="true">#</a> Use Icons</h2>
<p>Then you can use these icons in Markdown or your custom components:</p>
<v-icon name="oi-git-compare" /> <v-icon name="ri-book-2-fill" />
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>oi-git-compare<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ri-book-2-fill<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>oh-vue-icons</code> also supports many other features, like editting icon's color, size, animation, flip and so on. Here are some examples:</p>
<v-icon name="oi-git-compare" scale="2" /> <v-icon name="oi-git-compare" flip="vertical" /> <v-icon name="oi-git-compare" fill="orange" /> <v-icon name="oi-git-compare" animation="flash" />
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>oi-git-compare<span class="token punctuation">"</span></span> <span class="token attr-name">scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>oi-git-compare<span class="token punctuation">"</span></span> <span class="token attr-name">flip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>oi-git-compare<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orange<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>oi-git-compare<span class="token punctuation">"</span></span> <span class="token attr-name">animation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flash<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See <a href="https://oh-vue-icons.js.org/docs" target="_blank" rel="noopener noreferrer">documentation</a> of <code v-pre>oh-vue-icons</code> for more features and examples.</p>
</div></template>
