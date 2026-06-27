// Generates article-page mockups to compare BODY font treatments for the
// A2 theme. All share tightened metrics (smaller size, lower line-height);
// only the body/heading font pairing changes. Real mixed zh/en content +
// real MathJax so equations render exactly as on the live site.
import fs from 'node:fs';
import path from 'node:path';
const OUT = path.resolve('public/themes');
fs.mkdirSync(OUT, { recursive: true });

const variants = {
  v1: {
    name: 'V1 · 标题衬线 + 正文无衬线（推荐）',
    desc: '标题 Newsreader 衬线，正文英文 Inter + 中文思源黑体。屏幕最清晰锐利，不发晕。',
    gfont: 'family=Newsreader:opsz,wght@6..72,500;6..72,600&family=Inter:wght@400;500;600&family=Noto+Sans+SC:wght@400;500&display=swap',
    headFont: '"Newsreader","Noto Serif SC",Georgia,serif',
    bodyFont: '"Inter","Noto Sans SC",-apple-system,"PingFang SC",sans-serif',
    bodyWeight: '400', headWeight: '600',
  },
  v2: {
    name: 'V2 · 全衬线·加粗收紧',
    desc: '标题正文都用衬线，但字重提到 500、颜色加深、字号收小。保留书卷气，减轻过细。',
    gfont: 'family=Newsreader:opsz,wght@6..72,500;6..72,600;6..72,700&family=Noto+Serif+SC:wght@500;600;700&display=swap',
    headFont: '"Newsreader","Noto Serif SC",Georgia,serif',
    bodyFont: '"Newsreader","Noto Serif SC",Georgia,serif',
    bodyWeight: '500', headWeight: '600',
  },
  v3: {
    name: 'V3 · 英文衬线 + 中文黑体',
    desc: '同一段里英文用 Newsreader 衬线、中文用思源黑体。英文有书卷气，中文不发飘。',
    gfont: 'family=Newsreader:opsz,wght@6..72,400;6..72,600&family=Noto+Sans+SC:wght@400;500&display=swap',
    headFont: '"Newsreader","Noto Sans SC",Georgia,serif',
    bodyFont: '"Newsreader","Noto Sans SC",Georgia,serif',
    bodyWeight: '400', headWeight: '600',
  },
  v4: {
    name: 'V4 · 厚实衬线（Source Serif + 思源宋 600）',
    desc: '换成笔画更敦实的 Source Serif 4 + 思源宋体 600。整体衬线但不细，沉稳。',
    gfont: 'family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Noto+Serif+SC:wght@500;600;700&display=swap',
    headFont: '"Source Serif 4","Noto Serif SC",Georgia,serif',
    bodyFont: '"Source Serif 4","Noto Serif SC",Georgia,serif',
    bodyWeight: '400', headWeight: '600',
  },
};

const article = `
  <h1>A Journey Through Classical Mechanics</h1>
  <div class="meta">January 19, 2026 · 中文版</div>
  <p>从势能出发，我们可以给出力的定义，即势能对位置的偏导。结合牛顿第二定律 (Newton's second law) 有 \\(\\frac{d\\vec p}{dt}=\\vec F=-\\frac{\\partial V}{\\partial\\vec x}\\)，同时动量的表达式为 \\(\\frac{\\vec p}{m}=\\frac{d\\vec x}{dt}\\)。</p>
  <p>We introduce the Hamiltonian as the total energy of the system, treating position and momentum as independent variables. 现在把这两个式子作为已知，我们就可以定义一个量：</p>
  <div class="math-display">$$H(\\vec x,\\vec p)=\\frac{\\vec p^{2}}{2m}+V(\\vec x)$$</div>
  <p>This yields Hamilton's canonical equations, from which conservation of energy follows naturally. 这进一步可以导出 \\(\\frac{dH}{dt}=0\\)，所以这是一个守恒量。</p>
  <h2>1. Basic Mathematics and Physics 基础数学与物理</h2>
  <p>过去我们比较习惯画出 \\(V(x)\\) 的势能图，并在其中画一条横线代表总能量 (total energy)。因为动能是非负的，所以可以导出粒子所能运动的区域，只能在 \\(V(x)\\) 在这条横线以下有值的区域。比如一个 \\(V(x)\\) 洼地，粒子就会在里面来回运动，这称为束缚运动 (bound motion)。</p>
`;

const page = (v) => `<!doctype html>
<html lang="zh"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${v.name}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?${v.gfont}">
<script>
window.MathJax={tex:{inlineMath:[['\\\\(','\\\\)']],displayMath:[['$$','$$']],tags:'ams'},svg:{fontCache:'global'}};
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
<style>
  :root{--bg:#fbfaf7;--fg:#2b2722;--fg-body:#34302a;--fg-soft:#6b6358;--fg-faint:#a39a8c;--border:#e7e2d8;--accent:#7c4dff;
    --head:${v.headFont};--body:${v.bodyFont}}
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:var(--bg);color:var(--fg-body);font-family:var(--body);font-weight:${v.bodyWeight};
    font-size:1.05rem;line-height:1.72;-webkit-font-smoothing:antialiased}
  .bar{background:#f3f1ea;border-bottom:1px solid var(--border);padding:.7rem 1.5rem;font:600 .8rem/1 -apple-system,sans-serif;color:var(--accent)}
  .wrap{max-width:680px;margin:0 auto;padding:3rem 1.5rem}
  h1{font-family:var(--head);font-weight:${v.headWeight};font-size:2.1rem;line-height:1.2;letter-spacing:-.01em;color:var(--fg);margin-bottom:.6rem}
  .meta{font-family:-apple-system,sans-serif;font-variant:small-caps;letter-spacing:.04em;color:var(--fg-faint);font-size:.9rem;
    padding-bottom:1.2rem;margin-bottom:1.8rem;border-bottom:2px solid var(--fg)}
  h2{font-family:var(--head);font-weight:${v.headWeight};font-size:1.45rem;color:var(--fg);margin:2rem 0 .7rem;padding-bottom:.3rem;border-bottom:1px solid var(--border)}
  p{margin:0 0 1.1em}
  .math-display{margin:1.3em 0;overflow-x:auto}
</style>
</head><body>
  <div class="bar">${v.name} — ${v.desc}</div>
  <div class="wrap">${article}</div>
</body></html>`;

for (const [k, v] of Object.entries(variants)) {
  fs.writeFileSync(path.join(OUT, `${k}.html`), page(v));
  console.log(`wrote ${k}.html  ${v.name}`);
}

// index
const idx = `<!doctype html><html lang="zh"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>正文字体候选</title>
<style>body{font-family:-apple-system,"PingFang SC",sans-serif;max-width:640px;margin:0 auto;padding:3rem 1.5rem;line-height:1.7;background:#fbfaf7;color:#2b2722}
h1{font-size:1.5rem}a{color:inherit;text-decoration:none}
.o{display:block;padding:1.1rem 1.3rem;margin:.9rem 0;border:1px solid #e7e2d8;border-radius:12px;background:#fff;transition:.15s}
.o:hover{border-color:#7c4dff}.o b{font-size:1.08rem}.o span{color:#6b6358;font-size:.92rem}</style></head><body>
<h1>正文中英字体 — 4 个候选</h1><p>都已收小字号、收紧行距，含真实中英混排 + 公式。挑最不晕、最耐读的。</p>
${Object.entries(variants).map(([k,v])=>`<a class="o" href="/themes/${k}.html"><b>${v.name}</b><br><span>${v.desc}</span></a>`).join('')}
</body></html>`;
fs.writeFileSync(path.join(OUT, 'index.html'), idx);
console.log('wrote index.html');
