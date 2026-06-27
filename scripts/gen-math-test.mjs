// Generates standalone pages comparing MathJax rendering settings, so we can
// pick the one whose equations look crispest (not thin/"dizzy") against the
// A2 cream theme with weight-500 serif body text. Each page loads its OWN
// MathJax config (MathJax is a global singleton, so configs can't share a page).
import fs from 'node:fs';
import path from 'node:path';
const OUT = path.resolve('public/mathtest');
fs.mkdirSync(OUT, { recursive: true });

// Representative content: inline math mixed in prose + thin-stroke-prone display
// equations (Wigner-Dyson, Gutzwiller trace formula, a matrix).
const body = `
  <p>能级排斥是混沌的签名。取相邻能级间隔 \\(s\\)（标度到平均为 1），混沌系统服从 Wigner–Dyson 分布，它在 \\(s=0\\) 处为零，即 \\(\\Delta x \\Delta p \\ge \\hbar/2\\)：</p>
  <div class="eq">$$P(s) = \\frac{\\pi s}{2} e^{-\\pi s^2 / 4}$$</div>
  <p>Gutzwiller 迹公式把量子态密度 \\(d(E)=\\sum_n \\delta(E-E_n)\\) 与经典周期轨道求和联系起来：</p>
  <div class="eq">$$d(E) \\approx \\bar{d}(E) + \\frac{1}{\\pi\\hbar} \\operatorname{Re} \\sum_{p} A_p\\, e^{i(S_p(E)/\\hbar - \\mu_p \\pi/2)}$$</div>
  <p>The inner product is frozen: \\(|\\langle\\psi_1(t)|\\psi_2(t)\\rangle|^2 = |\\langle\\psi_1(0)|\\psi_2(0)\\rangle|^2\\). A generator:</p>
  <div class="eq">$$J_z = \\begin{pmatrix} 3/2 & 0 & 0 & 0 \\\\ 0 & 1/2 & 0 & 0 \\\\ 0 & 0 & -1/2 & 0 \\\\ 0 & 0 & 0 & -3/2 \\end{pmatrix}$$</div>
`;

// Each config: label, MathJax loader src, window.MathJax config, extra CSS.
const configs = {
  'a-svg-current': {
    name: 'A · SVG 当前设置（基准）',
    desc: '现在线上的设置：SVG 输出，字号 100%，颜色随正文(#302c26)。',
    src: 'tex-svg.js',
    cfg: `{tex:{inlineMath:[['\\\\(','\\\\)']],displayMath:[['$$','$$']]},svg:{fontCache:'global'}}`,
    css: ``,
  },
  'b-svg-dark-scale': {
    name: 'B · SVG 加深 + 放大 8%',
    desc: 'SVG 输出，公式颜色用最深墨色 #1c1813，整体放大到 108%。让笔画更扎实。',
    src: 'tex-svg.js',
    cfg: `{tex:{inlineMath:[['\\\\(','\\\\)']],displayMath:[['$$','$$']]},svg:{fontCache:'global',scale:1.08}}`,
    css: `mjx-container{color:#1c1813}`,
  },
  'c-chtml': {
    name: 'C · CHTML 输出（网页字体）',
    desc: 'CHTML 输出，用 MathJax 自家字体渲染。很多人觉得屏幕上比 SVG 更"实"。',
    src: 'tex-chtml.js',
    cfg: `{tex:{inlineMath:[['\\\\(','\\\\)']],displayMath:[['$$','$$']]},chtml:{fontURL:'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'}}`,
    css: `mjx-container{color:#1c1813}`,
  },
  'd-chtml-scale': {
    name: 'D · CHTML + 放大 8%',
    desc: 'CHTML 输出 + 颜色加深 + 放大 108%。最"重"的一档。',
    src: 'tex-chtml.js',
    cfg: `{tex:{inlineMath:[['\\\\(','\\\\)']],displayMath:[['$$','$$']]},chtml:{scale:1.08,fontURL:'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'}}`,
    css: `mjx-container{color:#1c1813}`,
  },
};

const page = (c) => `<!doctype html><html lang="zh"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${c.name}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,500;6..72,600&family=Noto+Serif+SC:wght@500;600&display=swap">
<script>window.MathJax=${c.cfg};</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/${c.src}"></script>
<style>
  :root{--bg:#fbfaf7;--fg:#2b2722;--body:#302c26;--border:#e7e2d8}
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:var(--bg);color:var(--body);font-family:"Newsreader","Noto Serif SC",Georgia,serif;
    font-weight:500;font-size:1rem;line-height:1.72;-webkit-font-smoothing:antialiased}
  .bar{background:#f3f1ea;border-bottom:1px solid var(--border);padding:.8rem 1.5rem;
    font:600 .85rem/1.4 -apple-system,sans-serif;color:#7c4dff}
  .wrap{max-width:680px;margin:0 auto;padding:2.5rem 1.5rem}
  p{margin:0 0 1.1em}
  .eq{margin:1.3em 0;overflow-x:auto}
  ${c.css}
</style></head><body>
  <div class="bar">${c.name} — ${c.desc}</div>
  <div class="wrap">${body}</div>
</body></html>`;

for (const [k, c] of Object.entries(configs)) {
  fs.writeFileSync(path.join(OUT, `${k}.html`), page(c));
  console.log(`wrote ${k}.html`);
}
const idx = `<!doctype html><html lang="zh"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>公式渲染对比</title>
<style>body{font-family:-apple-system,"PingFang SC",sans-serif;max-width:640px;margin:0 auto;padding:3rem 1.5rem;line-height:1.7;background:#fbfaf7;color:#2b2722}
h1{font-size:1.5rem}a{color:inherit;text-decoration:none}.o{display:block;padding:1.1rem 1.3rem;margin:.9rem 0;border:1px solid #e7e2d8;border-radius:12px;background:#fff;transition:.15s}.o:hover{border-color:#7c4dff}.o b{font-size:1.05rem}.o span{color:#6b6358;font-size:.92rem}</style></head><body>
<h1>公式渲染 — 4 个候选</h1><p>同样的公式（含细笔画易发晕的），用不同 MathJax 设置渲染。挑笔画最扎实、最不晕的那个。注意公式加载后才显示。</p>
${Object.entries(configs).map(([k,c])=>`<a class="o" href="/mathtest/${k}.html"><b>${c.name}</b><br><span>${c.desc}</span></a>`).join('')}
</body></html>`;
fs.writeFileSync(path.join(OUT, 'index.html'), idx);
console.log('wrote index.html');
