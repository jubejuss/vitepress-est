import{_ as s,c as a,o as e,a as n}from"./app.53736bb5.js";var t="/vitepress-est/assets/06-gitsettings.11493dc2.jpg",i="/vitepress-est/assets/08-gh-pages.b3e68e09.jpg";const b=`{"title":"L\xE4hme laivi","description":"","frontmatter":{},"headers":[{"level":2,"title":"Base","slug":"base"},{"level":2,"title":"Github pages","slug":"github-pages"},{"level":2,"title":"deploy.sh","slug":"deploy-sh"},{"level":2,"title":"Seadistamine github'is","slug":"seadistamine-github-is"}],"relativePath":"kuis/deploy.md","lastUpdated":1643811359693}`,o={},p=n(`<h1 id="lahme-laivi" tabindex="-1">L\xE4hme laivi <a class="header-anchor" href="#lahme-laivi" aria-hidden="true">#</a></h1><p>Eelnevaga saime p\xFCsti arenduskekskonna. Laivi minekuks on tarvis genereerida staatiline leht. Selleks on <code>package.json</code> failis defineeritud k\xE4sklus <code>build</code> ehk jooksutame terminalis <code>npm run build</code>, mis genereerib meile <code>docs/.vitepress/dist</code>folderi, milles ongi avaldamisk\xF5lbulik veeb.</p><h2 id="base" tabindex="-1">Base <a class="header-anchor" href="#base" aria-hidden="true">#</a></h2><p>Et leht laivis korrektselt t\xF6\xF6le hakkaks, tuleb <code>conf.js</code> failis n\xE4idata \xE4ra baasaadress. Meie n\xE4ite puhul githubis, on see sama, mis repo nimi <code>vitepress-est</code>:</p><div class="language-javascript"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Minu dokuveeb&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&quot;/vitepress-est/&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Esileht&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="github-pages" tabindex="-1">Github pages <a class="header-anchor" href="#github-pages" aria-hidden="true">#</a></h2><p>Et elu lihtsamaks teha, v\xF5ime seadistada k\xE4sufaili, mis genereerib distfolderi ja saadab selle ka serverisse vms kohta, kus leht avaldatakse.</p><p>Siin n\xE4ites kasutame github pages&#39;it.<br> Muud erinevad v\xF5imalused on \xE4ra toodud Vitepressi enda juhendis siin: <a href="https://vitepress.vuejs.org/guide/deploy.html" target="_blank" rel="noopener noreferrer">Vitepressi juhend</a></p><h2 id="deploy-sh" tabindex="-1"><code>deploy.sh</code> <a class="header-anchor" href="#deploy-sh" aria-hidden="true">#</a></h2><p>Oma projekti juurkataloogi loome faili <code>deploy.sh</code>, millesse kirjutame vajalikud k\xE4sud:</p><ul><li>t\xF6\xF6 katkestamine errori korral</li><li>build k\xE4skluse jooksutamine</li></ul><ul><li>liikumine loodud dist folderisse</li><li>uue giti loomine</li><li>uude gitti dist folderi saatmine</li><li>naasmoine tagasi juurkataloogi ehk:</li></ul><div class="language-bash"><pre><code><span class="token comment"># katkesta kui error</span>
<span class="token builtin class-name">set</span> -e

<span class="token comment"># loo staatiline veebileht</span>
<span class="token function">npm</span> run build

<span class="token comment"># liigu loodu kausta</span>
<span class="token builtin class-name">cd</span> docs/.vitepress/dist

<span class="token comment"># loo uus git</span>
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># saada leht githubi, gh-pages branchi</span>
<span class="token function">git</span> push -f git@github.com:jubejuss/mm20doku.git master:gh-pages

<span class="token comment">#liigu tagasi</span>
<span class="token builtin class-name">cd</span> -
</code></pre></div><h2 id="seadistamine-github-is" tabindex="-1">Seadistamine github&#39;is <a class="header-anchor" href="#seadistamine-github-is" aria-hidden="true">#</a></h2><p>Ava githubis repo settings ja seej\xE4rel pages: <img src="`+t+'" alt="github settings"></p><p>Avanema peakski juba avaldamisk\xF5lbulike s\xE4tetega pilt: <img src="'+i+'" alt="github pages"></p>',16),l=[p];function r(u,c,d,k,h,g){return e(),a("div",null,l)}var v=s(o,[["render",r]]);export{b as __pageData,v as default};
