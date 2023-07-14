<template><div><h2 id="博客文章" tabindex="-1"><a class="header-anchor" href="#博客文章" aria-hidden="true">#</a> 博客文章</h2>
<h3 id="front-matter" tabindex="-1"><a class="header-anchor" href="#front-matter" aria-hidden="true">#</a> Front Matter</h3>
<p>博客文章会在<RouterLink to="/">首页</RouterLink>显示。所有博客文章都需要在 front matter 里加上 <code v-pre>layout: Post</code>。</p>
<p>博客文章的 front matter 的格式为：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> Post  <span class="token comment"># 必须</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> 时间简史  <span class="token comment"># 博客标题（必须）</span>
<span class="token key atrule">subtitle</span><span class="token punctuation">:</span> 从大爆炸到黑洞  <span class="token comment"># 博客副标题（可选）</span>
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2020-03-31</span>  <span class="token comment"># 博客发表日期（可选）</span>
<span class="token key atrule">author</span><span class="token punctuation">:</span> 斯蒂芬·霍金  <span class="token comment"># 博客作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）</span>
<span class="token key atrule">useHeaderImage</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment"># 是否在博客中显示封面图（可选，默认：false）</span>
<span class="token key atrule">headerImage</span><span class="token punctuation">:</span> /img/test.jpg  <span class="token comment"># 博客封面图（必须，即使上一项选了 false，因为图片也需要在首页显示）</span>
<span class="token key atrule">headerMask</span><span class="token punctuation">:</span> rgba(40<span class="token punctuation">,</span> <span class="token number">57</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> .4)  <span class="token comment"># 封面图遮罩（可选）</span>
<span class="token key atrule">headerImageCredit</span><span class="token punctuation">:</span> Jeremy Fenske  <span class="token comment"># 图片来源，比如图片作者的名字（可选，只在 "useHeaderImage: true" 时有效）</span>
<span class="token key atrule">headerImageCreditLink</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.artstation.com/artwork/nLY0K  <span class="token comment"># 图片来源的链接（可选，只在 "useHeaderImage: true" 时有效）</span>
<span class="token key atrule">catalog</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment"># 启用/禁用当前页的右侧目录，会覆写 `themeConfig.catalog`（可选，默认：true）</span>
<span class="token key atrule">giscus</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>  <span class="token comment"># 启用/禁用当前页的 Giscus 评论（可选，默认：true）</span>
<span class="token key atrule">hide</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment"># 是否在首页和标签页博客列表中隐藏这篇博客（可选，默认：false）</span>
<span class="token key atrule">tags</span><span class="token punctuation">:</span>  <span class="token comment"># 博客标签（可选）</span>
  <span class="token punctuation">-</span> 宇宙
  <span class="token punctuation">-</span> 物理
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">注意</p>
<p><code v-pre>title</code> 会作为一级标题在博客中显示，所以<strong>不需要在博客正文中写一级标题</strong>。</p>
</div>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">提示</p>
<p><code v-pre>front-matter</code> 中有 <code v-pre>tags</code> 项的博客会在<RouterLink to="/tags/">标签页</RouterLink>显示。</p>
</div>
<h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h3>
<p>如果你希望博客文章的 URL 格式为 <code v-pre>/post/year/month/day/post-title/</code>，请在 front matter 里添加 <code v-pre>permalinkPattern</code> 项：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> Post
<span class="token key atrule">title</span><span class="token punctuation">:</span> A Brief History of Time
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2020-03-31</span>
<span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> /post/<span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>slug/
<span class="token punctuation">---</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多细节请参考<a href="https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html#permalinkpattern" target="_blank" rel="noopener noreferrer">这里</a>。</p>
<div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">注意</p>
<p>如果配置了这个 permalinkPattern，就必须通过博客文章的 front matter 或文件名/目录名<strong>指定 date（博客发表日期）</strong>。具体细节请参考<a href="https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html#permalinkpattern" target="_blank" rel="noopener noreferrer">这里</a>。</p>
</div>
<h3 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要" aria-hidden="true">#</a> 摘要</h3>
<p>文章中 <code v-pre>&lt;!-- more --&gt;</code> 以上部分会被当作摘要，摘要会在首页文章流中显示。</p>
<h2 id="文档文章" tabindex="-1"><a class="header-anchor" href="#文档文章" aria-hidden="true">#</a> 文档文章</h2>
<p>同时本主题也保留了 VuePress 的文档功能，基本的使用方法及侧边栏配置方法请参考 <a href="https://v2.vuepress.vuejs.org/zh/guide/" target="_blank" rel="noopener noreferrer">VuePress 文档</a>。</p>
<p>文档文章的 <code v-pre>front-matter</code> 格式为：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> 时间简史  <span class="token comment"># 文档标题（必须）</span>
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2020-03-31</span>  <span class="token comment"># 文档日期，会显示在文章头部（可选）</span>
<span class="token key atrule">author</span><span class="token punctuation">:</span> 斯蒂芬·霍金  <span class="token comment"># 文档作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）</span>
<span class="token key atrule">giscus</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>  <span class="token comment"># 启用/禁用当前页的 Giscus 评论（可选，默认：true）</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">注意</p>
<p>同样，<code v-pre>title</code> 会作为一级标题在文档中显示，所以也<strong>不需要在文档正文中写一级标题</strong>。</p>
</div>
<h2 id="markdown-语法" tabindex="-1"><a class="header-anchor" href="#markdown-语法" aria-hidden="true">#</a> Markdown 语法</h2>
<p>请参考：</p>
<ul>
<li><a href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noopener noreferrer">Markdown 原生语法</a></li>
<li><a href="https://v1.vuepress.vuejs.org/zh/guide/markdown.html" target="_blank" rel="noopener noreferrer">VuePress 的 Markdown 拓展语法</a></li>
<li><RouterLink to="/zh/docs/advanced/markdown/">本主题的 Markdown 拓展语法</RouterLink></li>
</ul>
<h2 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h2>
<h3 id="链接卡片容器" tabindex="-1"><a class="header-anchor" href="#链接卡片容器" aria-hidden="true">#</a> 链接卡片容器</h3>
<p>本主题新增了链接卡片容器。</p>
<h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: link {Icon Name | Image URL} <span class="token url">[<span class="token content">title</span>](<span class="token url">url</span>)</span>
description
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p>

    <LinkCard
      title="介绍"
      link="/zh/docs/basic/intro.html"
      icon=""
      image=""
      siteDomain="true"
      ><p>vuepress-theme-gungnir Introduction</p>
</LinkCard>

    <LinkCard
      title="vuepress-theme-gungnir"
      link="https://github.com/Renovamen/vuepress-theme-gungnir"
      icon="fa-github-alt"
      image=""
      siteDomain="true"
      ><p>A blog theme for VuePress 2.</p>
</LinkCard>

    <LinkCard
      title="My Blog"
      link="https://blog.zxh.io"
      icon=""
      image="/img/links/me.png"
      siteDomain="true"
      ><p>My blog 🧐, powered by VuePress 2, themed by Gungnir.</p>
</LinkCard>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: link <span class="token url">[<span class="token content">介绍</span>](<span class="token url">/zh/docs/basic/intro.html</span>)</span>
vuepress-theme-gungnir Introduction
:::

::: link {fa-github-alt} <span class="token url">[<span class="token content">vuepress-theme-gungnir</span>](<span class="token url">https://github.com/Renovamen/vuepress-theme-gungnir</span>)</span>
A blog theme for VuePress 2.
:::

::: link {/img/links/me.png} <span class="token url">[<span class="token content">My Blog</span>](<span class="token url">https://blog.zxh.io</span>)</span>
My blog 🧐, powered by VuePress 2, themed by Gungnir.
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4>
<p>如果你不需要再链接卡片中显示域名:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">themePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">siteDomain</span><span class="token operator">:</span> <span class="token boolean">false</span>  <span class="token comment">// 可选，默认："true"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="/img/docs/link-card-without-site-domain.png" width="370px" style="margin-left: 0" alt="link-card-without-site-domain" />
<p>或者想要关闭该功能:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">themePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token boolean">false</span>  <span class="token comment">// 可选，默认："true"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他容器" tabindex="-1"><a class="header-anchor" href="#其他容器" aria-hidden="true">#</a> 其他容器</h3>
<p>这里展示一下本主题默认支持的<a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/container.html" target="_blank" rel="noopener noreferrer">容器</a>用法：</p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">信息</p>
<p>This is an info message.</p>
</div>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">提示</p>
<p>This is a tip message.</p>
</div>
<div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">注意</p>
<p>This is a warning message.</p>
</div>
<div class="custom-container danger"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.64 123.31C133.55 123.31 0 256.83 0 420.94c0 164.11 133.55 297.64 297.64 297.64 164.09 0 297.64-133.52 297.64-297.64 0-164.12-133.55-297.63-297.64-297.63Zm107.8 333.25H189.83c-19.541 0-35.62-16.079-35.62-35.62 0-19.541 16.079-35.62 35.62-35.62h215.61c19.541 0 35.62 16.079 35.62 35.62 0 19.541-16.079 35.62-35.62 35.62Z" style="fill:#f55;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.179)"/></svg><p class="custom-container-title">警告</p>
<p>This is a dangerous warning message.</p>
</div>
<details class="custom-container details"><summary>Show me the code.</summary>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Hello World!"</span> <span class="token operator">&lt;&lt;</span> <span class="token string">"\n"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
</div></template>
