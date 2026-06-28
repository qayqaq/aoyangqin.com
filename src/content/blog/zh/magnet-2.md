---
title: "磁铁吸引金属时发生了什么？（二）：狄拉克，与藏在时空里的磁性"
date: "2026-03-22"
lang: "zh"
translationKey: "magnet-2"
tags: ["物理", "电磁学"]
category: "Magnetism Series"
summary: "要一个既对时间一阶、又尊重相对论的波动方程，电子就被迫凭空长出四个分量、一根内禀转轴，以及一个磁矩。第二篇：自旋——和磁性——如何从狄拉克方程里掉出来。"
---

> 系列第（二）篇，共四篇。[第（一）篇](/zh/blog/magnet-1)证明了经典物理禁止磁性（玻尔–范雷文），而第一块相对论补丁（克莱因–戈登）又因负能量和负概率而崩塌。我们把狄拉克留在了一条线索上：坚持要一个**对时间一阶**、却又**相对论协变**的波动方程，看看你会被迫接受什么。

我们从上一篇结束的地方接着往下走。当时我们写下了狄拉克那个大胆的猜测——一个对动量只是**线性**的哈密顿量，
$$\hat{H} = c(\alpha_x \hat{p}_x + \alpha_y \hat{p}_y + \alpha_z \hat{p}_z) + \beta m c^2$$
其中四个系数 $\alpha_x, \alpha_y, \alpha_z, \beta$ 还悬而未决。现在整盘棋就剩一个问题：要让这个方程和相对论自洽，这些东西**必须是什么**？我们不预设它们是矩阵，而是会被逼到这一步。

## 1. 把方程平方，逼出一个克利福德代数

自洽的要求说起来很简单。狄拉克一阶方程的任何解，都必须**同时**满足相对论能量–动量关系——也就是说，把这个算符作用两次，必须重新得到 $E^2 = c^2\vec{p}^2 + m^2c^4$。那我们就把哈密顿量平方，并要求它给出正确的结果：
$$(c\textstyle\sum \alpha_i p_i + \beta mc^2)^2 = c^2 \sum p_i^2 + m^2 c^4$$
小心地展开左边——动量 $p_i$ 彼此对易，但我们**绝不**预设系数也对易——得到
$$c^2 \sum_i \alpha_i^2 p_i^2 + c^2 \sum_{i < j} \{\alpha_i, \alpha_j\} p_i p_j + mc^3 \sum_i \{\alpha_i, \beta\} p_i + \beta^2 m^2 c^4$$
现在把它和干净的右边逐项对照。那些交叉项根本不该出现，所以必须为零；平方项的系数则必须是 1。这番对照交给我们四条代数戒律——**克利福德代数**（Clifford algebra）：

1. $\alpha_i^2 = I$
2. $\beta^2 = I$
3. $\{\alpha_i, \alpha_j\} = 0 \quad (i \neq j)$
4. $\{\alpha_i, \beta\} = 0$

请盯着第 3 条看一秒。它说 $\alpha_1 \alpha_2 = -\alpha_2 \alpha_1$——系数**反对易**。普通的数没有这种本事（对数而言，$ab = ba$ 永远成立）。所以 $\alpha_i$ 和 $\beta$ **不可能**是数。它们被迫成为矩阵——而我们从没这样假设过，是相对论加上"对时间一阶"**逼**出来的。就是在这一刻，电子长出了内禀结构。

## 2. 伽马矩阵，与四分量的不可避免

为了让洛伦兹协变性显式地呈现，更利落的做法是把系数重新打包成**伽马矩阵** $\gamma^0 = \beta$、$\gamma^i = \beta\alpha_i$。上面那四条戒律就收拢成一个优雅的关系，
$$\{\gamma^\mu, \gamma^\nu\} = 2\eta^{\mu\nu} I$$
其中 $\eta^{\mu\nu} = \text{diag}(1,-1,-1,-1)$ 是闵可夫斯基度规；而狄拉克方程本身则呈现出它著名的紧凑形式，
$$(i \gamma^\mu \partial_\mu - \tfrac{mc}{\hbar}) \psi = 0,\quad \text{其中 } \partial_\mu = (\tfrac{1}{c}\partial_t, \nabla)$$
可这些矩阵到底**多大**？妙就妙在这里：代数本身把答案钉死了。我们需要四个互相反对易的矩阵，每个的平方都是 $\pm I$、迹为零。把维数挨个过一遍：1×1 的数根本无法反对易；2 维里泡利矩阵只给得出**三个**反对易矩阵，差一个；迹与平方的条件又逼着维数必须是偶数，排除了 3 维。第一个容得下四个的维数，是 **4 维**。电子相对论代数的最小表示，无可回避地是四维的。

一个标准的具体选择是**狄拉克表示**，由 $2\times 2$ 单位矩阵和泡利矩阵搭起来：
$$
\begin{aligned}\gamma^0 & = \begin{pmatrix} I & 0 \\ 0 & -I \end{pmatrix}, \quad \gamma^i = \begin{pmatrix} 0 & \sigma_i \\ -\sigma_i & 0 \end{pmatrix},\quad \\\gamma^i  & = \beta \alpha_i  = \begin{pmatrix} I & 0 \\ 0 & -I \end{pmatrix} \begin{pmatrix} 0 & \sigma_i \\ \sigma_i & 0 \end{pmatrix} = \begin{pmatrix} 0 & \sigma_i \\ -\sigma_i & 0 \end{pmatrix} \\ \sigma_x& =\left(\begin{array}{ll}
0 & 1 \\
1 & 0
\end{array}\right), \sigma_y=\left(\begin{array}{cc}
0 & -i \\
+i & 0
\end{array}\right),\sigma_z=\left(\begin{array}{ll}
1 & 0 \\
0 & -1
\end{array}\right) \end{aligned}
$$
我们别急着翻过去，看清刚才发生了什么。只不过要求了一个线性的、相对论性的波动方程，就逼得波函数 $\psi$ 必须带上**四个分量**——我们如今把它读作电子（自旋上/下）和它的反粒子正电子（自旋上/下）。狄拉克本来只想治好负概率那个病，却不经意间一脚踹开了通往自旋和反物质的大门。这条教训，我们后面还会反复撞见：**磁性不是焊在物质上的某种属性，它是时空对称性的必然推论。**

## 3. 把电磁场打开

再漂亮，这也还只是个自由电子。要看见磁性，我们得让电子感受到场。配方是**最小耦合**替换：把动量换成正则动量 $\vec{p} \to \vec{p} - q\vec{A}$，把能量算符换成 $i\hbar\partial_t \to i\hbar\partial_t - q\Phi$，其中 $\vec{A}$、$\Phi$ 是磁矢势和电标势。狄拉克方程变成
$$i\hbar \frac{\partial \psi}{\partial t} = [c \vec{\alpha} \cdot (\vec{p} - q\vec{A}) + \beta m c^2 + q\Phi] \psi$$
或者，用协变导数 $D_\mu = \partial_\mu + \frac{iq}{\hbar}A_\mu$ 写成完全协变的装束，
$$(i\hbar \gamma^\mu D_\mu - mc) \psi = 0\quad \text{或}\quad \gamma^\mu (p_\mu - qA_\mu) \psi = mc \psi$$
这里我们用不着相对论性的情形——一块冰箱贴可一点都不相对论。我们要的是**非相对论极限**，其中静能 $mc^2$ 压倒一切。把四分量旋量拆成"大分量" $\phi$ 和"小分量" $\chi$（各是一个二分量旋量），再把快速振荡的静能相位剥出来：
$$\psi(\vec{r}, t) = \begin{pmatrix} \phi(\vec{r}, t) \\ \chi(\vec{r}, t) \end{pmatrix} e^{-imc^2t/\hbar}$$
按乘积法则对时间求导，
$$i\hbar \frac{\partial \psi}{\partial t} = \left( i\hbar \frac{\partial}{\partial t} \begin{pmatrix} \phi \\ \chi \end{pmatrix} + mc^2 \begin{pmatrix} \phi \\ \chi \end{pmatrix} \right) e^{-imc^2t/\hbar}$$
代回狄拉克方程（用标准表示），两边的指数因子相消，剩下
$$i\hbar \frac{\partial}{\partial t} \begin{pmatrix} \phi \\ \chi \end{pmatrix} + mc^2 \begin{pmatrix} \phi \\ \chi \end{pmatrix} = c \begin{pmatrix} 0 & \vec{\sigma} \\ \vec{\sigma} & 0 \end{pmatrix} \cdot \vec{\pi} \begin{pmatrix} \phi \\ \chi \end{pmatrix} + \begin{pmatrix} mc^2 & 0 \\ 0 & -mc^2 \end{pmatrix} \begin{pmatrix} \phi \\ \chi \end{pmatrix} + q\Phi \begin{pmatrix} \phi \\ \chi \end{pmatrix}$$
其中 $\vec{\pi} = \vec{p} - q\vec{A}$ 是正则动量。这其实是两个耦合方程：
$$\begin{aligned} & i \hbar \frac{\partial \phi}{\partial t}+m c^2 \phi=c(\vec{\sigma} \cdot \vec{\pi}) \chi+m c^2 \phi+q \Phi \phi \\ & i \hbar \frac{\partial \chi}{\partial t}+m c^2 \chi=c(\vec{\sigma} \cdot \vec{\pi}) \phi-m c^2 \chi+q \Phi \chi \end{aligned}$$
在非相对论极限下，动能和势能比静能小得多，于是 $|i\hbar\partial_t\chi| \ll |2mc^2\chi|$、$|q\Phi\chi| \ll |2mc^2\chi|$。小分量方程便坍缩成一个代数关系：
$$2mc^2 \chi \approx c(\vec{\sigma} \cdot \vec{\pi})\phi \implies \chi \approx \frac{\vec{\sigma} \cdot \vec{\pi}}{2mc} \phi$$
顺便也解释了它的名字：$\chi$ 比 $\phi$ 小了大约 $v/c$ 这么一个量级。

## 4. 收获：磁性掉了出来

现在把 $\chi$ 代回大分量方程。一切都化简成关于 $\phi$ 的单个方程：
$$i\hbar \frac{\partial \phi}{\partial t} = \left[ \frac{(\vec{\sigma} \cdot \vec{\pi})^2}{2m} + q\Phi \right] \phi$$
而磁铁，自始至终就藏在那个看似人畜无害的 $(\vec{\sigma}\cdot\vec{\pi})^2$ 里。用泡利恒等式 $(\vec{\sigma}\cdot\vec{A})(\vec{\sigma}\cdot\vec{B}) = \vec{A}\cdot\vec{B} + i\vec{\sigma}\cdot(\vec{A}\times\vec{B})$：
$$(\vec{\sigma} \cdot \vec{\pi})^2 = \vec{\pi} \cdot \vec{\pi} + i\vec{\sigma} \cdot (\vec{\pi} \times \vec{\pi})$$
如果 $\vec{\pi}$ 是个普通向量，第二项就该是零——任何向量和自己叉乘都为零。可 $\vec{\pi} = \vec{p} - q\vec{A}$ 是个**算符**，而 $\vec{p}$ 与 $\vec{A}$ 不对易。作用在一个试探函数 $f$ 上，
$$(\vec{\pi} \times \vec{\pi})f = (\vec{p} - q\vec{A}) \times (\vec{p} - q\vec{A})f= (\vec{p} \times \vec{p} - q\vec{p} \times \vec{A} - q\vec{A} \times \vec{p} + q^2\vec{A} \times \vec{A})f$$
由于 $\vec{p}\times\vec{p}=0$、$\vec{A}\times\vec{A}=0$，幸存下来的是
$$\begin{aligned}-q(\vec{p} \times \vec{A} & + \vec{A} \times \vec{p})f = -q \left[ (-i\hbar \nabla) \times (\vec{A}f) + \vec{A} \times (-i\hbar \nabla f) \right]\\&= i\hbar q \left[ (\nabla \times \vec{A})f - \vec{A} \times (\nabla f) + \vec{A} \times (\nabla f) \right]= i\hbar q (\nabla \times \vec{A})f = i\hbar q \vec{B} f\end{aligned}$$
因为 $\nabla\times\vec{A} = \vec{B}$。于是这个"自叉乘"非但没有消失，它**本身就是磁场**：
$$(\vec{\sigma} \cdot \vec{\pi})^2 = \vec{\pi}^2 + i\vec{\sigma} \cdot (i\hbar q \vec{B}) = \vec{\pi}^2 - \hbar q \vec{\sigma} \cdot \vec{B}$$
代回去，我们就推出了**泡利方程**，哈密顿量里赫然多出一个崭新的项：
$$i\hbar \frac{\partial \phi}{\partial t} = \left[ \frac{(\vec{p}-q\vec{A})^2}{2m} + q\Phi - \frac{q\hbar}{2m} \vec{\sigma} \cdot \vec{B} \right] \phi$$
$$H = \frac{(\vec{p}-q\vec{A})^2}{2m} + q\Phi - \frac{q\hbar}{2m} \vec{\sigma} \cdot \vec{B}$$
最后那一项 $-\frac{q\hbar}{2m}\vec{\sigma}\cdot\vec{B}$，正是塞曼能 $U = -\vec{\mu}\cdot\vec{B}$——一个**内禀**磁矩，直接和磁场耦合。把它的大小与轨道运动产生的磁矩一比，你会发现这个磁矩是朴素经典估计的**两倍**：这就是著名的旋磁比 $g = 2$，不需要任何额外输入就被预言了出来。

值得停下来想想它**为什么**会出现。要是我们从没引入 $\vec{\sigma}$ 矩阵——也就是停留在无自旋的克莱因–戈登世界——动能项就会是一个朴素的 $\vec{\pi}^2$，它不会和 $\vec{B}$ 产生线性耦合，哈密顿量便退化成无自旋的 $H_{\text{Spin-0}} = \frac{(\vec{p}-q\vec{A})^2}{2m} + q\Phi$。换句话说：$\vec{\sigma}$ 矩阵正是赋予粒子一根**内禀转轴**的东西。没有它，电子是一个各向同性的点，场只能从外部推搡它。有了它，$\vec{\pi}$ 的不对易性——也就是乔装的 $\vec{B}$——被直接接进电子的内禀维度，化作了一份磁能。第 1 节里相对论硬塞给我们的那套矩阵结构，简直就是字面意义上磁铁的源头。

## 这把我们带到了哪里

于是真凶到手了。一个孩子手里把玩的磁铁，由一个**没有任何经典成因**的内禀磁矩驱动；它是电子相对论性、四分量本性在低速世界里留下的残影。玻尔和范雷文说经典物理禁止磁性，他们是对的——只不过他们身处的那个世界，缺了两个维度。

但请注意，我们几乎是从一道**侧门**拿到自旋的：打开一个场，看着一个项冒出来。这应该让我们隐隐有点不安。自旋本该是**内禀**的——它该在没有任何场的情况下就存在，写进电子在我们旋转实验室时所遵循的方式里。而且我们打了个结、随手搁下了一根线头：动力学论证给的是一个**二**分量旋量，可狄拉克方程坚持要**四**个。另外那两个去哪了？

要回答这个，就得彻底告别动力学，转而追问一个纯粹运动学的问题：当我们旋转空间——以及旋转时空——时，一个波函数**必须**如何变换？这正是第（三）篇的主题。在那里，SU(2)、SO(3) 和洛伦兹群将解释：电子凭什么一开始就是个旋量。**未完待续。**
