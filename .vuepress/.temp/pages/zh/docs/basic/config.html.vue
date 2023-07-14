<template><div><p>在 <code v-pre>.vuepress/config.js</code> 中配置主题。可以直接在<a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/theme/src/shared/options.ts" target="_blank" rel="noopener noreferrer">源码里</a>查看所有可能的配置项。</p>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">提示</p>
<p>本主题兼容 <a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html" target="_blank" rel="noopener noreferrer">VuePress 默认主题</a>除了以下配置项以外的所有配置项：</p>
<ul>
<li>logo</li>
<li>logoDark</li>
<li>darkMode（本主题强制开启模式切换功能）</li>
<li>repo</li>
<li>repoLabel</li>
</ul>
<p>关于这些（兼容的）配置项的配置方式，请直接查阅 <a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html" target="_blank" rel="noopener noreferrer">VuePress 默认主题配置的参考文档</a>。</p>
</div>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">提示</p>
<p>对于所有涉及到图标名称的配置项，请确保指定的图标是被引入过的，在<RouterLink to="/zh/docs/advanced/icons/">这里</RouterLink>查看怎么引入图标。</p>
</div>
<h2 id="导航栏标题" tabindex="-1"><a class="header-anchor" href="#导航栏标题" aria-hidden="true">#</a> 导航栏标题</h2>
<p>与默认主题不同的是，本主题的导航栏左上角标题处显示的不是 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#title" target="_blank" rel="noopener noreferrer">站点配置中的 <code v-pre>title</code> 项</a>，而是：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/*
    其他站点配置
    ...
  */</span>

  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">/*
      其他主题配置
      ...
    */</span>
    <span class="token literal-property property">navbarTitle</span><span class="token operator">:</span> <span class="token string">"Gungnir"</span>  <span class="token comment">// 可选，默认："$ cd /home/"</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在 <a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#locales" target="_blank" rel="noopener noreferrer"><code v-pre>locales</code></a> 中使用，如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"/"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">navbarTitle</span><span class="token operator">:</span> <span class="token string">"Gungnir"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">"/zh/"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">navbarTitle</span><span class="token operator">:</span> <span class="token string">"冈格尼尔"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作者信息" tabindex="-1"><a class="header-anchor" href="#作者信息" aria-hidden="true">#</a> 作者信息</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">personalInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Cool Dragon"</span><span class="token punctuation">,</span>

      <span class="token comment">// 必须：头像，将在首页和移动端侧边栏显示</span>
      <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">"/img/avatar.jpeg"</span><span class="token punctuation">,</span>

      <span class="token comment">// 必须：个人简介，将在首页显示</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"A cool dragon lost in human world."</span><span class="token punctuation">,</span>
      
      <span class="token comment">// 可选：社交平台账号，将在首页和移动端侧边栏显示</span>
      <span class="token literal-property property">sns</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">github</span><span class="token operator">:</span> <span class="token string">"Renovamen"</span><span class="token punctuation">,</span>  <span class="token comment">// Github</span>
        <span class="token literal-property property">linkedin</span><span class="token operator">:</span> <span class="token string">"xiaohan-zou-55bba0160"</span><span class="token punctuation">,</span>  <span class="token comment">// 领英</span>
        <span class="token literal-property property">facebook</span><span class="token operator">:</span> <span class="token string">"renovamen.zou"</span><span class="token punctuation">,</span>  <span class="token comment">// Facebook</span>
        <span class="token literal-property property">twitter</span><span class="token operator">:</span> <span class="token string">"renovamen_zxh"</span><span class="token punctuation">,</span>  <span class="token comment">// 推特</span>
        <span class="token literal-property property">zhihu</span><span class="token operator">:</span> <span class="token string">"chao-neng-gui-su"</span><span class="token punctuation">,</span>  <span class="token comment">// 知乎</span>
        <span class="token literal-property property">weibo</span><span class="token operator">:</span> <span class="token string">"your-weibo-id"</span><span class="token punctuation">,</span>  <span class="token comment">// 新浪微博</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">"renovamenzxh@gmail.com"</span><span class="token punctuation">,</span>  <span class="token comment">// 邮箱</span>
        <span class="token literal-property property">rss</span><span class="token operator">:</span> <span class="token string">"/rss.xml"</span><span class="token punctuation">,</span>  <span class="token comment">// RSS 文件的链接</span>
        <span class="token comment">// 添加其他的社交平台</span>
        <span class="token literal-property property">bilibili</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// 随便什么名字</span>
          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"ri-bilibili-line"</span><span class="token punctuation">,</span>  <span class="token comment">// 社交平台的图标</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"https://www.bilibili.com/"</span>  <span class="token comment">// 主页链接</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">homeHeaderImages</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 图 1</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">"/img/home-bg/1.jpg"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"mask"</span><span class="token operator">:</span> <span class="token string">"rgba(40, 57, 101, .4)"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 图 2</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">"/img/home-bg/2.jpg"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"mask"</span><span class="token operator">:</span> <span class="token string">"rgb(251, 170, 152, .2)"</span>
      <span class="token punctuation">}</span>
      <span class="token operator">...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">blogNumPerPage</span><span class="token operator">:</span> <span class="token number">20</span>  <span class="token comment">// 可选：每页的博客数量，默认：10</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，蒙版是指在封面图上盖一层半透明的颜色，如果图片比较复杂导致文字显示得不够清楚，可以考虑加个蒙版。</p>
<p>页面效果可以参考本站的<RouterLink to="/">首页</RouterLink>，点击封面图左右两边的按钮可以在多张图片之间进行切换。</p>
<h2 id="页面" tabindex="-1"><a class="header-anchor" href="#页面" aria-hidden="true">#</a> 页面</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 标签页配置</span>
      <span class="token literal-property property">tags</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 可选：标签页副标题</span>
        <span class="token literal-property property">subtitle</span><span class="token operator">:</span> <span class="token string">'吼哇朋友们，这是标签页'</span><span class="token punctuation">,</span>

        <span class="token comment">// 可选：标签页封面图路径和蒙版</span>
        <span class="token literal-property property">bgImage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/img/pages/tags.jpg'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">mask</span><span class="token operator">:</span> <span class="token string">'rgba(211, 136, 37, .5)'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// 链接页配置</span>
      <span class="token literal-property property">links</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 可选：链接页副标题</span>
        <span class="token literal-property property">subtitle</span><span class="token operator">:</span> <span class="token string">'吼哇朋友们，这是链接页'</span><span class="token punctuation">,</span>

        <span class="token comment">// 可选：链接页封面图路径和蒙版</span>
        <span class="token literal-property property">bgImage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/img/pages/links.jpg'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">mask</span><span class="token operator">:</span> <span class="token string">'rgba(64, 118, 190, 0.5)'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面效果可以参考本站的<a href="/tags">标签</a>和<a href="/links">链接</a>页。</p>
<p>如果想要修改页面主标题，请参考多语言支持部分（在写了在写了咕咕咕）。</p>
<h2 id="页脚自定义" tabindex="-1"><a class="header-anchor" href="#页脚自定义" aria-hidden="true">#</a> 页脚自定义</h2>
<p>页脚支持 HTML 格式，如本站的页脚配置为：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &amp;copy; &lt;a href="https://github.com/Renovamen" target="_blank">Renovamen&lt;/a> 2018-2022
      &lt;br>
      Powered by &lt;a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress&lt;/a> &amp;
      &lt;a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir&lt;/a>
    </span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<p>对所有<strong>博客文章页</strong>启用或禁用目录。可以在博客文章页的 front matter 里覆写这个配置。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">catalog</span><span class="token operator">:</span> <span class="token boolean">false</span>  <span class="token comment">// 可选，默认：true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
