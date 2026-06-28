---
title: "一次经典力学之旅（二）：对称性如何写下定律"
date: "2026-01-02"
lang: "zh"
translationKey: "classical-mechanics-2"
tags: ["物理", "经典力学"]
category: "Classical Mechanics Series"
summary: "每一个连续对称性都藏着一个守恒量；反过来，单凭对称性就能定下作用量。第二篇沿着这个念头，从诺特定理走到相对论不变性，再到电磁耦合及其量子回响。"
---

> 系列第（二）篇，共四篇。[第（一）篇](/zh/blog/classical-mechanics-1)搭起了地基：力如何从势中来，微分形式如何统一那些积分定理，以及最小作用量原理如何让我们给一整条路径配上一个数。我们在一个许诺上收的尾——作用量不是知道物理*之后*才去算的东西，而是*对称性能提前递给我们*的东西。这一篇来兑现它。

让我把上一篇的落点重述一遍，因为它定下了整盘棋的走向。我们学会了写出系统的作用量并对它求极值。可对一个从没见过的系统，*作用量到底从哪来？* 老实的答案是：靠猜。而神奇的答案是：这个猜法几乎完全被对称性钉死。一条物理定律的对称性，无非是某些情形的不可分辨——我们可以对系统做某种操作，操作之后定律以完全相同的数学形式出现。所以对称性，就是定律在某个操作下的*不变性*。这一篇我们先把它说精确（诺特定理），再把它变成一件构造工具，单凭不变性就搭出相对论自由粒子和它的电磁耦合——最后看着同一套结构在量子力学里重现。

先给对称性几句定向的话：
- 物理定律的对称性，就是某些物理情形的不可分辨性。
- 这种不可分辨性意味着，我们可以对系统做某些操作，而操作前后，定律保持完全一致的数学形式。
- 所以物理定律的对称性，就是定律在操作下的不变性。

## 3. 对称性

### 3.1 诺特定理：对称性与守恒律

延续第（一）篇，我们可以把物理定律看成由"作用量取驻值" $\delta S[q(t)]=0$ 得来的东西。于是变换前后都得有 $\delta S[q(t)]=\delta S[\tilde{q}(t)]=0$，其中 $\tilde{q}(t)=F(q(t))$。要保证这点，最简单直接的办法就是让作用量变换前后*相等*，$S[q(t)]= S[\tilde{q}(t)]$。也就是说，在对称操作下作用量泛函保持不变——对称性就是作用量的不变性。

操作分离散和连续两种，对称性也就跟着分两种。大名鼎鼎的**诺特定理**说：每一个连续对称性，都对应一个守恒的物理量。

证明如下（为简单起见假设操作不改变时间，这是可以推广的）。设系统有一个连续对称性 $G(\theta)$，参数为 $\theta$，$\theta=0$ 是恒等变换，$\theta=\varepsilon$ 是无穷小变换，于是 $q(t) \rightarrow \widetilde{q}(t)=q(t)+\varepsilon F(q(t))$ 仍保持 $\delta S=S[\tilde{q}(t)]-S[q(t)]=\int d t L(\tilde{q}, \dot{\tilde{q}})-\int d t L(q, \dot{q})=0$。现在是关键的一招：想象常数 $\varepsilon$ 变成一个任意函数 $\varepsilon(t)$，但带着 $\varepsilon(t_i)=\varepsilon(t_f)=0$，于是 $\delta q=\tilde{q}(t)-q(t)=\varepsilon(t) F(q(t))$。当然，这样一个依赖时间的 $\varepsilon(t)$ 已经不再是对称变换参数——对称变换参数不能依赖 $t$——所以这个变换并不是对称性，也就不必保持作用量不变。*可是*，一旦 $\varepsilon(t)$ 退回常数，作用量就必须重新不变。为了把 $\delta S$ 定下来，考虑三点：
- 作用量是某个函数（拉格朗日量）对时间的积分，所以它的改变量也必然是一个时间积分。
- 拉格朗日量里只含 $q(t)$ 的一阶导数，所以它的改变量最多含 $\varepsilon(t)$ 的一阶导数。
- 算到一阶无穷小，这个改变量不能含 $\varepsilon(t)$ 本身，因为这样的项在 $\varepsilon(t)$ 退回常数时不会变成零。所以一阶小量只能含 $\dot{\varepsilon}$，它在 $\varepsilon(t)$ 变回常数时自动归零。

三点合在一起，必有
$$
\delta S=\int_{t_i}^{t_f} d t\delta L=\int_{t_i}^{t_f} d t(L(\widetilde{q}, \dot{\widetilde{q}})-L(q, \dot{q}))=\int_{t_i}^{t_f} d t Q(q, \dot{q}) \dot{\varepsilon}(t).
$$
对真实物理路径 $\delta S=0$，分部积分给出 $\delta S=-\int_{t_i}^{t_f} d t \dot{Q}(q, \dot{q}) \varepsilon(t)=0,\frac{dQ}{dt}=0$。也就是说：$Q(q,\dot{q})$ 是守恒量。请注意——这交给我们的不只是一条定理，而是一套*找守恒量的配方*。

> **例（空间平移不变性与动量守恒）。** 平移坐标 $\mathbf{x}_i \rightarrow \widetilde{\mathbf{x}}_i=\mathbf{x}_i+\mathbf{a}$。取 $\mathbf{a}=\varepsilon$，$$0=\delta L=L\left(\mathbf{x}_i+\varepsilon, \dot{\mathbf{x}}_i\right)-L\left(\mathbf{x}_i, \dot{\mathbf{x}}_i\right)=\varepsilon \cdot \sum_j \frac{\partial L}{\partial \mathbf{x}_j}.$$ 把 $\varepsilon$ 提升为 $\varepsilon(t)$，
> $$
> \begin{aligned}
> \delta S & =\int d t \delta L=\int d t\left[\sum_j \frac{\partial L}{\partial \mathbf{x}_j} \cdot \delta \mathbf{x}_j+\sum_j \frac{\partial L}{\partial \dot{\mathbf{x}}_j} \delta \dot{\mathbf{x}}_j\right] \\
> & =\int d t\left[\sum_j \frac{\partial L}{\partial \mathbf{x}_j} \cdot \varepsilon+\sum_j \frac{\partial L}{\partial \dot{\mathbf{x}}_j} \cdot \dot{\varepsilon}\right]=\int d t\left(\sum_j \frac{\partial L}{\partial \dot{\mathbf{x}}_j}\right) \cdot \dot{\varepsilon}
> \end{aligned}
> $$
> 于是守恒量是总动量：$$\sum_j \frac{\partial L}{\partial \dot{\mathbf{x}}_j}=\sum_j \mathbf{p}_j=\mathbf{p}.$$

> **例（空间旋转不变性与角动量守恒）。** $d$ 维空间 $\vec{x}=\left(x^1, x^2, \cdots x^d\right)=x^\alpha ,\alpha=1,2, \cdots d$，无穷小旋转给出
> $$
> \delta x_\alpha=\varepsilon_{\alpha \beta} x^\beta . \delta \vec{x}^2=0=\vec{x} \delta \vec{x}=\varepsilon_{\alpha \beta} x^\alpha x^\beta \Rightarrow \varepsilon_{\alpha \beta}=-\varepsilon_{\beta \alpha} .
> $$
> 所以独立参数数目是 $\frac{d(d-1)}{2}$。若 $\varepsilon_{\alpha \beta}$ 是常数，$\delta \dot{x}_\alpha=\varepsilon_{\alpha \beta} \dot{x}^\beta$；若变成 $\varepsilon_{\alpha \beta}(t)$，则 $\delta \dot{x}_\alpha=\varepsilon_{\alpha \beta} \dot{x}^\beta+\dot{\varepsilon}_{\alpha \beta} x^\beta$，进而 $$\begin{aligned}\delta L & =\frac{\partial L}{\partial \dot{x}^\beta} \dot{\varepsilon}^{\beta \alpha} x_\alpha=p_\beta x_\alpha \dot{\varepsilon}^{\beta \alpha}=-\frac{1}{2}\left(x_\alpha p_\beta-x_\beta p_\alpha\right) \dot{\varepsilon}^{\alpha \beta} . \\ \delta S & = -\frac{1}{2} \int d t\left(x_\alpha p_\beta-x_\beta p_\alpha\right) \dot{\varepsilon}^{\alpha \beta} \end{aligned}$$ 于是角动量守恒：
> $$
> J_{\alpha \beta}=x_\alpha p_\beta-x_\beta p_\alpha,\quad J^i=\frac{1}{2} \varepsilon^{i j k} J_{j k}.
> $$

> **例（时间平移对称性与能量守恒）。** 对封闭系统，拉格朗日量不显式含 $t$，于是在 $t \rightarrow \tilde{t}=t+a, q(t) \rightarrow \tilde{q}(t)=q(\tilde{t})$ 下作用量不变：
> $$
> \begin{aligned}
> S[q(t)]=\int_{t_i}^{t_f} d t L(q(t), \dot{q}(t)) & \rightarrow \\
> \left.S[q(\widetilde{t})]=\int_{t_i-a}^{t_f-a} d t L(q \widetilde{t}), \frac{d}{d t} q(\widetilde{t})\right) & \left.=\int_{t_i}^{t_f} d \widetilde{t} L(q \widetilde{t}), \dot{q}(\widetilde{t})\right) \\
> & =\int_{t_i}^{t_f} d t L(q(t), \dot{q}(t))=S[q(t)].
> \end{aligned}
> $$
> 但对开放系统，$L(q,\dot{q},t)$ 显式依赖时间，就没有时间平移不变性了。现在取变换 $t \rightarrow \widetilde{t}(t)=t+\varepsilon(t)$：
> $$
> \begin{aligned}
> S[q(\widetilde{t})] & =\int d t L\left(q(\widetilde{t}), \frac{d}{d t} q(\widetilde{t})\right)=\int d \widetilde{t}\left(\frac{d t}{d \widetilde{t}}\right) L\left(q(\widetilde{t}),\left(\frac{d \widetilde{t}}{d t}\right) \dot{q}(\widetilde{t})\right) \\
> & =\int d \widetilde{t}\left(\frac{1}{1+\dot{\varepsilon}}\right) L(q(\widetilde{t}),(1+\dot{\varepsilon}) \dot{q}(\widetilde{t})) \\
> & =\int d \widetilde{t} L(q (\widetilde{t}), \dot{q}(\widetilde{t}))-\int d \widetilde{t}(\dot{\varepsilon}) L(q (\widetilde{t}), \dot{q}(\widetilde{t}))+\int d \widetilde{t} \frac{\partial L}{\partial(\dot{q}(\widetilde{t}))} \dot{q}(\widetilde{t})(\dot{\varepsilon}) \\
> & =\int d t L(q(t), \dot{q}(t))+\int d t\left[\frac{\partial L}{\partial(\dot{q}(t))} \dot{q}(t)-L(q(t), \dot{q}(t))\right] \dot{\varepsilon}, \\ 0= \delta S & = S[q(\widetilde{t})]-S[q(t)]=\int d t\left[\frac{\partial L}{\partial \dot{q}} \dot{q}-L(q, \dot{q})\right] \dot{\varepsilon}=\int d t\left[p \dot{q}-L(q, \dot{q})\right] \dot{\varepsilon}=\int d tH(q,p) \dot{\varepsilon}
> \end{aligned}
> $$
> 这正好代表哈密顿量即能量守恒。这个推导也正是含时诺特定理的证明。

> **例（伽利略不变性）。** 在变换 $\mathbf{x} \rightarrow \mathbf{x}+\mathbf{v} t$ 下，考察多粒子作用量 $S[\mathbf{x}(t)]=\int d t\left[\frac{1}{2} \sum_i m_i \dot{\mathbf{x}}_i^2-\sum_{i<j} V\left(\mathbf{x}_i-\mathbf{x}_j\right)\right]$。可以算出变换后的作用量为 $S[\tilde{\mathbf{x}}(t)]=S[\mathbf{x}(t)]+\sum_i m_i\left[\mathbf{x}_i\left(t_f\right)-\mathbf{x}_i\left(t_i\right)\right] \cdot \mathbf{v}+\frac{1}{2} m \mathbf{v}^2\left(t_f-t_i\right)$。这与原作用量不同，但多出来的只是端点项，不影响 $\delta S=0$——所以伽利略变换仍是这个系统的对称性。进一步取 $\mathbf{x}_i \rightarrow \widetilde{\mathbf{x}}_i=\mathbf{x}_i+\varepsilon(t) t$，可算出 $\delta S=\int_{t_i}^{t_f} d t\left[\left(\sum_i m_i \dot{\mathbf{x}}_i\right) t-\sum_i m_i \mathbf{x}_i\right] \cdot \dot{\varepsilon}$，所以伽利略对称性的守恒量是 $\mathbf{K}=\mathbf{p} t-m \mathbf{x}_c=\mathbf{p} t-\sum_i m_i \mathbf{x}_i$——正是意料之中的东西。

### 3.2 对称性决定作用量

把眼下知道的盘点一下：
- 作用量给出运动方程。
- 作用量给出拉格朗日量，再经勒让德变换给出哈密顿量。
- 作用量的不变性给出物理定律的不变性。

那么，一个系统的作用量最初是怎么来的？基本靠猜——但以对称性为约束。这是这一篇余下部分的路线图，也是远超本篇的物理路线图：
- 我们将重点用*相对论不变性*定下狭义相对论中自由粒子的作用量。
- 再用*规范不变性*定下与电磁场耦合的带电粒子的作用量。
- 后来，电磁场的规范对称性被杨振宁和米尔斯推广成所谓的非阿贝尔规范对称性。
- 再后来，人们发现强相互作用和弱相互作用也分别由一种非阿贝尔规范对称性决定。
- 而爱因斯坦发现引力遵循一种广义协变性——更现代的说法是微分同胚不变性——它既决定引力场中粒子的作用量，也决定引力场本身的作用量，从而决定爱因斯坦方程。至此，四种基本相互作用全都由对称性决定。

### 3.3 相对论不变性与洛伦兹变换

狭义相对论的基本设置就不复述了。我直接写下两个邻近事件在两个惯性系中时空坐标的关系：$d t^{\prime 2}-d x^{\prime 2}-d y^{\prime 2}-d z^{\prime 2}=d\tau^{\prime 2}=d\tau^2=d t^2-d x^2-d y^2-d z^2$，这就是**间隔不变性**。对给定的两个事件，不同观测者测到的时间和空间坐标各不相同，但时空间隔 $d\tau$ 是一个绝对的、客观存在的物理量，不随参考系改变。假如一个粒子从 $(t, x, y,z)$ 运动到 $(t + dt, x + dx, y + dy,z + dz)$，那间隔 $d\tau^2$ 就等于一个固定在粒子上的钟在这段过程中走过的时间的平方（因为在粒子自身的参考系里，这个钟的空间坐标改变量为零）——所以 $d\tau$ 就是粒子的**固有时**（proper time）。间隔的定义不依赖于是否有粒子运动，而固有时的定义却依赖于一个运动的粒子；它们是两个不同的概念，常用不同的记号表示。

约定 $x^\mu,\mu=0,1,2,3,t=x^0, x=x^1, y=x^2, z=x^3$。间隔为 $-d \tau^2=\eta_{\mu v} d x^\mu d x^v,-\eta_{00}=\eta_{11}=\eta_{22}=\eta_{33}=1$，其中 $\eta_{\mu\nu}$ 是四维闵可夫斯基时空的度规张量——所谓闵可夫斯基时空，就是狭义相对论里的平直时空——内积为 $A \cdot B=A^\mu B_\mu=A_\mu B^\mu=\eta_{\mu v} A^\mu B^v$。两个参考系之间的坐标变换就是**洛伦兹变换**，一个保持间隔的线性变换 $x^{\prime \mu}=\Lambda_v^\mu x^v$。取 $y=y',z=z'$ 则 $-d \tau^2=-d t^2+d x^2=d x^{+} d x^{-},x^+=x+t,x^-=x-t$，于是必有 $d x^{+^{\prime}} d x^{-^{\prime}}=d x^{+} d x^{-}$，即存在 $\omega$ 使得 $x^{+^{\prime}}=e^{-\omega} x^{+},x^{-^{\prime}}=e^{\omega} x^{-}$，也就是：
$$
\begin{aligned}
x^{\prime} & =\cosh (\omega) x-\sinh (\omega) t \\
t^{\prime} & =-\sinh (\omega) x+\cosh (\omega) t.
\end{aligned}
$$
从物理含义看，$S'$ 系原点 $x'=0$ 在 $S$ 系中以速度 $v$ 运动，于是 $\tanh (\omega)=v$，进而 $\cosh (\omega)=1 / \sqrt{1-v^2}, \sinh (\omega)=v / \sqrt{1-v^2}$，于是
$$
\begin{aligned}
t^{\prime} & =\frac{t-v x}{\sqrt{1-v^2}}, \\
x^{\prime} & =\frac{x-v t}{\sqrt{1-v^2}}.
\end{aligned}
$$
相对论不变性说，相对论粒子的作用量必须是洛伦兹不变的，而唯一和粒子坐标有关的这种不变量就是固有时 $d\tau$。再由量纲分析，最直接的相对论粒子作用量就是
$$
S[x(s)]=-m \int d \tau=-m \int d s \sqrt{-\eta_{\mu v} \frac{d x^\mu}{d s} \frac{d x^v}{d s}}
$$
其中 $s$ 是轨迹的参数，负号是为了能正确退化到非相对论极限。这个作用量显然有重参数不变性。比如取 $s=\tau$，
$$
S[x(\tau)]=-m \int d \tau=-m \int d \tau \sqrt{-\eta_{\mu v} \frac{d x^\mu}{d \tau} \frac{d x^v}{d \tau}} .
$$
或取 $s=x^0=t$，于是 $d \tau^2=d t^2-d \mathbf{x}^2=d t^2\left(1-\mathbf{v}^2\right)$；可以算出与四矢量相对应的四动量 $p^0=\frac{m}{\sqrt{1-\mathbf{v}^2}}, \mathbf{p}=\frac{m \mathbf{v}}{\sqrt{1-\mathbf{v}^2}}, -p^\mu p_\mu=\left(p^0\right)^2-\mathbf{p}^2=m^2$，作用量为
$$
S[\mathbf{x}(t)]=-m \int d t \sqrt{1-\mathbf{v}^2}=-m \int d t+\int d t \frac{1}{2} m \mathbf{v}^2+\ldots
$$
于是低速时退化到非相对论自由粒子的作用量——第一项是常数，变分时落掉了。整个自由粒子，从一个要求里复原出来：洛伦兹不变性。

我们还能再进一步，引入辅助变量 $e(s)$，把作用量写成没有根号的形式：
$$
S[e(s), x(s)]=\frac{1}{2} \int d s\left(e^{-1} \eta_{\mu v} \frac{d x^\mu}{d s} \frac{d x^v}{d s}-e m^2\right) .
$$
只需用 $\frac{\delta S}{\delta e(s)}=0$ 消去 $e(s)$ 就回到原来的作用量——这和第（一）篇里从相空间最小作用量推出坐标空间最小作用量是一个套路。

### 3.4 与电磁场的耦合

现在让自由粒子和场交互。在第（一）篇导出洛伦兹力的例子里，我们引入了矢量势 $\mathbf{A}$；和四动量一样，再配上标量电势，构造一个四矢量 $A^\mu,\mu=0,1,2,3,A^0=\phi,A^i=A_i,i=1,2,3$。注意 $A^\mu$ 本身不是物理的——真正可测的是电场强度 $\mathbf{E}$ 和磁场强度 $\mathbf{B}$，合写成 $F_{i 0}=E_i, F_{i j}=\varepsilon_{i j k} B^k,i, j=1,2,3$，有关系
$$
F_{\mu v}=\partial_\mu A_v-\partial_v A_\mu, \partial_\mu=\frac{\partial}{\partial x^\mu}.
$$
显然 $F_{\mu\nu}$ 在变换 $A_\mu \rightarrow A_\mu+\partial_\mu \varepsilon$ 下不变，其中 $\varepsilon(x)$ 是时空坐标 $x^\mu$ 的任意函数。这就是电磁场的**规范变换**；用形式的语言，$A=A_\mu d x^\mu,A\rightarrow A+d\varepsilon$。既然场不变，粒子在场作用下的运动也不变，所以它的作用量也得不变——这就是**规范对称性**。

接下来我们要在 $-m\int d\tau$ 上加一项，要它*既*规范不变*又*洛伦兹不变。原料无非是 $F$ 或 $A$。若用 $F$，最直接的洛伦兹标量要么是 $F_{\mu \nu} \frac{d x^\mu}{d s} \frac{d x^v}{d s}$，要么是 $F_{\mu v} F^{\mu v}$——但前者因反对称而为零，后者是二阶项，场小时可忽略。我们最终发现，用 $A$ 的那项 $q\int^b_aA$ 才是更合理的：虽然规范变换下 $q \int_a^b A \rightarrow q \int_a^b A+q \int_a^b d \varepsilon=q \int_a^b A+q(\varepsilon(b)-\varepsilon(a))$ 作用量本身在变，但变分之后端点项消失，所以是合理的。相对论性带电粒子完整的作用量是
$$
\begin{aligned}
S[x(s)] & =-m \int d \tau+q \int A \\
& =-m \int d s \sqrt{-\eta_{\mu v} \frac{d x^\mu}{d s} \frac{d x^v}{d s}}+q \int d s A_\mu \frac{d x^\mu}{d s}  \\
& \approx -m \int d t+\int d t\left[\frac{1}{2} m \mathbf{v}^2-q \phi+q \mathbf{A} \cdot \mathbf{v}\right]+\ldots
\end{aligned}
$$
低速极限下的拉格朗日量是 $L \approx \frac{1}{2} m \mathbf{v}^2-q \phi+q \mathbf{A} \cdot \mathbf{v}$，广义动量为 $\mathbf{p}=\frac{\partial L}{\partial \dot{\mathbf{x}}}=m \dot{\mathbf{x}}+q \mathbf{A}$，所以哈密顿量为
$$
H=\mathbf{p} \cdot \mathbf{v}-L=\mathbf{p} \cdot \frac{\mathbf{p}-q \mathbf{A}}{m}-\left[\frac{1}{2} m\left(\frac{\mathbf{p}-q \mathbf{A}}{m}\right)^2-q \phi+q \mathbf{A} \cdot \frac{\mathbf{p}-q \mathbf{A}}{m}\right]=\frac{(\mathbf{p}-q \mathbf{A})^2}{2 m}+q \phi.
$$
现在可以动用第（一）篇结尾那套几何视角，来理解*为什么*正则动量不再是 $m\mathbf{v}$。其实，$\mathbf{p}$ 是**正则动量**（canonical momentum），是广义坐标的共轭量；而 $m\mathbf{v}$ 是**机械动量**（mechanical/kinematic momentum）。$p \neq mv$ 这件事，正是电磁耦合系统的根本特征。分解式 $\mathbf{p} = m\mathbf{v} + q\mathbf{A}$ 并非随意的数学拼凑，它是流形上两种截然不同的几何结构的融合。用张量记号，正则动量为
$$
\begin{aligned}
p_i=\frac{\partial L}{\partial v^i} & =\frac{\partial}{\partial v^i}\left(\frac{1}{2} m g_{j k} v^j v^k+q A_j v^j-q \phi\right) \\
& =\frac{1}{2} m g_{j k}\left(\delta_i^j v^k+v^j \delta_i^k\right)+q A_j \delta_i^j \\
& =\frac{1}{2} m\left(g_{i k} v^k+g_{j i} v^j\right)+q A_i \\
& =m g_{i j} v^j+q A_i.
\end{aligned}
$$

- **动能项（$m\mathbf{v}$）** 来自动能 $T = \frac{1}{2} m g_{ij} v^i v^j$。它的存在显式依赖**度规张量** $g_{ij}$（那把测量距离的"尺子"）。没有度规，我们就没法定义速度的大小 $v^2$，也就没法定义这部分动量。这一项代表粒子的**惯性**属性。
- **相互作用项（$q\mathbf{A}$）** 来自耦合项 $q A_i v^i$。几何上，$A_i$ 是一个 1-形式场。注意，缩并 $A_i v^i$ **不需要**度规；它是切矢量 $v$ 与余切矢量 $A$ 之间的自然配对。在纤维丛的语言里，$\mathbf{A}$ 是一个**联络**（connection）。它规定了粒子的内部状态（相位）在空间移动时如何被平移输运。这一项是纯粹**拓扑/几何**的，与我们如何测量距离无关。

正则动量 $\mathbf{p}$ 把依赖度规的惯性信息（$mv$）与依赖联络的几何信息（$qA$）焊在了一起。由于 $\mathbf{p}$ 定义为 $L$ 的梯度（$\partial L / \partial \dot{q}$），它天然是余切丛 $T^*\mathcal{M}$ 上的协变矢量（1-形式），这让它成为相空间动力学中最基本的几何对象。

### 3.5 量子的延伸

透过正则动量和规范不变性，我们能和量子力学接上头——也能更好地理解，规范所代表的联络*为什么*携带了粒子的内部相位信息。我们来问：为什么在量子力学里，对应于梯度算符 $-i\hbar\nabla$ 的基本变量是*正则*动量 $\mathbf{p}$，而不是机械动量 $m\mathbf{v}$？答案来自考察作用量 $S$ 对**规范变换**的响应。把对任意标量函数 $\chi(\mathbf{x},t)$ 的规范变换
$$\mathbf{A}^{\prime}=\mathbf{A}+\nabla \chi, \quad \phi^{\prime}=\phi-\frac{\partial \chi}{\partial t}$$
代入拉格朗日量，得到
$$
\begin{aligned}
L^{\prime} & =\frac{1}{2} m \mathbf{v}^2-q\left(\phi-\partial_t \chi\right)+q(\mathbf{A}+\nabla \chi) \cdot \mathbf{v} \\
& =\left(\frac{1}{2} m \mathbf{v}^2-q \phi+q \mathbf{A} \cdot \mathbf{v}\right)+q\left(\partial_t \chi+\mathbf{v} \cdot \nabla \chi\right)=L+q \frac{d \chi}{d t}.
\end{aligned}
$$
拉格朗日量变了一个全时间导数项。于是作用量 $S = \int_{t_1}^{t_2} L dt$ 变了一个边界项：
$$
S^{\prime}=S+q\left[\chi\left(t_2\right)-\chi\left(t_1\right)\right].
$$
在半经典路径积分表述（或 WKB 近似）中，量子波函数与经典作用量的关系是 $\psi \sim e^{iS/\hbar}$。应用作用量的改变量 $\Delta S = q\chi$，变换后的波函数 $\psi'$ 与原波函数 $\psi$ 的关系必为
$$
\psi^{\prime}(\mathbf{x}, t)=e^{i \frac{q}{\hbar} \chi(\mathbf{x}, t)} \psi(\mathbf{x}, t).
$$
这揭示了规范变换的物理本质：**它是波函数相位的局部旋转。** 场 $\mathbf{A}$ 正是管理这个相位的"联络"。

在量子力学里，动量是空间平移的生成元，由梯度 $\nabla$ 表示。但如果对变换后的波函数用普通梯度算符，$\nabla \psi^{\prime}=\nabla\left(e^{i \frac{q}{\hbar} \chi} \psi\right)=e^{i \frac{q}{\hbar} \chi}\left(\nabla \psi+i \frac{q}{\hbar}(\nabla \chi) \psi\right)$，结果**不是**协变的：那个 $\nabla \chi$ 项（来自 $\mathbf{A}$ 的规范变换）破坏了简单的变换规律。这意味着普通导数 $\nabla$（对应机械动量）在规范变换下不是一个定义良好的物理量。为了修复它，我们引入**协变导数**（covariant derivative）$\mathbf{D} = \nabla - i \frac{q}{\hbar} \mathbf{A}$。检查它在 $\mathbf{A}' = \mathbf{A} + \nabla \chi$ 下的变换：
$$
\begin{aligned}
\mathbf{D}^{\prime} \psi^{\prime} & =\left(\nabla-i \frac{q}{\hbar} \mathbf{A}^{\prime}\right)\left(e^{i \frac{q}{\hbar} \chi} \psi\right) \\
& =\nabla\left(e^{i \frac{q}{\hbar} \chi} \psi\right)-i \frac{q}{\hbar}(\mathbf{A}+\nabla \chi)\left(e^{i \frac{q}{\hbar} \chi} \psi\right) \\
& =e^{i \frac{q}{\hbar} \chi}\left[\left(\nabla \psi+i \frac{q}{\hbar}(\nabla \chi) \psi\right)-i \frac{q}{\hbar} \mathbf{A} \psi-i \frac{q}{\hbar}(\nabla \chi) \psi\right] \\
& =e^{i \frac{q}{\hbar} \chi}\left(\nabla-i \frac{q}{\hbar} \mathbf{A}\right) \psi \\
& =e^{i \frac{q}{\hbar} \chi} \mathbf{D} \psi.
\end{aligned}
$$
多余的 $\nabla \chi$ 完美抵消！算符 $\mathbf{D}$ 保住了物理对称性。把它和动量算符对照，**物理（机械）动量**对应于规范不变的算符 $\frac{\hat{\mathbf{p}}_{mech}}{i\hbar} \leftrightarrow \mathbf{D} = \nabla - i\frac{q}{\hbar}\mathbf{A}$。两边乘以 $-i\hbar$：$\hat{\mathbf{p}}_{mech} = -i\hbar\nabla - q\mathbf{A}$。由于经典关系是 $\mathbf{p}_{mech} = \mathbf{p}_{can} - q\mathbf{A}$，我们识别出**正则动量**算符为
$$
\hat{\mathbf{p}}_{c a n}=-i \hbar \nabla.
$$
正则动量 $\mathbf{p}$ 对应于纯微分算符 $-i\hbar\nabla$（平移生成元）。尽管 $\nabla$ 本身不是规范不变的，它却充当着余切丛的坐标基底。矢量势 $\mathbf{A}$ 作为**联络**，修正了相空间的几何结构，使得物理量（如速度）变得有意义。这确立了 $\mathbf{p} = m\mathbf{v} + q\mathbf{A}$ 是连接经典几何与量子相位动力学的必然桥梁。

再往前推一步，我们发现规范变换对应于波函数的相位旋转 $\psi' = e^{i\theta(\mathbf{x})} \psi$，其中 $\theta(\mathbf{x}) = \frac{q}{\hbar}\chi(\mathbf{x})$。所有可能的相位因子 $e^{i\theta}$ 构成一个数学群，称为 **$U(1)$ 群**（一维酉群）。所以从**李群视角**，电磁相互作用的本质，就是物理系统具有**局域 $U(1)$ 规范对称性**。从**李代数视角**，$U(1)$ 是一个**阿贝尔群**（Abelian group），意味着它的变换可以交换顺序（$e^{i\theta_1} e^{i\theta_2} = e^{i\theta_2} e^{i\theta_1}$）。它的李代数非常简单——只有一个生成元（虚数单位 $i$），结构常数为零。这一视角的威力在于推广。把 $U(1)$ 换成更复杂的、不可交换的矩阵群（如 $SU(2)$ 或 $SU(3)$），我们就进入了**杨–米尔斯理论**（Yang–Mills theory）的领域，那是描述弱、强相互作用的基础。在那里，矢量势 $\mathbf{A}$ 变成矩阵（非阿贝尔规范场），规范变换不再对易，物理图像丰富得多——但它的几何内核，仍是我们在电磁学里搭起来的"联络"与"协变导数"。

## 这把我们带到了哪里

看看单凭对称性成就了什么。我们没有从头解过哪怕一条力的定律。我们要洛伦兹不变性，自由相对论粒子就出来了；我们要规范不变性，整个电磁耦合就出来了，连同第（一）篇里几何性地撞见过的那个 $p \neq m\mathbf{v}$。然后同一套规范结构径直走进量子力学，解释了为什么是 $-i\hbar\nabla$ 对应正则动量、而非机械动量。作用量从来就不真是我们发明的——对称性自始至终都攥着它。

但到目前为止，我们满足于让对称性*约束*动力学。我们还没问，动力学在它自己最自然的几何里长什么样——那个正则动量一直在悄悄指向的几何，那个让位置和动量站在完全平等地位上的几何。那就是哈密顿力学的辛世界：泊松括号、正则变换，以及相空间本身那份出人意料的刚性。这正是第（三）篇要带我们去的地方。**未完待续。**

