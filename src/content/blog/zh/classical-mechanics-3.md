---
title: "一次经典力学之旅（三）：辛的世界"
date: "2026-01-18"
lang: "zh"
translationKey: "classical-mechanics-3"
tags: ["物理", "经典力学"]
category: "Classical Mechanics Series"
summary: "把力学剥到只剩骨架，留下的是相空间上一个闭的、非退化的 2-形式。第三篇就是这个形式的几何——作为李代数的泊松括号、正则变换、刘维尔与庞加莱，以及那个差点就变成量子力学的哈密顿-雅可比方程。"
---

> 系列第（三）篇，共四篇。[第（二）篇](/zh/blog/classical-mechanics-2)说明了单凭对称性就能定下作用量，也说明了正则动量 $\mathbf{p}=m\mathbf{v}+q\mathbf{A}$ 是余切丛上的自然对象——它在向我们指一个让位置和动量地位平等的几何。这一篇*就是*那个几何：相空间的辛结构，以及从它里头长出来的一切。

这里是哈密顿力学的系统理论——泊松括号、正则变换、哈密顿-雅可比方程——外加几条到头来其实是同一个想法的不同面孔的定理：诺特、刘维尔、庞加莱回归。贯穿整篇的是一个单独的对象，**辛形式**（symplectic form），以及那个论断：力学里几乎一切，都是你认真对待这个形式时得到的东西。

## 4. 哈密顿力学

### 4.1 辛结构

回忆用广义（正则）坐标和动量写的正则方程 $\dot{q}^a=\frac{\partial H}{\partial p_a}, \dot{p}_a=-\frac{\partial H}{\partial q^a},a=1,\dots,n$。坐标和动量地位惊人地平等——只差一个磨人的负号。这负号从哪来？由第（一）篇我们知道它追溯到辛势 $\Theta=p_adq^a$，可在 $\Theta$ 里坐标和动量显然*不*平等。要把它们扯平，就取外微分：$\omega=d\Theta=dp_a\wedge dq^a$，这就是**辛形式**。它是一个 2-形式，恰当因而闭，而方程里那个负号无非是楔积的变号。辛形式是相空间的一个基本结构——也是这一篇的主角。配了 $\omega$ 的相空间，就是一个*带辛结构*的相空间。

我们可以把变量写得更不偏不倚：$\mathbf{x}=\left(x^1, x^2, \ldots x^{2 n}\right)^T=\left(q^1, \ldots, q^n, p_1, \ldots, p_n\right)^T$，记作 $x^i$，于是
$$
\begin{aligned}\omega=d p_a \wedge d q^a \equiv \frac{1}{2} \omega_{i j} d x^i \wedge d x^j,\quad J^{-1}=\left(\omega_{i j}\right)=\left(\begin{array}{cc}
0_{n \times n} & -1_{n \times n} \\
1_{n \times n} & 0_{n \times n}
\end{array}\right), \\ J=-J^{-1}=(\omega^{ij})=\left(\begin{array}{cc}
0_{n \times n} & 1_{n \times n} \\
-1_{n \times n} & 0_{n \times n}
\end{array}\right),\quad  \omega_{i j} \omega^{j k}=\delta_i^k, \quad \omega^{i j} \omega_{j k}=\delta_k^i \end{aligned}
$$
在这个记号下，哈密顿方程变得无比紧凑：
$$\dot{x}^i=\omega^{i j} \partial_j H\quad \text{ 或 }\quad \dot{\mathbf{x}}=J \frac{\partial H}{\partial \mathbf{x}} .$$
说说这名字。"辛"（symplectic），源自希腊语"交织"，描述 $p$ 和 $q$ 之间一种奇特的缠绕：它们必须成对出现，而 $\omega$ 量度的是它们在相空间扫出的**有向面积**，不是长度。我们该分清两个层次："余切丛上的辛几何"（物理学家通常用的）和"一般的辛流形"（数学家的定义）。经典力学的相空间几乎总是一个**余切丛** $T^*\mathcal{M}$：**底空间**是构型空间 $\mathcal{M}$（位置 $q^a$），**纤维**是余切空间（动量 $p_a$）。这里矢量（$q$）与对偶矢量（$p$）的区别是预先给定的，这套结构称为**正则辛结构**。辛形式 $p_i dq^i$ 实际上是从所谓的**重言 1-形式**（tautological 1-form）降下来的，记作 $\theta$。

重言形式的无坐标定义是这样的。相空间里的一个点 $\alpha$ 本身分两部分：$\alpha = (q, p)$，$q$ 是底流形上的一个位置，$p$ 是这个位置上的一个动量（一个 1-形式，余切矢量）。我们要在这个点定义一个 1-形式 $\theta_\alpha$。1-形式"吃"一个切矢量 $X$。定义为
$$\theta_\alpha(X) = p(d\pi(X))$$
其中 $\pi$ 是投影（把相空间矢量 $X$ 投到底空间记作 $v$）。在点 $(q,p)$ 处，$\theta$ 的规则很简单：就用这个点本身已经携带的那个 $p$，让它作用在投影后的矢量上。矢量 $X$ 有两个变化方向——位置变多少（$\delta q$）、动量变多少（$\delta p$）：$X = \delta q^i \frac{\partial}{\partial q^i} + \delta p_i \frac{\partial}{\partial p_i}$。投影 $\pi$ 把相点 $(q,p)$ 映回底点 $q$；它的微分 $d\pi$（推前）把相空间矢量映成底空间矢量。因为投影只看位置，它干脆扔掉 $\delta p$ 部分：$d\pi(X) = \delta q^i \frac{\partial}{\partial q^i}$。又因为 $p$ 是余切矢量（1-形式），其坐标形式为 $p = p_j dq^j$。所以最终结果是
$$
\begin{aligned}
\left(p_j d q^j\right)\left(\delta q^i \frac{\partial}{\partial q^i}\right) =p_j \cdot \delta q^i \cdot \underbrace{d q^j\left(\frac{\partial}{\partial q^i}\right)}_{\delta_i^j} =p_i \delta q^i.
\end{aligned}
$$
显然 $dq^i(X) = \delta q^i$，所以 $\theta(X)=p_i d q^i(X)$，即 $\theta=p_idq^i$。注意，重言形式的定义里压根没出现指标 $i, j, k$。这意味着，无论你用什么坐标系（直角、球、椭圆），$\theta$ 都以完全相同的方式被定义。它是相空间的一个**内禀**几何结构，不是手工拼凑出来的公式。几何上，要在流形上定义一个结构，你通常得引入一个外部对象（比如一个度规 $g$，或一个电磁场 $A$）。但在余切丛上你**什么外部的东西都不需要**：每一个点 $(q, p)$ 本身就携带一个 1-形式——也就是 $p$ 自己。所以 $\theta$ 是相空间自带的、唯一的、自然的 1-形式；除了点本身的数据，它什么都没用上。数学上这正是**正则**（canonical）的含义——"天定的，不是手选的"。也正因为 $\theta = p_i dq^i$ 是重言的（天然存在），它生成的辛形式 $\omega = -d\theta = dp_i \wedge dq^i$ 也是天然存在的。相空间生来就是辛流形：你一有了位置 $q$，就有了动量 $p$，于是就有了 $\omega$——根本不需要度规来量距离。

这也正是重访正则动量与机械动量之别的时刻，因为正则动量是重言结构的基石。如果我们用**机械动量** $\boldsymbol{\pi} = m\mathbf{v}$ 作基本变量，标准辛形式就变成
$$
\begin{aligned}
\omega & =d\left(\pi_i+q A_i\right) \wedge d q^i=d \pi_i \wedge d q^i+q d A_i \wedge d q^i = \underbrace{d\pi_i \wedge dq^i}_{\text{标准}} + \underbrace{\frac{q}{2} F_{ij} dq^i \wedge dq^j}_{\text{磁（曲率）}}
\end{aligned}
$$
这是要付代价的。用正则动量 $\mathbf{p}$ 时，相空间平直而标准，$dp \wedge dq$，哈密顿方程完美对称。但用机械动量 $m\mathbf{v}$ 时，几何被扭曲了——辛形式上冒出一个电磁场张量 $F_{ij}$（磁场），这意味着哈密顿方程显式带着洛伦兹力项，破坏了正则对偶。$\mathbf{p}$ 之所以基本，恰恰因为它吸收了 $q\mathbf{A}$ 的几何效应，把相空间的辛结构对角化成了最简单的形式。

由此我们能感觉到，在更宽泛的数学定义里，辛流形不过是一个带着闭的、非退化的 2-形式 $\omega$ 的偶数维流形。我们不必预先把坐标分成"位置"和"动量"——是辛形式 $\omega$ 自己决定谁和谁对偶。$\omega$ 是一台映射机器，把矢量变成对偶矢量（降指标，就像度规一样）。这意味着在辛几何里，切空间 $T\mathcal{M}$ 与余切空间 $T^*\mathcal{M}$ 是**同构**的。$\omega$ 让相空间中任何一个方向都能找到与之配对的"共轭方向"。

这引出一个更深的几何问题：相空间可以是弯曲流形（比如球面的余切丛）——这种曲率会不会妨碍我们建立标准的哈密顿力学？在黎曼几何里，曲率意味着我们无法在局部找到坐标把度规拉回欧几里得形式（$g_{ij} = \delta_{ij}$）。但辛几何展现出一种全然不同的灵活性。**达布定理**（Darboux's theorem）说：对任意 $2n$ 维辛流形 $(\mathcal{M}, \omega)$ 的任意一点，都存在一个局部坐标系 $(q^1, \dots, q^n, p_1, \dots, p_n)$，使得形式取标准形状 $\omega = \sum_{a=1}^n d p_a \wedge d q^a$。它的物理意义很深：
- **相空间的局部平直性。** 辛流形没有局部几何不变量（没有"辛曲率"）。无论系统多复杂，它的相空间在局部看起来总像标准的 $\mathbb{R}^{2n}$。
- **正则形式的普适性。** 它保证**正则坐标总是存在**。我们总能通过适当的坐标变换，抹掉相空间的任何"扭曲"，让哈密顿方程 $\dot{\mathbf{x}} = J \nabla H$ 在局部精确成立。这正是哈密顿力学能成为普适理论的几何基石。

### 4.2 泊松括号

哈密顿力学里，一个物理量就是相空间上的一个函数 $A(p,q)$ 或 $A(x)$。看它如何随时间演化，
$$
\frac{d A}{d t}=\frac{\partial A}{\partial q^a} \dot{q}^a+\frac{\partial A}{\partial p_a} \dot{p}_a=\frac{\partial A}{\partial q^a} \frac{\partial H}{\partial p_a}-\frac{\partial A}{\partial p_a} \frac{\partial H}{\partial q^a}\equiv [A,H]=\frac{\partial A}{\partial x^i} \omega^{i j} \frac{\partial H}{\partial x^j}=\left(\partial_i A\right) \omega^{i j}\left(\partial_j H\right).
$$
这就是**泊松括号**（Poisson bracket）。守恒量就是满足 $[A,H]=0$ 的量，称它与 $H$ 泊松对易。哈密顿方程本身也能写成
$$
\dot{q}^a=\left[q^a, H\right], \quad \dot{p}_a=\left[p_a, H\right] \quad \text{ 或 }\quad\dot{\mathbf{x}}=[\mathbf{x}, H] .
$$
对一个显含时间的量，演化为 $\frac{d A}{d t}=\frac{\partial A}{\partial t}+[A, H]$。

泊松括号的基本性质：
$$
\begin{aligned}
\left[q^a, q^b\right] & =\left[p_a, p_b\right]=0, \quad\left[q^a, p_b\right]=\delta_b^a \quad \text{ 或 }\quad \left[x^i, x^j\right]=\omega^{i j} . \\
[A, B] & =-[B, A] \\
\left[A, c_1 B_1+c_2 B_2\right] & = c_1\left[A, B_1\right]+c_2\left[A, B_2\right] \\
[A,[B, C]]&+[B,[C, A]]+[C,[A, B]]=0 \\
\frac{d}{d t}([A, B])&=\left[\frac{d}{d t} A, B\right]+\left[A, \frac{d}{d t} B\right] .
\end{aligned}
$$

> **例。** 角动量 $J_1=y p_z-z p_y, \quad J_2=z p_x-x p_z, \quad J_3=x p_y-y p_x$ 的泊松括号：
> $$
> \begin{aligned}
> {\left[J_1, J_2\right] } & =\left[y p_z-z p_y, z p_x-x p_z\right] \\
> & =\left[y p_z, z p_x\right]+\left[z p_y, x p_z\right]-\left[y p_z, x p_z\right]-\left[z p_y, z p_x\right] \\
> & =y\left[p_z, z\right] p_x+x\left[z, p_z\right] p_y=x p_y-y p_x=J_3
> \end{aligned}
> $$
> 一般地，$\left[J_i, J_j\right]=\varepsilon_{i j k} J_k$，并且 $\left[\mathbf{J}^2, J_i\right]=0$。

定义了括号 $\{f, g\}$，让我揭示它真正的数学身份：它是相空间上的函数所构成的**李代数**（Lie algebra）的运算规则。要看清这点，得从头回忆**李群**（Lie group）与**李代数**的关系。

李群 $G$ 是一个同时也是光滑**微分流形**的群。物理学的对称性（旋转、平移）通常是**连续**的，恰好适合用李群描述；群乘法 $g_1 \cdot g_2$ 对应于在流形上移动——先做 $g_2$，再做 $g_1$，你就到了一个新点。难处在于，李群（一个流形）常常是弯曲又复杂的（$SO(3)$ 拓扑就很缠），直接研究很难。数学家发现，要摸清地势，研究原点（恒等元，即什么都不做）附近就够了。于是**李代数** $\mathfrak{g}$ 被定义为李群在恒等元 $e$ 处的**切空间**，其中的矢量 $X$ 称为生成元。如果"李群上的一个点"是一个**有限**变换（转动一个角度 $\theta$），那"李代数里的一个矢量"就是一个**无穷小**的变换倾向（转动的速率/方向）。李代数是一个**矢量空间**（线性、平直）；在那里你可以自由加减，比在弯曲的群上工作容易得多。

切平面（李代数）上的一个矢量 $X$ 怎么变回李群上的操作？答案：**沿着那个切方向一直走下去。** 数学上这就是**指数映射**：$g(\theta) = e^{\theta X}$，$X$ 是生成元（指令"绕 $z$ 轴转"），$\theta$ 是参数（转多少度），$e^{\theta X}$ 是生成的有限变换（群元素）。比如平移生成元是 $\nabla$（动量），有限平移是 $e^{\mathbf{a} \cdot \nabla} f(x) = f(x+\mathbf{a})$（这正是泰勒展开的本质）。旋转生成元是角动量矩阵 $J$，有限旋转是 $R(\theta) = e^{i\theta J}$。

如今，李代数（切平面）是平的，李群（地势）是弯的。我们怎么在平坦的地图上记录地球是弯的这一事实？答案在于**非对易性**。在弯曲空间上，顺序要紧：先绕 $x$ 转再绕 $y$ 转 $\neq$ 先绕 $y$ 再绕 $x$，即 $g_1 g_2 \neq g_2 g_1$。在李代数（无穷小）层面，这种"顺序之差"被定义为**李括号** $[X, Y]$，来自群对易子：
$$e^{\epsilon X} e^{\epsilon Y} - e^{\epsilon Y} e^{\epsilon X} \approx \epsilon^2 [X, Y]$$
**李括号 $[X, Y]$ 量度两个无穷小变换以相反顺序进行时的差异。** 若 $[X, Y] = 0$，两个变换完美对易（群是平的/阿贝尔的）；若不为零，群结构是弯的。

现在回到哈密顿力学。我们有物理量 $A, B, C...$（比如角动量 $L_x, L_y, L_z$）。我们已知诺特定理把它们和对称性（生成元）系在一起，而它们的**泊松括号** $\{A, B\}$ 满足雅可比恒等式。我们现在想更深入地论证：相空间里的物理量（守恒量）*就是*某个对称李群的**李代数生成元**，而泊松括号 $\{A, B\}$ *就是*那个代数上的李括号 $[A, B]$。这意味着我们不必画出复杂的李群流形；算出物理量的泊松括号，就足以完全把握系统的对称结构。

我们从上一节的辛形式出发，提炼出**哈密顿矢量场**的概念。取相空间上任何一个函数 $f$（能量 $H$、一个动量 $p$，或随手画的任何函数）。几何上 $f$ 的变化率由它的**外微分** $df$ 描述，这是一个 **1-形式（余切矢量）**，含义是：在每点上 $f$ 变化最快的方向（梯度的对偶描述）。辛形式 $\omega$ 是一个**双线性映射**，吃两个矢量、吐一个数；同样我们可以把它看成吃一个矢量、吐一个 1-形式。而 $\omega$ 的非退化性，使得映射 $\tilde{\omega}: X \to \omega(X, \cdot)$ 可逆：给任何矢量 $X$ 你找到唯一一个 1-形式，反过来给任何 1-形式 $\alpha$ 你也找到唯一一个矢量 $X$ 使 $\omega(X, \cdot) = \alpha$。于是**存在且唯一**一个矢量场 $X_f$ 满足（负号是物理学家的约定，以匹配哈密顿方程的符号）：
$$\omega(X_f, \cdot) = -df(\cdot)$$
作个类比，黎曼几何（欧氏空间）里我们用度规 $g$ 做这个映射，
$$g(\nabla f, \cdot) = df,$$
得到的 $\nabla f$ 是**梯度**，垂直于等高线，指向 $f$ **增长最快**的方向（上坡）。辛几何里我们用 $\omega$ 做映射，得到的 $X_f$ 是**辛梯度**。因为 $\omega$ 是**反对称的**（$\omega(X, Y) = -\omega(Y, X),\omega(X, X)=0$），$X_f$ 的方向被**旋转了 90 度**——它**沿着**等高线跑，指向 $f$ **保持不变**的方向，这从 $f$ 沿 $X_f$ 如何变化就能看出：
$$X_f(f) = df(X_f) = -\omega(X_f, X_f)=0.$$
也就是说，哈密顿流 $X_f$ 永远守恒它自己的生成元 $f$。若 $f=H$（能量），那哈密顿流 $X_H$（时间演化）就沿着等能面移动系统（能量守恒）。这正是为什么一颗行星绕着太阳转（哈密顿流，沿能量等高线），而不是掉进太阳里（梯度流，沿势能下坡）。

回忆上面泊松括号的定义 $[A,H]=\frac{\partial A}{\partial x^i} \omega^{i j} \frac{\partial H}{\partial x^j}$。推广到任意辛形式，我们发现 $[g, f] \equiv \omega(X_f, X_g)$；也就是说，函数 $f$ 生成的**哈密顿矢量场** $X_f$ 作用在任意试探函数 $g$ 上满足 $X_f(g) = \{g, f\}$。这个哈密顿矢量场，正是我们要找的"李代数生成元" $X_f$。

在微分几何里，两个矢量场的**李括号** $[X, Y]$ 定义为它们的对易子：
$$[X, Y](g) = X(Y(g)) - Y(X(g))$$
量度"先 $Y$ 后 $X$"与"反过来"的差异。眼下的核心任务，是算出两个哈密顿矢量场的李括号 $[X_f, X_g]$，看它是否等于"由泊松括号 $\{f, g\}$ 生成的矢量场"，即 $X_{\{f, g\}}$。把 $[X_f, X_g]$ 作用到任意试探函数 $h$ 上：
$$ [X_f, X_g](h) = X_f(X_g(h)) - X_g(X_f(h))= X_f(\{h, g\}) - X_g(\{h, f\}) = \{ \{h, g\}, f \} - \{ \{h, f\}, g \}$$
冒出一个双重泊松括号。要化简就得用**雅可比恒等式**：
$$\{ \{h, g\}, f \} + \{ \{g, f\}, h \} + \{ \{f, h\}, g \} = 0$$
整理，
$$\{ \{h, g\}, f \} - \{ \{h, f\}, g \} = -\{ \{g, f\}, h \} = \{ \{f, g\}, h \}$$
最后
$$[X_f, X_g](h) = \{ \{f, g\}, h \}=X_{\{f, g\}}(h) = \{h, \{f, g\}\} = - \{ \{f, g\}, h \}$$
（这里通常会有一个符号上的出入，取决于哈密顿矢量场是按 $\{g,f\}$ 还是 $\{f,g\}$ 定义的；数学上这叫"李代数反同态"，物理上当作等价处理。）

于是我们得到结论：
$$[X_f, X_g] \longleftrightarrow X_{\{f, g\}}$$
相空间里的物理量（守恒量）*就是*某个对称李群的李代数生成元，因为每个量 $A$ 都通过映射 $A \to X_A$ 变成一个几何矢量场（生成元）。而泊松括号*就是*李括号，因为上面的推导证明了"物理量的代数运算（泊松括号）"直接反映了"几何变换的非对易性（李括号）"。泊松括号不是凭空捏来的一套规则，它是**李群及其李代数到相空间函数上的"投影"**——一个李代数同态。若 $\{J_x, J_y\} = J_z$（角动量代数），则必有 $[X_{J_x}, X_{J_y}] \approx -X_{J_z}$（几何旋转的非对易性）。所以我们不必画复杂的相流图；在代数层面算泊松括号，就足以完全把握系统对称变换的群结构。这也正是为什么在量子力学里，我们只关心算符的对易关系——它们已经包含了几何变换的全部信息。

没有李群的几何脚手架，泊松括号的雅可比恒等式就是无源之水；反过来，正因泊松括号满足雅可比恒等式，它才有资格成为量子力学里对易子 $[\hat{A}, \hat{B}]$ 的经典之父。泊松括号在量子力学里对应于算符对易子 $[\widehat{A}, \widehat{B}]=\widehat{A} \widehat{B}-\widehat{B} \widehat{A}$，后者满足泊松括号的全部性质。它表明经典与量子是相通的，经典物理是量子物理在 $\hbar \to 0$ 的极限。事实上可以证明，当 $\hbar \to 0$ 时算符对易子自动给出经典泊松括号。

### 4.3 正则变换

正则变换是哈密顿力学的核心概念：它保持相空间的辛结构。有两种视角：
- 相空间内部的一个坐标变换；
- 相空间到自身的一个一一映射，把一个点送到另一个点。
数学上两者等价（细节见梁灿彬的微分几何与广义相对论教材）。有一类重要的无穷小变换，到头来会和前面的诺特定理深刻相连。

#### 4.3.1 作为相空间中的坐标变换

我们要一个保持辛结构的坐标变换 $\vec{x}=(q, p) \rightarrow \vec{x}^{\prime}=\left(q^{\prime}, p^{\prime}\right)$。具体地，辛形式 $\omega$ 作为一个微分形式，与坐标无关。所以在任何新坐标 $x'$ 下，$\omega=\frac{1}{2} \omega_{i j} d x^i \wedge d x^j=\frac{1}{2} \omega_{m n}^{\prime} d x^{\prime m} \wedge d x^{\prime n}$，而由 $\omega_{i j} d x^i \wedge d x^j=\omega_{i j} \frac{\partial x^i}{\partial x^{\prime m}} \frac{\partial x^j}{\partial x^{\prime n}} d x^{\prime m} \wedge d x^{\prime n}$，新分量为 $\omega_{m n}^{\prime}=\omega_{i j} \frac{\partial x^i}{\partial x^{\prime m}} \frac{\partial x^j}{\partial x^{\prime n}}$。但要让正则方程对新坐标和动量继续成立，$J^{-1}$ 就不能变，于是我们要求
$$
\omega_{m n}^{\prime}=\omega_{m n}=\omega_{i j} \frac{\partial x^i}{\partial x^{\prime m}} \frac{\partial x^j}{\partial x^{\prime n}}
$$
这恰恰就是辛结构的保持。记 $D^i{ }_m=\frac{\partial x^i}{\partial x^{\prime m}}$，则有 $D^T J^{-1} D=J^{-1},\left(D^{-1}\right) J\left(D^{-1}\right)^T=J$，展开，
$$
\frac{\partial x^{\prime m}}{\partial x^i} \omega^{i j} \frac{\partial x^{\prime n}}{\partial x^j}=\omega^{m n} \Leftrightarrow \partial_i x^{\prime m} \omega^{i j} \partial_j x^{\prime n}=\omega^{m n}=\left[x^{\prime m}, x^{\prime n}\right]_{\mathbf{x}}=\left[x^{\prime m}, x^{\prime n}\right]_{\mathbf{x}'}
$$
所以，相空间坐标变换保持辛结构这一要求，*等价于*保持基本泊松括号。这意味着，你算两个量的泊松括号时用新坐标还是旧坐标都一样，$[A, B]_{\mathbf{x}}=[A, B]_{\mathbf{x}^{\prime}}$——泊松括号在正则变换下不变——于是哈密顿方程的数学形式得以保持：
$$
\dot{\mathbf{x}}^{\prime}=\left[\mathbf{x}^{\prime}, H\right]_{\mathbf{x}}=\left[\mathbf{x}^{\prime}, H\right]_{\mathbf{x}^{\prime}}=J \frac{\partial H}{\partial \mathbf{x}^{\prime}}
$$
注意：虽然正则变换下哈密顿方程的数学形式得以保持，但变换前后的哈密顿量是两个不同的函数——严格说 $H'(x')=H(x)$，是同一个物理量在新旧坐标下的描述，通常就写 $H$。但它的函数形式变了，动力学方程也变了；所以正则变换一般**不是**对称性。

#### 4.3.2 作为相空间的微分同胚

这个视角下我们直接把 $\omega$ 映到自身以保持辛结构，得到同样的结果：
$$
\omega \rightarrow \omega^{\prime}=\frac{1}{2} \omega_{i j} d x^i \wedge d x^{\prime j}=\omega\quad \Longrightarrow\quad \omega_{m n}=\omega_{i j} \frac{\partial x^i}{\partial x^{\prime m}} \frac{\partial x^j}{\partial x^{\prime n}} . 
$$
或者，等价地，靠保持辛势：$d p_a^{\prime} \wedge d q^{\prime a}=d p_a \wedge d q^a \Leftrightarrow d \Theta^{\prime}=d \Theta$，所以变换前后辛势之差是一个闭形式，$d\left(\Theta-\Theta^{\prime}\right)=0$。闭形式不一定恰当，但如果我们只关心空间的局部区域、不管它的整体结构，**庞加莱引理**（Poincaré lemma）说：局部上，闭形式必定也恰当。在理论力学的应用中，这个局部区域常常延伸到整个相空间，于是
$$
\Theta-\Theta^{\prime}=d F \Leftrightarrow p_a d q^a-p_a^{\prime} d q^{\prime a}=d F .
$$
满足这条的相空间微分同胚必是正则变换，逆命题也常成立。有了前面引入的辛几何与李群，我们现在可以补一个辛几何视角：正则变换 $\Phi: \mathcal{M} \to \mathcal{M}$ 本质上是保持辛形式 $\omega$ 的微分同胚，即 $\Phi^* \omega = \omega$。在现代几何力学里，这种映射叫**辛同胚**（symplectomorphism）。所有辛同胚构成一个群，**辛群** $Symp(\mathcal{M}, \omega)$——一个无穷维李群。和有限维的旋转群 $SO(3)$ 相比，辛群包含丰富得多的对称性。一个物理系统的演化历史，本质上就是辛群里的一条轨迹，画在相空间中。

#### 4.3.3 无穷小变换

如果一个正则变换把相空间一点映到与之无穷接近的另一点，我们称它为无穷小正则变换：
$$
q^a \rightarrow q^{\prime a}=q^a+\delta q^a=q^a+\varepsilon Q^a(q, p), \quad p_a \rightarrow p_a^{\prime}=p_a+\delta p_a=p_a+\varepsilon P_a(q, p) .
$$
当 $\varepsilon$ 无穷小时变换前后的距离当然无穷小——但怎么让它*正则*？靠保持辛结构，$d p_a^{\prime} \wedge d q^{\prime a}-d p_a \wedge d q^a=0$；代入并展开到一阶，得 $\left(d P_a \wedge d q^a+d p_a \wedge d Q^a\right) \varepsilon=0$，于是
$$
\begin{aligned}
0 & =d P_b \wedge d q^b+d p_a \wedge d Q^a \\
& =\frac{\partial P_b}{\partial q^a} d q^a \wedge d q^b+\frac{\partial P_b}{\partial p_a} d p_a \wedge d q^b+\frac{\partial Q^a}{\partial q^b} d p_a \wedge d q^b+\frac{\partial Q^a}{\partial p_b} d p_a \wedge d p_b \\
& =\frac{1}{2}\left(\frac{\partial P_b}{\partial q^a}-\frac{\partial P_a}{\partial q^b}\right) d q^a \wedge d q^b+\frac{1}{2}\left(\frac{\partial Q^a}{\partial p_b}-\frac{\partial Q^b}{\partial p_a}\right) d p_a \wedge d p_b \\
& +\left(\frac{\partial P_b}{\partial p_a}+\frac{\partial Q^a}{\partial q^b}\right) d p_a \wedge d q^b .
\end{aligned}
$$
从而，
$$
\begin{aligned}
\frac{\partial P_b}{\partial q^a}-\frac{\partial P_a}{\partial q^b}=0,\quad
\frac{\partial Q^a}{\partial p_b}-\frac{\partial Q^b}{\partial p_a}=0,\quad \frac{\partial P_b}{\partial p_a}+\frac{\partial Q^a}{\partial q^b}=0 .
\end{aligned}
$$
容易知道
$$
\delta q^a=\varepsilon Q^a=\varepsilon \frac{\partial G}{\partial p_a}, \quad \delta p_a=-\varepsilon  P_a=-\frac{\partial G}{\partial q^a}
$$
是一个通解，其中 $G$ 为某个任意的相空间函数。也就是说如果变换具有这种形式，那个就是一个无穷小正则变换，称之为由物理量 $G(q, p)$ 生成的无穷小正则变换。其函数形式的无穷小改变为：
$$
\delta A=A\left(q^{\prime}, p^{\prime}\right)-A^{\prime}\left(q^{\prime}, p^{\prime}\right)=A\left(q^{\prime}, p^{\prime}\right)-A(q, p)=\frac{\partial A}{\partial q^a} \delta q^a+\frac{\partial A}{\partial p_a} \delta p_a=\varepsilon[A,G]
$$

> **例。** 取 $G=p_c$ 那么 $Q^a=\delta_c^a, P_a=0$，从而 $q^a \rightarrow q^a+\varepsilon \delta_c^a, \quad p_a \rightarrow p_a$，即正则动量 $p_c$ 可以生成正则坐标 $q^c$ 的无穷小平移。

现在推广一下变换的形式，考察一个正则变换的单参簇 $q^a \rightarrow q^{\prime a}(q, p, \lambda), p_a \rightarrow p_a^{\prime}(q, p, \lambda)$，$\lambda=0$ 时无变化。随着参数 $λ$ 的连续变动，这簇正则变换会在相空间中画出一条以 $λ$ 为参数的路径，路径上任何两个相差无穷小量 $dλ$ 的点都是用无穷小正则变换连接起来的。因此容易得到：
$$
\frac{d q^{\prime a}}{d \lambda}=\frac{\partial G}{\partial p_a^{\prime}}, \quad \frac{d p_a^{\prime}}{d \lambda}=-\frac{\partial G}{\partial q^{\prime a}},
$$
其中 $G(q',p',\lambda)$ 称为这个正则变换单参簇的生成元，习惯上省略 $'$，$\left(\frac{d q^a}{d \lambda}, \frac{d p_a}{d \lambda}\right)$ 就可以视为一个相流，表达在相空间中由 $G$ 诱导的流动。更紧凑地，
$$
v_G^i=\frac{d x^i}{d \lambda}=\omega^{i j} \partial_j G,\quad \mathbf{x}=(q,p)
$$
特别的，取 $\lambda=t,G=H$ 那么相流方程就变成哈密顿正则方程了，因此哈密顿量为时间演化的生成元，由于哈密顿量描述的就是系统能量，因此这就给出了物理系统能量的一般定义，即，时间演化的生成元描述系统的能量。同时系统在相空间的时间演化过程实际上是一个持续进行的正则变换，是以时间为参数的正则变换单参簇。因此，时间演化过程保持相空间的辛结构。

进一步，假设我们有两个正则变换的单参簇，分别由 $G_1$ 和 $G_2$ 生成，相应的参数分别记为 $λ_1,λ_2$, 则利用相流方程以及 $ω_{ij}ω^{jm} = δ^m_n$, 可以算得辛形式在速度场 $v_{G_1}^i,v_{G_2}^j$ 上的值就是两个生成元的泊松括号：
$$
\omega(v_{G_1},v_{G_2})\equiv\omega_{i j} v_{G_1}^i v_{G_2}^j=\omega_{i j} \frac{d x^i}{d \lambda_1} \frac{d x^j}{d \lambda_2}=\left(\partial_m G_2\right) \omega^{m n}\left(\partial_n G_1\right)=\left[G_2, G_1\right]
$$
从几何上看，无穷小正则变换正是由 **哈密顿矢量场 $X_G$** 生成的流。回忆我们在 4.2 节引入的几何定义 $\omega(X_G, \cdot) = -dG$。无穷小变换 $\mathbf{x} \to \mathbf{x} + \epsilon X_G$ 实际上就是李导数 $\mathcal{L}_{X_G}$ 的作用。而这一变换之所以是"正则"的（即保辛结构），是因为 Cartan 同伦公式保证了：
$$\mathcal{L}_{X_G} \omega = d(\iota_{X_G} \omega) + \iota_{X_G} (d\omega) = d(-dG) + 0 = 0$$
这简洁地证明了：**任何由哈密顿矢量场生成的流，天然就是辛同胚（正则变换）。**

#### 4.3.4 诺特定理

原则上正则变换可以是任何保持辛结构的数学变换。不过，对一个物理系统进行的物理操作（比如将系统旋转一个角度）常常在相空间诱导出一个正则变换。这是因为，对系统的物理操作会将一个物理状态变到另一个物理状态，从而在相空间诱导出一个微分同胚映射，而且由于物理操作之后系统依然是一个哈密顿正则系统，满足同样的哈密顿正则方程，所以这一诱导出来的微分同胚映射必定是一个正则变换。特别的，如果物理操作本身依赖于一个连续参数（比如旋转操作中的旋转角度），那它就会在相空间诱导出一个正则变换的单参簇，这时候我们就称这个单参簇的生成元为相应物理操作的生成元。正则动量就是对相应正则坐标的平移操作的生成元，角动量是旋转操作的生成元。

以上所谈是任意的连续物理操作。但是，如果这一连续操作本身是一个对称操作，即在操作前后系统的运动微分方程保持形式不变。那就会有更进一步的结论，也就是诺特定理，它说，这时候这一对称操作的生成元必定是守恒量。证明非常简单，对称操作由于要保持运动微分方程（由哈密顿正则方程给出）的形式不变，因此必定要保持哈密顿量的函数表达式 $H(q, p)$ 不变 $\delta H=0$，设对称操作的生成元为 $G$，从而即有
$$
0=\delta H=\varepsilon[H, G] \Leftrightarrow 0=[H, G]=\frac{dG}{dt}.
$$
诺特定理的逆命题在局部也是成立的：**任何一个守恒量 $G$（即 $\{G, H\}=0$），都对应着系统的一个连续对称性。** 这意味着，只要你能找到一个积分常数，你就一定能找到一个让哈密顿量保持不变的几何变换。这使得哈密顿力学成为寻找和分析对称性的最强有力的框架。

### 4.4 刘维尔定理与庞加莱回归定理

我们已经知道了物理系统在相空间的时序演化可以被视为一个相流，且相流速度由哈密顿正则方程给出 $\dot{\mathbf{x}}=[\mathbf{x}, H]$。**刘维尔定理**（Liouville's theorem）则是说这个流体是不可压缩的。具体地，在 $t=0$ 时取相空间中一个区域 $D_0$ 演化到 $D_t$，体积不变 $\text{Vol}(D_t)=\text{Vol}(D_0)$。

为证明，引入体积元的概念 $\Omega=d p_1 d q^1 d p_2 d q^2$ 或 $\Omega=d p_1 \wedge d q^1 \wedge d p_2 \wedge d q^2$，易知：
$$\begin{aligned} \Omega =\frac{1}{2}\left(d p_1 \wedge d q^1+d p_2 \wedge d q^2\right) \wedge\left(d p_1 \wedge d q^1+d p_2 \wedge d q^2\right)= \frac{1}{2!} \omega\wedge\omega=\frac{1}{2!} \omega^{\wedge 2}\end{aligned}$$
容易推广得到 $\Omega=d p_1 d q^1 d p_2 d q^2 \ldots . d p_n d q^n=\frac{1}{n!} \omega^{\wedge n}$，这意味着体积元仅仅依赖于辛形式 $\omega$。又因为正则变换的微分同胚是保辛形式的，那么体积在时间演化中也是不变的。同样的论证也可以用于相空间的任何 $2k(k ≤ n)$ 维曲面 $S_{2k}$, 其"面积元"定义为 $\frac{1}{k!} ω^{∧k}$。我们同样有：随时间演化的 $S_{2k}$，其"面积"将保持不变。特别的，在相空间任取一条闭合回路 $C$，让 $C$ 随着时间演化，考察辛势 $Θ$ 沿着这条闭合回路的积分 $I_C=\frac{1}{2 \pi} \oint_C \Theta$，由于 $\oint_C \Theta=\int_{S_2} d \Theta=\int_{S_2} \omega$，式中 $S_2$ 为回路 $C$ 所包围的区域。从上面的推导易知，$I_C$ 将在时间演化下保持不变。很显然，以上的所有结果不仅对时间演化生成的相流成立，而且对任何正则变换单参簇的相流都成立。

刘维尔定理告诉我们相流保持体积不变，这让人联想到不可压缩流体。然而，辛几何比流体力学拥有更强的"刚性"。直到 1985 年，Gromov 发现了一个惊人的定理，彻底区分了辛同胚和普通的保体积微分同胚。**格罗莫夫非被挤压定理 (Gromov's Non-Squeezing Theorem)**，又称**辛骆驼定理 (Symplectic Camel)**：考虑相空间中的一个球体 $B(R)$（半径为 $R$），和一个圆柱体 $Z(r) = B^2(r) \times \mathbb{R}^{2n-2}$（底面半径为 $r$）。定理指出：我们无法通过任何正则变换（辛同胚）$\Phi$，将球体 $B(R)$ 嵌入到圆柱体 $Z(r)$ 中，除非 $r \ge R$。
$$\text{If } \Phi(B(R)) \subset Z(r), \text{ then } r \ge R.$$
即使圆柱体的体积是无限大的（因为它在其他方向上无限延伸），只要它的"腰围"（共轭变量平面的面积）太小，球体就塞不进去。其**物理意义在于经典的量子测不准原理** 圆柱体的截面 $B^2(r)$ 对应于一对共轭变量 $(q_1, p_1)$ 的相面积 $\pi r^2$。这个定理告诉我们：**你不能在保持辛结构的前提下，无限压缩共轭变量对的不确定度面积。** 这在经典力学中预示了量子力学的必然出现：相空间不仅仅是体积守恒的，它在共轭平面上有一个最小的"硬核"尺寸限制。辛几何的这种拓扑刚性，正是量子测不准原理 $\Delta x \Delta p \ge \hbar$ 的经典几何投影。

刘维尔定理会引出一个结论：只要等的足够久，会有庞加莱回归，这似乎违背热力学第二定律，然而第二定律需要取热力学极限即 $N\to\infty$，而庞加莱回归的时间为 $t\propto t_c^N$ 其中 $t_c>1$ 是某个特征量，所以我们是看不到庞加莱回归的。**庞加莱回归定理**：对于一个相空间有限的哈密顿正则系统，任意取定一个相空间初始点 $x_0$，则对于它的任意邻域 $D_0$, 必定存在一个点 $x_0' ∈ D_0$, 它将在有限时间内回归 $D_0$。简单地说就是，只要等待的时间足够长，那么系统总可以回归到和初态任意接近的状态。证明：取有限时间步 $\tau$，直到时间趋于无穷，有 $\text{Vol}(D_k)=\text{Vol}(D_0),\forall k$，那么因为相空间有限，就一定会存在 $k'>k,D_k\cap D_{k'}\neq0$。于是因为微分同胚的可逆性，有 $D_0\cap D_{k'-k}\neq0$ 回归就出现了。

现在我们考虑很多系统。想象我们在相空间里撒了一把"沙子"（或者滴了一滴墨水），每一粒沙子代表一个**系统复本 (Replica)**，它们处于不同的初始状态 $(q, p)$（这被称为**系综 Ensemble**），大量沙子的分布密度记为 $\rho(q, p, t)$，随着时间 $t$ 演化，每粒沙子都遵循哈密顿正则方程运动，这就形成了一股**相流 (Phase Flow)**。因为系统（沙子）既不会凭空消失，也不会凭空产生，所以概率密度必须满足**连续性方程 (Continuity Equation)**（就像流体力学里的质量守恒）：
$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0$$
这里 $\mathbf{v} = (\dot{q}, \dot{p})$ 是相空间中的速度矢量，$\nabla = (\frac{\partial}{\partial q}, \frac{\partial}{\partial p})$ 是相空间梯度。我们将 $\nabla \cdot (\rho \mathbf{v})$ 展开：
$$\nabla \cdot (\rho \mathbf{v}) = (\mathbf{v} \cdot \nabla) \rho + \rho (\nabla \cdot \mathbf{v})$$
这里 **$\nabla \cdot \mathbf{v}$** 是相流的散度（速度场的源/汇）。让我们计算它：
$$\nabla \cdot \mathbf{v} = \frac{\partial \dot{q}}{\partial q} + \frac{\partial \dot{p}}{\partial p}$$
代入哈密顿方程 $\dot{q} = \frac{\partial H}{\partial p}, \dot{p} = -\frac{\partial H}{\partial q}$：
$$\nabla \cdot \mathbf{v} = \frac{\partial}{\partial q}\left(\frac{\partial H}{\partial p}\right) + \frac{\partial}{\partial p}\left(-\frac{\partial H}{\partial q}\right) = \frac{\partial^2 H}{\partial q \partial p} - \frac{\partial^2 H}{\partial p \partial q} = 0$$
结论：相流的散度为零（$\nabla \cdot \mathbf{v} = 0$）。这意味着相空间的"流体"是**不可压缩**的。把 $\nabla \cdot \mathbf{v} = 0$ 代回连续性方程便得到：
$$
\frac{d\rho}{d t}=\frac{\partial \rho}{\partial t}+(\mathbf{v} \cdot \nabla) \rho=0
$$
这实际上就是**刘维尔定理的微分形式**。其物理意义非常深刻：
- **$\frac{\partial \rho}{\partial t}$ (欧拉视角)**：你站在相空间某个固定位置不动，看流过去的流体密度变化。
- **$\frac{d \rho}{dt}$ (拉格朗日视角)**：你骑在一粒沙子（随流运动）上，看你周围的密度变化。结论就是，如果你跟着相流走，你周围的概率密度**永远不变**。这就像一块不可压缩的云，它在风中飘动变形，但云的浓密程度（密度）始终保持原样，不会被压实或稀释。

接下来我们可以关联到统计力学了。什么是"统计平衡态"？平衡态意味着宏观性质不随时间变化。在统计上，这意味着概率分布函数在**固定位置**不随时间变化：
$$\text{Equilibrium} \quad \Longleftrightarrow \quad \frac{\partial \rho}{\partial t} = 0$$
结合刘维尔方程，有方程 $\frac{\partial \rho}{\partial t} + (\mathbf{v} \cdot \nabla) \rho = 0$。既然 $\frac{\partial \rho}{\partial t} = 0$，那么必须满足：
$$(\mathbf{v} \cdot \nabla) \rho = 0$$

再引入泊松括号，展开 $(\mathbf{v} \cdot \nabla) \rho$：
$$
(\mathbf{v} \cdot \nabla) \rho=\dot{q} \frac{\partial \rho}{\partial q}+\dot{p} \frac{\partial \rho}{\partial p}=\frac{\partial H}{\partial p} \frac{\partial \rho}{\partial q}-\frac{\partial H}{\partial q} \frac{\partial \rho}{\partial p}
$$
于是我们发现，平衡态条件等价于：
$$
\{\rho, H\}=0
$$
方程 $\{\rho, H\} = 0$ 告诉我们：**分布函数 $\rho$ 必须与哈密顿量 $H$ 泊松对易。** 在数学上，如果一个函数 $\rho(q, p)$ 要使得它和 $H(q, p)$ 的泊松括号处处为零，最自然、最通用的解是：**$\rho$ 仅仅通过 $H$ 来依赖于 $(q, p)$**。 即：
$$\rho(q, p) = f(H(q, p))$$
其中 $f$ 是任意函数。现在我们知道 $\rho$ 必须是能量 $H$ 的函数了。

对于一个**孤立系统**（能量守恒，且没有与其他热库交换）：系统能量被严格限制在 $H(q, p) = E$ 这个能面上。在能面之外（$H \neq E$），概率密度必须为 0。在能面之上（$H = E$），$\rho$ 是常数（因为 $H$ 是常数，$f(H)$ 自然也是常数）。这就直接导致了**微正则分布 (Microcanonical Distribution)**：
$$\rho(q, p) \propto \delta(H(q, p) - E)$$
- **$\delta$ 函数**：保证了只有 $H=E$ 的地方有值。
- **$\propto$ 常数**：说明在能面上，所有点的概率密度**相等**。

**这就是"等概率原理"的由来。** 它不是物理学家拍脑袋瞎猜的，而是：
1. **Liouville 定理** 保证了密度不会随流变化（不会这就没法谈稳态）。
2. **平衡态假设** 保证了密度不显含时间。
3. **泊松对易关系** 锁死了密度只能依赖于守恒量（主要是能量）。
4. **能量守恒** 将分布限制在能面上。

四者结合，唯一的逻辑结果就是：在能量面上均匀分布。但是要注意等概率原理（Fundamental Assumption）至今仍然是一个"假设"（Postulate），并不能完全单纯地从哈密顿动力学（Liouville定理）中"推导"出来。刚才的推导展示的是它的"动力学相容性"（即：如果你假设它是均匀的，这与动力学不矛盾），但我们确实跳过了一个巨大的逻辑鸿沟。这个鸿沟就是：**各态历经性 (Ergodicity)**。我们将在第（四）篇的近可积系统和混沌部分中讲述。

### 4.5 生成函数

现在我们考虑如何*建立*一个正则变换。我们已经知道了一个变换是正则的充分（通常也是必要的）条件：$p_adq^a-p_a'dq'^a=dF$ 其中 $F$ 是相空间的一个函数。

假设我们取 $F$ 为某种形式 $F_1(q,q')$ 那么有
$$p_a d q^a-p_a^{\prime} d q^{\prime a}=d F_1\quad \Rightarrow \quad p_a d q^a-p_a^{\prime} d q^{\prime a}=\frac{\partial F_1}{\partial q^a} d q^a+\frac{\partial F_1}{\partial q^{\prime a}} d q^{\prime a} .$$
那么只需要取：
$$
p_a=\frac{\partial F_1}{\partial q^a}\left(q, q^{\prime}\right) \quad-p_a^{\prime}=\frac{\partial F_1}{\partial q^{\prime a}}\left(q, q^{\prime}\right)
$$
于是只要取不同的 $F_1(q,q')$ 就可以生成不同的正则变换，函数 $F_1(q,q')$ 因此称为正则变换的第一类生成函数。如果把最早的条件改写为 $p_a d q^a+q^{\prime a} d p_a^{\prime}=d\left(F+p_a^{\prime} q^{\prime a}\right)=d F_2$，那么只需要取：
$$
p_a=\frac{\partial F_2}{\partial q^a}\left(q, p^{\prime}\right) \quad q^{\prime a}=\frac{\partial F_2}{\partial p_a^{\prime}}\left(q, p^{\prime}\right) .
$$
易知第三、第四类生成函数：
$$
\begin{array}{lll}
F_3\left(p, q^{\prime}\right): \text { 取 } & q^a=-\frac{\partial F_3}{\partial p_a}\left(p, q^{\prime}\right), & p_a^{\prime}=-\frac{\partial F_3}{\partial q^{\prime a}}\left(p, q^{\prime}\right) \\
F_4\left(p, p^{\prime}\right): \text { 取 } & q^a=-\frac{\partial F_4}{\partial p_a}\left(p, p^{\prime}\right), & q^{\prime a}=\frac{\partial F_4}{\partial p_a^{\prime}}\left(p, p^{\prime}\right) .
\end{array}
$$
注意这 4 类并没有穷尽所有正则变换，比如对于 2x2=4 维的正则变换 $q^{\prime 1}=q^1, q^{\prime 2}=p_2, p_1^{\prime}=p_1, p_2^{\prime}=-q^2$ 实际上是由一种混合型（第一类和第二类混合）生成函数生成，具体的生成函数为 $q^1p_1'+q^2q'^2$。

最后，当正则变换的函数关系显含时间 $\mathbf{x}^{\prime}(\mathbf{x}, t)$，则需要引入一个 $K$ 使得 $p_a d q^a-H d t=p_a^{\prime} d q^{\prime a}-K d t+d F$ 成立，即刚好抵消关于 $t$ 的偏微分。如果将式中的 $F$ 取成第一类生成函数 $F_1(q,q',t)$，那 $K$ 即是 $K=H+\frac{\partial F_1}{\partial t}$，和原来类似地可以证明 $K$ 就是变换后的哈密顿量：$\dot{q}^{\prime a}=\frac{\partial K}{\partial p_a^{\prime}}, \quad \dot{p}_a^{\prime}=-\frac{\partial K}{\partial q^{\prime a}}$。

### 4.6 哈密顿-雅可比方程与可积系统

这是哈密顿理论的高潮，也是经典力学离量子力学只剩一线之隔的地方。给定坐标在相空间的起点 $q_0$ 和终点 $q$，并不指定起终点的 $p$，给定连接两点的一条相空间路径 $\left(q\left(t^{\prime}\right), p\left(t^{\prime}\right)\right)$，我们可以计算作用量：
$$
S\left[q\left(t^{\prime}\right), p\left(t^{\prime}\right)\right]=\int_0^t\left[p_a\left(t^{\prime}\right) d q^a\left(t^{\prime}\right)-H\left(q\left(t^{\prime}\right), p\left(t^{\prime}\right)\right) d t^{\prime}\right] .
$$
进一步，假设路径是满足哈密顿正则方程的，即作用量取极值的，有了这个条件，这个作用量就只依赖于 $q_0,q,t$ 了：
$$S\left(q_0, q, t\right)=\operatorname{extrem}_{\left[q\left(t^{\prime}\right), p\left(t^{\prime}\right)\right]} S\left[q\left(t^{\prime}\right), p\left(t^{\prime}\right)\right]$$
我们要研究这个函数，假设末端有无穷小变动 $\delta q$：
$$
\begin{aligned}
& \delta S\left(q_0, q, t\right)=\operatorname{extrem} \delta S\left[q\left(t^{\prime}\right), p\left(t^{\prime}\right)\right] \\
= & \int_0^t d\left(p_a \delta q^a\right)+\operatorname{extrem} \int_0^t d t^{\prime}\left[\left(\dot{q}^a-\frac{\partial H}{\partial p_a}\right) \delta p_a-\left(\dot{p}_a+\frac{\partial H}{\partial q^a}\right) \delta q^a\right] . \\
= & p_a(t) \delta q^a(t)=p_a(t) \delta q^a  \quad\Longrightarrow \quad p_a(t)=\frac{\partial S}{\partial q^a}\left(q_0, q, t\right)
\end{aligned}
$$
又因为：
$$S=\int pdq-Hdt,dS=pdq-Hdt\quad\Longrightarrow\quad \frac{\partial S}{\partial t}\left(q_0, q, t\right)=-H(q, p) .$$
所以可以得到**哈密顿-雅可比方程**（Hamilton–Jacobi equation）：
$$
\frac{\partial S}{\partial t}+H\left(q, \frac{\partial S}{\partial q}, t\right)=0 .
$$
下面反过来，假设我们从哈密顿-雅可比方程出发，我们想求解这个偏微分方程。那上面的推理过程就告诉我们，如何通过考虑一条起于 $q_0$，$t$ 时刻到达 $q$ 的极值路径，并计算这条路径的作用量泛函，来构造出哈密顿-雅可比方程的解。在这种构造方式中，起始点 $q_0$ 可以看成是积分常数。这一构造过程也告诉我们，如果极值路径（也称作物理路径，或经典路径）可以解析求解（允许用积分来表达），那就能得到哈密顿-雅可比方程的形如 $S(q_0,q,t)$ 的解析解。

但是，$S(q_0,q,t)$ 只是哈密顿-雅可比方程的一类解。而且实际上，我们通常无法求出其解析形式。进一步，对一个 $n$ 自由度的系统，如果能找到哈密顿-雅可比方程的一类形如 $S(α,q,t)$ 的解析解（允许用积分来表达），其中 $α$ 代表 $α^a (a = 1,2,...,n)$，为积分常数（类比于前面的 $q_0$），那这样的系统就称作可积系统 Integrable System，可积系统之所以称作可积系统，是因为可以进一步得出粒子运动路径的解析解（用积分和隐函数表达出来），下面我们来证明这个结论。

假设找到了哈密顿-雅可比方程的一类含 $n$ 个积分常数的解析解，记为 $S(α,q,t)$ 或 $S\left(\alpha^1, \ldots, \alpha^n, q^1, \ldots, q^n, t\right)$，我们可以将 $α^a ,a = 1,2,..,n$ 看作是正则变换以后新的 $q$ 坐标，进而考虑 $(q, p)$ 到 $(α,β)$ 的正则变换，将哈密顿-雅可比方程的解 $S(α,q,t)$ 取作正则变换的第一类生成函数。很明显，这是一种显含时间的正则变换，变换以后的哈密顿量 $K$ 为 $K=H+\frac{\partial S}{\partial t}$，根据哈密顿雅可比方程，我们有 $K=0$，进而由变换以后的哈密顿正则方程，可以知道 $\dot{\alpha}^a=0, \dot{\beta}_a=0$，于是变换后的正则坐标都为守恒量，所以彼此泊松对易。反过来，如果一个哈密顿力学系统有 $n$ 个泊松对易的独立守恒量，那我们就能用这些守恒量构造出哈密顿-雅可比方程的一类形如 $S(α,q,t)$ 的解析解。所以，存在 $n$ 个泊松对易的独立守恒量是一个哈密顿力学系统成为一个可积系统的充要条件。而虽然正则动量 $β_a$ 也是守恒量，不过，由于正则动量和正则坐标的泊松括号不是零，所以它们与 $α^a$ 并不泊松对易，实际上，对它们的更好解释是，将之看成初始条件。因为 $S(α,q,t)$ 取作正则变换的第一类生成函数，于是有 $\beta_a=-\frac{\partial S}{\partial \alpha^a}$，解这组式子就能得到位形空间的运动路径 $q^a (t)$（作为 $α,β$ 的函数）。进一步，通过 $p_a=\frac{\partial S}{\partial q^a}$ 这一组方程就进一步决定了函数 $p_a(t)$。可见，可积系统粒子运动路径的解析解是可以得到的。

一般地，假设找到了哈密顿-雅可比方程的一个解 $S(q,t)$，就能得到粒子正则动量与正则坐标的函数关系 $p_a(t)=\frac{\partial S}{\partial q^a}\left(q_0, q, t\right)$，代入哈密顿正则方程的第一个方程就能解出粒子在位形空间的运动路径，
$$
\dot{q}^a=\left.\frac{\partial H}{\partial p_a}\right|_{p=\frac{\partial S}{\partial q}}
$$
显然，这种求解运动路径的方法最后只需求解 $n$ 个一阶常微分方程，而不是求解 $n$ 个二阶常微分方程，大大简化了问题，但是，我们需要进一步验证哈密顿正则方程的第二个方程也是满足的：
$$
\begin{aligned}
\dot{p}_a & =\frac{d}{d t}\left(\frac{\partial S}{\partial q^a}\right)=\frac{\partial^2 S}{\partial t \partial q^a}+\frac{\partial^2 S}{\partial q^b \partial q^a} \dot{q}^b \\
& \frac{\partial^2 S}{\partial t \partial q^a}+\left.\frac{\partial H}{\partial q^a}\right|_{p=\frac{\partial S}{\partial q}}+\left.\frac{\partial H}{\partial p_b}\right|_{p=\frac{\partial S}{\partial q}} \frac{\partial^2 S}{\partial q^b \partial q^a}=0 \\
\Rightarrow & \frac{\partial^2 S}{\partial t \partial q^a}+\left.\frac{\partial H}{\partial q^a}\right|_{p=\frac{\partial S}{\partial q}}+\dot{q}^b \frac{\partial^2 S}{\partial q^b \partial q^a}=0 . \\
\Rightarrow & \frac{\partial^2 S}{\partial t \partial q^a}+\dot{q}^b \frac{\partial^2 S}{\partial q^b \partial q^a}=-\left.\frac{\partial H}{\partial q^a}\right|_{p=\frac{\partial S}{\partial q}} .
\end{aligned}
$$
假设哈密顿量不显含时间，于是能量守恒；记这个守恒量为 $E$。哈密顿-雅可比方程便有一个依赖于 $E$ 的解。定义
$$
S(E, q, t)=W(E, q)-E t .
$$
代入哈密顿-雅可比方程得到
$$
H\left(q, \frac{\partial W}{\partial q}\right)=E .
$$
解这个偏微分方程就给出原哈密顿-雅可比方程的一类解，其特征是从中解出的运动都有相同的能量 $E$。$W(E,q)$ 常简写为 $W(q)$，有时称为**哈密顿特征函数**，也即约化作用量——剥去了时间演化项的纯空间部分。它本质上就是**莫培督最小作用量原理**（Maupertuis least-action principle）里的"作用量"，定义为 $W = \int \mathbf{p} \cdot d\mathbf{q}$。当我们无视时间流逝、只关心空间路径的形状时，$W$ 就是那个起决定作用的"作用量"：
$$
p_i=\frac{\partial S}{\partial q^i}=\frac{\partial W}{\partial q^i} \quad \Longrightarrow \mathbf{p}=\nabla W
$$
代入一个具体的哈密顿量。对势能 $V(q)$ 中的经典粒子，通常 $H = \frac{p^2}{2m} + V(q)$。代入 $p = \nabla W$：$\frac{1}{2 m}|\nabla W|^2+V(q)=E$，整理成
$$
|\nabla W|^2=2 m(E-V(q))
$$
左边是一个梯度的平方，右边是一个只依赖位置 $q$ 的函数。这恰恰是几何光学里**程函方程**（eikonal equation）的形式，后者描述一束光波穿过折射率随位置变化的介质 $n(q)$ 时的相位（光程）$\mathcal{S}(q)$：
$$
|\nabla \mathcal{S}|^2=n^2(q)
$$
**粒子的动量 $p$** 扮演**折射率 $n$** 的角色：光学里光总是朝着 $n$ 更大的方向偏折（斯涅尔定律）；力学里粒子总是朝着动量 $p$ 更大的方向偏折（$V$ 低、动能高的地方）。所以势能中粒子的轨迹，*恰好等价于*变折射率介质中光线的轨迹。而**作用量 $W$** 扮演**相位 $\mathcal{S}$** 的角色：$W$ 等于常数的曲面，正是这"力学波"的**波前**，而粒子轨迹（光线）就是垂直于这些波前的线。这种相似直接导致了量子力学的发现。因为**几何光学**是**波动光学**的近似（波长 $\lambda \to 0$），而**经典力学**（哈密顿-雅可比方程）看起来就像几何光学，薛定谔便问：如果经典力学是"几何光学"，那是不是有一套更基本的"波动力学"藏在它背后？反推回去，把 $W$ 当作一个波的相位，他成功猜出了波函数 $\psi$ 所满足的方程——薛定谔方程。

## 这把我们带到了哪里

这就是辛的世界。我们从一个单独的、闭的、非退化的 2-形式出发，看着力学里几乎一切都从它里头结晶出来：泊松括号亮明了它的李代数身份（量子对易子的经典祖先）；正则变换原来是保 $\omega$ 的辛同胚，而时间演化本身不过是其中一种流；刘维尔和庞加莱跟着 $\omega$ 的刚性而来，格罗莫夫的骆驼则在低声念叨着测不准原理；而哈密顿-雅可比方程把我们一直带到薛定谔方程的波前跟前。原来相空间自始至终都悄悄是量子的。

但到目前为止，我们一直住在可积系统这片温柔的国度——相空间被整整齐齐地叶状分层成不变环面，运动永远规则。这片国度是有边界的。哪怕只对一个可积系统稍加扰动，那些环面有的幸存、有的碎裂，而在碎砾中长出了混沌：对初值的指数敏感、同宿纠缠，以及那种终于让统计力学得以立足的混合。这就是第（四）篇的故事，我们的终篇——在那里，我们搭起的几何成为秩序*与*失序共同的几何，动力学也把接力棒交给了热力学。**未完待续。**



