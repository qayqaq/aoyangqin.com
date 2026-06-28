---
title: "A Journey Through Classical Mechanics (Part 1): Potentials, Forms, and the Birth of the Action"
date: "2026-01-04"
lang: "en"
translationKey: "classical-mechanics-1"
tags: ["physics", "classical-mechanics"]
category: "Classical Mechanics Series"
summary: "Newton hands us forces; we will hand them back as a single number attached to a path. Part 1 builds the foundations — potential and force, differential forms and Stokes, and the least-action principle that quietly reorganizes all of mechanics."
---

> This is Part 1 of a four-part journey. The plan: **Part 1 (this one)** lays the mathematical and physical foundations — how force grows out of a potential, how differential forms turn the integral theorems of vector calculus into one line, and how the principle of least action reorganizes everything. **Part 2:** symmetry — Noether's theorem, how symmetry alone can *write* the action, and the road from relativity to the electromagnetic coupling. **Part 3:** the Hamiltonian world — symplectic geometry, Poisson brackets, canonical transformations, and Hamilton–Jacobi theory. **Part 4:** order and chaos — invariant tori, the KAM theorem, the bridge from dynamics to statistical mechanics, and a final look at the geometric unity of physics.

Let me start with a confession about how mechanics is usually taught. We are handed $\vec{F} = m\vec{a}$, told it is the law, and sent off to solve it. It works. But it hides something. The deeper structure of classical mechanics is not really about forces pushing things around — it is about a single number, the *action*, attached to an entire history of the system, and the demand that this number be stationary. Getting from one picture to the other is the whole story of this series. Before we can tell it, though, we have to assemble some tools. So this first part is foundations: where force comes from, the language of differential forms, and the variational idea that ties it all together.

## 1. Basic Mathematics and Physics

### 1.1 Potential energy and force

Where does force come from? In the cases that matter most, it comes from a potential. We define force as minus the gradient of the potential energy, and Newton's second law then reads
$$\frac{d \vec{p}}{d t}=\vec{F}=-\frac{\partial V}{\partial \vec{x}}$$
together with the definition of momentum,
$$\frac{\vec{p}}{m}=\frac{d \vec{x}}{d t}.$$
Now watch what happens if we take these two relations as our starting point. We can build a single quantity out of them,
$$H(\vec{x}, \vec{p})=\frac{\vec{p}^2}{2 m}+V(\vec{x}),$$
which for now we can simply call the total energy, treating $\vec{x}$ and $\vec{p}$ as *independent* variables. The two equations above then collapse into a strikingly symmetric pair,
$$\frac{d \vec{p}}{d t}=-\frac{\partial H}{\partial \vec{x}}, \quad \frac{d \vec{x}}{d t}=\frac{\partial H}{\partial \vec{p}},$$
and from these it follows immediately that $\frac{d H}{d t}=0$. In other words, $H$ is conserved — and conversely, demanding that this one quantity be conserved is enough to reproduce the two equations we started from. The single function $H$ has quietly absorbed all of the dynamics.

Nothing forces us to stop at one particle. For a system of many,
$$H=\sum_i \frac{\overrightarrow{p}_i^2}{2 m_i}+V\left(\vec{x}_1, \vec{x}_2, \cdots, \vec{x}_N\right),$$
each particle obeys $\frac{d \vec{p}_i}{d t}=-\frac{\partial H}{\partial \vec{x}_i}, \frac{d \overrightarrow{x_i}}{d t}=\frac{\partial H}{\partial \vec{p}_i}$.

So we already have a recipe — a small, reusable algorithm for attacking any classical system:
- find the fundamental dynamical variables;
- write down the Hamiltonian;
- write down Hamilton's canonical equations.

The old habit was to draw $V(x)$ as a curve and lay a horizontal line across it for the total energy. Since the kinetic energy cannot be negative, the particle is confined to the regions where $V(x)$ sits below that line. A dip in $V(x)$ traps the particle, which rattles back and forth inside it — bound motion, a bound orbit; otherwise we call it scattering.

But once we commit to treating $\vec{x}$ and $\vec{p}$ as independent, a better picture opens up. We can draw the system's trajectory in $(x,p)$ space — the **phase space**. Different total energies trace different orbits there, and we can ask for the period of motion at a given energy:
$$T(E)=\oint_E d t=\oint_E \frac{m}{p} d x=\oint_E \frac{m}{\sqrt{2 m\left(E-V(x)\right)}} d x.$$
Introduce the area enclosed in phase space,
$$2 \pi I(E)=\oint_E p d x=\oint_E \sqrt{2 m(E-V(x))} d x,$$
and a small miracle of bookkeeping appears:
$$\frac{\partial I(E)}{\partial E}=\frac{1}{2 \pi} \oint_E \frac{\partial}{\partial E} \sqrt{2 m(E-V(x))} d x=\frac{T(E)}{2 \pi}.$$
Written as an angular frequency this is $\frac{\partial E}{\partial I}=\omega(I)$, a result that will turn out to survive all the way into integrable systems in Part 4.

Here is where it gets interesting. Tie this to Bohr's old quantization idea. If we suppose $E_n-E_{n-1}=\hbar \omega$, then as $n \to \infty$ this becomes $\frac{\partial E_n}{\partial n}=\hbar \omega$, and combined with the result just above we have effectively recovered the old-quantum-theory **Bohr–Sommerfeld quantization condition** $I=n\hbar$. The phase-space area is quantized in units of $\hbar$ — a hint, this early, that the classical and quantum worlds are speaking the same language.

> **Example (one-dimensional harmonic oscillator).** With $V(x)=\frac{1}{2} k x^2=\frac{1}{2} m \omega^2 x^2$ the orbit is $\frac{p^2}{2 m}+\frac{1}{2} m w^2 x^2=E$, an ellipse whose enclosed area is $2 \pi E / \omega=2 \pi I$, so that $E=I\omega=n\hbar\omega$.

### 1.2 Differential forms, the exterior derivative, and Stokes' formula

The force we just defined, the gradient of a potential, captures something deep about the fundamental interactions of nature: any mechanical system built on such a force is automatically a Hamiltonian system. But not every force in daily life is of this kind — friction, for one, is not. A force defined as $-\partial V/\partial \vec{x}$ is called *conservative*; friction is *non-conservative*. To pin down exactly what makes a force conservative, we need a piece of mathematics: differential forms.

Start by upgrading our understanding of how multivariable integrals change under a change of variables. Define the **wedge product** by $d x \wedge d y=-d y \wedge d x, d x \wedge d x=0$. Then
$$d x \wedge d y=\left(\frac{\partial x}{\partial x^{\prime}} d x^{\prime}+\frac{\partial x}{\partial y^{\prime}} d y^{\prime}\right) \wedge\left(\frac{\partial y}{\partial x^{\prime}} d x^{\prime}+\frac{\partial y}{\partial y^{\prime}} d y^{\prime}\right)=\left(\frac{\partial x}{\partial x^{\prime}} \frac{\partial y}{\partial y^{\prime}}-\frac{\partial x}{\partial y^{\prime}} \frac{\partial y}{\partial x^{\prime}}\right) d x^{\prime} \wedge d y^{\prime}=\left|\frac{\partial(x, y)}{\partial\left(x^{\prime}, y^{\prime}\right)}\right| d x^{\prime} \wedge d y^{\prime}.$$
That Jacobian determinant is exactly the change-of-variables factor — it falls out of the antisymmetry for free, which is the first sign we are onto something.

On this footing we define an **$n$-form**: $\omega=f\left(x^{\prime}, x^2, \ldots x^n\right) d x^{\prime} \wedge d x^2 \wedge \ldots \wedge d x^n$. Very naturally, the $n$-fold integral of an $n$-variable function is just the integral of an $n$-form, $\iint\cdots\int f\left(x^1 \cdots x^n\right) d x^1 \cdots d x^n:=\int d \omega$. We can push further and define, for $n$ variables, a **$k$-form**:
$$\alpha = \frac{1}{k!} \alpha_{i_1, i_2 \dots i_k} dx^{i_1} \wedge dx^{i_2} \wedge \dots \wedge dx^{i_k},$$
using the Einstein summation convention. A $k$-form is really a linear combination, and the $\alpha_{i_1, i_2 \dots i_k}$ are its components. Now, since we are summing, and since swapping the order of a wedge product flips the sign, the components can be taken to be antisymmetric in any two indices — totally antisymmetric. To see why, note that any $\alpha_{ij}$ splits into two pieces: a **symmetric part** $S_{ij} = \frac{1}{2}(\alpha_{ij} + \alpha_{ji})$, with $S_{ij} = S_{ji}$, and an **antisymmetric part** $A_{ij} = \frac{1}{2}(\alpha_{ij} - \alpha_{ji})$, with $A_{ij} = -A_{ji}$. When we compute $\alpha = \frac{1}{2} \alpha_{ij} dx^i \wedge dx^j$, what actually happens is
$$\alpha = \frac{1}{2} (S_{ij} + A_{ij}) dx^i \wedge dx^j = \underbrace{\frac{1}{2} S_{ij} dx^i \wedge dx^j}_{\text{symmetric} \times \text{antisymmetric}} + \underbrace{\frac{1}{2} A_{ij} dx^i \wedge dx^j}_{\text{antisymmetric} \times \text{antisymmetric}}.$$
The first term cancels itself out in the sum; only the second survives. So only the antisymmetric part contributes to a $k$-form, and we may as well take the components $\alpha_{i_1 \dots i_k}$ to be **totally antisymmetric**. When $k>n$ some index must repeat, so the $k$-form is just $0$. And the factor $1/k!$ is there because the sum overcounts: when $k=n$, total antisymmetry means half the components are equal and half are negatives of each other, but the sign-flip of the wedge product compensates exactly, so each distinct term is counted $n!$ times.

Some three-dimensional examples make this concrete:
- 0-form: $f(x,y,z)$.
- 3-form: $f(x, y, z) d x \wedge d y \wedge d z$.
- 1-form: $a_1 d x+a_2 d y+a_3 d z=\vec{a}(\vec{x}) \cdot d \vec{x}$.
- 2-form: $a_{12} d x \wedge d y+a_{23} d y \wedge d z+a_{21} d z \wedge d x=\frac{1}{2} a_{i j}(\vec{x}) d x^i \wedge d x^j \rightarrow b_1 d x+b_2 d y+b_3 d z$. In this correspondence we set $b_1=a_{23}, b_2=a_{31}, b_3=a_{12}$, with $d x \wedge d y \rightarrow d z, d y \wedge d z \rightarrow d x, d z \wedge d x \rightarrow d y$. And if we let $d \vec{S}=(d y \wedge d z, d z \wedge d x, d x \wedge d y)$ then $a=\vec{b} \cdot d \vec{S}$.

Notice that the correspondence between 0,3-forms and 1,2-forms generalizes to higher dimensions, setting up a one-to-one match between $k$-forms and $(n-k)$-forms. This is **Hodge duality** — keep it in your pocket; it is the reason a "curl" and a "rotation vector" can be the same object in three dimensions.

Now the payoff. For a 1-form in 2D, $a=a_x d x+a_y d y$, define the **exterior derivative** $d a=d a_x \wedge d x+d a_y \wedge d y$. Expanding,
$$da=\left(\partial_x a_x d x+\partial_y a_x d y\right) \wedge d x+\left(\partial_x a_y d x+\partial_y a_y d y\right) \wedge d y=\left(\partial_x a_y-\partial_y a_x\right) d x \wedge d y.$$
But the 2D Green's formula already tells us $\oint_{\partial D}\left(a_x d x+a_y d y\right)=\int_D\left(\partial_x a_y-\partial_y a_x\right) d x d y$. So we have $\int_{\partial D} a=\int_D d a$.

For a 1-form in 3D, $a=\vec{a} \cdot d \vec{x}=a_x d x+a_y d y+a_z d z$, the exterior derivative $d a=d a_x \wedge d x+d a_y \wedge d y+d a_z \wedge d z$ expands to
$$d a=\left(\partial_x a_y-\partial_y a_x\right) d x \wedge d y+\left(\partial_y a_z-\partial_z a_y\right) d y \wedge d z+\left(\partial_z a_x-\partial_x a_z\right) d z \wedge d x=(\nabla \times \mathbf{a}) \cdot d \mathbf{S}.$$
And the 3D Stokes formula $\oint_{\partial D} \mathbf{a} \cdot d \mathbf{x}=\int_D(\nabla \times \mathbf{a}) \cdot d \mathbf{S}$ gives us the very same statement $\int_{\partial D} a=\int_D d a$.

For a 2-form in 3D, $a=a_{12} d x \wedge d y+a_{23} d y \wedge d z+a_{31} d z \wedge d x$, the exterior derivative $d a=d a_{12} \wedge d x \wedge d y+d a_{23} \wedge d y \wedge d z+d a_{31} \wedge d z \wedge d x$ expands to
$$d a=\left(\partial_3 a_{12}+\partial_1 a_{23}+\partial_2 a_{31}\right) d x \wedge d y \wedge d z=(\nabla \cdot \mathbf{b}) d x \wedge d y \wedge d z,$$
and the 3D Gauss theorem $\oint_{\partial V} \mathbf{b} \cdot d \mathbf{S}=\int_V(\nabla \cdot \mathbf{b}) d V$ hands us, once more, $\int_{\partial D} a=\int_D d a$.

Three classical integral theorems — Green, Stokes, Gauss — and they are *the same theorem*. That is the whole point of this machinery. We can write it once and for all as a **generalized Stokes formula**:
$$\int_{\partial D} \alpha=\int_D d \alpha,$$
where $\alpha$ is a $(k-1)$-form and $D$ is a $k$-dimensional surface, so that $d\alpha$ is a $k$-form. Everything above is a special case.

Going further still, for an $(k-1)$-form in $n$ dimensions, $\alpha=\frac{1}{(k-1)!} \alpha_{i_1 i_2 \ldots i_{k-1}} d x^{i_1} \wedge d x^{i_2} \wedge \ldots \wedge d x^{i_{k-1}}$, the exterior derivative is
$$
d \alpha=\frac{1}{(k-1)!}\left(\partial_j \alpha_{i_1 i_2 \ldots i_{k-1}}\right) d x^j \wedge d x^{i_1} \wedge d x^{i_2} \wedge \ldots \wedge d x^{i_{k-1}}.
$$
And it has a remarkable property: $d^2\alpha=0$. The reason is exactly the symmetric/antisymmetric argument from before — two partial derivatives commute, forming a symmetric pair, which the wedge product then annihilates in the sum.

This gives us two pieces of vocabulary. If $d\alpha=0$ we call $\alpha$ **closed**. If $\alpha=d\beta$ we call $\alpha$ **exact**. Since $d^2=0$, every exact form is automatically closed.

Now we can say precisely what a conservative force is. Its defining property is $\sum_i \mathbf{F}_i \cdot d \mathbf{x}_i=-d V$, which we write as a **force 1-form**, $F_\mu d x^\mu=-d V\left(x^1, \ldots, x^{3 N}\right)$, abbreviated $F=-dV$. This is manifestly an exact form, hence also closed, $dF=0$, with $V$ the potential 0-form. Concretely,
$$d F=\left(\partial_\mu F_\nu\right) d x^\mu \wedge d x^\nu=\left[\frac{1}{2}\left(\partial_\mu F_\nu-\partial_\nu F_\mu\right)+\frac{1}{2}\left(\partial_\mu F_\nu+\partial_\nu F_\mu\right)\right] d x^\mu \wedge d x^\nu=\frac{1}{2}\left(\partial_\mu F_\nu - \partial_\nu F_\mu\right) d x^\mu \wedge d x^\nu=0,$$
so that $\partial_\mu F_\nu-\partial_\nu F_\mu=0$, i.e. $\nabla \times \vec{F}=0$. In other words: a conservative force is irrotational. And $\int_{\partial D} F=\int_D d F=0$ says that the work done around any closed loop is zero. The geometry and the physics are the same fact, viewed twice.

## 2. The Principle of Least Action

We now have the local picture firmly in hand — Hamilton's equations tell a particle, instant by instant, which way to step. But there is a second way to see all of mechanics, and it could hardly be more different in spirit. Instead of an ant crawling along the path one step at a time, we stand back and look at the *whole* path at once, assign it a single number, and ask which path makes that number stationary. This is the principle of least action, and it is the organizing idea for everything that follows.

### 2.1 The local and the global view

Hamilton's canonical equations, $\frac{d \vec{p}}{d t}=-\frac{\partial H}{\partial \vec{x}}, \frac{d \vec{x}}{d t}=\frac{\partial H}{\partial \vec{p}}$, are an ant's-eye view: local, step-by-step. The global view assigns to an entire path an **action**,
$$S[\mathbf{x}(t), \mathbf{p}(t)]=\int[\mathbf{p} \cdot \dot{\mathbf{x}}-H(\mathbf{x}, \mathbf{p})] d t,$$
where — and this is the key point — the phase-space path is *arbitrary* and need not satisfy Hamilton's equations at all. (The same two-views dichotomy reappears in quantum mechanics, as the operator description versus the path-integral description. We are seeing an old friend young.)

### 2.2 From Fermat's principle to the variational method

Where does the least-action principle come from? Historically, from generalizing Fermat's principle in optics. Given a start and an end, light takes the path of least *time*,
$$t=\int \frac{d l}{v}=\frac{1}{c} \int n(\vec{x})|d \vec{x}|.$$
Define the **optical path** $S=\int n(\vec{x})|d \vec{x}|$. In a two-dimensional plane this becomes $S=\int n(y) \sqrt{(d x)^2+(d y)^2}=\int n(y) \sqrt{1+y^{\prime}(x)^2} d x$, with fixed endpoints $y_a=y(a),y_b=y(b)$. Abstract the problem: write $L(y,y')=n(y) \sqrt{1+y^{\prime}(x)^2}$, so that $S[y(x)]=\int dx L(y,y')$. This $S$ is a **functional** — a number that depends on an entire function.

How do we extremize a functional? Here is the honest, low-tech way to think about it: pretend a functional is just a function of infinitely many discrete variables. For an ordinary function we would write $d S=S\left(y_1+d y_1, y_2+d y_2, \cdots\right)-S\left(y_1, y_2, \cdots\right)=\sum_i \frac{\partial S}{\partial y_i} d y_i=0$. Rewrite it indexing by $x$, $d S\left[y_x\right]=S\left[y_x+d y_x\right]-S\left[y_x\right]=\sum_x \frac{\partial S}{\partial y_x} d y_x$, and then promote the sum to an integral,
$$\delta S[y(x)]=S[y(x)+\delta y(x)]-S[y(x)]=\int dx \frac{\delta S}{\delta y(x)}\delta y(x).$$
The object in the middle is the **functional derivative** $\frac{\delta S}{\delta y(x)}$. A quick sanity check: from $\delta y(x)=\int d x^{\prime} \delta\left(x-x^{\prime}\right) \delta y\left(x^{\prime}\right)$ we read off $\frac{d y(x)}{\delta y\left(x^{\prime}\right)}=\delta\left(x-x^{\prime}\right)$.

Now compute the extremum of $S[y(x)]=\int dx L(y,y')$ with $\delta y(a)=\delta y(b)=0$. First,
$$\begin{aligned} \delta L\left(y, y^{\prime}\right) & =L\left(y+\delta y, y^{\prime}+\delta y^{\prime}\right)-L\left(y, y^{\prime}\right) \\ & =\frac{\partial L}{\partial y} \delta y+\frac{\partial L}{\partial y^{\prime}} \delta y^{\prime}=\frac{\partial L}{\partial y} \delta y+\frac{\partial L}{\partial y^{\prime}}(\delta y)^{\prime}.\end{aligned}$$
Using $\delta d x=d \delta x=\delta x=0$ and $\delta L(x, \dot{x})=\frac{\partial L}{\partial x} \delta x+\frac{\partial L}{\partial \dot{x}} \delta \dot{x}$, and integrating by parts,
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
The boundary term dies because $\delta y$ vanishes at the endpoints, and since $\delta y$ is otherwise arbitrary, the bracket itself must vanish. The functional derivative is
$$
\frac{d S}{\delta y(x)}=\frac{\partial L}{\partial y}-\frac{d}{d x}\left(\frac{\partial L}{\partial y^{\prime}}\right)=0,
$$
the **Euler–Lagrange equation**.

> **Example.** Back to the light ray, with $\mathcal{L}\left(y \cdot y^{\prime}\right)=n(y) \sqrt{1+\left(y^{\prime}\right)^2}$, the Euler–Lagrange equation gives
> $$
> \begin{aligned}
> \frac{d n}{d y} \sqrt{1+\left(y^{\prime}\right)^2}-\frac{d}{d x}\left(n(y) \frac{y^{\prime}}{\sqrt{1+\left(y^{\prime}\right)^2}}\right)=0 \\
> \left(1+\left(y^{\prime}\right)^2\right) \frac{d n}{d y}-n(y) y^{\prime \prime}=0 \\
> \frac{d}{d x}\left(\frac{n(y)}{\sqrt{1+(y')^2}}\right)=0 \Leftrightarrow \frac{n(y)}{\sqrt{1+(y')^2}}=C.
> \end{aligned}
> $$

### 2.3 Least action in phase space

Now apply the same machinery to the phase-space action $S[\mathbf{x}(t), \mathbf{p}(t)]=\int[\mathbf{p} \cdot \dot{\mathbf{x}}-H(\mathbf{x}, \mathbf{p})] d t$. This is again an extremum problem, $S[\vec{x}(t), \vec{p}(t)]=\int_{t_i}^{t_f} d t L(\vec{x}, \vec{p}, \dot{\vec{x}})$, but with a twist: we cannot blindly apply Euler–Lagrange, because we cannot fix both endpoints of $(\vec{x}(t), \vec{p}(t))$. The right move is to clamp only the position, $\delta \vec{x}\left(t_i\right)=\delta \vec{x}\left(t_f\right)=0$, and let the momentum float free.
$$\begin{aligned} \delta S[\vec{x}(t), \vec{p}(t)] & =\int_{t_i}^{t_f}[\delta \vec{p} \cdot \dot{\vec{x}}+\vec{p} \cdot \delta \dot{\vec{x}}-\delta H(\vec{x}, \vec{p})] d t . \\ & =\int_{t_i}^{t_f}\left[\delta \vec{p} \cdot \dot{\vec{x}}+\frac{d}{d t}(\vec{p} \cdot \delta \vec{x})-\delta \vec{x} \cdot \dot{\vec{p}}-\delta H(\vec{x} \cdot \vec{p})\right] d t \\ & =\left.\vec{p} \cdot \delta \vec{x}\right|_{t_i} ^{t_f}+\int_{t_i}^{t_f}[\delta \vec{p}\cdot \dot{\vec{x}}-\delta \vec{x} \cdot \dot{\vec{p}}-\delta H(\vec{x} \cdot \vec{p})] d t \\ & =\int_{t_i}^{t_f}\left[\delta \vec{p} \cdot \vec{x}-\delta \vec{x} \cdot \dot{\vec{p}}-\frac{\partial H}{\partial \vec{x}} \cdot \delta \vec{x}-\frac{\partial H}{\partial \vec{p}} \cdot \delta \vec{p}\right] d t \\ & =\int_{t_i}^{t_f}\left[\left(\dot{\vec{x}}-\frac{\partial H}{\partial \vec{p}}\right) \cdot \delta \vec{p}-\left(\dot{\vec{p}}+\frac{\partial H}{\partial \vec{x}}\right) \cdot \delta \vec{x}\right] d t=0 .\end{aligned}$$
What we have derived, simply by demanding stationarity, is Hamilton's canonical equations — the two pictures are equivalent:
$$\frac{\delta S}{\delta \vec{p}(t)}=\dot{\vec{x}}-\frac{\partial H}{\partial \vec{p}}=0 . \quad \frac{\delta S}{\delta \vec{x}(t)}=-\left(\dot{\vec{p}}+\frac{\partial H}{\partial \vec{x}}\right)=0.$$
And note: for a *general* Hamiltonian system there is no need to assume $p=m\dot{x}$. The genuine relation is the first equation, $\dot{x}=\frac{\partial H}{\partial p}$. We will lean on this freedom shortly.

The many-particle case is identical: $S[x(t),p(t)]=\int_{t_i}^{t_f} \operatorname{dt}\left[p_\mu \dot{x}^\mu-H(x, p)\right]$, with canonical equations $\dot{x}^\mu=\frac{\partial H}{\partial p_\mu}, \dot{p}_\mu=-\frac{\partial H}{\partial x^\mu}$.

There is a practical reason to want yet another reformulation. The action depends on the Hamiltonian, which is sometimes painfully hard to write down. So next we convert from phase space to coordinate space — where, as we will see in Part 2, we can often *guess* the action straight from symmetry. That is the thread to remember: **symmetry constrains the action.**

### 2.4 Least action in coordinate space

The least-action principle people usually quote lives in coordinate space, and it can be derived from the phase-space version. The motivation is a trick from ordinary calculus. To extremize a function of two variables we normally solve $\frac{\partial S}{\partial x}=0, \frac{\partial S}{\partial y}=0$ together. But equivalently, we can solve $\frac{\partial S}{\partial y}=0$ first for $y=\phi(x)$, substitute back to get $S(x,\phi(x))$, and then differentiate, $\frac{d S}{d x}=\frac{\partial S}{\partial x}+\frac{\partial S}{\partial y} \frac{\partial \phi}{\partial x}=0$. Eliminate one variable early, in other words.

Apply this to the action $S[\mathbf{x}(t), \mathbf{p}(t)]$. The straightforward route solves $\frac{\delta S}{\delta x(t)}=0, \frac{\partial S}{\delta p(t)}=0$. The equivalent route solves $\frac{\delta S}{\delta \vec{p}(t)}=\dot{x}-\frac{\partial H}{\partial \vec{p}}=0$ first, obtaining $\vec{p}(t)=\phi(\vec{x}(t)) \Rightarrow S[\vec{x}(t), \phi(\vec{x}(t))]$, which we abbreviate $S[\vec{x}(t)]$. Recall the integrand of the phase-space action, $L(\mathbf{x}, \mathbf{p}, \dot{\mathbf{x}})=\mathbf{p} \cdot \dot{\mathbf{x}}-H(\mathbf{x}, \mathbf{p})$. Solving $\frac{\delta S}{\delta \vec{p}(t)}=\dot{x}-\frac{\partial H}{\partial \vec{p}}=0$ is exactly extremizing $L$ over $p$. So define a new function
$$L(\mathbf{x}, \dot{\mathbf{x}})=\operatorname{extrem}_{\mathbf{p}} L(\mathbf{x}, \mathbf{p}, \dot{\mathbf{x}})=\operatorname{extrem}_{\mathbf{p}}[\mathbf{p} \cdot \dot{\mathbf{x}}-H(\mathbf{x}, \mathbf{p})],$$
and the coordinate-space action is simply $S[\mathbf{x}(t)]=\int_{t_i}^{t_f} L(\mathbf{x}, \dot{\mathbf{x}}) d t$, with $L(\mathbf{x}, \dot{\mathbf{x}})$ now called the **Lagrangian**. Least action in coordinate space and least action in phase space are one and the same.

Of course, coordinate-space least action is handled by the Euler–Lagrange equation we already derived:
$$
\frac{\partial L}{\partial \mathbf{x}}-\frac{d}{d t}\left(\frac{\partial L}{\partial \dot{\mathbf{x}}}\right)=0,
$$
also called the **Lagrange equation**.

The Lagrangian $L(\mathbf{x}, \dot{\mathbf{x}})$ and the Hamiltonian $H(\mathbf{x}, \mathbf{p})$ are tied together by the **Legendre transformation**:
$$\begin{aligned}\operatorname{extrem}_{\dot{\mathbf{x}}}[\mathbf{p} \cdot \dot{\mathbf{x}}-L(\mathbf{x}, \dot{\mathbf{x}})]=H(\mathbf{x}, \mathbf{p}) \\ \operatorname{extrem}_{\mathbf{p}}[\mathbf{p} \cdot \dot{\mathbf{x}}-H(\mathbf{x}, \mathbf{p})] = L(\mathbf{x}, \dot{\mathbf{x}}) \end{aligned}$$
with the proof a short chain of extremizations:
$$\begin{aligned} & \operatorname{extrem}_{\dot{\mathbf{x}}}[\mathbf{p} \cdot \dot{\mathbf{x}}-L(\mathbf{x}, \dot{\mathbf{x}})] \\ = & \operatorname{extrem}_{\dot{\mathbf{x}}}\left[\mathbf{p} \cdot \dot{\mathbf{x}}-\operatorname{extrem}_{\mathbf{p}^{\prime}}\left[\mathbf{p}^{\prime} \cdot \dot{\mathbf{x}}-H\left(\mathbf{x}, \mathbf{p}^{\prime}\right)\right]\right] \\ = & \operatorname{extrem}_{\dot{\mathbf{x}}} \operatorname{extrem}_{\mathbf{p}^{\prime}}\left[\left(\mathbf{p}-\mathbf{p}^{\prime}\right) \cdot \dot{\mathbf{x}}+H\left(\mathbf{x}, \mathbf{p}^{\prime}\right)\right] \\ = & \operatorname{extrem}_{\mathbf{p}^{\prime}, \dot{\mathbf{x}}}\left[\left(\mathbf{p}-\mathbf{p}^{\prime}\right) \cdot \dot{\mathbf{x}}+H\left(\mathbf{x}, \mathbf{p}^{\prime}\right)\right] \\ = & H(\mathbf{x}, \mathbf{p}) .\end{aligned}$$

> **Example (single particle).** With $H(\mathbf{x}, \mathbf{p})=\frac{\mathbf{p}^2}{2 m}+V(\mathbf{x})$, Hamilton's equations give $\mathbf{p}=m \dot{\mathbf{x}}$, and the Legendre transform yields the Lagrangian $L(\mathbf{x}, \dot{\mathbf{x}})=\operatorname{extrem}_{\mathbf{p}}\left[\mathbf{p} \cdot \dot{\mathbf{x}}-\frac{\mathbf{p}^2}{2 m}-V(\mathbf{x})\right]=\frac{1}{2} m \dot{\mathbf{x}}^2-V(\mathbf{x})$ — kinetic minus potential energy, exactly as advertised, and the result generalizes to many particles. The coordinate-space action is $S[\mathbf{x}(t)]=\int_{t_i}^{t_f} d t\left[\frac{1}{2} m \dot{\mathbf{x}}^2-V(\mathbf{x})\right]$, and the Lagrange equation $m \frac{d^2 \mathbf{x}}{d t^2}=-\frac{\partial V}{\partial \mathbf{x}}$ is just Newton's law.

> **Example (Lorentz force).** The single-particle Lagrangian is quadratic in velocity. What if we add a term *linear* in velocity, $\vec{A} \cdot \dot{\vec{x}}$? If $\vec{A}$ were constant, its contribution would integrate to $\vec{A} \cdot\left(\vec{x}\left(t_f\right)-\vec{x}\left(t_i\right)\right)$, which is a fixed-endpoint boundary term and vanishes under variation — no effect on the motion. So $\vec{A}$ must depend on $\vec{x}$ to matter:
> $$L=\frac{1}{2} m \dot{\mathbf{x}}^2+\mathbf{A}(\mathbf{x}) \cdot \dot{\mathbf{x}}-V(\mathbf{x}).$$

The action becomes
$$
\begin{aligned}
S[\mathbf{x}(t)] & =\int_{t_i}^{t_f} d t\left[\frac{1}{2} m \dot{\mathbf{x}}^2+\mathbf{A}(\mathbf{x}) \cdot \dot{\mathbf{x}}-V(\mathbf{x})\right] \\
& =\int_{t_i}^{t_f} d t\left[\frac{1}{2} m \dot{\mathbf{x}}^2-V(\mathbf{x})\right]+\int A_j(\mathbf{x}) \cdot d x^j.
\end{aligned}
$$
Using $\delta t=\delta d t=d \delta t=0$, vary the action:
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
The last line introduced $F_{ij}=\partial_i A_j-\partial_j A_i$. The result is
$$\begin{aligned}\frac{\partial S}{\partial x^{(i)}(t)} & = -\left[m \ddot{\vec{x}_i}+\partial_i V(\vec{x})-F_{i j} \dot{x}^j\right]=0 \\ \Rightarrow m \ddot{x}_i & = -\partial_i V(\vec{x})+F_{i j} \dot{x}^j .\end{aligned}$$
Now look at what $F_{ij}$ is: $F_{x y}=\partial_x A_y-\partial_y A_x=(\nabla \times \vec{A})_z$, a component of the magnetic field $\vec{B}$. With the Levi-Civita symbol, $F_{ij}=\varepsilon_{ijk}B_k$, so
$$m \ddot{x}_i=-\partial_i V(\vec{x})+\varepsilon_{i j k} \dot{x}^j B^k,$$
which is $m \ddot{x}=-\nabla V+\dot{\vec{x}} \times \vec{B}$. That is already almost the Lorentz force; to get it exactly we just replace $\vec{A}$ by $q\vec{A}$, where $\vec{A}$ is the **vector potential**, $\vec{B}=\nabla \times \vec{A}$. So a single velocity-linear term, with an $\mathbf{x}$-dependent coefficient, conjures the entire magnetic force out of the variational principle. The correct Lagrangian for the Lorentz force is
$$L(\mathbf{x}, \dot{\mathbf{x}})=\frac{1}{2} m \dot{\mathbf{x}}^2+q \mathbf{A}(\mathbf{x}) \cdot \dot{\mathbf{x}}-V(\mathbf{x}).$$
Legendre-transform it. First the extremum,
$$
\frac{\partial}{\partial \dot{\mathbf{x}}}[\mathbf{p} \cdot \dot{\mathbf{x}}-L(\mathbf{x}, \dot{\mathbf{x}})]=0 \Leftrightarrow \mathbf{p}=\frac{\partial L}{\partial \dot{\mathbf{x}}}=m\dot{\mathbf{x}}+q\mathbf{A}.
$$
Here, at last, is a case where $\mathbf{p}\neq m\mathbf{\dot{x}}$. Instead $\dot{\mathbf{x}}=(\mathbf{p}-q \mathbf{A}) / m$, and the Hamiltonian is
$$H(\mathbf{x}, \mathbf{p})=\operatorname{extrem}_{\dot{\mathbf{x}}}[\mathbf{p} \cdot \dot{\mathbf{x}}-L(\mathbf{x}, \dot{\mathbf{x}})]=\frac{(\mathbf{p}-q \mathbf{A})^2}{2 m}+V(\mathbf{x}).$$
Notice how much *harder* this Hamiltonian is to guess than the Lagrangian was. That asymmetry — Lagrangians are guessable, Hamiltonians are derived — is itself a lesson, and one Part 2 will exploit.

A word of caution: the least-action principle is not omnipotent. It captures exactly the equations of motion of *conservative* classical systems, but it cannot natively describe non-conservative or dissipative ones, like friction. The reason is that the action is highly symmetric — mathematically, the second functional derivative is symmetric, e.g. invariant under swapping two time arguments — whereas a velocity-linear term in the equation of motion usually marks a definite *arrow of time*. Such equations can be forced into the Lagrangian framework only with an extra "Rayleigh dissipation function," but that is no longer a pure action principle.

> **Example.** For $\frac{\delta S}{\delta x(t)}=\dot{x}(t)$ we get $\frac{\delta^2 S}{\delta x\left(t^{\prime}\right) \delta x(t)}=\frac{\delta \dot{x}(t)}{\delta x\left(t^{\prime}\right)}=\frac{d}{d t}\left(\frac{\delta x(t)}{\delta x\left(t^{\prime}\right)}\right)=\frac{d}{d t} \delta\left(t-t^{\prime}\right)$. But swapping the time arguments flips the sign, so no action can produce this one-dimensional motion. Heat diffusion is the same story.

There is one more subtlety worth pausing on. The true path of a classical system is not necessarily a *minimum* of the action — usually it is just a stationary value, a saddle point. Deciding between minimum, maximum, or saddle requires the second functional derivative, which depends on *how* $\delta x$ deforms the path. Since $\delta x$ vanishes at $t_1$ and $t_2$, we can expand it in a sine series, $\delta x(t)=\varepsilon \sum_n a_n \sin \left(\omega_n\left(t-t_1\right)\right)$ with $\omega_n=\frac{n \pi}{t_2-t_1}$, so the true path corresponds to the infinite-dimensional vector $(a_1,a_2,\cdots)$ sitting at the origin. Different actions, and different choices of the $a_n$, then yield saddle points of different character.

> **Example.** Consider the one-dimensional harmonic oscillator $S=\int_{t_1}^{t_2} \frac{m}{2}\left(\dot{x}^2-\omega^2 x^2\right) d t$. The first variation vanishes; the second is $\delta^2 S=\int_{t_1}^{t_2} \frac{m}{2}\left[(\delta \dot{x})^2-\omega^2(\delta x)^2\right] d t$. With $\delta \dot{x}(t)=\varepsilon \sum_n a_n \omega_n \cos \left(\omega_n\left(t-t_1\right)\right)$ we get $\delta^2 S=\varepsilon^2 \frac{m}{4}\left(t_2-t_1\right) \sum_n a_n^2\left(\omega_n^2-\omega^2\right)$. So when $\omega_1>\omega$, i.e. $t_2-t_1<\frac{T}{2}$, the action is a genuine minimum; otherwise it is a saddle.

### 2.5 Generalized coordinates and generalized momentum

Everything so far used Cartesian coordinates for one or many particles. But the action description extends to *any* coordinates, and that flexibility is precisely what makes it powerful for a large class of constrained systems.

An **ideal constraint** is one whose constraint forces do no work on any motion consistent with the constraint — whether or not that motion actually occurs. So as long as the constraint is respected, the constraint forces contribute nothing to the system's energy, nothing to the Hamiltonian, and we can simply ignore them. That is exactly when the machinery of these two parts applies.

**Generalized coordinates** are the independent variables describing an ideal constrained system; the number of them is the number of **degrees of freedom**. Because these coordinates are mutually independent, so are their variations — so we can still derive Hamilton's or Lagrange's equations from least action.

Next we want the generalized momentum. In the phase-space action $S=\int d t\left[p_\mu \dot{x}^\mu-H(x, p)\right]=\int p_\mu d x^\mu-\int H d t$, the form of the equations of motion is governed mainly by the first term (the second is just the Hamiltonian). That first term has a name — the **symplectic potential** $\Theta=p_\mu dx^\mu,\mu=1,2,\cdots,3N$ — and we want it to keep its form under the change to generalized coordinates: $\Theta=p_\mu dx^\mu=p_adq^a,a=1,2,\cdots,s$. The difference is that the $\mu$ coordinates may not be independent, while the $a$ coordinates are; the $p_a$ satisfying this form *is* the generalized momentum, $p_a=p_\mu \frac{\partial x^\mu}{\partial q^a}$. The phase-space action becomes $S=\int d t\left[p_a \dot{q}^a-H(q, p)\right]$, and naturally we get the same-shaped canonical equations $\frac{d q^a}{d t}=\frac{\partial H}{\partial p_a}, \frac{d p_a}{d t}=-\frac{\partial H}{\partial q^a}$.

> **Example.** A single particle constrained to $x^2+y^2=R^2$, generalized coordinate $\theta$: with $x=R\cos\theta,y=R\sin\theta,\Theta=p_xdx+p_ydy=p_\theta d\theta$ we get $p_\theta=\left[-p_x \sin (\theta)+p_y \cos (\theta)\right] R$. Using the constraint $p_x \cos (\theta)+p_y \sin (\theta)=0$ gives $\mathbf{p}^2=p_\theta^2 / R^2$. So the Hamiltonian is $H=\frac{\mathbf{p}^2}{2 m}+V=\frac{p_\theta^2}{2 m R^2}+V(\theta)$, with canonical equations $\dot{\theta}=\frac{\partial H}{\partial p_\theta}=\frac{p_\theta}{m R^2},\dot{p}_\theta=-\frac{\partial H}{\partial \theta}=-\frac{\partial V}{\partial \theta}$.

We can also start from the Lagrangian instead of the action. Change coordinates directly to obtain $L(q,\dot{q})$, with action $S[q(t)]=\int d t L(q, \dot{q})$ and Lagrange equation $\frac{\partial L}{\partial q^a}-\frac{d}{d t}\left(\frac{\partial L}{\partial \dot{q}^a}\right)=0$. Then a Legendre transform gives the Hamiltonian $H(q, p)=\operatorname{extrem}_{\left\{\dot{q}^a\right\}}\left[p_b \dot{q}^b-L(q, \dot{q})\right]$, and to carry it out we compute $\frac{\partial}{\partial \dot{q}^a}\left[p_b \dot{q}^b-L(q, \dot{q})\right]=0 \Rightarrow p_a=\frac{\partial L}{\partial \dot{q}^a}$ — which serves as the definition of generalized momentum starting from the Lagrangian.

> **Example (double pendulum).** Two generalized coordinates $\theta_1,\theta_2$. This is a genuinely complicated system, and at large enough energy it goes chaotic — a foreshadowing of Part 4.
> $$
> \begin{aligned}
> T_1 & = \frac{1}{2} m_1 l_1^2 \dot{\theta}_1^2, \quad V_1=-m_1 g l_1 \cos \left(\theta_1\right) \\ x_2 & = l_1 \sin \left(\theta_1\right)+l_2 \sin \left(\theta_2\right), \quad y_2=l_1 \cos \left(\theta_1\right)+l_2 \cos \left(\theta_2\right) \\ T_2 & = \frac{1}{2} m_2\left(\dot{x}_2^2+\dot{y}_2^2\right)=\frac{1}{2} m_2\left(l_1^2 \dot{\theta}_1^2+l_2^2 \dot{\theta}_2^2+2 l_1 l_2 \cos \left(\theta_1-\theta_2\right) \dot{\theta}_1 \dot{\theta}_2\right) \\ V_2 & = -m_2 g y_2=-m_2 g\left(l_1 \cos \left(\theta_1\right)+l_2 \cos \left(\theta_2\right)\right) \\ L & = \frac{1}{2}\left(m_1+m_2\right) l_1^2 \dot{\theta}_1^2+\frac{1}{2} m_2 l_2^2 \dot{\theta}_2^2+m_2 l_1 l_2 \cos \left(\theta_1-\theta_2\right) \dot{\theta}_1 \dot{\theta}_2 \\ & +\left(m_1+m_2\right) g l_1 \cos \left(\theta_1\right)+m_2 g l_2 \cos \left(\theta_2\right) \\ \frac{\partial L}{\partial \theta_1} & -\frac{d}{d t}\left(\frac{\partial L}{\partial \dot{\theta}_1}\right)=0, \quad \frac{\partial L}{\partial \theta_2}-\frac{d}{d t}\left(\frac{\partial L}{\partial \dot{\theta}_2}\right)=0 \end{aligned}
> $$

### 2.6 A geometric understanding

Before moving to the next part, let us look again at the true nature of $q$ and $p$, this time geometrically. In elementary mechanics we treat them as ordinary real variables, but in the modern framework they live in entirely different geometric spaces.

- **Configuration manifold ($\mathcal{M}$).** The set of all possible positions of the system is not just a flat Euclidean space $\mathbb{R}^n$ but an $n$-dimensional **differentiable manifold** $\mathcal{M}$. A point confined to a sphere has configuration space $S^2$; a rigid body, which can rotate, has configuration space the manifold $SO(3)$. The generalized coordinates $q^a$ are really a **local chart** on this manifold — just as latitude and longitude label the Earth's surface, $q^a$ are only local mathematical labels.
- **Tangent bundle ($T\mathcal{M}$) — the stage of Lagrangian mechanics.** In Lagrangian mechanics the state is described by position and velocity $(q, \dot{q})$. Geometrically, the velocity vector $\dot{q}$ does not live on the manifold $\mathcal{M}$ but in the **tangent space** $T_q\mathcal{M}$ at the point $q$ (picture a plane laid tangent to the sphere; the velocity vector lies in that plane). Gathering up all the tangent spaces at all points forms the **tangent bundle** $T\mathcal{M}=\bigcup_{q \in \mathcal{M}} T_q \mathcal{M}$. So the Lagrangian $L(q, \dot{q})$ is a scalar function on the tangent bundle, $L: T\mathcal{M} \rightarrow \mathbb{R}$.
- **Cotangent bundle ($T^*\mathcal{M}$) — the stage of Hamiltonian mechanics.** The generalized momentum is $p_a = \frac{\partial L}{\partial \dot{q}^a}$. Here is a subtle but crucial geometric jump: when you differentiate with respect to a *vector* (the velocity $\dot{q}^a$), the result transforms not as a vector but as a **dual vector**, also called a covector or **1-form**. The momentum $p$ lives in the dual of the tangent space — the **cotangent space** $T^*_q\mathcal{M}$. Gathering these up forms the **cotangent bundle** $T^*\mathcal{M}$. This is why $p_a$ carries a lower (covariant) index while $q^a$ carries an upper (contravariant) one.
- **Natural pairing.** This perfectly explains the term $p_a \dot{q}^a$ in the action. It is *not* a dot product of two vectors (a dot product needs a metric $g_{ij}$); it is the **natural pairing** (contraction) between the covector $p$ and the vector $\dot{q}$, $\langle p, \dot{q} \rangle = p_a \dot{q}^a$. This pairing needs no metric and is a scalar under any coordinate change. It already tells us that the phase-space (symplectic) structure of Hamiltonian mechanics is *more fundamental* than the Lagrangian one — it does not depend on a metric.
- The Legendre transformation from Lagrangian to Hamiltonian mechanics is, geometrically, the map from the **tangent bundle** $T\mathcal{M}$ to the **cotangent bundle** $T^*\mathcal{M}$.

That last point is the one to carry forward. We have spent this part learning to *attach a number to a path* and to read off mechanics from how that number changes. In doing so, a striking pattern surfaced: the same velocity-linear term that produced the Lorentz force, the same $p \neq m\dot{x}$, the same insistence that the natural pairing needs no metric — all of it hints that the action is not something we compute *after* knowing the physics, but something we can *deduce* from the symmetries the physics must respect.

That is exactly the thread Part 2 picks up: Noether's theorem, and the remarkable claim that symmetry alone can write the action — all the way from relativistic invariance to the electromagnetic coupling we just stumbled into. *To be continued.*

