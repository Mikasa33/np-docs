import{_ as k,c as l,I as i,ay as s,o as t,E as a}from"./chunks/framework.D_hpYerU.js";const u=JSON.parse('{"title":"全局化配置 Config Provider","description":"","frontmatter":{},"headers":[],"relativePath":"components/config-provider/index.md","filePath":"components/config-provider/index.md","lastUpdated":1724409267000}'),p={name:"components/config-provider/index.md"},e=s('<h1 id="全局化配置-config-provider" tabindex="-1">全局化配置 Config Provider <a class="header-anchor" href="#全局化配置-config-provider" aria-label="Permalink to &quot;全局化配置 Config Provider&quot;">​</a></h1><p>全局化配置设置内部组件的主题、语言和组件卸载于其他位置的 DOM 的类名。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="主题" tabindex="-1">主题 <a class="header-anchor" href="#主题" aria-label="Permalink to &quot;主题&quot;">​</a></h3><p>设置内部组件的主题。</p>',5),r=s(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-dark vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> setup</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> lang</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">ts</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> NpConfigProvider</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">@mikasa33/np</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> type</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> GlobalTheme</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">naive-ui</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> ref</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">vue</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">,</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> NCard</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">,</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> NFlex</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">,</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> darkTheme</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">naive-ui</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#CB7676;--shiki-light:#AB5959;">const </span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">theme</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;"> ref</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#5DA994;--shiki-light:#2E8F82;">GlobalTheme</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> |</span><span style="--shiki-dark:#CB7676;--shiki-light:#AB5959;"> null</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;(</span><span style="--shiki-dark:#CB7676;--shiki-light:#AB5959;">null</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">template</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NpConfigProvider</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> :</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">global-style</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">false</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> :</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">theme</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">    &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NCard</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">      &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NFlex</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">        &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> @</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">click</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">theme</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> darkTheme</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#DBD7CAEE;--shiki-light:#393A34;">          深色</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">        &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">        &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> @</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">click</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">theme</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#CB7676;--shiki-light:#AB5959;"> null</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#DBD7CAEE;--shiki-light:#393A34;">          浅色</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">        &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">      &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NFlex</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">    &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NCard</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NpConfigProvider</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">template</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span></code></pre></div></details><h3 id="工具-api" tabindex="-1">工具 API <a class="header-anchor" href="#工具-api" aria-label="Permalink to &quot;工具 API&quot;">​</a></h3><p>使用弹窗提示等工具 API。直接通过 <code>$xxx</code> 使用，或通过 <code>window.$xxx</code> 使用。</p>`,3),d=s(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-dark vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> setup</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> lang</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">ts</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> NpConfigProvider</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">@mikasa33/np</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">,</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> NFlex</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">naive-ui</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#CB7676;--shiki-light:#AB5959;">function</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;"> handleShowDialog</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">()</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">  $dialog</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">.</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">warning</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">({ </span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">title</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">提示</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">, </span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">content</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">点击了按钮</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> })</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">}</span></span>
<span class="line"><span style="--shiki-dark:#CB7676;--shiki-light:#AB5959;">function</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;"> handleShowLoadingBar</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">()</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">  $loadingBar</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">.</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">start</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">  setTimeout</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">(()</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> =&gt;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">    $loadingBar</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">.</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">finish</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  },</span><span style="--shiki-dark:#4C9A91;--shiki-light:#2F798A;"> 2000</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">}</span></span>
<span class="line"><span style="--shiki-dark:#CB7676;--shiki-light:#AB5959;">function</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;"> handleShowMessage</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">()</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">  window</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">.</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">$message</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">.</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">success</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">(</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">点击了按钮</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">}</span></span>
<span class="line"><span style="--shiki-dark:#CB7676;--shiki-light:#AB5959;">function</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;"> handleShowModal</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">()</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">  window</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">.</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">$modal</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">.</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">create</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">({</span></span>
<span class="line"><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">    preset</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">card</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">    title</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">标题</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">    content</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">1.5 秒后自动关闭</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">    style</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: { </span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">width</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">500px</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> },</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  })</span></span>
<span class="line"><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">  setTimeout</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">(()</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> =&gt;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">    $modal</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">.</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">destroyAll</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  },</span><span style="--shiki-dark:#4C9A91;--shiki-light:#2F798A;"> 1500</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">}</span></span>
<span class="line"><span style="--shiki-dark:#CB7676;--shiki-light:#AB5959;">function</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;"> handleShowNotification</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">()</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">  $notification</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">.</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">error</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">({</span></span>
<span class="line"><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">    title</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">错误</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">    content</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">点击了按钮</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">    duration</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#4C9A91;--shiki-light:#2F798A;">1500</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  })</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">}</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">template</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#758575DD;--shiki-light:#A0ADA0;">  &lt;!-- 设置 global-style 是为了解决在文档中的报错问题，平时可以正常使用 --&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NpConfigProvider</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> :</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">global-style</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">false</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">    &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NFlex</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">      &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> @</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">click</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">handleShowDialog</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#DBD7CAEE;--shiki-light:#393A34;">        $dialog</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">      &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">      &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> @</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">click</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">handleShowLoadingBar</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#DBD7CAEE;--shiki-light:#393A34;">        $loadingBar</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">      &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">      &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> @</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">click</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">handleShowMessage</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#DBD7CAEE;--shiki-light:#393A34;">        $message</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">      &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">      &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> @</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">click</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">handleShowModal</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#DBD7CAEE;--shiki-light:#393A34;">        $modal</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">      &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">      &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> @</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;">click</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">handleShowNotification</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#DBD7CAEE;--shiki-light:#393A34;">        $notification</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">      &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">    &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NFlex</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NpConfigProvider</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">template</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="configprovider-props" tabindex="-1">ConfigProvider Props <a class="header-anchor" href="#configprovider-props" aria-label="Permalink to &quot;ConfigProvider Props&quot;">​</a></h3><p>支持 <a href="https://www.naiveui.com/zh-CN/light/components/config-provider#ConfigProvider-Props" target="_blank" rel="noreferrer">NConfigProvider</a> 所有属性。</p><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>global-style</td><td>将提供的主题同步到 <code>document.body</code> 上，具体说明请查看 <a href="https://www.naiveui.com/zh-CN/light/components/global-style" target="_blank" rel="noreferrer">NGlobalStyle</a></td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table>`,5);function g(y,o,c,A,D,B){const n=a("ConfigProviderBasic"),h=a("ConfigProviderTools");return t(),l("div",null,[e,i(n),r,i(h),d])}const m=k(p,[["render",g]]);export{u as __pageData,m as default};
