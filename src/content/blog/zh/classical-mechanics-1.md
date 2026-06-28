---
title: "一次经典力学之旅（一）：势、形式，与作用量的诞生"
date: "2026-01-04"
lang: "zh"
translationKey: "classical-mechanics-1"
tags: ["物理", "经典力学"]
category: "Classical Mechanics Series"
summary: "牛顿把力交到我们手里，我们却要把它还回去——换成一条路径上的一个数。第一篇先搭地基：势与力、微分形式与斯托克斯公式，以及那个悄悄重排了整个力学的最小作用量原理。"
---

> 这是一段四篇旅程的第（一）篇。路线图是这样的：**第（一）篇（本文）** 搭起数学与物理的地基——力如何从势中长出来，微分形式如何把向量分析里那一堆积分定理收成一行，以及最小作用量原理如何重排了一切。**第（二）篇：** 对称性——诺特定理、对称性如何凭一己之力**写出**作用量，以及从相对论一路通向电磁耦合。**第（三）篇：** 哈密顿的世界——辛几何、泊松括号、正则变换，以及哈密顿-雅可比理论。**第（四）篇：** 规则与混沌——不变环面、KAM 定理、从动力学通往统计力学的那座桥，以及对物理几何统一性的最后一瞥。

让我先坦白一件关于力学如何被教的事。人们把 $\vec{F} = m\vec{a}$ 交到我们手上，说这就是定律，然后打发我们去解它。它确实管用。但它藏起了一样东西。经典力学更深一层的结构，其实并不关心力如何推搡物体——它关心的是一个数，**作用量**，附着在系统的一整段历史上，以及"让这个数取驻值"这一要求。从前一幅图景走到后一幅，正是这个系列要讲的全部故事。不过在开讲之前，我们得先备齐一些工具。所以第一篇是地基：力从哪里来，微分形式这门语言，以及把它们拧在一起的变分思想。

## 1. 基本的数学与物理

### 1.1 势能与力

力从哪里来？在最要紧的那些情形里，它来自势。我们把力定义成势能的梯度的负值，于是牛顿第二定律读作
$$\frac{d \vec{p}}{d t}=\vec{F}=-\frac{\partial V}{\partial \vec{x}}$$
再配上动量的定义，
$$\frac{\vec{p}}{m}=\frac{d \vec{x}}{d t}.$$
现在请看，如果我们把这两条关系当作出发点，会发生什么。我们可以用它们拼出一个单独的量，
$$H(\vec{x}, \vec{p})=\frac{\vec{p}^2}{2 m}+V(\vec{x}),$$
眼下我们不妨简单地把它叫作总能量，并把 $\vec{x}$ 和 $\vec{p}$ 当成**彼此独立**的变量。上面两条方程便收拢成一对对称得惊人的式子，
$$\frac{d \vec{p}}{d t}=-\frac{\partial H}{\partial \vec{x}}, \quad \frac{d \vec{x}}{d t}=\frac{\partial H}{\partial \vec{p}},$$
而由它们立刻能推出 $\frac{d H}{d t}=0$。换句话说，$H$ 是守恒的——反过来，只要求这一个量守恒，就足以重新得到我们出发时的那两个式子。一个单独的函数 $H$，悄悄把全部动力学都吞了进去。

没有谁规定我们必须停在一个粒子。对多粒子，
$$H=\sum_i \frac{\overrightarrow{p}_i^2}{2 m_i}+V\left(\vec{x}_1, \vec{x}_2, \cdots, \vec{x}_N\right),$$
每个粒子都满足 $\frac{d \vec{p}_i}{d t}=-\frac{\partial H}{\partial \vec{x}_i}, \frac{d \overrightarrow{x_i}}{d t}=\frac{\partial H}{\partial \vec{p}_i}$。

于是我们已经握有一套配方——一个可以反复套用的小算法，用来对付任何经典系统：
- 找到基本的力学变量；
- 写下哈密顿量；
- 写下哈密顿正则方程。

过去的习惯，是把 $V(x)$ 画成一条曲线，再横着拉一条线代表总能量。既然动能不能是负的，粒子就被困在 $V(x)$ 落在那条线以下的那些区域。$V(x)$ 的一处洼地会把粒子关住，让它在里头来回晃荡——这叫束缚运动、束缚轨道；否则我们称为散射。

可一旦我们认定把 $\vec{x}$ 和 $\vec{p}$ 看作独立变量，一幅更好的图景就打开了。我们可以在 $(x,p)$ 空间里画出系统的轨道——这就是**相空间**（phase space）。不同的总能量在那里描出不同的轨道，我们还能问，在给定能量下运动的周期是多少：
$$T(E)=\oint_E d t=\oint_E \frac{m}{p} d x=\oint_E \frac{m}{\sqrt{2 m\left(E-V(x)\right)}} d x.$$
引入相空间里所围的面积，
$$2 \pi I(E)=\oint_E p d x=\oint_E \sqrt{2 m(E-V(x))} d x,$$
一桩账面上的小奇迹就冒了出来：
$$\frac{\partial I(E)}{\partial E}=\frac{1}{2 \pi} \oint_E \frac{\partial}{\partial E} \sqrt{2 m(E-V(x))} d x=\frac{T(E)}{2 \pi}.$$
写成角频率就是 $\frac{\partial E}{\partial I}=\omega(I)$，这个结果一路活到第（四）篇的可积系统里都不会死。

有意思的地方在这儿。把它接到玻尔当年的量子化想法上。若设 $E_n-E_{n-1}=\hbar \omega$，则当 $n \to \infty$ 时它变成 $\frac{\partial E_n}{\partial n}=\hbar \omega$，再和刚才的结果一拼，我们实际上已经复原了旧量子论的**玻尔–索末菲量子化条件**（Bohr–Sommerfeld quantization condition）$I=n\hbar$。相空间面积以 $\hbar$ 为单位被量子化了——这么早，就已经在暗示：经典世界和量子世界讲的是同一种语言。

> **例（一维线性谐振子）。** 取 $V(x)=\frac{1}{2} k x^2=\frac{1}{2} m \omega^2 x^2$，轨道是 $\frac{p^2}{2 m}+\frac{1}{2} m w^2 x^2=E$，一个椭圆，所围面积为 $2 \pi E / \omega=2 \pi I$，于是 $E=I\omega=n\hbar\omega$。

### 1.2 微分形式、外微分与斯托克斯公式

我们刚才定义的力——势的梯度——抓住了自然界基本相互作用的某种本质：任何建立在这种力上的力学系统，自动是一个哈密顿系统。但日常生活里的力并非都是这一类，比如摩擦力就不是。定义成 $-\partial V/\partial \vec{x}$ 的力叫**保守力**，摩擦力则是**非保守力**。要精确说清楚究竟什么让一个力成为保守力，我们需要一件数学工具：微分形式。

先把我们对多变量积分如何随变量代换而变的理解拔高一层。定义**楔积**（wedge product）$d x \wedge d y=-d y \wedge d x, d x \wedge d x=0$。于是
$$d x \wedge d y=\left(\frac{\partial x}{\partial x^{\prime}} d x^{\prime}+\frac{\partial x}{\partial y^{\prime}} d y^{\prime}\right) \wedge\left(\frac{\partial y}{\partial x^{\prime}} d x^{\prime}+\frac{\partial y}{\partial y^{\prime}} d y^{\prime}\right)=\left(\frac{\partial x}{\partial x^{\prime}} \frac{\partial y}{\partial y^{\prime}}-\frac{\partial x}{\partial y^{\prime}} \frac{\partial y}{\partial x^{\prime}}\right) d x^{\prime} \wedge d y^{\prime}=\left|\frac{\partial(x, y)}{\partial\left(x^{\prime}, y^{\prime}\right)}\right| d x^{\prime} \wedge d y^{\prime}.$$
那个雅可比行列式，恰恰就是变量代换的因子——它是从反对称性里白白掉出来的，这是我们没走错路的第一个信号。

站在这个基础上，我们定义一个 **$n$-形式**：$\omega=f\left(x^{\prime}, x^2, \ldots x^n\right) d x^{\prime} \wedge d x^2 \wedge \ldots \wedge d x^n$。很自然，一个 $n$ 元函数的 $n$ 重积分，其实就是一个 $n$-形式的积分，$\iint\cdots\int f\left(x^1 \cdots x^n\right) d x^1 \cdots d x^n:=\int d \omega$。我们还能再往前推，对 $n$ 个变量定义一个 **$k$-形式**：
$$\alpha = \frac{1}{k!} \alpha_{i_1, i_2 \dots i_k} dx^{i_1} \wedge dx^{i_2} \wedge \dots \wedge dx^{i_k},$$
这里用了爱因斯坦求和记号。一个 $k$-形式其实是一个线性组合，而 $\alpha_{i_1, i_2 \dots i_k}$ 称为它的分量。既然是在求和，又因为楔积交换顺序要变号，分量就可以取成对任意两个指标反对称的——也就是全反对称的。为什么呢？任何一个 $\alpha_{ij}$ 都能拆成两块：**对称部分** $S_{ij} = \frac{1}{2}(\alpha_{ij} + \alpha_{ji})$，满足 $S_{ij} = S_{ji}$；以及**反对称部分** $A_{ij} = \frac{1}{2}(\alpha_{ij} - \alpha_{ji})$，满足 $A_{ij} = -A_{ji}$。当我们计算 $\alpha = \frac{1}{2} \alpha_{ij} dx^i \wedge dx^j$ 时，真正发生的是
$$\alpha = \frac{1}{2} (S_{ij} + A_{ij}) dx^i \wedge dx^j = \underbrace{\frac{1}{2} S_{ij} dx^i \wedge dx^j}_{\text{对称} \times \text{反对称}} + \underbrace{\frac{1}{2} A_{ij} dx^i \wedge dx^j}_{\text{反对称} \times \text{反对称}}.$$
第一项在求和中正负相消，只有第二项留得下来。也就是说，只有反对称部分对 $k$-形式有贡献，于是我们干脆把分量 $\alpha_{i_1 \dots i_k}$ 取成**全反对称**的。当 $k>n$ 时必有指标重复，所以 $k$-形式就是 $0$。而 $1/k!$ 这个系数，是因为求和重复计数了：$k=n$ 时，全反对称意味着一半分量相等、一半互为相反数，可楔积交换顺序的变号正好补上，于是每个不同的项被数了 $n!$ 次。

几个三维的例子能把它落到实处：
- 0-形式：$f(x,y,z)$。
- 3-形式：$f(x, y, z) d x \wedge d y \wedge d z$。
- 1-形式：$a_1 d x+a_2 d y+a_3 d z=\vec{a}(\vec{x}) \cdot d \vec{x}$。
- 2-形式：$a_{12} d x \wedge d y+a_{23} d y \wedge d z+a_{21} d z \wedge d x=\frac{1}{2} a_{i j}(\vec{x}) d x^i \wedge d x^j \rightarrow b_1 d x+b_2 d y+b_3 d z$。在这个对应里我们令 $b_1=a_{23}, b_2=a_{31}, b_3=a_{12}$，以及 $d x \wedge d y \rightarrow d z, d y \wedge d z \rightarrow d x, d z \wedge d x \rightarrow d y$。再令 $d \vec{S}=(d y \wedge d z, d z \wedge d x, d x \wedge d y)$，就有 $a=\vec{b} \cdot d \vec{S}$。

注意，0,3-形式与 1,2-形式之间的对应可以推广到高维，建立起 $k$-形式与 $(n-k)$-形式的一一对应。这就是 **Hodge 对偶**（Hodge duality）——揣进口袋，它正是为什么在三维里"旋度"和"转动矢量"能是同一个东西的原因。

现在是收获时刻。对二维 1-形式 $a=a_x d x+a_y d y$，定义**外微分** $d a=d a_x \wedge d x+d a_y \wedge d y$。展开，
$$da=\left(\partial_x a_x d x+\partial_y a_x d y\right) \wedge d x+\left(\partial_x a_y d x+\partial_y a_y d y\right) \wedge d y=\left(\partial_x a_y-\partial_y a_x\right) d x \wedge d y.$$
但二维格林公式早就告诉我们 $\oint_{\partial D}\left(a_x d x+a_y d y\right)=\int_D\left(\partial_x a_y-\partial_y a_x\right) d x d y$。于是有 $\int_{\partial D} a=\int_D d a$。

对三维 1-形式 $a=\vec{a} \cdot d \vec{x}=a_x d x+a_y d y+a_z d z$，外微分 $d a=d a_x \wedge d x+d a_y \wedge d y+d a_z \wedge d z$ 展开为
$$d a=\left(\partial_x a_y-\partial_y a_x\right) d x \wedge d y+\left(\partial_y a_z-\partial_z a_y\right) d y \wedge d z+\left(\partial_z a_x-\partial_x a_z\right) d z \wedge d x=(\nabla \times \mathbf{a}) \cdot d \mathbf{S}.$$
而三维斯托克斯公式 $\oint_{\partial D} \mathbf{a} \cdot d \mathbf{x}=\int_D(\nabla \times \mathbf{a}) \cdot d \mathbf{S}$ 给出的，是一模一样的陈述 $\int_{\partial D} a=\int_D d a$。

对三维 2-形式 $a=a_{12} d x \wedge d y+a_{23} d y \wedge d z+a_{31} d z \wedge d x$，外微分 $d a=d a_{12} \wedge d x \wedge d y+d a_{23} \wedge d y \wedge d z+d a_{31} \wedge d z \wedge d x$ 展开为
$$d a=\left(\partial_3 a_{12}+\partial_1 a_{23}+\partial_2 a_{31}\right) d x \wedge d y \wedge d z=(\nabla \cdot \mathbf{b}) d x \wedge d y \wedge d z,$$
而三维高斯定理 $\oint_{\partial V} \mathbf{b} \cdot d \mathbf{S}=\int_V(\nabla \cdot \mathbf{b}) d V$ 又一次把 $\int_{\partial D} a=\int_D d a$ 递到我们手里。

三条经典的积分定理——格林、斯托克斯、高斯——竟然是*同一条定理*。这正是这套机器的全部意义。我们可以一劳永逸地把它写成一个**广义斯托克斯公式**（generalized Stokes formula）：
$$\int_{\partial D} \alpha=\int_D d \alpha,$$
其中 $\alpha$ 是一个 $(k-1)$-形式，$D$ 是一个 $k$ 维曲面，于是 $d\alpha$ 是一个 $k$-形式。上面的一切都只是它的特例。

再往前推，对 $n$ 维的 $(k-1)$-形式 $\alpha=\frac{1}{(k-1)!} \alpha_{i_1 i_2 \ldots i_{k-1}} d x^{i_1} \wedge d x^{i_2} \wedge \ldots \wedge d x^{i_{k-1}}$，外微分为
$$
d \alpha=\frac{1}{(k-1)!}\left(\partial_j \alpha_{i_1 i_2 \ldots i_{k-1}}\right) d x^j \wedge d x^{i_1} \wedge d x^{i_2} \wedge \ldots \wedge d x^{i_{k-1}}.
$$
它有一条了不起的性质：$d^2\alpha=0$。理由正是前面那套对称/反对称论证——两个偏导可以交换，形成对称的一对，而楔积在求和里把它清零了。

这给了我们两个词。若 $d\alpha=0$，称 $\alpha$ 为**闭形式**。若 $\alpha=d\beta$，称 $\alpha$ 为**恰当形式**。由于 $d^2=0$，任何恰当形式都自动是闭形式。

现在我们可以精确地说出保守力是什么了。它的定义性质是 $\sum_i \mathbf{F}_i \cdot d \mathbf{x}_i=-d V$，我们把它写成一个**力 1-形式** $F_\mu d x^\mu=-d V\left(x^1, \ldots, x^{3 N}\right)$，简记为 $F=-dV$。这显然是一个恰当形式，因而也是闭形式，$dF=0$，其中 $V$ 是势能 0-形式。具体地，
$$d F=\left(\partial_\mu F_\nu\right) d x^\mu \wedge d x^\nu=\left[\frac{1}{2}\left(\partial_\mu F_\nu-\partial_\nu F_\mu\right)+\frac{1}{2}\left(\partial_\mu F_\nu+\partial_\nu F_\mu\right)\right] d x^\mu \wedge d x^\nu=\frac{1}{2}\left(\partial_\mu F_\nu - \partial_\nu F_\mu\right) d x^\mu \wedge d x^\nu=0,$$
于是 $\partial_\mu F_\nu-\partial_\nu F_\mu=0$，即 $\nabla \times \vec{F}=0$。换句话说：保守力无旋。而 $\int_{\partial D} F=\int_D d F=0$ 则说，保守力沿任意闭合曲线做的功为零。几何与物理，是同一件事看了两遍。

## 2. 最小作用量原理

到这里，局部的图景已经稳稳握在手里——哈密顿方程一刻接一刻地告诉粒子下一步往哪迈。但看待整个力学还有第二种方式，而它在精神气质上几乎截然相反。不再是一只蚂蚁沿着路径一步步爬，我们退后一步，把*整条*路径一次看尽，给它配上一个数，再问哪条路径让这个数取驻值。这就是最小作用量原理，是接下来一切的组织思想。

### 2.1 局部视角与全局视角

哈密顿正则方程 $\frac{d \vec{p}}{d t}=-\frac{\partial H}{\partial \vec{x}}, \frac{d \vec{x}}{d t}=\frac{\partial H}{\partial \vec{p}}$ 是一种蚂蚁视角：局部的、一步一步的。全局视角则给一整条路径配上一个**作用量**，
$$S[\mathbf{x}(t), \mathbf{p}(t)]=\int[\mathbf{p} \cdot \dot{\mathbf{x}}-H(\mathbf{x}, \mathbf{p})] d t,$$
而关键在于——这条相空间路径是*任意*的，根本不必满足哈密顿正则方程。（同样这种"两种视角"的二分，在量子力学里也会重现，那就是算符描述与路径积分描述。我们正在年轻时就遇见一位老朋友。）

### 2.2 从费马原理到变分法

最小作用量原理从哪里来？历史上，是从推广光学里的费马原理而来。给定起点和终点，光走的是用时最短的路径，
$$t=\int \frac{d l}{v}=\frac{1}{c} \int n(\vec{x})|d \vec{x}|.$$
定义**光程**（optical path）$S=\int n(\vec{x})|d \vec{x}|$。在二维平面里它成为 $S=\int n(y) \sqrt{(d x)^2+(d y)^2}=\int n(y) \sqrt{1+y^{\prime}(x)^2} d x$，端点固定 $y_a=y(a),y_b=y(b)$。把问题抽象一下：写 $L(y,y')=n(y) \sqrt{1+y^{\prime}(x)^2}$，于是 $S[y(x)]=\int dx L(y,y')$。这个 $S$ 是一个**泛函**——一个依赖于整条函数的数。

怎么对一个泛函求极值？这里有一种老实、不花哨的想法：把泛函假装成一个有无穷多个离散变量的函数。对普通函数我们会写 $d S=S\left(y_1+d y_1, y_2+d y_2, \cdots\right)-S\left(y_1, y_2, \cdots\right)=\sum_i \frac{\partial S}{\partial y_i} d y_i=0$。改用 $x$ 来标号，$d S\left[y_x\right]=S\left[y_x+d y_x\right]-S\left[y_x\right]=\sum_x \frac{\partial S}{\partial y_x} d y_x$，再把求和升级成积分，
$$\delta S[y(x)]=S[y(x)+\delta y(x)]-S[y(x)]=\int dx \frac{\delta S}{\delta y(x)}\delta y(x).$$
中间那个量就是**泛函导数**（functional derivative）$\frac{\delta S}{\delta y(x)}$。一个快速的自洽检查：由 $\delta y(x)=\int d x^{\prime} \delta\left(x-x^{\prime}\right) \delta y\left(x^{\prime}\right)$，我们读出 $\frac{d y(x)}{\delta y\left(x^{\prime}\right)}=\delta\left(x-x^{\prime}\right)$。

现在计算 $S[y(x)]=\int dx L(y,y')$ 的极值，约束 $\delta y(a)=\delta y(b)=0$。首先，
$$\begin{aligned} \delta L\left(y, y^{\prime}\right) & =L\left(y+\delta y, y^{\prime}+\delta y^{\prime}\right)-L\left(y, y^{\prime}\right) \\ & =\frac{\partial L}{\partial y} \delta y+\frac{\partial L}{\partial y^{\prime}} \delta y^{\prime}=\frac{\partial L}{\partial y} \delta y+\frac{\partial L}{\partial y^{\prime}}(\delta y)^{\prime}.\end{aligned}$$
利用 $\delta d x=d \delta x=\delta x=0$ 与 $\delta L(x, \dot{x})=\frac{\partial L}{\partial x} \delta x+\frac{\partial L}{\partial \dot{x}} \delta \dot{x}$，再分部积分，
$$
\begin{aligned}
\delta S[y(x)] & = \int_a^b d x \delta L\left(y, y^{\prime}\right) \\
& =\int_a^b d x\left[\frac{\partial L}{\partial y} d y+\frac{\partial L}{\partial y^{\prime}}(\partial y)^{\prime}\right] \\
& =\int_a^b d x\left[\frac{\partial L}{\partial y} \delta y+\frac{d}{d x}\left(\frac{\partial L}{\partial y^{\prime}} d y\right)-\delta y \frac{d}{d x}\left(\frac{\partial L}{\partial y^{\prime}}\right)\right] \\
& =\int_a^b d x \frac{d}{d x}\left(\frac{\partial L}{\partial y^{\prime}} \delta y\right)+\int_a^b d x\left[\frac{\partial L}{\partial y} \delta y-\delta y \frac{d}{d x}\left(\frac{\partial L}{\partial y^{\prime}}\right)\right] \\
& =\left.\frac{\partial L}{\partial y^{\prime}} \delta y\right|_a^b
+\int_a^b d x\left(\frac{\partial L}{\partial y}-\frac{d}{d x}\left(\frac{\partial L}{\partial y^{\prime}}\right)\right) \delta y \\
& =\int_a^b d x\left(\frac{\partial L}{\partial y}-\frac{d}{d x}\left(\frac{\partial L}{\partial y^{\prime}}\right)\right) \delta y=0 .
\end{aligned}
$$
边界项死掉了，因为 $\delta y$ 在端点为零；而 $\delta y$ 在别处是任意的，所以括号本身必须为零。泛函导数是
$$
\frac{d S}{\delta y(x)}=\frac{\partial L}{\partial y}-\frac{d}{d x}\left(\frac{\partial L}{\partial y^{\prime}}\right)=0,
$$
这就是**欧拉–拉格朗日方程**（Euler–Lagrange equation）。

> **例。** 回到光路，取 $\mathcal{L}\left(y \cdot y^{\prime}\right)=n(y) \sqrt{1+\left(y^{\prime}\right)^2}$，欧拉–拉格朗日方程给出
> $$
> \begin{aligned}
> \frac{d n}{d y} \sqrt{1+\left(y^{\prime}\right)^2}-\frac{d}{d x}\left(n(y) \frac{y^{\prime}}{\sqrt{1+\left(y^{\prime}\right)^2}}\right)=0 \\
> \left(1+\left(y^{\prime}\right)^2\right) \frac{d n}{d y}-n(y) y^{\prime \prime}=0 \\
> \frac{d}{d x}\left(\frac{n(y)}{\sqrt{1+(y')^2}}\right)=0 \Leftrightarrow \frac{n(y)}{\sqrt{1+(y')^2}}=C.
> \end{aligned}
> $$

### 2.3 相空间中的最小作用量

现在把同一套机器搬到相空间作用量 $S[\mathbf{x}(t), \mathbf{p}(t)]=\int[\mathbf{p} \cdot \dot{\mathbf{x}}-H(\mathbf{x}, \mathbf{p})] d t$ 上。这又是一个极值问题，$S[\vec{x}(t), \vec{p}(t)]=\int_{t_i}^{t_f} d t L(\vec{x}, \vec{p}, \dot{\vec{x}})$，但有个转折：我们不能蒙头套用欧拉–拉格朗日方程，因为没法同时固定 $(\vec{x}(t), \vec{p}(t))$ 的两个端点。正确的做法是只钉住位置，$\delta \vec{x}\left(t_i\right)=\delta \vec{x}\left(t_f\right)=0$，让动量自由。
$$\begin{aligned} \delta S[\vec{x}(t), \vec{p}(t)] & =\int_{t_i}^{t_f}[\delta \vec{p} \cdot \dot{\vec{x}}+\vec{p} \cdot \delta \dot{\vec{x}}-\delta H(\vec{x}, \vec{p})] d t . \\ & =\int_{t_i}^{t_f}\left[\delta \vec{p} \cdot \dot{\vec{x}}+\frac{d}{d t}(\vec{p} \cdot \delta \vec{x})-\delta \vec{x} \cdot \dot{\vec{p}}-\delta H(\vec{x} \cdot \vec{p})\right] d t \\ & =\left.\vec{p} \cdot \delta \vec{x}\right|_{t_i} ^{t_f}+\int_{t_i}^{t_f}[\delta \vec{p}\cdot \dot{\vec{x}}-\delta \vec{x} \cdot \dot{\vec{p}}-\delta H(\vec{x} \cdot \vec{p})] d t \\ & =\int_{t_i}^{t_f}\left[\delta \vec{p} \cdot \vec{x}-\delta \vec{x} \cdot \dot{\vec{p}}-\frac{\partial H}{\partial \vec{x}} \cdot \delta \vec{x}-\frac{\partial H}{\partial \vec{p}} \cdot \delta \vec{p}\right] d t \\ & =\int_{t_i}^{t_f}\left[\left(\dot{\vec{x}}-\frac{\partial H}{\partial \vec{p}}\right) \cdot \delta \vec{p}-\left(\dot{\vec{p}}+\frac{\partial H}{\partial \vec{x}}\right) \cdot \delta \vec{x}\right] d t=0 .\end{aligned}$$
我们仅仅靠要求驻值，就推导出了哈密顿正则方程——两幅图景是等价的：
$$\frac{\delta S}{\delta \vec{p}(t)}=\dot{\vec{x}}-\frac{\partial H}{\partial \vec{p}}=0 . \quad \frac{\delta S}{\delta \vec{x}(t)}=-\left(\dot{\vec{p}}+\frac{\partial H}{\partial \vec{x}}\right)=0.$$
请注意：对一个*一般的*哈密顿系统，并不需要假设 $p=m\dot{x}$。真正的关系是第一个式子，$\dot{x}=\frac{\partial H}{\partial p}$。这个自由度我们很快就要用上。

多粒子情形完全一样：$S[x(t),p(t)]=\int_{t_i}^{t_f} \operatorname{dt}\left[p_\mu \dot{x}^\mu-H(x, p)\right]$，正则方程为 $\dot{x}^\mu=\frac{\partial H}{\partial p_\mu}, \dot{p}_\mu=-\frac{\partial H}{\partial x^\mu}$。

我们之所以还想要又一种重新表述，有个很实际的理由。作用量依赖于哈密顿量，而后者有时难写得让人头疼。所以接下来我们把相空间转换成坐标空间——在那里，正如第（二）篇会看到的，我们常常能直接从对称性把作用量*猜*出来。记住这根线：**对称性约束作用量。**

### 2.4 坐标空间中的最小作用量

人们通常挂在嘴边的那个最小作用量原理，住在坐标空间里，而它可以从相空间的版本推出来。动机是普通微积分里的一个小手法。要给一个二元函数求极值，我们一般同时解 $\frac{\partial S}{\partial x}=0, \frac{\partial S}{\partial y}=0$。但等价地，可以先从 $\frac{\partial S}{\partial y}=0$ 解出 $y=\phi(x)$，代回得到 $S(x,\phi(x))$，再求导 $\frac{d S}{d x}=\frac{\partial S}{\partial x}+\frac{\partial S}{\partial y} \frac{\partial \phi}{\partial x}=0$。换句话说，提前消掉一个变量。

把它用到作用量 $S[\mathbf{x}(t), \mathbf{p}(t)]$ 上。直接的路子是解 $\frac{\delta S}{\delta x(t)}=0, \frac{\partial S}{\delta p(t)}=0$。等价的路子是先解 $\frac{\delta S}{\delta \vec{p}(t)}=\dot{x}-\frac{\partial H}{\partial \vec{p}}=0$，得到 $\vec{p}(t)=\phi(\vec{x}(t)) \Rightarrow S[\vec{x}(t), \phi(\vec{x}(t))]$，简记为 $S[\vec{x}(t)]$。回忆相空间作用量的被积函数 $L(\mathbf{x}, \mathbf{p}, \dot{\mathbf{x}})=\mathbf{p} \cdot \dot{\mathbf{x}}-H(\mathbf{x}, \mathbf{p})$。解 $\frac{\delta S}{\delta \vec{p}(t)}=\dot{x}-\frac{\partial H}{\partial \vec{p}}=0$，恰恰就是把 $L$ 对 $p$ 取极值。于是定义一个新函数
$$L(\mathbf{x}, \dot{\mathbf{x}})=\operatorname{extrem}_{\mathbf{p}} L(\mathbf{x}, \mathbf{p}, \dot{\mathbf{x}})=\operatorname{extrem}_{\mathbf{p}}[\mathbf{p} \cdot \dot{\mathbf{x}}-H(\mathbf{x}, \mathbf{p})],$$
而坐标空间作用量就是 $S[\mathbf{x}(t)]=\int_{t_i}^{t_f} L(\mathbf{x}, \dot{\mathbf{x}}) d t$，这里的 $L(\mathbf{x}, \dot{\mathbf{x}})$ 称为**拉格朗日量**（Lagrangian）。坐标空间的最小作用量与相空间的最小作用量，本是同一件事。

当然，坐标空间的最小作用量交给我们已经导出的欧拉–拉格朗日方程来处理就好：
$$
\frac{\partial L}{\partial \mathbf{x}}-\frac{d}{d t}\left(\frac{\partial L}{\partial \dot{\mathbf{x}}}\right)=0,
$$
也常称为**拉格朗日方程**。

拉格朗日量 $L(\mathbf{x}, \dot{\mathbf{x}})$ 与哈密顿量 $H(\mathbf{x}, \mathbf{p})$ 由**勒让德变换**（Legendre transformation）关联起来：
$$\begin{aligned}\operatorname{extrem}_{\dot{\mathbf{x}}}[\mathbf{p} \cdot \dot{\mathbf{x}}-L(\mathbf{x}, \dot{\mathbf{x}})]=H(\mathbf{x}, \mathbf{p}) \\ \operatorname{extrem}_{\mathbf{p}}[\mathbf{p} \cdot \dot{\mathbf{x}}-H(\mathbf{x}, \mathbf{p})] = L(\mathbf{x}, \dot{\mathbf{x}}) \end{aligned}$$
证明是一小串取极值：
$$\begin{aligned} & \operatorname{extrem}_{\dot{\mathbf{x}}}[\mathbf{p} \cdot \dot{\mathbf{x}}-L(\mathbf{x}, \dot{\mathbf{x}})] \\ = & \operatorname{extrem}_{\dot{\mathbf{x}}}\left[\mathbf{p} \cdot \dot{\mathbf{x}}-\operatorname{extrem}_{\mathbf{p}^{\prime}}\left[\mathbf{p}^{\prime} \cdot \dot{\mathbf{x}}-H\left(\mathbf{x}, \mathbf{p}^{\prime}\right)\right]\right] \\ = & \operatorname{extrem}_{\dot{\mathbf{x}}} \operatorname{extrem}_{\mathbf{p}^{\prime}}\left[\left(\mathbf{p}-\mathbf{p}^{\prime}\right) \cdot \dot{\mathbf{x}}+H\left(\mathbf{x}, \mathbf{p}^{\prime}\right)\right] \\ = & \operatorname{extrem}_{\mathbf{p}^{\prime}, \dot{\mathbf{x}}}\left[\left(\mathbf{p}-\mathbf{p}^{\prime}\right) \cdot \dot{\mathbf{x}}+H\left(\mathbf{x}, \mathbf{p}^{\prime}\right)\right] \\ = & H(\mathbf{x}, \mathbf{p}) .\end{aligned}$$

> **例（单粒子）。** 取 $H(\mathbf{x}, \mathbf{p})=\frac{\mathbf{p}^2}{2 m}+V(\mathbf{x})$，哈密顿正则方程给出 $\mathbf{p}=m \dot{\mathbf{x}}$，勒让德变换给出拉格朗日量 $L(\mathbf{x}, \dot{\mathbf{x}})=\operatorname{extrem}_{\mathbf{p}}\left[\mathbf{p} \cdot \dot{\mathbf{x}}-\frac{\mathbf{p}^2}{2 m}-V(\mathbf{x})\right]=\frac{1}{2} m \dot{\mathbf{x}}^2-V(\mathbf{x})$——正好是动能减去势能，分毫不差，而且这个结论可以推广到多粒子。坐标空间作用量为 $S[\mathbf{x}(t)]=\int_{t_i}^{t_f} d t\left[\frac{1}{2} m \dot{\mathbf{x}}^2-V(\mathbf{x})\right]$，拉格朗日方程 $m \frac{d^2 \mathbf{x}}{d t^2}=-\frac{\partial V}{\partial \mathbf{x}}$ 就是牛顿定律。

> **例（洛伦兹力）。** 单粒子的拉格朗日量是速度的二次型。如果加一个速度的*一阶*项 $\vec{A} \cdot \dot{\vec{x}}$ 会怎样？若 $\vec{A}$ 是常数，它积分后的贡献是 $\vec{A} \cdot\left(\vec{x}\left(t_f\right)-\vec{x}\left(t_i\right)\right)$，一个端点固定的边界项，变分时归零——对运动毫无影响。所以 $\vec{A}$ 至少得依赖 $\vec{x}$ 才有戏：
> $$L=\frac{1}{2} m \dot{\mathbf{x}}^2+\mathbf{A}(\mathbf{x}) \cdot \dot{\mathbf{x}}-V(\mathbf{x}).$$

作用量成为
$$
\begin{aligned}
S[\mathbf{x}(t)] & =\int_{t_i}^{t_f} d t\left[\frac{1}{2} m \dot{\mathbf{x}}^2+\mathbf{A}(\mathbf{x}) \cdot \dot{\mathbf{x}}-V(\mathbf{x})\right] \\
& =\int_{t_i}^{t_f} d t\left[\frac{1}{2} m \dot{\mathbf{x}}^2-V(\mathbf{x})\right]+\int A_j(\mathbf{x}) \cdot d x^j.
\end{aligned}
$$
利用 $\delta t=\delta d t=d \delta t=0$，对作用量求变分：
$$
\begin{aligned} \delta S[\vec{x}(t)] & =\int_{i_i}^{t_f} d t \cdot \delta\left[\frac{1}{2} m \dot{\vec{x}}-V(\vec{x})\right]+\delta \int A_j(\vec{x}) \cdot d x^j \\ & =\int_{t_i}^{t_f} d t\left[-\frac{\partial V}{\partial \vec{x}} \delta \vec{x}+m \dot{\vec{x}} \delta \dot{\vec{x}}\right]+\delta \int A_j(\vec{x}) \cdot d x^j \\
& =\int_{t_i}^{t_f} d t\left[-\frac{\partial V}{\partial \vec{x}} \delta \vec{x}+m \dot{\vec{x}}(\delta \vec{x})^{\prime}\right]+\delta \int A_j(\vec{x}) \cdot d x^j \\
& =\int_{t_i}^{t_f} d t\left[-\frac{\partial V}{\partial \vec{x}} \delta \vec{x}+\frac{d}{d t}(m \dot{\vec{x}} \cdot \delta \vec{x})-\delta \vec{x} \cdot \frac{d}{d t}(m \dot{\vec{x}})\right]+\delta \int A_j(\vec{x}) \cdot d x^j \\
& =\left.m\dot{\vec{x}} \cdot \delta \vec{x}\right|_{t_i} ^{t_f}-\int_{t_i}^{t_f} d t\left[\frac{\partial V}{\partial \vec{x}}+m \ddot{\vec{x}}\right] \cdot \delta \vec{x}+\delta \int A_j(\vec{x}) \cdot d x^j \\
& =-\int_{t_i}^{t_f} d t\left[m \ddot{\vec{x}}_i+\partial_i V(\vec{x})\right] \delta x^i+\delta \int A_j(\vec{x}) d x^j \\
& =-\int_{t_i}^{t_j} d t\left[m \ddot{\vec{x}}_i+\partial_i V(\vec{x})\right] \delta x^i+\int A_i d \delta x^i+\partial_i A_j \delta x^i d x^j \\
& =-\int_{t_i}^{t_j} d t\left[m \ddot{\vec{x}_i}+\partial_i V(\vec{x})\right] \delta x^i+\int d\left(A_i \delta x^i\right)+\int \partial_i A_j \delta x^i d x^j-\delta x^i d A_i \\
& =-\int_{t_i}^{t_j} d t\left[m \ddot{\overrightarrow{x_i}}+\partial_i V(\vec{x})\right] \delta x^i+\int \partial_i A_j \delta x^i d x^j-\partial_j A_i d x^j \delta x^i \\
& =-\int_{t_i}^{t_j} d t\left[m \ddot{\overrightarrow{x_i}}+\partial_i V(\vec{x})\right] \delta x^i+\int\left(\partial_i A_j-\partial_j A_i\right) d x^j \delta x^i . \\
& =-\int_{t_i}^{t_j} d t\left[m \ddot{\overrightarrow{x_i}}+\partial_i V(\vec{x})-F_{i j} \dot{x}^j\right] \delta x^i=0 .
\end{aligned}
$$
最后一行引入了 $F_{ij}=\partial_i A_j-\partial_j A_i$。结果是
$$\begin{aligned}\frac{\partial S}{\partial x^{(i)}(t)} & = -\left[m \ddot{\vec{x}_i}+\partial_i V(\vec{x})-F_{i j} \dot{x}^j\right]=0 \\ \Rightarrow m \ddot{x}_i & = -\partial_i V(\vec{x})+F_{i j} \dot{x}^j .\end{aligned}$$
现在看看 $F_{ij}$ 究竟是什么：$F_{x y}=\partial_x A_y-\partial_y A_x=(\nabla \times \vec{A})_z$，正是磁场 $\vec{B}$ 的一个分量。借助列维-奇维塔符号，$F_{ij}=\varepsilon_{ijk}B_k$，于是
$$m \ddot{x}_i=-\partial_i V(\vec{x})+\varepsilon_{i j k} \dot{x}^j B^k,$$
也就是 $m \ddot{x}=-\nabla V+\dot{\vec{x}} \times \vec{B}$。这已经很像洛伦兹力了；要精确得到它，只需把 $\vec{A}$ 换成 $q\vec{A}$，其中 $\vec{A}$ 是**矢量势**（vector potential），$\vec{B}=\nabla \times \vec{A}$。所以一个速度一阶项，配上一个依赖 $\mathbf{x}$ 的系数，就从变分原理里变出了整个磁力。正确描述洛伦兹力的拉格朗日量是
$$L(\mathbf{x}, \dot{\mathbf{x}})=\frac{1}{2} m \dot{\mathbf{x}}^2+q \mathbf{A}(\mathbf{x}) \cdot \dot{\mathbf{x}}-V(\mathbf{x}).$$
对它做勒让德变换。先求极值，
$$
\frac{\partial}{\partial \dot{\mathbf{x}}}[\mathbf{p} \cdot \dot{\mathbf{x}}-L(\mathbf{x}, \dot{\mathbf{x}})]=0 \Leftrightarrow \mathbf{p}=\frac{\partial L}{\partial \dot{\mathbf{x}}}=m\dot{\mathbf{x}}+q\mathbf{A}.
$$
这里头一回出现了 $\mathbf{p}\neq m\mathbf{\dot{x}}$。取而代之的是 $\dot{\mathbf{x}}=(\mathbf{p}-q \mathbf{A}) / m$，哈密顿量则为
$$H(\mathbf{x}, \mathbf{p})=\operatorname{extrem}_{\dot{\mathbf{x}}}[\mathbf{p} \cdot \dot{\mathbf{x}}-L(\mathbf{x}, \dot{\mathbf{x}})]=\frac{(\mathbf{p}-q \mathbf{A})^2}{2 m}+V(\mathbf{x}).$$
注意，这个哈密顿量比刚才的拉格朗日量*难猜得多*。这种不对称——拉格朗日量好猜，哈密顿量靠推——本身就是一条教训，而第（二）篇会拿它来做文章。

提个醒：最小作用量原理并非万能。它恰好抓住*保守*经典系统的运动方程，却没法天生地描述非保守或耗散系统，比如摩擦。原因是作用量高度对称——数学上，二阶泛函导数是对称的，比如交换两个时间变量后保持不变——而运动方程里一个速度一阶项往往标记出一个明确的*时间箭头*。这类方程只能靠额外引入一个"瑞利耗散函数"才能硬塞进拉格朗日框架，但那已经不是纯粹的作用量原理了。

> **例。** 对 $\frac{\delta S}{\delta x(t)}=\dot{x}(t)$，我们算得 $\frac{\delta^2 S}{\delta x\left(t^{\prime}\right) \delta x(t)}=\frac{\delta \dot{x}(t)}{\delta x\left(t^{\prime}\right)}=\frac{d}{d t}\left(\frac{\delta x(t)}{\delta x\left(t^{\prime}\right)}\right)=\frac{d}{d t} \delta\left(t-t^{\prime}\right)$。可交换时间变量后符号翻了，所以没有作用量能产生这个一维运动。热扩散同理。

还有一处微妙之处值得停一停。经典系统的真实路径并不一定是作用量的*极小值*——通常它只是一个驻定值，一个鞍点。要判定到底是极小、极大还是鞍点，得求二阶泛函导数，而它依赖于 $\delta x$ *如何*形变路径。由于 $\delta x$ 在 $t_1$、$t_2$ 处为零，可以把它做正弦展开 $\delta x(t)=\varepsilon \sum_n a_n \sin \left(\omega_n\left(t-t_1\right)\right)$，$\omega_n=\frac{n \pi}{t_2-t_1}$，于是真实路径对应于无穷维向量 $(a_1,a_2,\cdots)$ 坐落于原点。不同的作用量、不同的 $a_n$ 取值，便给出性质不同的鞍点。

> **例。** 考虑一维谐振子 $S=\int_{t_1}^{t_2} \frac{m}{2}\left(\dot{x}^2-\omega^2 x^2\right) d t$。一阶变分为零；二阶变分为 $\delta^2 S=\int_{t_1}^{t_2} \frac{m}{2}\left[(\delta \dot{x})^2-\omega^2(\delta x)^2\right] d t$。配上 $\delta \dot{x}(t)=\varepsilon \sum_n a_n \omega_n \cos \left(\omega_n\left(t-t_1\right)\right)$，得到 $\delta^2 S=\varepsilon^2 \frac{m}{4}\left(t_2-t_1\right) \sum_n a_n^2\left(\omega_n^2-\omega^2\right)$。所以当 $\omega_1>\omega$，即 $t_2-t_1<\frac{T}{2}$ 时，作用量是真正的极小值；否则就是鞍点。

### 2.5 广义坐标与广义动量

到此为止我们用的都是单粒子、多粒子的直角坐标。但作用量描述能推广到*任意*坐标，而这份灵活性，正是它对付一大类约束系统时威力所在。

所谓**理想约束**，是指它的约束力对任何满足约束的运动——不管这运动是否真的发生——都不做功。于是只要约束没被破坏，约束力对系统能量、对哈密顿量就毫无贡献，我们可以干脆无视它。这恰恰是这两篇所发展的机器能派上用场的时候。

**广义坐标**，是描述理想约束系统的那些独立变量；它们的数目就是**自由度**。由于这些坐标彼此独立，它们的变分也彼此独立——所以我们仍能从最小作用量推出哈密顿方程或拉格朗日方程。

接下来要找广义动量。在相空间作用量 $S=\int d t\left[p_\mu \dot{x}^\mu-H(x, p)\right]=\int p_\mu d x^\mu-\int H d t$ 中，运动方程的形态主要由第一项决定（第二项无非是哈密顿量）。第一项有个专门的名字——**辛势**（symplectic potential）$\Theta=p_\mu dx^\mu,\mu=1,2,\cdots,3N$——我们希望它在换成广义坐标后保持形式不变：$\Theta=p_\mu dx^\mu=p_adq^a,a=1,2,\cdots,s$。区别在于，$\mu$ 坐标彼此可能不独立，而 $a$ 坐标彼此独立；满足这个形式的 $p_a$ *就是*广义动量，$p_a=p_\mu \frac{\partial x^\mu}{\partial q^a}$。相空间作用量成为 $S=\int d t\left[p_a \dot{q}^a-H(q, p)\right]$，自然得到形式相同的正则方程 $\frac{d q^a}{d t}=\frac{\partial H}{\partial p_a}, \frac{d p_a}{d t}=-\frac{\partial H}{\partial q^a}$。

> **例。** 一个粒子约束在 $x^2+y^2=R^2$ 上，广义坐标 $\theta$：由 $x=R\cos\theta,y=R\sin\theta,\Theta=p_xdx+p_ydy=p_\theta d\theta$ 得 $p_\theta=\left[-p_x \sin (\theta)+p_y \cos (\theta)\right] R$。再用约束 $p_x \cos (\theta)+p_y \sin (\theta)=0$ 得到 $\mathbf{p}^2=p_\theta^2 / R^2$。于是哈密顿量为 $H=\frac{\mathbf{p}^2}{2 m}+V=\frac{p_\theta^2}{2 m R^2}+V(\theta)$，正则方程为 $\dot{\theta}=\frac{\partial H}{\partial p_\theta}=\frac{p_\theta}{m R^2},\dot{p}_\theta=-\frac{\partial H}{\partial \theta}=-\frac{\partial V}{\partial \theta}$。

我们也可以不从作用量、而从拉格朗日量出发。直接换坐标得到 $L(q,\dot{q})$，作用量为 $S[q(t)]=\int d t L(q, \dot{q})$，拉格朗日方程为 $\frac{\partial L}{\partial q^a}-\frac{d}{d t}\left(\frac{\partial L}{\partial \dot{q}^a}\right)=0$。再经勒让德变换得哈密顿量 $H(q, p)=\operatorname{extrem}_{\left\{\dot{q}^a\right\}}\left[p_b \dot{q}^b-L(q, \dot{q})\right]$；要做这个变换，我们计算 $\frac{\partial}{\partial \dot{q}^a}\left[p_b \dot{q}^b-L(q, \dot{q})\right]=0 \Rightarrow p_a=\frac{\partial L}{\partial \dot{q}^a}$——这就可以作为从拉格朗日量出发的广义动量定义。

> **例（双摆）。** 两个广义坐标 $\theta_1,\theta_2$。这是一个货真价实的复杂系统，能量大到一定程度它就走向混沌——这是对第（四）篇的一个预告。
> $$
> \begin{aligned}
> T_1 & = \frac{1}{2} m_1 l_1^2 \dot{\theta}_1^2, \quad V_1=-m_1 g l_1 \cos \left(\theta_1\right) \\ x_2 & = l_1 \sin \left(\theta_1\right)+l_2 \sin \left(\theta_2\right), \quad y_2=l_1 \cos \left(\theta_1\right)+l_2 \cos \left(\theta_2\right) \\ T_2 & = \frac{1}{2} m_2\left(\dot{x}_2^2+\dot{y}_2^2\right)=\frac{1}{2} m_2\left(l_1^2 \dot{\theta}_1^2+l_2^2 \dot{\theta}_2^2+2 l_1 l_2 \cos \left(\theta_1-\theta_2\right) \dot{\theta}_1 \dot{\theta}_2\right) \\ V_2 & = -m_2 g y_2=-m_2 g\left(l_1 \cos \left(\theta_1\right)+l_2 \cos \left(\theta_2\right)\right) \\ L & = \frac{1}{2}\left(m_1+m_2\right) l_1^2 \dot{\theta}_1^2+\frac{1}{2} m_2 l_2^2 \dot{\theta}_2^2+m_2 l_1 l_2 \cos \left(\theta_1-\theta_2\right) \dot{\theta}_1 \dot{\theta}_2 \\ & +\left(m_1+m_2\right) g l_1 \cos \left(\theta_1\right)+m_2 g l_2 \cos \left(\theta_2\right) \\ \frac{\partial L}{\partial \theta_1} & -\frac{d}{d t}\left(\frac{\partial L}{\partial \dot{\theta}_1}\right)=0, \quad \frac{\partial L}{\partial \theta_2}-\frac{d}{d t}\left(\frac{\partial L}{\partial \dot{\theta}_2}\right)=0 \end{aligned}
> $$

### 2.6 几何的理解

进入下一篇之前，我们再看一眼 $q$ 与 $p$ 的真正本性，这次从几何的角度。初级力学里我们把它们当成普通实变量，但在现代框架下，它们住在截然不同的几何空间里。

- **构型流形（$\mathcal{M}$）。** 系统所有可能位置构成的集合，并不只是一个平直的欧几里得空间 $\mathbb{R}^n$，而是一个 $n$ 维**微分流形** $\mathcal{M}$。一个被限制在球面上的质点，其构型空间是球面 $S^2$；一个能转动的刚体，其构型空间是流形 $SO(3)$。广义坐标 $q^a$ 其实是这个流形上的**局部坐标卡**（local chart）——就像我们用经纬度标记地球表面，$q^a$ 只是流形局部的数学标签。
- **切丛（$T\mathcal{M}$）——拉格朗日力学的舞台。** 拉格朗日力学中，状态由位置和速度 $(q, \dot{q})$ 描述。几何上，速度矢量 $\dot{q}$ 并不住在流形 $\mathcal{M}$ 上，而是住在点 $q$ 处的**切空间**（tangent space）$T_q\mathcal{M}$ 里（想象一个紧贴球面的切平面，速度矢量就躺在那个平面上）。把所有点上的所有切空间收集起来，就构成了**切丛** $T\mathcal{M}=\bigcup_{q \in \mathcal{M}} T_q \mathcal{M}$。所以拉格朗日量 $L(q, \dot{q})$ 是切丛上的一个标量函数，$L: T\mathcal{M} \rightarrow \mathbb{R}$。
- **余切丛（$T^*\mathcal{M}$）——哈密顿力学的舞台。** 广义动量是 $p_a = \frac{\partial L}{\partial \dot{q}^a}$。这里有一个微妙却至关重要的几何跳跃：当你对一个*矢量*（速度 $\dot{q}^a$）求导时，结果在变换性质上不再是矢量，而是一个**对偶矢量**，也叫余切矢量或 **1-形式**。动量 $p$ 住在切空间的对偶——**余切空间** $T^*_q\mathcal{M}$ 里。把它们收集起来就构成**余切丛** $T^*\mathcal{M}$。这也正是为什么 $p_a$ 带下指标（协变），而 $q^a$ 带上指标（逆变）。
- **自然配对。** 这完美解释了作用量里 $p_a \dot{q}^a$ 这一项。它*不是*两个矢量的点积（点积需要度规 $g_{ij}$），而是余切矢量 $p$ 与矢量 $\dot{q}$ 之间的**自然配对**（收缩）$\langle p, \dot{q} \rangle = p_a \dot{q}^a$。这个配对不需要度规，在任何坐标变换下都是标量。它已经告诉我们，哈密顿力学的相空间（辛）结构比拉格朗日的*更底层*——它不依赖度规。
- 从拉格朗日力学到哈密顿力学的勒让德变换，几何上就是从**切丛** $T\mathcal{M}$ 到**余切丛** $T^*\mathcal{M}$ 的映射。

最后这一点最值得带走。这一篇我们花力气学会了*给一条路径配一个数*，并从这个数如何变化里读出力学。一路上，一个醒目的模式浮了上来：那个产生洛伦兹力的速度一阶项、那个 $p \neq m\dot{x}$、那个坚持自然配对不需要度规——它们都在暗示，作用量不是我们知道物理*之后*才算出来的东西，而是我们能从物理必须遵守的对称性里*推导*出来的东西。

这正是第（二）篇要接住的线头：诺特定理，以及那个了不起的论断——对称性能凭一己之力写出作用量，从相对论不变性一路写到我们刚刚撞见的电磁耦合。**未完待续。**

