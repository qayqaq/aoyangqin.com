---
title: "一次经典力学之旅（一）：势、形式，与作用量的诞生"
date: "2026-01-01"
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

<!--CHUNK1-->
