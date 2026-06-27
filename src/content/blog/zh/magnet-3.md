---
title: "磁铁吸引金属时发生了什么？（三）：电子为什么是个旋量"
date: "2026-01-19"
lang: "zh"
translationKey: "magnet-3"
tags: ["物理", "电磁学"]
category: "Magnetism Series"
summary: "第（二）篇靠打开一个场把自旋变了出来。可自旋是内禀的——它该写进电子在我们旋转空间本身时的变换方式里。第三篇：SU(2)、SO(3) 与洛伦兹群的群论，以及电子为什么别无选择只能是个旋量。"
---

> 系列第（三）篇，共四篇。[第（二）篇](/zh/blog/magnet-2)靠打开一个场、看着一个新项冒出来，把自旋和磁性从狄拉克方程里拽了出来。可那一招留下两处不安。其一，自旋本该是**内禀**的——没有任何场它也该在那儿。其二，动力学论证给的是一个**二**分量旋量，狄拉克方程却坚持要**四**个。另外那两个去哪了？要把这两件事一并答清，我们就得彻底丢开动力学，去问一个纯粹运动学的问题。

## 5. SU(2) 与 SO(3) 之间的万有覆盖

先把该让我们不安的问题摆正。第（二）篇里，我们确实在动力学（Dynamics）层面看到了自旋的"涌现"——可那是靠打开一个电磁场才看见的。作为一种**内禀**性质，自旋按理讲根本不该需要这根拐杖；归根到底，它的存在本身必然与对称性、与变换相关联。为什么波函数非得由 $\vec{\sigma}$ 矩阵来操作不可？为什么它是二分量的旋量？要回答这个，我们就得潜到运动学（Kinematics）的底层去——也就是**时空对称性的群论基础**。哪怕把电磁场全忘掉，电子作为一个物理对象，当我们把实验室坐标系旋转一个角度 $\theta$ 时，它的波函数 $\psi$ 也没得选，必然要变。正是这种"旋转下的变换规则"定义了自旋。在动手碰物理之前，我们先简要介绍故事里最重要的两个群：SU(2) 与 SO(3)。它们属于李群，在现代物理里占着极其要紧的位置。

SU(2) 的基本定义是：
$$\begin{aligned} \mathrm{SU}(2) & \equiv\left\{U\left|U \in \mathrm{GL}(2, \mathbb{C}), U^{\dagger} U=1_{2 \times 2},|U|=1\right\}\right. \\  & \equiv\left\{\left[\begin{array}{cc} a & b \\ -b^* & a^* \end{array}\right]\left|a, b \in \mathbb{C},|a|^2+|b|^2=1\right\}\right. \\ & \equiv\left\{\left.U(\vec{n}, \omega)=e^{i \frac{\omega}{2} \vec{n} \cdot \vec{\sigma}} \right\rvert\, \omega \in[0, \pi], \vec{n} \text { 为全体三维实单位矢量 }\right\} \end{aligned}$$
若采用实参数 $x_i\in\mathbb{R}$，令 $a=x_4+ix_3, b=x_2+ix_1$ 来描述：
$$\begin{aligned}U=\left[\begin{array}{cc}a & b \\-b^* & a^*\end{array}\right]=\left[\begin{array}{cc}x_4+i x_3 & x_2+i x_1 \\-x_2+i x_1 & x_4-i x_3\end{array}\right]\end{aligned}$$
约束条件就变为 $x_1^2+x_2^2+x_3^2+x_4^2=1$，这说明 SU(2) 作为流形是 $S^3$，一个三维球面，属于超球面。其 $T^2$-fibration 描述为：
$$\left\{\begin{array}{l} x_1=\sin \theta \cos \varphi \\ x_2=\sin \theta \sin \varphi \end{array},\left\{\begin{array}{l} x_3=\cos \theta \cos \chi \\ x_4=\cos \theta \sin \chi \end{array}, \text { 其中 } \theta \in[0, \pi / 2] ; \varphi, \chi \in[0,2 \pi]\right. \text {. }\right.$$
你可以用两个反向的圆锥面 $\chi, \varphi$ 加一根轴 $\theta$ 来想象它，在 $\theta=0$ 或 $\theta=\pi/2$ 时会有一个参数失效。也可以用一个随 $\theta$ 放缩、在端点处被掐掉的"甜甜圈"（实心环面）来想象：$\theta=0$ 时甜甜圈是一个无宽度的圆，只有 $\chi$ 沿着圆有效，$\varphi$ 因为圆没有宽度而失效；$\theta=\pi/2$ 时甜甜圈鼓成一个没有空洞的球，于是 $\chi$ 失效，只剩 $\varphi$ 生效。

球坐标系的描述为：
$$\text { 对 } \omega \in[0,2 \pi], \theta \in[0, \pi], \varphi \in[0,2 \pi] \text { 有 }\left\{\begin{array}{l} x_1=\sin \frac{\omega}{2} \sin \theta \cos \varphi \\ x_2=\sin \frac{\omega}{2} \sin \theta \sin \varphi \\ x_3=\sin \frac{\omega}{2} \cos \theta \\ x_4=\cos \frac{\omega}{2} \end{array}\right.$$
SU(2) 还可以由泡利矩阵表达：
$$U=\left[\begin{array}{cc} x_4+i x_3 & x_2+i x_1 \\ -x_2+i x_1 & x_4-i x_3 \end{array}\right]=x_4 1_{2 \times 2}+i x_1 \sigma_1+i x_2 \sigma_2+i x_3 \sigma_3 .$$
再把球坐标揉进去：
$$\begin{aligned}U(\vec{n}, \omega)&=e^{i \frac{\omega}{2} \vec{n} \cdot \vec{\sigma}}=1_{2 \times 2} \cos \frac{\omega}{2}+i n^a \sigma_a \sin \frac{\omega}{2} \\ \vec{n}&=(\sin \theta \cos \varphi, \sin \theta \sin \varphi, \cos \theta) ; \omega \in[0,2 \pi], \theta \in[0, \pi], \varphi \in[0,2 \pi] . \end{aligned}$$
SO(3) 的基本定义是：
$$\begin{aligned}\mathrm{SO}(3)& \equiv\left\{\mathcal{R}\left|\mathcal{R} \in \mathrm{GL}(3, \mathbb{R}), \mathcal{R}^{\mathrm{T}} \mathcal{R}=1_{3 \times 3},|\mathcal{R}|=1\right\}\right.\\ &\equiv\left\{\begin{array}{l|l} \mathcal{R}(\vec{\omega}) & \begin{array}{l} \vec{\omega}=\omega \vec{n}, \vec{n}=(\cos \varphi \sin \theta, \sin \varphi \sin \theta, \cos \theta) \\ \omega \in[0, \pi], \theta \in[0, \pi], \varphi \in[0,2 \pi] \end{array} \end{array}\right\} . \end{aligned}$$
SO(3) 是两者里更亲切的那个——它就是我们看得见、摸得着的旋转操作。作为流形，SO(3) 是 $\vec{\omega}$ 端点扫出的、半径为 $\pi$ 的实心球，球面上对径的两点被认同。微妙之处恰恰藏在这个对径认同里。它的来源天真得很——绕固定轴逆时针转 $180^\circ$，和顺时针转 $180^\circ$，落到的是同一个地方——可后果很尖锐：这个实心球成了一个连通、却**不**单连通的流形（并非空间里任意一条闭合曲线都能连续收缩到一个点）。这个对径认同的实心球有它的名字，叫三维实射影空间（real projective space），记作 $\mathbb{R}P^3$。

先说清楚"表示"是什么意思，因为整出戏全压在它身上。数学上，群 $G$ 在向量空间 $V$ 上的**表示**，是一个从 $G$ 到一般线性群 $GL(V)$（即 $V$ 上所有可逆变换构成的群）的**同态映射**：$\forall g_1, g_2 \in G, \quad D(g_1 g_2) = D(g_1)D(g_2)$；对李群我们还要求映射连续。**射影表示**之所以登场，是因为量子力学比这宽容。物理状态由希尔伯特空间里的**射线**（Ray）描述，$|\psi\rangle$ 和 $e^{i\alpha}|\psi\rangle$ 代表的是**同一**物理状态。于是群的乘法法则只需在"相差一个相位"的意义下成立：
$$D(g_1)D(g_2) = \omega(g_1, g_2) D(g_1 g_2)$$
其中 $\omega(g_1, g_2)$ 是一个模为 1 的复数，称为**群指数**（group exponent）。Bargmann 定理（1954）把这件事做严了：对于满足 $H^2(\mathfrak{g}, \mathbb{R})=0$ 的李群 $G$（SO(3) 和洛伦兹群都合格），其所有连续射影酉表示都能"提升"为某个中心扩张群 $\tilde{G}$ 的普通酉表示。对于 SO(3) 这种相位歧义死活揉不掉的情形，解法就是去找它的**万有覆盖群** SU(2)，把 SO(3) 的射影表示换成 SU(2) 的普通表示。请记住这一招——它是整节的枢纽。

这个万有覆盖群一出场，就直指 SO(3) 与 SU(2) 之间深刻的血缘。在拓扑学里，一个空间 $X$ 的万有覆盖空间 $\tilde{X}$ 就像它的"升级版"，有两条核心特征：**单连通性**（$\tilde{X}$ 里所有的圈都能缩成一个点，没有拓扑洞）与**局部一致性**（局部上 $\tilde{X}$ 看起来和 $X$ 一模一样，但整体上 $\tilde{X}$ 往往更"大"，以 $n:1$ 的方式覆盖在 $X$ 上）。

那么，凭什么 SU(2) 的矩阵能产生 SO(3) 的旋转？这里给出一个经典的构造。把三维空间中的向量 $\mathbf{x} = (x, y, z)$ 映射为一个二阶**无迹厄米矩阵** $X$：
$$X = x\sigma_1 + y\sigma_2 + z\sigma_3 = \begin{pmatrix} z & x-iy \\ x+iy & -z \end{pmatrix}$$
（其中 $\sigma_i$ 是泡利矩阵）。注意 $\det(X) = -(x^2 + y^2 + z^2) = -\|\mathbf{x}\|^2$。让 SU(2) 中的矩阵 $U$ 以"三明治"的方式作用在 $X$ 上：$X' = U X U^\dagger$。由于 $U$ 幺正且行列式为 1，这个变换保持了 $X$ 的无迹性与厄米性，更关键的是**保持了行列式不变**：$\det(X') = \det(U X U^\dagger) = \det(X)$。这就是说 $\|\mathbf{x}'\|^2 = \|\mathbf{x}\|^2$——变换保住了向量的长度，所以它**就是一个三维旋转**。可现在再盯着 $X' = U X U^\dagger$，把 $U$ 换成 $-U$：$(-U) X (-U)^\dagger = (-1)^2 U X U^\dagger = U X U^\dagger$。我们发现，**$U$ 和 $-U$ 产生了完全相同的旋转**。这就是 $2:1$ 覆盖的代数根源：SO(3) 里的每一个旋转，在 SU(2) 中都对应**两个**点。这也解释了为什么转 $2\pi$ 回不到原点（在 SU(2) 里只跑了半圈），而要转 $4\pi$ 才真正归位（在 SU(2) 里跑满一整圈）。换句话说，SO(3) 本身有"洞"（它的基本群是 $\mathbb{Z}_2$），而 SU(2)——也就是 $S^3$——是单连通的（基本群为 $0$），没有任何拓扑洞。

覆盖的第二个条件，局部一致，则浮出了 SU(2) 与 SO(3) 的另一大特点：在单位元附近，它们局部同构。意思是，如果你只看"无穷小"的旋转，只挪那么一丁点，这两个群压根分不出彼此。只有当你转了一大圈（比如 $2\pi$）、去探群的"全貌"时，才会逮到它们的不同（一个回了家，另一个落在 $-I$）。严格地说，这是因为它们拥有完全相同的**李代数**（Lie Algebra）——即单位元处切空间的同构，$\mathfrak{su}(2) \cong \mathfrak{so}(3)$。从求解薛定谔方程的过程里我们知道，SO(3) 有三个生成元 $J_x, J_y, J_z$（对应绕 $x, y, z$ 轴的微小旋转），其对易关系为 $[J_i, J_j] = i \epsilon_{ijk} J_k$。这一条关系就定义了三维旋转的本质；所谓生成元，不过是李代数的一组基底。

现在我们亲手求一下 SU(2) 的生成元，看着这个同构自己冒出来。取一个微小变换：
$$U(\epsilon) = I - i \epsilon S$$
要它落在 SU(2) 里，先得满足幺正性：$(I + i\epsilon S^\dagger)(I - i\epsilon S) = I \implies I - i\epsilon(S - S^\dagger) = I \implies S = S^\dagger$，所以 $S$ 必须是厄米矩阵——物理上可观测。还有特殊幺正的约束：利用 $\det(e^A) = e^{\text{Tr}(A)}$，$\det(U) = \det(e^{-i\epsilon S}) = e^{-i\epsilon \text{Tr}(S)} = 1 \implies \text{Tr}(S) = 0$，所以 $S$ 必须无迹。两个条件同时满足的，正好就是泡利矩阵 $\sigma_x, \sigma_y, \sigma_z$，它们构成了李代数 $\mathfrak{su}(2)$ 的一组完备**基底**。于是生成元 $S$ 必然正比于 $\sigma$。而 $[\sigma_i, \sigma_j] = 2i \epsilon_{ijk} \sigma_k$，这与 $[L_i, L_j] = i \epsilon_{ijk} L_k$ 只差一个系数 $\frac{1}{2}$——这就已经说明 SU(2) 和 SO(3) 的李代数同构了。取 $S=\frac{1}{2}\sigma$，便化成标准的 $[S_i, S_j] = i \epsilon_{ijk} S_k$，与 $J$ 的对易关系一模一样。这样我们就有了一套自洽的角动量理论，物理世界里存在总角动量 $L =J + S$。而点睛之处在于：如果自旋 $S$ 想有资格被称作"角动量"、想和 $J$ 加在一起凑成一个守恒量，它就没得选，必须遵循和 $J$ **一模一样**的代数规则。轨道角动量 $J = \mathbf{r} \times \mathbf{p}$ 是由空间坐标定死的，它的对易关系直接来自 $x$ 与 $p$、动不得，所以我们**被迫**取 $S=\frac{1}{2}\sigma$。理论之外，实验也点头：做**施特恩–格拉赫实验**（Stern–Gerlach Experiment）、测电子在磁场中的偏转时，量出来的物理值是 **$\pm \frac{1}{2}\hbar$**。这就直接把可观测量 $S$ 的特征值钉在了 $\pm 1/2$ 上；而数学上，只有 $\frac{1}{2}\sigma_z$ 的特征值才是 $\pm 1/2$（因为 $\sigma_z$ 的特征值是 $\pm 1$）。

回到表示。对李群来说，生成元有一桩大好处：任意有限变换 $D(\theta)$ 都能由**生成元** $J$ 经指数映射造出来。若 $J$ 是李代数 $\mathfrak{g}$ 的元素，群中元素便写作：
$$D(\theta) = \exp(-i \theta \mathbf{n} \cdot \mathbf{J})$$
这里的 $\mathbf{J}$ 就是前面讲过的角动量算符（矩阵）。顺带提一句物理学里惯用的符号"混用"：严格地说，指数映射 $\exp$ 把抽象的李代数元素映为抽象的李群元素，但物理公式 $D(\theta) = \exp(-i \theta \mathbf{n} \cdot \mathbf{J})$ 实际上是在表示空间（矩阵空间）内部进行的运算。这里的 $\mathbf{J}$ 已经是生成元的矩阵表示，算出来的 $D(\theta)$ 自然就是群元素的矩阵表示。

不管处理的是 SO(3) 还是 SU(2)，**它们的李代数同构**——共享同一套对易关系 $[J_i, J_j] = i \epsilon_{ijk} J_k$（这里取 $\hbar=1$）。我们现在要把这套规则允许的所有有限维不可约表示找出来。定义阶梯算符：
$$J_\pm = J_x \pm i J_y$$
再引入 $J_z$ 的本征态 $|j, m\rangle$，使得：
$$J_z |j, m\rangle = m |j, m\rangle,\quad \mathbf{J}^2 |j, m\rangle = \lambda |j, m\rangle$$
算一下对易子：
$$[J_z, J_\pm] = [J_z, J_x] \pm i[J_z, J_y] = i J_y \pm i(-i J_x) = \pm (J_x \pm i J_y) = \pm J_\pm$$
这说明 $J_\pm$ 是本征值的"升降梯"：
$$J_z (J_\pm |j, m\rangle) = (J_\pm J_z + [J_z, J_\pm]) |j, m\rangle = (m \pm 1) (J_\pm |j, m\rangle)$$
若 $m$ 是特征值，那么 $m \pm 1$ 也是。但我们要的是**有限维**表示，所以谱必须有上界 $m_{max}$ 和下界 $m_{min}$：
$$J_+ |j, m_{max}\rangle = 0,\quad J_- |j, m_{min}\rangle = 0$$
用算符恒等式 $J_- J_+ = \mathbf{J}^2 - J_z^2 - J_z$ 作用在最高权态 $|j, m_{max}\rangle$ 上：
$$0 = (\lambda - m_{max}^2 - m_{max}) |m_{max}\rangle \implies \lambda = m_{max}(m_{max} + 1)$$
把最大权重标记为 $j$，即 $m_{max} \equiv j$，于是 Casimir 算符的特征值为 $j(j+1)$。同理，用 $J_+ J_- = \mathbf{J}^2 - J_z^2 + J_z$ 作用在最低权态 $|j, m_{min}\rangle$ 上：
$$0 = (j(j+1) - m_{min}^2 + m_{min}) |m_{min}\rangle$$
解方程 $m_{min}^2 - m_{min} - j(j+1) = 0$，得到两个解：
$$m_{min} = -j \quad \text{或} \quad m_{min} = j+1$$
因为 $m_{min} \le m_{max} = j$，只能取 **$m_{min} = -j$**。从 $m_{min} = -j$ 一步一步爬到 $m_{max} = j$，每次加 1，必须经过整数步 $k$ 才能登顶：
$$m_{max} - m_{min} = j - (-j) = 2j = k \quad (k \in \mathbb{Z})\quad\Longrightarrow\quad j=\frac{k}{2}$$
那道有名的阶梯就出来了：仅凭李代数结构，允许的 $j$ 值是 **$0, 1/2, 1, 3/2, 2 \cdots$**。但李代数只是**局部**性质，现在我们得把这些候选者放回**全局群结构**中检验，检验的核心标准是**单值性**：把一个群元素沿闭合路径转一圈回到单位元，它的表示矩阵（对普通表示而言）也必须回到单位矩阵。SO(3) 是三维空间的旋转群，绕任意轴（设为 $z$ 轴）转 $2\pi$（$360^\circ$），物理空间完全复原：$R_z(2\pi) = R_z(0) = \mathbf{1}$，正是群单位元。于是 SO(3) 的普通表示 $D$ 必须满足 $D(R_z(2\pi)) = D(\mathbf{1}) = I$。代入李代数导出的公式，在 $z$ 轴基底下 $J_z$ 是对角的、对角元为 $m$：$D(2\pi) = \exp(-i 2\pi J_z) = \text{diag}(e^{-i 2\pi m}, \dots)$。要它等于单位阵 $I$，每个对角元都得是 1：$e^{-i 2\pi m} = 1 \implies m \in \mathbb{Z}$。整数 $j$（$0, 1, \dots$）给出整数 $m$，过关；而半整数 $j$（$1/2, 3/2, \dots$）给出半整数 $m$，$e^{-i 2\pi m} = -1 \neq 1$。所以在 SO(3) 的普通表示里，半整数自旋被严格禁止。

而 SU(2) 恰好把 SO(3) 扔掉的那一半捡了回来。它的几何不同：作为 SO(3) 的万有覆盖群（2:1 覆盖），参数 $\theta = 2\pi$ 对应的不是单位元，而是 $U(2\pi)=-I\neq I$；只有转 $4\pi$ 才回到单位元。于是 $D(2\pi)$ 的行为，与 SU(2) 群本身的行为分毫不差地对上了。我们其实撞见了 Bargmann 定理在 SO(3) 与 SU(2) 上的一个具体实例：非单连通的 SO(3) 的射影表示，等价于其万有覆盖群 SU(2) 的普通表示。最终的映射关系表为：

|**自旋 j**|**在李代数中**|**在 SU(2) 中**|**在 SO(3) 中**|**物理粒子**|
|---|---|---|---|---|
|**整数 ($0, 1, \dots$)**|存在|**普通表示** (但不忠实，无法区分 $\pm I$)|**普通表示**|玻色子 (光子等)|
|**半整数 ($1/2, \dots$)**|存在|**普通表示** (忠实表示)|**射影表示** (多值)|费米子 (电子等)|

"自旋"之所以能从这套抽象的数学结构里"涌现"出来，原因只有一个：量子力学对"物理状态"的定义比经典力学宽容，而这份宽容，释放了被经典物理屏蔽掉的拓扑自由度。
- **对称性（根源）：** 宇宙具有旋转对称性，于是李代数 $\mathfrak{so}(3) \cong \mathfrak{su}(2)$ 存在。
- **量子化（契机）：** 概率波的特性允许"射影表示"，使得李代数里被经典物理禁掉的"半整数部分"得以存活。
- **内禀化（成型）：** 这些存活下来的半整数表示无法对应任何空间运动，因此只能被解释为粒子与生俱来的**内禀角动量**。

第三条才是最深的一条：半整数表示在普通空间里无处安身，电子只好把它们揣在**内部**。这就是自旋，眼前没有半点场的影子——正是第（二）篇求而不得的那个"内禀"来源。

现在我们具体算一算不同 $j$ 的表示长什么样。用指数映射：
$$D^{(j)}(\hat{n}, \theta) = \sum_{k=0}^\infty \frac{(-i\theta)^k}{k!} (\hat{n} \cdot \mathbf{J}^{(j)})^k$$
其中 $\hat{n}$ 是旋转轴（单位向量），$\theta$ 是旋转角。

最简单的，$j=0$ 标量表示：维数 $d=2(0)+1=1$。基底只有一个态 $|0,0\rangle$。因为 $m$ 只能取 0，生成元 $J_z = [0]$；升降算符作用在最高/最低权态上都是 0，所以 $J_+ = [0], J_- = [0]$，从而 $J_x = 0, J_y = 0, J_z = 0$。指数映射给出 $D(\theta) = e^{-i\theta \mathbf{n} \cdot \mathbf{0}} = 1$，即平凡表示。这就是标量：随你怎么转，数值都乘以 1，纹丝不动。

当 $j=\frac{1}{2}$，维数为 $2j+1=2$。我们已经知道生成元为 $\mathbf{J}=\frac{1}{2} \sigma \Longrightarrow \hat{n} \cdot \mathbf{J}=\frac{1}{2}(\hat{n} \cdot \sigma)$。要算 $(\hat{n} \cdot \mathbf{J})$ 的高次幂，回顾泡利矩阵的性质 $(\hat{n} \cdot \vec{\sigma})^2 = I$。于是生成元的幂次规律为：
$$(\hat{n} \cdot \mathbf{J})^2 = \left(\frac{1}{2} \hat{n} \cdot \vec{\sigma}\right)^2 = \frac{1}{4} (\hat{n} \cdot \vec{\sigma})^2 = \frac{1}{4} I,\quad (\hat{n} \cdot \mathbf{J})^3 = (\hat{n} \cdot \mathbf{J})^2 (\hat{n} \cdot \mathbf{J}) = \frac{1}{4} (\hat{n} \cdot \mathbf{J})$$
通项公式为：
$$\begin{aligned}(\hat{n} \cdot \mathbf{J})^{2k} &= (\frac{1}{4})^k I = (\frac{1}{2})^{2k} I  \\  (\hat{n} \cdot \mathbf{J})^{2k+1} &= (\frac{1}{2})^{2k} (\hat{n} \cdot \mathbf{J}) = (\frac{1}{2})^{2k+1} (\hat{n} \cdot \vec{\sigma}) \end{aligned}$$
把指数级数拆成偶数与奇数两部分求和：
$$\begin{aligned} D^{(1/2)} &= \sum_{k=0}^\infty \frac{(-i\theta)^k}{k!} (\hat{n} \cdot \mathbf{J})^k \\ &= \underbrace{\sum_{m=0}^\infty \frac{(-i\theta)^{2m}}{(2m)!} \left(\frac{1}{2}\right)^{2m} I}_{\text{偶数项}} + \underbrace{\sum_{m=0}^\infty \frac{(-i\theta)^{2m+1}}{(2m+1)!} \left(\frac{1}{2}\right)^{2m+1} (\hat{n} \cdot \vec{\sigma})}_{\text{奇数项}} \end{aligned}$$
偶数项系数为 $\sum \frac{(-1)^m}{(2m)!} (\frac{\theta}{2})^{2m} = \cos(\frac{\theta}{2})$，奇数项系数为 $-i \sum \frac{(-1)^m}{(2m+1)!} (\frac{\theta}{2})^{2m+1} = -i \sin(\frac{\theta}{2})$。最终得到：
$$\boxed{D^{(1/2)}(\hat{n}, \theta) = \cos\left(\frac{\theta}{2}\right) I - i \sin\left(\frac{\theta}{2}\right) (\hat{n} \cdot \vec{\sigma})}$$
这就是 $j=1/2$ 的表示，它把旋转操作映射到了 **$2 \times 2$ 复矩阵**。**检验 $2\pi$：** 代入 $\theta=2\pi$，$\cos(\pi)=-1, \sin(\pi)=0$，结果是 $-I$——正是我们预言的那个"半圈"印记。

当 $j=1$，维数为 $2j+1=3$，需要 $3 \times 3$ 的矩阵。在物理学惯用的角动量基底（笛卡尔基底）下，生成元满足 $(J_k)_{ab} = -i \epsilon_{kab}$。比如绕 $z$ 轴旋转的生成元 $J_z$：
$$J_z = \begin{pmatrix} 0 & -i & 0 \\ i & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$
对任意轴 $\hat{n}$，令 $K = \hat{n} \cdot \mathbf{J}$。直接算 $J_z$ 的幂（其他方向同理）：
$$J_z^2 = \begin{pmatrix} 0 & -i & 0 \\ i & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & -i & 0 \\ i & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix} \quad (\text{注意：这不是 } I)$$
$$J_z^3 = J_z^2 \cdot J_z = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & -i & 0 \\ i & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & -i & 0 \\ i & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} = J_z$$
规律出来了：对 $j=1$ 的生成元，特征方程是 **$(\hat{n} \cdot \mathbf{J})^3 = (\hat{n} \cdot \mathbf{J})$**。这意味着：奇数项（$k=1, 3, 5 \dots$）给出 $(\hat{n} \cdot \mathbf{J})^k = (\hat{n} \cdot \mathbf{J})$；偶数项（$k=2, 4, 6 \dots$）给出 $(\hat{n} \cdot \mathbf{J})^k = (\hat{n} \cdot \mathbf{J})^2$；$k=0$ 项是 $I$。再展开泰勒级数，但这次要把 $I$ 单独拎出来，因为 $J^2 \neq I$：
$$D^{(1)} = I + \sum_{\text{odd } k} \frac{(-i\theta)^k}{k!} (\hat{n} \cdot \mathbf{J}) + \sum_{\text{even } k \ge 2} \frac{(-i\theta)^k}{k!} (\hat{n} \cdot \mathbf{J})^2$$
奇数项系数为 $-i(\theta - \frac{\theta^3}{3!} + \dots) = -i \sin\theta$，偶数项系数为 $(\frac{-\theta^2}{2!} + \frac{\theta^4}{4!} - \dots) = \cos\theta - 1$。结果：
$$\boxed{D^{(1)}(\hat{n}, \theta) = I - i \sin\theta (\hat{n} \cdot \mathbf{J}) + (\cos\theta - 1) (\hat{n} \cdot \mathbf{J})^2}$$
这就是 $j=1$ 的表示（物理学形式的罗德里格斯旋转公式），它把旋转操作映射到了 **$3 \times 3$ 实矩阵**（虽然 $J$ 含 $i$，但 $i \cdot J$ 是实矩阵）。**检验 $2\pi$：** 代入 $\theta=2\pi$，$\sin(2\pi)=0, \cos(2\pi)=1$，$D^{(1)} = I - 0 + (1-1)(\dots) = I$。整数自旋一圈就到家，正如单值性检验所要求的。

一般地，我们可以为所有 $j$ 建立生成元和表示。这套构造依赖于量子力学中角动量算符的三个核心矩阵元公式；只要握住这三个，我们就能写出 $j=0, 3/2, 2$ 乃至 $j=100$ 的矩阵。首先，$J_z$ 是对角矩阵：
$$\langle j, m' | J_z | j, m \rangle = m \delta_{m'm}$$
然后 $J_+$（升算符）是次对角矩阵：
$$\langle j, m+1 | J_+ | j, m \rangle = \sqrt{j(j+1) - m(m+1)}$$
$J_-$（降算符）是下次对角矩阵——实数情形下是 $J_+$ 的转置。而 $J_x, J_y$ 由 $J_\pm$ 组合而成：
$$J_x = \frac{1}{2}(J_+ + J_-), \quad J_y = \frac{1}{2i}(J_+ - J_-)$$
拿 $j=3/2$ 当例子：自旋 3/2 表示。它属于费米子，和电子类似，但有 4 个分量，常见于 $\Delta$ 重子或超引力中的引力微子。维数：$d = 2(3/2) + 1 = 4$。构建生成元 $J_z$（对角）：
$$J_z = \begin{pmatrix} 3/2 & 0 & 0 & 0 \\ 0 & 1/2 & 0 & 0 \\ 0 & 0 & -1/2 & 0 \\ 0 & 0 & 0 & -3/2 \end{pmatrix}$$
$J_+$ 的系数要算 $\sqrt{j(j+1) - m(m+1)}$，其中 $j=3/2$，即 $\sqrt{3.75 - m(m+1)}$。$m=1/2 \to 3/2$：$\sqrt{3.75 - 0.75} = \sqrt{3}$；$m=-1/2 \to 1/2$：$\sqrt{3.75 - (-0.25)} = \sqrt{4} = 2$；$m=-3/2 \to -1/2$：$\sqrt{3.75 - 0.75} = \sqrt{3}$。所以：
$$J_+ = \begin{pmatrix} 0 & \sqrt{3} & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & \sqrt{3} \\ 0 & 0 & 0 & 0 \end{pmatrix}$$
再用 $J_x = \frac{1}{2}(J_+ + J_+^\dagger)$：
$$J_x = \frac{1}{2} \begin{pmatrix} 0 & \sqrt{3} & 0 & 0 \\ \sqrt{3} & 0 & 2 & 0 \\ 0 & 2 & 0 & \sqrt{3} \\ 0 & 0 & \sqrt{3} & 0 \end{pmatrix}$$
这是一个 $4 \times 4$ 的幺正矩阵。旋转 $2\pi$ 时，因为对角元是半整数，它会变成 **$-I_{4\times 4}$**。所以 $j=3/2$ 同样是 SU(2) 的忠实表示、SO(3) 的射影表示——还是那个半整数印记，只不过这回是四个分量。

至此，我们从对称性与群论的视角，把自旋的本质完完整整讲了一遍。注意我们这回**没**用上的东西：相对论修正，第（二）篇的发动机。但反过来也得留意，现在另一头缺了点什么。第（二）篇从狄拉克方程出发，一步落到 4 分量波函数；而我们这里从空间旋转（SU(2)/SO(3)）出发，只捞回了 $j=1/2$ 的那个**二**分量旋量（Pauli 旋量）。另外两个分量去哪了？答案，又一次，是相对论。我们目前的对称性分析只放进了**空间**旋转，从没考虑洛伦兹变换（Boost）。只有把对称性群升级到完整的**洛伦兹群**，才能解释电子为什么必须是"左手"与"右手"两个 SU(2) 表示的直和（$2+2=4$），从而完美闭环，回到狄拉克方程的结构。

## 6. 洛伦兹群

要把自旋拿全，我们就得升级到**真正**的对称性群——**洛伦兹群** $SO(1,3)$，它既含旋转（Rotation），又含伪转动（Boost）。而当我们去找它的"基本表示"时，会发生一件真正怪异的事：代数结构从正中裂开了。

洛伦兹群的定义为：
$$\underbrace{\mathrm{O}(1,3) \equiv\left\{\Lambda \mid \Lambda \in \mathrm{GL}(4, \mathbb{R}), g_{\mu \nu} \Lambda^\mu{ }_\rho \Lambda^\nu{ }_\sigma=g_{\rho \sigma}\right\}}_{\operatorname{dim} \mathrm{O}(1,3)=6},\quad g=\operatorname{diag}(1,-1,-1,-1)$$
归根到底，它是保闵氏时空度规的线性变换群。从保度规条件 $\Lambda^{\mathrm{T}} g \Lambda=g \rightarrow g_{\mu \nu} \Lambda^\mu{ }_\rho \Lambda^\nu{ }_\sigma=g_{\rho \sigma}$，我们能挤出一条对分量 $\Lambda^0_0$ 的限制：
$$1=g_{\mu \nu} \Lambda_0^\mu \Lambda_0^\nu=\left(\Lambda_0^0\right)^2-\sum_i\left(\Lambda_0^i\right)^2 \Rightarrow\left(\Lambda_0^0\right)^2=1+\sum_i\left(\Lambda_0^i\right)^2 \geq 1$$
这就是说，洛伦兹变换必有 $\Lambda^0_0 \geq 1$ 或 $\Lambda^0_0 \leq -1$——群已经不连通了。由此可以把它切成两块流形：$O^+(1,3)$ 和 $O^-(1,3)$。前者称为**时向**（orthochronous）洛伦兹群；后者不含恒等元，所以根本不构成群，只是洛伦兹群的**反时向**（antichronous）分支。

保度规条件还能定下行列式的取值：
$$\left|\Lambda^{\mathrm{T}} g \Lambda\right|=|g| \Rightarrow|\Lambda|^2|g|=|g| \Rightarrow|\Lambda|^2=1 \text {, 即 }|\Lambda|= \pm 1 \text {. }$$
$|\Lambda|=1$ 的记作 $SO(1,3)$，称**固有**（proper）洛伦兹群；$|\Lambda|=-1$ 的则称**非固有**（improper）分支。把这两道切口合在一起，就把 $\mathrm{O}(1,3)$ 切成了四块连通流形——但实际中我们只需研究**固有保时**分支 $SO^+(1,3)$。原因在于，另外三块都能由两个确定的洛伦兹变换作用在 $SO^+(1,3)$ 上得到：时间反演 $\mathcal{T}=\mathcal{T}^{-1}=\operatorname{diag}(-1,1,1,1)$ 和宇称 $\mathcal{P}=\mathcal{P}^{-1}=\operatorname{diag}(1,-1,-1,-1)$。更何况，现实世界的参考系变换严格地保时向且固有。

我们就盯住**固有保时洛伦兹群** $SO^+(1,3)$。在这个连通分量里，任何变换都能写成单位元的指数映射。如同 $SO(3)$ 有 3 个转动生成元，$SO^+(1,3)$ 有 6 个自由度（3 个转动 + 3 个伪转动），对应 6 个生成元。取无穷小变换 $\Lambda \approx I - i\epsilon X$，照前面的套路，落出两组生成元：**转动生成元 $\vec{J} = (J_1, J_2, J_3)$**，对应空间转动（就是我们熟悉的角动量算符）；以及**伪转动（Boost）生成元 $\vec{K} = (K_1, K_2, K_3)$**，对应沿 $x, y, z$ 轴的速度变换。这 6 个生成元满足的**洛伦兹李代数** $\mathfrak{so}(1,3)$ 如下：

**纯转动是封闭的**（$SO(3)$ 子代数）：
$$[J_i, J_j] = i \epsilon_{ijk} J_k$$
**转动与 Boost 的关系**（Boost 算符本身像一个矢量那样旋转）：
$$[J_i, K_j] = i \epsilon_{ijk} K_k$$
**Boost 之间不封闭**（两个不同方向的 Boost 复合，不只是 Boost，还会冒出一个旋转，即 Thomas 进动；这里的负号是时空度规 $g=\text{diag}(1,-1,-1,-1)$ 的特征体现，它把这套代数和 $SO(4)$ 的区分开来）：
$$[K_i, K_j] = -i \epsilon_{ijk} J_k$$
到这一步，$J$ 和 $K$ 还缠在一起。为了找出不可约表示，我们做一个**非幺正的基底变换**（复化，Complexification），定义两组新算符 $\vec{N}^+$ 和 $\vec{N}^-$：
$$\vec{N}^+ = \frac{1}{2} (\vec{J} + i \vec{K}),\quad \vec{N}^- = \frac{1}{2} (\vec{J} - i \vec{K})$$
算一下这两组新算符的对易关系。先看 $\vec{N}^+$ 内部：
$$\begin{aligned} [N_i^+, N_j^+] &= \frac{1}{4} [J_i + iK_i, J_j + iK_j] \\ &= \frac{1}{4} \left( [J_i, J_j] + i[J_i, K_j] + i[K_i, J_j] - [K_i, K_j] \right) \\ &= \frac{1}{4} \left( i\epsilon_{ijk}J_k + i(i\epsilon_{ijk}K_k) + i(-i\epsilon_{ijk}K_k) - (-i\epsilon_{ijk}J_k) \right) \\ &= \frac{1}{4} \left( 2i\epsilon_{ijk}J_k - 2\epsilon_{ijk}K_k \right) \\ &= i\epsilon_{ijk} \frac{1}{2} (J_k + iK_k) = i\epsilon_{ijk} N_k^+ \end{aligned}$$
同样地，可以验证 $[N_i^-, N_j^-] = i\epsilon_{ijk} N_k^-$。而真正惊人的结果，在 $\vec{N}^+$ 与 $\vec{N}^-$ 之间：
$$[N_i^+, N_j^-] = \frac{1}{4} [J_i + iK_i, J_j - iK_j] = \dots = 0$$
它们对易。复化之后，洛伦兹群的李代数分裂成了两个彼此完全独立的 $\mathfrak{su}(2)$ 代数的直和：
$$\mathfrak{so}(1,3)_{\mathbb{C}} \cong \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R$$
这在群论上是一桩天大的简化。既然我们已经把 $\mathfrak{su}(2)$ 的表示摸得透透的（由自旋 $j$ 标记），那么洛伦兹群的不可约表示就能由**一对**半整数或整数 $(j_L, j_R)$ 唯一标记。按这种分解，最基本的旋量表示不再唯一，而是有了两种最基础的选择（基本表示）：让其中一个 $\mathfrak{su}(2)$ 取 $j=1/2$，另一个取 $j=0$。手性，正是在这里诞生的。

**左手外尔旋量**（Left-handed Weyl Spinor）对应标记 **$(1/2, 0)$**：对 $\vec{N}^-$ 表现为自旋 $1/2$，对 $\vec{N}^+$ 表现为标量。它是一个 2 分量复向量，记作 $\psi_L$。此表示下 $\vec{N}^- = \frac{1}{2}\vec{\sigma}$、$\vec{N}^+ = 0$，反解出物理生成元：
$$ \vec{J} = \vec{N}^+ + \vec{N}^- = \frac{1}{2}\vec{\sigma}, \quad \vec{K} = -i(\vec{N}^+ - \vec{N}^-) = i\frac{1}{2}\vec{\sigma}$$
**右手外尔旋量**（Right-handed Weyl Spinor）对应标记 **$(0, 1/2)$**：对 $\vec{N}^-$ 表现为标量，对 $\vec{N}^+$ 表现为自旋 $1/2$。它也是一个 2 分量复向量，记作 $\psi_R$。此表示下 $\vec{N}^- = 0$、$\vec{N}^+ = \frac{1}{2}\vec{\sigma}$，物理生成元为：
$$ \vec{J} = \frac{1}{2}\vec{\sigma}, \quad \vec{K} = -i\frac{1}{2}\vec{\sigma}$$
请死死盯住 $\vec{K}$ 的符号。它告诉我们：虽然 $\psi_L$ 和 $\psi_R$ 在空间旋转（$\vec{J}$）下行为**一模一样**——都是自旋 $1/2$——但在洛伦兹 Boost（$\vec{K}$）下，两者的变换性质截然相反。这个符号，就是"手性"全部的物理内容。

现在，我们终于能回答第（二）篇悬在那儿的问题了。既然 $\psi_L$ 和 $\psi_R$ 各自都是 2 分量的，电子凭什么需要 4 个分量？答案是**宇称（Parity，$\mathcal{P}$）**。宇称把空间坐标反演，$\vec{x} \to -\vec{x}$。$\vec{J}$ 是轴矢量（$\vec{r} \times \vec{p}$），在 $\mathcal{P}$ 下不变：$\vec{J} \to \vec{J}$；$\vec{K}$ 是极矢量（$\sim \vec{v}$），在 $\mathcal{P}$ 下变号：$\vec{K} \to -\vec{K}$。把这代入 $\vec{N}^\pm$ 的定义，会发现宇称**互换了这两个代数**：
$$\mathcal{P}: \vec{N}^+ \longleftrightarrow \vec{N}^-$$
也就是说，宇称把左手表示 $(1/2, 0)$ 变成了右手表示 $(0, 1/2)$。如果我们要描述一个像电子这样既有自旋又有质量、且在电磁力下遵守宇称守恒的粒子，就不能只挑一个。**我们必须把它们"直和"在一起。** 于是，**Dirac 旋量** $\Psi$，作为 $SO^+(1,3)$ 被宇称算符扩张后的表示，正是这两个基本表示的直和：
$$\Psi = \begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix} \in \left( \frac{1}{2}, 0 \right) \oplus \left( 0, \frac{1}{2} \right)$$
失踪的那两个分量，终于找回来了：**两个来自左手扇区，两个来自右手扇区，靠质量项和宇称变换紧紧拴在一起。** 我们先前用 $SU(2)$ 看到的 Pauli 旋量，不过是这个相对论性客体的一道**侧影**——它在静止系（非相对论极限）里投下的影子。第（二）篇打结搁下的那根线头，这下彻底系紧了。

顺带一提，这里的 Weyl 旋量和此前 gamma matrices 里提到的 $\gamma^5$ 关联极深。厄米算符 $\gamma^5 \equiv i \gamma^0 \gamma^1 \gamma^2 \gamma^3$ **正是那个用来"识别"和"定义" Weyl 旋量的算符**。没有 $\gamma^5$，我们在数学上就无从区分什么是"左手"、什么是"右手"。在 Dirac 理论中，$\gamma^5$ 被称为**手征算符**（Chirality Operator），它有一条至关重要的代数性质：**它与所有 $\gamma^\mu$ 反对易**（$\{\gamma^5, \gamma^\mu\} = 0$），却与洛伦兹变换的生成元 $S^{\mu\nu} = \frac{i}{4}[\gamma^\mu, \gamma^\nu]$ **对易**（$[\gamma^5, S^{\mu\nu}] = 0$）。这意味着 $\gamma^5$ 是洛伦兹群表示的一个守恒量（对无质量粒子而言），我们可以用它的本征值给旋量分类。右手 Weyl 旋量是 $\gamma^5$ 本征值为 **+1** 的态（$\gamma^5 \psi_R = +\psi_R$），左手 Weyl 旋量是本征值为 **−1** 的态（$\gamma^5 \psi_L = -\psi_L$）。所以，物理上说的"左手性"和"右手性"，在数学上不过是 **$\gamma^5$ 的本征值是 −1 还是 +1**。既然 Dirac 旋量 $\Psi$ 是左右手的混合体（直和），我们怎么从混杂的 $\Psi$ 里把某一手单独"筛"出来？这就要用到基于 $\gamma^5$ 的**投影算符**：
$$P_L = \frac{1 - \gamma^5}{2}, \quad P_R = \frac{1 + \gamma^5}{2}$$
这两个算符具有投影算符的标准性质（$P^2=P, P_L P_R = 0, P_L+P_R=1$），它们的活儿就是杀掉一手分量、只留另一手：
$$P_L \Psi = \frac{1 - \gamma^5}{2} (\psi_L + \psi_R) = \frac{1 - (-1)}{2}\psi_L + \frac{1 - 1}{2}\psi_R = \psi_L,\quad P_R \Psi = \psi_R$$
在粒子物理（尤其是弱相互作用）的计算里，你会一再撞见 $\frac{1-\gamma^5}{2}$ 这样的项，它就是在跟你说：*"这个相互作用只和左手旋量玩，右手旋量请靠边站。"*（这正是宇称不守恒的数学面孔。）为了让这层结构一眼看穿，我们可以挑一组特殊的 Gamma 矩阵形式，叫 **Weyl 表象（或手征表象）**。与前面的 Dirac 表示不同，在 Weyl 表象下 Gamma 矩阵是对角分块的，于是 Dirac 旋量显式地裂成上下两个 Weyl 旋量 $\Psi = (\psi_L, \psi_R)^T$——这是高能物理里最顺手的视角。反过来，在低能凝聚态物理里，我们常用 Dirac（标准）表象，那里 $\psi_L$ 和 $\psi_R$ 深度混合，更能体现"大分量"与"小分量"的非相对论近似。

## 7. 磁梯度力

数学的长途跋涉，我们走到这里。从狄拉克方程的推导，到洛伦兹群的表示，我们已经坐实了：电子**必然**带自旋，**就是**一个 4 分量的相对论性客体。现在，让我们走回这整个系列开头的那个悖论：如果洛伦兹力不做功，那磁铁吸钉子时，到底是**谁**在做功？要回答它，我们得把微观的自旋和宏观的力接起来。

对狄拉克方程取非相对论极限，我们自然地得到了泡利方程。重新审视那个仿佛凭空冒出的"塞曼项"（Zeeman term）：
$$H_{Zeeman} = - \frac{e\hbar}{2m} (\vec{\sigma} \cdot \vec{B})$$
经典物理里，我们用回磁比把磁矩 $\vec{\mu}$ 和角动量 $\vec{L}$ 联系起来。对轨道角动量：
$$\vec{\mu}_L = \frac{e}{2m} \vec{L}$$
若想用同一套逻辑去定义"自旋磁矩"，就得把自旋算符 $\vec{S}$ 和磁矩挂上钩。回顾第 5 节里自旋算符的定义：
$$\vec{S} = \frac{\hbar}{2} \vec{\sigma} \quad \Longrightarrow \quad \vec{\sigma} = \frac{2}{\hbar} \vec{S}$$
把 $\vec{\sigma}$ 代回塞曼项：
$$\begin{aligned} H_{Zeeman} &= - \frac{e\hbar}{2m} \left( \frac{2}{\hbar} \vec{S} \right) \cdot \vec{B}= - 2 \cdot \frac{e}{2m} \vec{S} \cdot \vec{B} \end{aligned}$$
把磁势能写成一般形式 $U = -\vec{\mu}_S \cdot \vec{B}$，对比上式，便读出电子的**自旋磁矩** $\vec{\mu}_S$：
$$\vec{\mu}_S = 2 \cdot \frac{e}{2m} \vec{S}$$
再写成通用的朗德因子（Landé g-factor）形式 $\vec{\mu} = g \frac{e}{2m} \vec{S}$，结论立刻浮现：
$$\boxed{g = 2}$$
这个 **$g=2$** 不是为了凑实验拧出来的参数，而是**狄拉克方程时空对称性的直接数学结果**。它意味着：**电子自旋产生磁矩的效率，是经典轨道运动的两倍。** 第（二）篇里我们靠打开一个场拿到的那个因子，如今从纯粹的对称性里再次挣了出来。

有了磁矩 $\vec{\mu}$，我们终于能点出做功的是谁。经典洛伦兹力 $\vec{F}_{Lorentz} = q(\vec{v} \times \vec{B})$ 确实不做功。但一个带内禀磁矩的物体，其动力学由势能 $U$ 主宰，而在哈密顿力学里，力是势能的负梯度：
$$\vec{F} = -\nabla U = -\nabla (-\vec{\mu} \cdot \vec{B}) = \nabla (\vec{\mu} \cdot \vec{B})$$
由于自旋 $\vec{\mu}$ 是内禀属性，在空间微分下保持常数，我们得到：
$$\vec{F}_{Gradient} = (\vec{\mu} \cdot \nabla) \vec{B}$$
**这**才是那个做功的力——**梯度力**（Gradient Force）。在均匀磁场（$\nabla \vec{B} = 0$）里它为零，只剩力矩。可现实中磁铁产生的磁场是**非均匀**的（磁感线发散），$\nabla \vec{B} \neq 0$。它是一个保守力，把磁场与磁矩耦合的**势能**转成物体的**动能**。所以，磁铁吸铁，本质上就是量子化的自旋磁矩，在非均匀磁场中被梯度力拽动。洛伦兹力负责偏转，梯度力负责做功。第（一）篇里那笔能量账，终于付清了——而且压根不是洛伦兹力付的。

所以真有**两种**磁力，而从对称性的角度看，它们对应着两套截然不同的机制——这已经蹭到了量子场论的边缘，在那里，相互作用是由对称性**规定**的：

- **洛伦兹力源于定域规范对称性（Local Gauge Symmetry）。** 电磁相互作用之所以存在，是为了守住波函数的 $U(1)$ 定域相位不变性 $\psi \to e^{i\alpha(x)}\psi$。为了补偿相位随位置的变化 $\partial_\mu \alpha(x)$，我们必须引入规范场 $A_\mu$ 和协变导数 $D_\mu = \partial_\mu - ieA_\mu$。由此产生的运动方程（洛伦兹力），本质上是在讲**规范场如何与流（Current）耦合**。这种几何约束逼着力必须垂直于四维速度，投影到三维空间就是 $\vec{v} \times \vec{B}$。它"不做功"的特性，是规范对称性几何结构的直接体现。

- **梯度力源于空间平移对称性的破缺（Broken Spatial Translational Symmetry）。** 由**诺特定理**（Noether's Theorem），力和功与时空对称性紧紧相连：**动量守恒** $\longleftrightarrow$ **空间平移对称性**。当电子处在**均匀磁场**中时，哈密顿量 $H = -\vec{\mu} \cdot \vec{B}$ 不显含位置 $\vec{r}$，系统有空间平移对称性，动量守恒（$\dot{\vec{p}} = -\partial H / \partial \vec{r} = 0$），没有净力。可当电子处在**非均匀磁场**（磁铁附近）中时，$\vec{B}(\vec{r})$ 依赖位置：$\frac{\partial H}{\partial \vec{r}} = -\vec{\mu} \cdot \frac{\partial \vec{B}}{\partial \vec{r}} \neq 0$。磁铁的存在，打破了空间的均匀性，正是这种**时空背景对称性的破缺**，逼着电子改变动量去响应能量梯度。所以，洛伦兹力是守护**内部**规范对称性付出的代价，而做功的梯度力，是**外部**时空对称性破缺的产物。

既然已经站到了量子场论的门口，有一句话不得不说：Dirac 的 $g=2$ 固然辉煌，却不是终极真理。在狄拉克方程里，我们把电子当成一个经典的场去与电磁场耦合。但在完整的量子电动力学（QED）中，真空不是空的。电子在传播途中不停地发射、吸收虚光子（Virtual Photons），甚至生出正负电子对。这意味着电子与磁场相互作用的顶点（Vertex），不再是一个干净的点（Tree level），而是裹着无穷多的圈图修正（Loop corrections）。朱利安·施温格（Julian Schwinger）在 1948 年算出了第一阶（单圈）修正，给出那个著名的公式：
$$g = 2 \left( 1 + \frac{\alpha}{2\pi} + \mathcal{O}(\alpha^2) \right)$$
其中 $\alpha \approx 1/137$ 是精细结构常数。这把 $g$ 的理论值推到 $g \approx 2.002319...$，与实验测量惊人地吻合（精确到小数点后 12 位）。这个微小的偏差（反常磁矩，Anomalous magnetic moment）不仅证实了 $g=2$ 的相对论起源，更掀开了磁性背后更深一层的物理：当我们感到磁铁那一吸时，我们见证的不只是时空的几何属性（自旋），更是把手伸进了真空中那片虚粒子沸腾的海洋。

## 这把我们带到了哪里

于是，环闭合了。电子是个旋量，不是因为某个场把它变成了旋量，而是因为旋转空间——以及 Boost 时空——根本不给它别的选择。半整数表示在普通空间里无处安身，只能蜷进粒子**内部**；宇称随后又把左右手逼到一起；而狄拉克方程当初索要的那四个分量，原来从头到尾就是 $(1/2,0)\oplus(0,1/2)$。冰箱贴的那一吸，是梯度力作用在这一切所蕴含的、量子化的磁矩上，而 $g=2$ 早已写进时空本身的几何里。

可你握过的每一块磁铁，都装着大约 $10^{23}$ 个这样的小自旋，而我们至今只研究了**一个**。它们为什么会排齐？单个电子的磁矩弱得可怜，一块冰箱贴却不弱。从一个自旋到一大群彼此协作的自旋，是一个关于**多体**的故事——海森堡模型、伊辛模型，以及那场令人咋舌的自发对称破缺：它竟把你冰箱上那块铁，和赋予粒子质量的希格斯机制连到了一起。这是第（四）篇。**未完待续。**
