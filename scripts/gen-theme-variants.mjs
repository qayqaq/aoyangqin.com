// Generates 3 refined variants of Theme A (academic elegant), differing only
// in the serif typeface + heading metrics. Same cream/ink palette + layout.
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.resolve('public/themes');

// Each variant: a label, the Google Fonts <link>, the serif stack, and a few
// metric tweaks (heading line-height / letter-spacing / weight) tuned to the
// face so none of them read "flat".
const variants = {
  a1: {
    name: 'A1 · Fraunces（高对比·优雅）',
    gfont: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Noto+Serif+SC:wght@400;600;700&display=swap',
    serif: '"Fraunces","Noto Serif SC",Georgia,serif',
    h1: 'letter-spacing:-.01em;line-height:1.12;font-weight:600;font-optical-sizing:auto',
    title: 'font-weight:600',
  },
  a2: {
    name: 'A2 · Newsreader（文学·报章）',
    gfont: 'https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600;6..72,700&family=Noto+Serif+SC:wght@400;600;700&display=swap',
    serif: '"Newsreader","Noto Serif SC",Georgia,serif',
    h1: 'letter-spacing:-.005em;line-height:1.15;font-weight:600',
    title: 'font-weight:600',
  },
  a3: {
    name: 'A3 · Lora（沉稳·学术）',
    gfont: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;600;700&display=swap',
    serif: '"Lora","Noto Serif SC",Georgia,serif',
    h1: 'letter-spacing:-.01em;line-height:1.2;font-weight:700',
    title: 'font-weight:600',
  },
};

const body = (name) => `
<body>
  <header class="head"><div class="head-in">
    <span class="brand">Aoyang Qin</span>
    <nav class="nav"><a>Blog</a><a>Tags</a><a>Archive</a></nav>
    <span style="margin-left:.5rem;font:600 .7rem/1 var(--sans);color:var(--accent2);border:1px solid var(--accent2);border-radius:4px;padding:.15em .5em">${name}</span>
  </div></header>
  <main class="wrap">
    <p class="intro">I'm <b>Aoyang Qin</b>, a PhD student working on AI and machine learning — generative modeling, decision making, and representation learning. I write notes and essays here on the things I'm learning, across ML and physics.</p>
    <p class="sec">Recent posts</p>
    <article class="card">
      <span class="date">January 17, 2026</span>
      <h2 class="title"><a>What Happens When a Magnet Attracts Metal?</a></h2>
      <p class="sum">If the Lorentz force does no work, what actually pulls a magnet toward metal? Resolving the paradox of the "lazy" force.</p>
      <div class="tags"><span class="tag">#physics</span><span class="tag">#electromagnetism</span></div>
    </article>
    <article class="card">
      <span class="date">December 9, 2025</span>
      <h2 class="title"><a>一次统计力学之旅 · A Journey Through Statistical Mechanics</a></h2>
      <p class="sum">从一条基本假设出发，直到玻色–爱因斯坦凝聚：重走从微观计数到宏观预测的旅程。</p>
      <div class="tags"><span class="tag">#物理</span><span class="tag">#统计力学</span></div>
    </article>
    <article class="art">
      <h1>A Journey Through Classical Mechanics</h1>
      <span class="date">January 19, 2026</span>
      <p>From a potential we can define force as the negative gradient of potential energy. Combined with Newton's second law, the dynamics of a mechanical system follow naturally from a single conserved quantity.</p>
      <h2>1. Basic Mathematics and Physics</h2>
      <p>We introduce the Hamiltonian as the total energy of the system, treating position and momentum as independent variables. 我们把哈密顿量定义为系统的总能量，并将位置与动量视作独立自变量：</p>
      <div class="eq">H(x, p) = p² / 2m + V(x)</div>
      <p>This yields Hamilton's canonical equations, from which conservation of energy follows.</p>
    </article>
  </main>
</body>`;

const page = (v) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${v.name}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${v.gfont}">
<style>
  :root{
    --bg:#fbfaf7; --bg-soft:#f3f1ea; --fg:#2b2722; --fg-soft:#6b6358;
    --fg-faint:#a39a8c; --border:#e7e2d8; --accent:#7c4dff; --accent2:#b08900;
    --serif:${v.serif};
    --sans:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC",sans-serif;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:var(--bg);color:var(--fg);font-family:var(--sans);line-height:1.7;-webkit-font-smoothing:antialiased}
  a{color:inherit;text-decoration:none}
  .head{position:sticky;top:0;background:color-mix(in srgb,var(--bg) 90%,transparent);backdrop-filter:blur(8px);border-bottom:1px solid var(--border);z-index:5}
  .head-in{max-width:1080px;margin:0 auto;padding:1rem 1.5rem;display:flex;align-items:center;gap:1.4rem}
  .brand{font-family:var(--serif);font-size:1.3rem;font-weight:600;letter-spacing:-.01em}
  .nav{display:flex;gap:1.3rem;margin-left:auto;font-size:.95rem;color:var(--fg-soft)}
  .nav a:hover{color:var(--accent)}
  .wrap{max-width:720px;margin:0 auto;padding:3.5rem 1.5rem}
  .intro{font-family:var(--serif);font-size:1.28rem;line-height:1.7;color:var(--fg);padding-bottom:2.2rem;margin-bottom:2.5rem;border-bottom:1px solid var(--border)}
  .intro b{color:var(--accent);font-weight:600}
  .sec{font-size:.78rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--fg-faint);margin-bottom:.4rem}
  .card{padding:1.6rem 0;border-bottom:1px solid var(--border)}
  .card:last-child{border:none}
  .date{font-size:.85rem;color:var(--fg-faint);font-variant:small-caps;letter-spacing:.04em}
  .title{font-family:var(--serif);font-size:1.5rem;${v.title};line-height:1.3;margin:.3rem 0 .5rem}
  .title a:hover{color:var(--accent)}
  .sum{color:var(--fg-soft);font-size:1.02rem;line-height:1.65;margin-bottom:.7rem}
  .tags{display:flex;gap:.5rem;flex-wrap:wrap}
  .tag{font-size:.8rem;color:var(--fg-soft);padding:.12em .7em;border:1px solid var(--border);border-radius:999px;background:var(--bg-soft)}
  .tag:hover{color:var(--accent);border-color:var(--accent)}
  .art{margin-top:4rem;padding-top:2.5rem;border-top:2px solid var(--fg)}
  .art h1{font-family:var(--serif);font-size:2.5rem;${v.h1}}
  .art .date{display:block;margin-top:.7rem}
  .art p{font-family:var(--serif);font-size:1.14rem;line-height:1.85;margin:1.3rem 0;color:#34302a}
  .art h2{font-family:var(--serif);font-size:1.5rem;font-weight:600;margin:2.2rem 0 .8rem;padding-bottom:.3rem;border-bottom:1px solid var(--border)}
  .eq{background:var(--bg-soft);border-radius:8px;padding:1rem;text-align:center;font-family:var(--serif);font-style:italic;color:#403a32;margin:1.4rem 0}
</style>
</head>${body(v.name)}
</html>`;

for (const [key, v] of Object.entries(variants)) {
  fs.writeFileSync(path.join(OUT, `${key}.html`), page(v));
  console.log(`wrote ${key}.html  (${v.name})`);
}
