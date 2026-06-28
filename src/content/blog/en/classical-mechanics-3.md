---
title: "A Journey Through Classical Mechanics (Part 3): The Symplectic World"
date: "2026-01-18"
lang: "en"
translationKey: "classical-mechanics-3"
tags: ["physics", "classical-mechanics"]
category: "Classical Mechanics Series"
summary: "Strip mechanics down to its bones and what remains is a closed, non-degenerate 2-form on phase space. Part 3 is the geometry of that form — Poisson brackets as a Lie algebra, canonical transformations, Liouville and Poincaré, and the Hamilton–Jacobi equation that almost became quantum mechanics."
---

> Part 3 of four. [Part 2](/blog/classical-mechanics-2) showed that symmetry alone can dictate the action, and that the canonical momentum $\mathbf{p}=m\mathbf{v}+q\mathbf{A}$ is the natural object on the cotangent bundle — pointing us toward a geometry in which position and momentum stand on equal footing. This part *is* that geometry: the symplectic structure of phase space, and everything that grows out of it.

Here is the systematic theory of Hamiltonian mechanics — Poisson brackets, canonical transformations, the Hamilton–Jacobi equation — along with a handful of theorems that turn out to be different faces of one idea: Noether, Liouville, Poincaré recurrence. The throughline of the whole part is a single object, the **symplectic form**, and the claim that almost everything in mechanics is what you get when you take that form seriously.

## 4. Hamiltonian Mechanics

### 4.1 The symplectic structure

Recall the canonical equations in terms of the generalized (canonical) coordinates and momenta, $\dot{q}^a=\frac{\partial H}{\partial p_a}, \dot{p}_a=-\frac{\partial H}{\partial q^a},a=1,\dots,n$. Coordinates and momenta sit on a strikingly equal footing — except for one nagging minus sign. Where does that sign come from? From Part 1 we know it traces to the symplectic potential $\Theta=p_adq^a$, but in $\Theta$ the coordinates and momenta are manifestly *not* on equal footing. To level them, take the exterior derivative: $\omega=d\Theta=dp_a\wedge dq^a$, the **symplectic form**. This is a 2-form, exact and hence closed, and the minus sign in the equations is nothing but the sign flip of the wedge product. The symplectic form is a fundamental structure of phase space — and it is the hero of this part. A phase space equipped with $\omega$ is a phase space *with symplectic structure*.

We can write the variables more even-handedly: $\mathbf{x}=\left(x^1, x^2, \ldots x^{2 n}\right)^T=\left(q^1, \ldots, q^n, p_1, \ldots, p_n\right)^T$, denoted $x^i$, so that
$$
\begin{aligned}\omega=d p_a \wedge d q^a \equiv \frac{1}{2} \omega_{i j} d x^i \wedge d x^j,\quad J^{-1}=\left(\omega_{i j}\right)=\left(\begin{array}{cc}
0_{n \times n} & -1_{n \times n} \\
1_{n \times n} & 0_{n \times n}
\end{array}\right), \\ J=-J^{-1}=(\omega^{ij})=\left(\begin{array}{cc}
0_{n \times n} & 1_{n \times n} \\
-1_{n \times n} & 0_{n \times n}
\end{array}\right),\quad  \omega_{i j} \omega^{j k}=\delta_i^k, \quad \omega^{i j} \omega_{j k}=\delta_k^i \end{aligned}
$$
In this notation Hamilton's equations become beautifully compact:
$$\dot{x}^i=\omega^{i j} \partial_j H\quad \text{ or }\quad \dot{\mathbf{x}}=J \frac{\partial H}{\partial \mathbf{x}} .$$
A word on the name. "Symplectic," from the Greek for "to braid," describes a peculiar entanglement between $p$ and $q$: they must come in pairs, and $\omega$ measures the **oriented area** they sweep out in phase space, not a length. We should distinguish two levels: "symplectic geometry on a cotangent bundle" (what physicists usually use) and a "general symplectic manifold" (the mathematician's definition). The phase space of classical mechanics is almost always a **cotangent bundle** $T^*\mathcal{M}$: the **base** is the configuration space $\mathcal{M}$ (positions $q^a$), the **fiber** is the cotangent space (momenta $p_a$). Here the distinction between vectors ($q$) and dual vectors ($p$) is predefined, and the structure is called the **canonical symplectic structure**. The symplectic form $p_i dq^i$ actually descends from the **tautological 1-form**, written $\theta$.

The coordinate-free definition of the tautological form goes like this. A point $\alpha$ in phase space itself comes in two parts: $\alpha = (q, p)$, where $q$ is a position on the base manifold and $p$ is a momentum at that position (a 1-form, a cotangent vector). We want to define a 1-form $\theta_\alpha$ at this point. A 1-form "eats" a tangent vector $X$. Define it by
$$\theta_\alpha(X) = p(d\pi(X))$$
where $\pi$ is the projection (sending the phase-space vector $X$ down to the base as $v$). At the point $(q,p)$, the rule for $\theta$ is simply: use the very $p$ that the point already carries, and let it act on the projected vector. The vector $X$ has two directions of change — how much position changes ($\delta q$), how much momentum changes ($\delta p$): $X = \delta q^i \frac{\partial}{\partial q^i} + \delta p_i \frac{\partial}{\partial p_i}$. The projection $\pi$ maps the phase point $(q,p)$ back to the base point $q$; its differential $d\pi$ (the pushforward) maps a phase-space vector to a base vector. Because the projection sees only position, it throws away the $\delta p$ part outright: $d\pi(X) = \delta q^i \frac{\partial}{\partial q^i}$. And since $p$ is a cotangent vector (1-form), its coordinate form is $p = p_j dq^j$. So the final result is
$$
\begin{aligned}
\left(p_j d q^j\right)\left(\delta q^i \frac{\partial}{\partial q^i}\right) =p_j \cdot \delta q^i \cdot \underbrace{d q^j\left(\frac{\partial}{\partial q^i}\right)}_{\delta_i^j} =p_i \delta q^i.
\end{aligned}
$$
Clearly $dq^i(X) = \delta q^i$, so $\theta(X)=p_i d q^i(X)$, i.e. $\theta=p_idq^i$. Notice the definition of the tautological form contained no indices $i, j, k$ at all. That means no matter what coordinate system you use (Cartesian, spherical, elliptic), $\theta$ is defined in exactly the same way. It is an **intrinsic** geometric structure of phase space, not a formula cobbled together by hand. Geometrically, to define a structure on a manifold you usually have to introduce an external object (a metric $g$, say, or an electromagnetic field $A$). But on the cotangent bundle you need **nothing external**: every point $(q, p)$ already carries a 1-form — namely $p$ itself. So $\theta$ is phase space's own, unique, natural 1-form; beyond the point's own data it uses nothing. Mathematically this is what **canonical** means — "ordained, not chosen by hand." And precisely because $\theta = p_i dq^i$ is tautological (naturally present), the symplectic form it generates, $\omega = -d\theta = dp_i \wedge dq^i$, is also naturally present. Phase space is a symplectic manifold from birth: as soon as you have positions $q$, you have momenta $p$, and then you have $\omega$ — no metric required to measure distance.

This is also the moment to revisit the difference between canonical and mechanical momentum, because the canonical momentum is the cornerstone of the tautological structure. If we use the **mechanical momentum** $\boldsymbol{\pi} = m\mathbf{v}$ as the basic variable, the standard symplectic form becomes
$$
\begin{aligned}
\omega & =d\left(\pi_i+q A_i\right) \wedge d q^i=d \pi_i \wedge d q^i+q d A_i \wedge d q^i = \underbrace{d\pi_i \wedge dq^i}_{\text{standard}} + \underbrace{\frac{q}{2} F_{ij} dq^i \wedge dq^j}_{\text{magnetic (curvature)}}
\end{aligned}
$$
A price is paid. With the canonical momentum $\mathbf{p}$, phase space is flat and standard, $dp \wedge dq$, and Hamilton's equations are perfectly symmetric. But with the mechanical momentum $m\mathbf{v}$, the geometry is distorted — the symplectic form sprouts an electromagnetic field tensor $F_{ij}$ (the magnetic field), which means Hamilton's equations explicitly carry the Lorentz force term, breaking the canonical duality. $\mathbf{p}$ is fundamental precisely because it absorbs the geometric effect of $q\mathbf{A}$, diagonalizing the symplectic structure of phase space into its simplest form.

From all this we can feel that, in the broader mathematical definition, a symplectic manifold is just an even-dimensional manifold carrying a closed, non-degenerate 2-form $\omega$. We need not split the coordinates into "position" and "momentum" in advance — it is the symplectic form $\omega$ itself that decides who is dual to whom. $\omega$ is a mapping machine, turning vectors into dual vectors (lowering indices, just like a metric). This means in symplectic geometry the tangent space $T\mathcal{M}$ and cotangent space $T^*\mathcal{M}$ are **isomorphic**. The form $\omega$ lets any direction in phase space find a "conjugate direction" paired with it.

This raises a deeper geometric question: phase space can be a curved manifold (the cotangent bundle of a sphere, say) — does that curvature obstruct setting up standard Hamiltonian mechanics? In Riemannian geometry, curvature means we cannot locally find coordinates that flatten the metric back to Euclidean ($g_{ij} = \delta_{ij}$). But symplectic geometry shows a wholly different flexibility. **Darboux's theorem** states: for any point of any $2n$-dimensional symplectic manifold $(\mathcal{M}, \omega)$, there exists a local coordinate system $(q^1, \dots, q^n, p_1, \dots, p_n)$ in which the form takes the standard shape $\omega = \sum_{a=1}^n d p_a \wedge d q^a$. The physical significance is profound:
- **Local flatness of phase space.** A symplectic manifold has no local geometric invariant (no "symplectic curvature"). However complicated the system, its phase space always looks locally like the standard $\mathbb{R}^{2n}$.
- **Universality of the canonical form.** It guarantees that **canonical coordinates always exist**. We can always, by a suitable change of coordinates, remove any "distortion" of phase space and make Hamilton's equations $\dot{\mathbf{x}} = J \nabla H$ hold exactly, locally. This is the geometric bedrock that lets Hamiltonian mechanics be a universal theory.

### 4.2 The Poisson bracket

In Hamiltonian mechanics a physical quantity is a function on phase space, $A(p,q)$ or $A(x)$. To see how it evolves in time,
$$
\frac{d A}{d t}=\frac{\partial A}{\partial q^a} \dot{q}^a+\frac{\partial A}{\partial p_a} \dot{p}_a=\frac{\partial A}{\partial q^a} \frac{\partial H}{\partial p_a}-\frac{\partial A}{\partial p_a} \frac{\partial H}{\partial q^a}\equiv [A,H]=\frac{\partial A}{\partial x^i} \omega^{i j} \frac{\partial H}{\partial x^j}=\left(\partial_i A\right) \omega^{i j}\left(\partial_j H\right).
$$
This is the **Poisson bracket**. A conserved quantity is one with $[A,H]=0$, said to Poisson-commute with $H$. Hamilton's equations themselves can be written
$$
\dot{q}^a=\left[q^a, H\right], \quad \dot{p}_a=\left[p_a, H\right] \quad \text{ or }\quad\dot{\mathbf{x}}=[\mathbf{x}, H] .
$$
For an explicitly time-dependent quantity, the evolution is $\frac{d A}{d t}=\frac{\partial A}{\partial t}+[A, H]$.

The basic properties of the Poisson bracket:
$$
\begin{aligned}
\left[q^a, q^b\right] & =\left[p_a, p_b\right]=0, \quad\left[q^a, p_b\right]=\delta_b^a \quad \text{ or }\quad \left[x^i, x^j\right]=\omega^{i j} . \\
[A, B] & =-[B, A] \\
\left[A, c_1 B_1+c_2 B_2\right] & = c_1\left[A, B_1\right]+c_2\left[A, B_2\right] \\
[A,[B, C]]&+[B,[C, A]]+[C,[A, B]]=0 \\
\frac{d}{d t}([A, B])&=\left[\frac{d}{d t} A, B\right]+\left[A, \frac{d}{d t} B\right] .
\end{aligned}
$$

> **Example.** The Poisson brackets of the angular momenta $J_1=y p_z-z p_y, \quad J_2=z p_x-x p_z, \quad J_3=x p_y-y p_x$:
> $$
> \begin{aligned}
> {\left[J_1, J_2\right] } & =\left[y p_z-z p_y, z p_x-x p_z\right] \\
> & =\left[y p_z, z p_x\right]+\left[z p_y, x p_z\right]-\left[y p_z, x p_z\right]-\left[z p_y, z p_x\right] \\
> & =y\left[p_z, z\right] p_x+x\left[z, p_z\right] p_y=x p_y-y p_x=J_3
> \end{aligned}
> $$
> Generally, $\left[J_i, J_j\right]=\varepsilon_{i j k} J_k$, and also $\left[\mathbf{J}^2, J_i\right]=0$.

Having defined the bracket $\{f, g\}$, let me reveal its true mathematical identity: it is the operation rule of the **Lie algebra** formed by the functions on phase space. To see this we need to recall, from scratch, the relationship between **Lie groups** and **Lie algebras**.

A Lie group $G$ is a group that is also a smooth **differentiable manifold**. The symmetries of physics (rotation, translation) are usually **continuous**, exactly suited to Lie-group description; group multiplication $g_1 \cdot g_2$ corresponds to moving on the manifold — do $g_2$, then $g_1$, and you arrive at a new point. The difficulty is that a Lie group (a manifold) is often curved and complicated ($SO(3)$ has a tangled topology), so studying it directly is hard. Mathematicians found that to understand the lay of the land, it suffices to study the neighborhood of the origin (the identity, i.e. doing nothing). So the **Lie algebra** $\mathfrak{g}$ is defined as the **tangent space** of the Lie group at the identity $e$, and a vector $X$ in it is called a generator. If "a point on the Lie group" is a **finite** transformation (rotation by angle $\theta$), then "a vector in the Lie algebra" is an **infinitesimal** tendency to transform (the rate/direction of rotation). The Lie algebra is a **vector space** (linear, flat); you can add and subtract freely there, far easier than working on the curved group.

How does a vector $X$ on the tangent plane (Lie algebra) turn back into an operation on the Lie group? Answer: **keep walking along that tangent direction.** Mathematically this is the **exponential map**: $g(\theta) = e^{\theta X}$, where $X$ is the generator (the instruction "rotate about the $z$-axis"), $\theta$ is the parameter (how many degrees), and $e^{\theta X}$ is the finite transformation produced (the group element). For instance, the translation generator is $\nabla$ (momentum), and a finite translation is $e^{\mathbf{a} \cdot \nabla} f(x) = f(x+\mathbf{a})$ (which is just the essence of the Taylor expansion). The rotation generator is the angular-momentum matrix $J$, and a finite rotation is $R(\theta) = e^{i\theta J}$.

Now, the Lie algebra (tangent plane) is flat, the Lie group (terrain) is curved. How do we record, on the flat map, the fact that the Earth is curved? The answer lies in **non-commutativity**. On a curved space, order matters: rotate about $x$ then $y$ $\neq$ rotate about $y$ then $x$, i.e. $g_1 g_2 \neq g_2 g_1$. At the Lie-algebra (infinitesimal) level, this "difference of order" is defined as the **Lie bracket** $[X, Y]$, coming from the group commutator:
$$e^{\epsilon X} e^{\epsilon Y} - e^{\epsilon Y} e^{\epsilon X} \approx \epsilon^2 [X, Y]$$
**The Lie bracket $[X, Y]$ measures the difference between two infinitesimal transformations done in opposite orders.** If $[X, Y] = 0$, the two transformations commute perfectly (the group is flat/Abelian); if not, the group structure is curved.

Now back to Hamiltonian mechanics. We have physical quantities $A, B, C...$ (say angular momenta $L_x, L_y, L_z$). We already know that Noether's theorem ties these to symmetries (generators), and that their **Poisson brackets** $\{A, B\}$ satisfy the Jacobi identity. We now want to argue, more deeply, that the physical quantities (conserved quantities) in phase space *are* the **Lie-algebra generators** of some symmetry Lie group, and that the Poisson bracket $\{A, B\}$ *is* the Lie bracket $[A, B]$ on that algebra. This means we need not draw the complicated Lie-group manifold; computing the Poisson brackets of physical quantities is enough to fully grasp the system's symmetry structure.

We start from the symplectic form of the last section and extract the notion of a **Hamiltonian vector field**. Take any function $f$ on phase space (energy $H$, a momentum $p$, or any randomly scribbled function). Geometrically the rate of change of $f$ is described by its **exterior derivative** $df$, a **1-form (cotangent vector)** whose meaning is: at each point, the direction in which $f$ changes fastest (the dual description of the gradient). The symplectic form $\omega$ is a **bilinear map** eating two vectors and spitting out a number; equally we can view it as eating one vector and spitting out a 1-form. And the non-degeneracy of $\omega$ makes the map $\tilde{\omega}: X \to \omega(X, \cdot)$ invertible: given any vector $X$ you find a unique 1-form, and conversely given any 1-form $\alpha$ you find a unique vector $X$ with $\omega(X, \cdot) = \alpha$. So there **exists and is unique** a vector field $X_f$ satisfying (the minus sign is the physicist's convention, to match the signs of Hamilton's equations):
$$\omega(X_f, \cdot) = -df(\cdot)$$
By analogy, in Riemannian geometry (Euclidean space) we use the metric $g$ for this map,
$$g(\nabla f, \cdot) = df,$$
and the resulting $\nabla f$ is the **gradient**, perpendicular to the contour lines, pointing where $f$ **increases fastest** (uphill). In symplectic geometry we use $\omega$ for the map, and the resulting $X_f$ is the **symplectic gradient**. Because $\omega$ is **antisymmetric** ($\omega(X, Y) = -\omega(Y, X),\omega(X, X)=0$), the direction of $X_f$ is **rotated by 90 degrees** — it runs **along** the contour lines, pointing where $f$ **stays constant**, as one sees from how $f$ changes along $X_f$:
$$X_f(f) = df(X_f) = -\omega(X_f, X_f)=0.$$
That is, the Hamiltonian flow $X_f$ forever conserves its own generator $f$. If $f=H$ (energy), then the Hamiltonian flow $X_H$ (time evolution) moves the system along constant-energy surfaces (energy conservation). This is why a planet circles the Sun (Hamiltonian flow, along the energy contour) rather than falling into it (gradient flow, down the potential).

Recall the Poisson bracket definition from above, $[A,H]=\frac{\partial A}{\partial x^i} \omega^{i j} \frac{\partial H}{\partial x^j}$. Generalizing to any symplectic form, we find $[g, f] \equiv \omega(X_f, X_g)$; that is, the **Hamiltonian vector field** $X_f$ generated by a function $f$ satisfies $X_f(g) = \{g, f\}$ on any test function $g$. This Hamiltonian vector field is the "Lie-algebra generator" $X_f$ we were after.

In differential geometry, the **Lie bracket** $[X, Y]$ of two vector fields is defined as their commutator:
$$[X, Y](g) = X(Y(g)) - Y(X(g))$$
measuring the difference between "do $Y$ then $X$" and "the other way around." The core task now is to compute the Lie bracket $[X_f, X_g]$ of two Hamiltonian vector fields and see whether it equals "the vector field generated by the Poisson bracket $\{f, g\}$," namely $X_{\{f, g\}}$. Apply $[X_f, X_g]$ to an arbitrary test function $h$:
$$ [X_f, X_g](h) = X_f(X_g(h)) - X_g(X_f(h))= X_f(\{h, g\}) - X_g(\{h, f\}) = \{ \{h, g\}, f \} - \{ \{h, f\}, g \}$$
A double Poisson bracket appears. To simplify we must use the **Jacobi identity**:
$$\{ \{h, g\}, f \} + \{ \{g, f\}, h \} + \{ \{f, h\}, g \} = 0$$
Rearranging,
$$\{ \{h, g\}, f \} - \{ \{h, f\}, g \} = -\{ \{g, f\}, h \} = \{ \{f, g\}, h \}$$
and finally
$$[X_f, X_g](h) = \{ \{f, g\}, h \}=X_{\{f, g\}}(h) = \{h, \{f, g\}\} = - \{ \{f, g\}, h \}$$
(There is usually a sign discrepancy here, depending on whether the Hamiltonian vector field is defined via $\{g,f\}$ or $\{f,g\}$; mathematically this is called a "Lie-algebra anti-homomorphism," but physically it is treated as equivalent.)

So we reach the conclusion:
$$[X_f, X_g] \longleftrightarrow X_{\{f, g\}}$$
The physical quantities (conserved quantities) in phase space *are* the Lie-algebra generators of some symmetry Lie group, because each quantity $A$ becomes, through the map $A \to X_A$, a geometric vector field (a generator). And the Poisson bracket *is* the Lie bracket, because the derivation above proved that "the algebraic operation of physical quantities (the Poisson bracket)" directly reflects "the non-commutativity of geometric transformations (the Lie bracket)." The Poisson bracket is not a set of rules pulled from thin air; it is the **"projection" of the Lie group and its Lie algebra onto functions on phase space** — a Lie-algebra homomorphism. If $\{J_x, J_y\} = J_z$ (the angular-momentum algebra), then necessarily $[X_{J_x}, X_{J_y}] \approx -X_{J_z}$ (the non-commutativity of geometric rotations). So we need not draw the complicated phase-flow diagrams; computing Poisson brackets at the algebraic level is enough to fully grasp the group structure of the system's symmetry transformations. This is why, in quantum mechanics, we care only about the commutation relations of operators — they already contain all the information about the geometric transformations.

Without the geometric scaffolding of the Lie group, the Jacobi identity of the Poisson bracket would be a river without a source; conversely, precisely because the Poisson bracket satisfies the Jacobi identity, it earns the right to be the classical father of the commutator $[\hat{A}, \hat{B}]$ in quantum mechanics. The Poisson bracket corresponds in quantum mechanics to the operator commutator $[\widehat{A}, \widehat{B}]=\widehat{A} \widehat{B}-\widehat{B} \widehat{A}$, which satisfies all the properties of the Poisson bracket. It shows that classical and quantum physics are connected, and that classical physics is the $\hbar \to 0$ limit of quantum physics. Indeed, one can prove that as $\hbar \to 0$ the operator commutator automatically yields the classical Poisson bracket.

### 4.3 Canonical transformations

A canonical transformation is the central concept of Hamiltonian mechanics: it preserves the symplectic structure of phase space. There are two viewpoints:
- a change of coordinates within phase space;
- a one-to-one map from phase space to itself, sending one point to another.
Mathematically the two are equivalent (for details, see Liang Canbin's textbook on differential geometry and general relativity). One important kind of infinitesimal transformation will turn out to connect deeply with the Noether theorem from before.

#### 4.3.1 As a coordinate transformation in phase space

We want a coordinate change $\vec{x}=(q, p) \rightarrow \vec{x}^{\prime}=\left(q^{\prime}, p^{\prime}\right)$ that preserves the symplectic structure. Concretely, the symplectic form $\omega$, as a differential form, is coordinate-independent. So in any new coordinates $x'$, $\omega=\frac{1}{2} \omega_{i j} d x^i \wedge d x^j=\frac{1}{2} \omega_{m n}^{\prime} d x^{\prime m} \wedge d x^{\prime n}$, and using $\omega_{i j} d x^i \wedge d x^j=\omega_{i j} \frac{\partial x^i}{\partial x^{\prime m}} \frac{\partial x^j}{\partial x^{\prime n}} d x^{\prime m} \wedge d x^{\prime n}$ the new components are $\omega_{m n}^{\prime}=\omega_{i j} \frac{\partial x^i}{\partial x^{\prime m}} \frac{\partial x^j}{\partial x^{\prime n}}$. But for the canonical equations to keep holding for the new coordinates and momenta, $J^{-1}$ must not change, so we require
$$
\omega_{m n}^{\prime}=\omega_{m n}=\omega_{i j} \frac{\partial x^i}{\partial x^{\prime m}} \frac{\partial x^j}{\partial x^{\prime n}}
$$
which is exactly the preservation of the symplectic structure. Writing $D^i{ }_m=\frac{\partial x^i}{\partial x^{\prime m}}$, we have $D^T J^{-1} D=J^{-1},\left(D^{-1}\right) J\left(D^{-1}\right)^T=J$, and expanding,
$$
\frac{\partial x^{\prime m}}{\partial x^i} \omega^{i j} \frac{\partial x^{\prime n}}{\partial x^j}=\omega^{m n} \Leftrightarrow \partial_i x^{\prime m} \omega^{i j} \partial_j x^{\prime n}=\omega^{m n}=\left[x^{\prime m}, x^{\prime n}\right]_{\mathbf{x}}=\left[x^{\prime m}, x^{\prime n}\right]_{\mathbf{x}'}
$$
So the requirement that a phase-space coordinate change preserve the symplectic structure is *equivalent* to preserving the fundamental Poisson brackets. That means it makes no difference whether you compute the Poisson bracket of two quantities in the new or the old coordinates, $[A, B]_{\mathbf{x}}=[A, B]_{\mathbf{x}^{\prime}}$ — Poisson brackets are invariant under canonical transformations — and so the mathematical form of Hamilton's equations is preserved:
$$
\dot{\mathbf{x}}^{\prime}=\left[\mathbf{x}^{\prime}, H\right]_{\mathbf{x}}=\left[\mathbf{x}^{\prime}, H\right]_{\mathbf{x}^{\prime}}=J \frac{\partial H}{\partial \mathbf{x}^{\prime}}
$$
Note: although the mathematical form of Hamilton's equations is preserved under a canonical transformation, the Hamiltonian before and after is two different functions — strictly $H'(x')=H(x)$, the same physical quantity described in new and old coordinates, usually just written $H$. But its functional form changes, and so does the dynamical equation; therefore a canonical transformation is generally **not** a symmetry.

#### 4.3.2 As a diffeomorphism of phase space

In this viewpoint we directly map $\omega$ to itself to preserve the symplectic structure, getting the same result:
$$
\omega \rightarrow \omega^{\prime}=\frac{1}{2} \omega_{i j} d x^i \wedge d x^{\prime j}=\omega\quad \Longrightarrow\quad \omega_{m n}=\omega_{i j} \frac{\partial x^i}{\partial x^{\prime m}} \frac{\partial x^j}{\partial x^{\prime n}} . 
$$
Or, equivalently, by preserving the symplectic potential: $d p_a^{\prime} \wedge d q^{\prime a}=d p_a \wedge d q^a \Leftrightarrow d \Theta^{\prime}=d \Theta$, so the difference of the symplectic potentials before and after is a closed form, $d\left(\Theta-\Theta^{\prime}\right)=0$. A closed form need not be exact, but if we care only about a local region of space and not its global structure, the **Poincaré lemma** says: locally, a closed form must also be exact. In the applications of theoretical mechanics, this local region often extends to the whole phase space, so
$$
\Theta-\Theta^{\prime}=d F \Leftrightarrow p_a d q^a-p_a^{\prime} d q^{\prime a}=d F .
$$
A phase-space diffeomorphism satisfying this is necessarily a canonical transformation, and the converse often holds too. With our earlier introduction of symplectic geometry and Lie groups, we can now add a symplectic-geometric viewpoint: a canonical transformation $\Phi: \mathcal{M} \to \mathcal{M}$ is essentially a diffeomorphism preserving the symplectic form $\omega$, i.e. $\Phi^* \omega = \omega$. In modern geometric mechanics such a map is a **symplectomorphism**. The set of all symplectomorphisms forms a group, the **symplectic group** $Symp(\mathcal{M}, \omega)$ — an infinite-dimensional Lie group. Compared with the finite-dimensional rotation group $SO(3)$, the symplectic group contains far richer symmetry. The evolution history of a physical system is essentially a trajectory inside the symplectic group, drawn in phase space.

#### 4.3.3 Infinitesimal transformations

If a canonical transformation maps a phase-space point to another infinitesimally close one, we call it an infinitesimal canonical transformation:
$$
q^a \rightarrow q^{\prime a}=q^a+\delta q^a=q^a+\varepsilon Q^a(q, p), \quad p_a \rightarrow p_a^{\prime}=p_a+\delta p_a=p_a+\varepsilon P_a(q, p) .
$$
When $\varepsilon$ is infinitesimal the before/after distance is certainly infinitesimal — but how do we make it *canonical*? By preserving the symplectic structure, $d p_a^{\prime} \wedge d q^{\prime a}-d p_a \wedge d q^a=0$; substituting and expanding to first order gives $\left(d P_a \wedge d q^a+d p_a \wedge d Q^a\right) \varepsilon=0$, so
$$
\begin{aligned}
0 & =d P_b \wedge d q^b+d p_a \wedge d Q^a \\
& =\frac{\partial P_b}{\partial q^a} d q^a \wedge d q^b+\frac{\partial P_b}{\partial p_a} d p_a \wedge d q^b+\frac{\partial Q^a}{\partial q^b} d p_a \wedge d q^b+\frac{\partial Q^a}{\partial p_b} d p_a \wedge d p_b \\
& =\frac{1}{2}\left(\frac{\partial P_b}{\partial q^a}-\frac{\partial P_a}{\partial q^b}\right) d q^a \wedge d q^b+\frac{1}{2}\left(\frac{\partial Q^a}{\partial p_b}-\frac{\partial Q^b}{\partial p_a}\right) d p_a \wedge d p_b \\
& +\left(\frac{\partial P_b}{\partial p_a}+\frac{\partial Q^a}{\partial q^b}\right) d p_a \wedge d q^b .
\end{aligned}
$$
Hence
$$
\begin{aligned}
\frac{\partial P_b}{\partial q^a}-\frac{\partial P_a}{\partial q^b}=0,\quad
\frac{\partial Q^a}{\partial p_b}-\frac{\partial Q^b}{\partial p_a}=0,\quad \frac{\partial P_b}{\partial p_a}+\frac{\partial Q^a}{\partial q^b}=0 .
\end{aligned}
$$
One easily checks that
$$
\delta q^a=\varepsilon Q^a=\varepsilon \frac{\partial G}{\partial p_a}, \quad \delta p_a=-\varepsilon  P_a=-\frac{\partial G}{\partial q^a}
$$
is a general solution, where $G$ is some arbitrary function on phase space. That is, if a transformation has this form it is an infinitesimal canonical transformation, said to be **generated by the physical quantity $G(q, p)$**. The infinitesimal change in the functional form of a quantity is
$$
\delta A=A\left(q^{\prime}, p^{\prime}\right)-A^{\prime}\left(q^{\prime}, p^{\prime}\right)=A\left(q^{\prime}, p^{\prime}\right)-A(q, p)=\frac{\partial A}{\partial q^a} \delta q^a+\frac{\partial A}{\partial p_a} \delta p_a=\varepsilon[A,G]
$$

> **Example.** Take $G=p_c$; then $Q^a=\delta_c^a, P_a=0$, so $q^a \rightarrow q^a+\varepsilon \delta_c^a, \quad p_a \rightarrow p_a$. That is, the canonical momentum $p_c$ generates the infinitesimal translation of the canonical coordinate $q^c$.

Now generalize the form. Consider a one-parameter family of canonical transformations $q^a \rightarrow q^{\prime a}(q, p, \lambda), p_a \rightarrow p_a^{\prime}(q, p, \lambda)$, with no change at $\lambda=0$. As the parameter $\lambda$ varies continuously, this family traces a $\lambda$-parametrized path in phase space, and any two points on it differing by an infinitesimal $d\lambda$ are connected by an infinitesimal canonical transformation. So we readily get
$$
\frac{d q^{\prime a}}{d \lambda}=\frac{\partial G}{\partial p_a^{\prime}}, \quad \frac{d p_a^{\prime}}{d \lambda}=-\frac{\partial G}{\partial q^{\prime a}},
$$
where $G(q',p',\lambda)$ is the **generator** of this one-parameter family (dropping the prime by convention), and $\left(\frac{d q^a}{d \lambda}, \frac{d p_a}{d \lambda}\right)$ can be seen as a phase flow — the flow in phase space induced by $G$. More compactly,
$$
v_G^i=\frac{d x^i}{d \lambda}=\omega^{i j} \partial_j G,\quad \mathbf{x}=(q,p)
$$
In particular, taking $\lambda=t,G=H$ turns the phase-flow equation into Hamilton's equations — so the Hamiltonian is the generator of time evolution. Since the Hamiltonian describes the system's energy, this gives a general definition of energy: the generator of time evolution describes the system's energy. At the same time, the time evolution of a system in phase space is itself an ongoing canonical transformation, a one-parameter family parametrized by time. Therefore time evolution preserves the symplectic structure of phase space.

Further, suppose we have two one-parameter families of canonical transformations, generated by $G_1$ and $G_2$, with parameters $\lambda_1,\lambda_2$. Using the phase-flow equation and $\omega_{ij}\omega^{jm} = \delta^m_n$, one computes that the value of the symplectic form on the velocity fields $v_{G_1}^i,v_{G_2}^j$ is just the Poisson bracket of the two generators:
$$
\omega(v_{G_1},v_{G_2})\equiv\omega_{i j} v_{G_1}^i v_{G_2}^j=\omega_{i j} \frac{d x^i}{d \lambda_1} \frac{d x^j}{d \lambda_2}=\left(\partial_m G_2\right) \omega^{m n}\left(\partial_n G_1\right)=\left[G_2, G_1\right]
$$
Geometrically, an infinitesimal canonical transformation is exactly the flow generated by the **Hamiltonian vector field $X_G$**. Recall the geometric definition from §4.2, $\omega(X_G, \cdot) = -dG$. The infinitesimal transformation $\mathbf{x} \to \mathbf{x} + \epsilon X_G$ is precisely the action of the Lie derivative $\mathcal{L}_{X_G}$. And the reason this transformation is "canonical" (symplectic-structure-preserving) is that Cartan's homotopy formula guarantees
$$\mathcal{L}_{X_G} \omega = d(\iota_{X_G} \omega) + \iota_{X_G} (d\omega) = d(-dG) + 0 = 0$$
This proves succinctly that **any flow generated by a Hamiltonian vector field is automatically a symplectomorphism (canonical transformation).**

#### 4.3.4 Noether's theorem

In principle a canonical transformation can be any mathematical transformation preserving the symplectic structure. But a *physical* operation on a system (rotating it by some angle, say) often induces a canonical transformation in phase space. This is because a physical operation sends one physical state to another, inducing a diffeomorphism in phase space; and since after the operation the system is still a Hamiltonian system obeying the same canonical equations, the induced diffeomorphism must be a canonical transformation. In particular, if the physical operation depends on a continuous parameter (the rotation angle, say), it induces a one-parameter family of canonical transformations, and we then call the generator of this family the generator of the corresponding physical operation. The canonical momentum is the generator of the translation of its conjugate coordinate; angular momentum is the generator of rotation.

The above concerns any continuous physical operation. But if the continuous operation is itself a **symmetry** — i.e. the equations of motion keep their form before and after — then there is a stronger conclusion, namely the Noether theorem: the generator of such a symmetry operation must be a conserved quantity. The proof is very simple. A symmetry operation, since it must preserve the form of the equations of motion (given by Hamilton's equations), must preserve the functional expression $H(q, p)$, i.e. $\delta H=0$. Letting $G$ be the generator,
$$
0=\delta H=\varepsilon[H, G] \Leftrightarrow 0=[H, G]=\frac{dG}{dt}.
$$
The converse of Noether's theorem also holds locally: **any conserved quantity $G$ (i.e. $\{G, H\}=0$) corresponds to a continuous symmetry of the system.** This means that as soon as you find an integral constant, you are guaranteed to find a geometric transformation leaving the Hamiltonian invariant. It makes Hamiltonian mechanics the single most powerful framework for finding and analyzing symmetries.

### 4.4 Liouville's theorem and the Poincaré recurrence theorem

We already know that the time evolution of a system in phase space can be seen as a phase flow, with flow velocity given by Hamilton's equations $\dot{\mathbf{x}}=[\mathbf{x}, H]$. **Liouville's theorem** says this fluid is incompressible. Concretely, take a region $D_0$ in phase space at $t=0$, evolve it to $D_t$, and the volume is unchanged, $\text{Vol}(D_t)=\text{Vol}(D_0)$.

To prove it, introduce the volume element $\Omega=d p_1 d q^1 d p_2 d q^2$ or $\Omega=d p_1 \wedge d q^1 \wedge d p_2 \wedge d q^2$. Easily,
$$\begin{aligned} \Omega =\frac{1}{2}\left(d p_1 \wedge d q^1+d p_2 \wedge d q^2\right) \wedge\left(d p_1 \wedge d q^1+d p_2 \wedge d q^2\right)= \frac{1}{2!} \omega\wedge\omega=\frac{1}{2!} \omega^{\wedge 2}\end{aligned}$$
and one generalizes to $\Omega=d p_1 d q^1 d p_2 d q^2 \ldots . d p_n d q^n=\frac{1}{n!} \omega^{\wedge n}$, meaning the volume element depends only on the symplectic form $\omega$. Since the diffeomorphism of a canonical transformation preserves $\omega$, the volume is also preserved under time evolution. The same argument applies to any $2k(k \le n)$-dimensional surface $S_{2k}$ in phase space, whose "area element" is defined as $\frac{1}{k!} \omega^{\wedge k}$: the "area" of $S_{2k}$ is likewise preserved under time evolution. In particular, take any closed loop $C$ in phase space, let $C$ evolve in time, and consider the integral of the symplectic potential $\Theta$ around it, $I_C=\frac{1}{2 \pi} \oint_C \Theta$. Since $\oint_C \Theta=\int_{S_2} d \Theta=\int_{S_2} \omega$, with $S_2$ the region $C$ encloses, the above shows $I_C$ is preserved under time evolution. Clearly all these results hold not only for the phase flow generated by time evolution, but for the phase flow of any one-parameter family of canonical transformations.

Liouville's theorem tells us the phase flow preserves volume, which calls to mind an incompressible fluid. Yet symplectic geometry has a far stronger "rigidity" than fluid mechanics. It was not until 1985 that Gromov found a startling theorem cleanly separating symplectomorphisms from ordinary volume-preserving diffeomorphisms. **Gromov's non-squeezing theorem**, also called the **symplectic camel**: consider a ball $B(R)$ (radius $R$) in phase space, and a cylinder $Z(r) = B^2(r) \times \mathbb{R}^{2n-2}$ (base radius $r$). The theorem states that no canonical transformation (symplectomorphism) $\Phi$ can embed the ball $B(R)$ into the cylinder $Z(r)$ unless $r \ge R$:
$$\text{If } \Phi(B(R)) \subset Z(r), \text{ then } r \ge R.$$
Even though the cylinder has infinite volume (it extends infinitely in the other directions), if its "waist" (the area in the conjugate-variable plane) is too small, the ball will not fit. Its **physical significance is a classical version of the quantum uncertainty principle**: the cylinder's cross-section $B^2(r)$ corresponds to the phase area $\pi r^2$ of one conjugate pair $(q_1, p_1)$. The theorem tells us: **you cannot, while preserving the symplectic structure, infinitely compress the uncertainty area of a conjugate pair.** This foreshadows the inevitability of quantum mechanics within classical mechanics: phase space is not merely volume-preserving, it has a minimal "hard-core" size in the conjugate plane. This topological rigidity of symplectic geometry is exactly the classical geometric projection of the uncertainty principle $\Delta x \Delta p \ge \hbar$.

Liouville's theorem leads to a conclusion: wait long enough and there will be a **Poincaré recurrence**, which seems to violate the second law of thermodynamics. But the second law requires the thermodynamic limit $N\to\infty$, while the recurrence time scales as $t\propto t_c^N$ with $t_c>1$ some characteristic quantity, so we never see a Poincaré recurrence. The **Poincaré recurrence theorem**: for a Hamiltonian system with finite phase space, fix any initial point $x_0$; then for any neighborhood $D_0$ of it, there exists a point $x_0' \in D_0$ that returns to $D_0$ within finite time. Simply put: wait long enough and the system always returns to a state arbitrarily close to the initial one. Proof: take a finite time step $\tau$, and as time goes to infinity, $\text{Vol}(D_k)=\text{Vol}(D_0),\forall k$. Since phase space is finite, there must exist $k'>k$ with $D_k\cap D_{k'}\neq0$. Then by the invertibility of the diffeomorphism, $D_0\cap D_{k'-k}\neq0$, and recurrence appears.

Now consider many systems at once. Imagine scattering a fistful of "sand" in phase space (or dropping a drop of ink), each grain a **replica** of the system in a different initial state $(q, p)$ (this is an **ensemble**), with the density of the sand denoted $\rho(q, p, t)$. As time $t$ evolves, each grain obeys Hamilton's equations, forming a **phase flow**. Because systems (grains) neither vanish nor appear from nothing, the probability density must satisfy the **continuity equation** (like mass conservation in fluid mechanics):
$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0$$
where $\mathbf{v} = (\dot{q}, \dot{p})$ is the phase-space velocity and $\nabla = (\frac{\partial}{\partial q}, \frac{\partial}{\partial p})$ the phase-space gradient. Expand $\nabla \cdot (\rho \mathbf{v})$:
$$\nabla \cdot (\rho \mathbf{v}) = (\mathbf{v} \cdot \nabla) \rho + \rho (\nabla \cdot \mathbf{v})$$
Here $\nabla \cdot \mathbf{v}$ is the divergence of the phase flow (the source/sink of the velocity field). Compute it:
$$\nabla \cdot \mathbf{v} = \frac{\partial \dot{q}}{\partial q} + \frac{\partial \dot{p}}{\partial p}$$
Substituting Hamilton's equations $\dot{q} = \frac{\partial H}{\partial p}, \dot{p} = -\frac{\partial H}{\partial q}$:
$$\nabla \cdot \mathbf{v} = \frac{\partial}{\partial q}\left(\frac{\partial H}{\partial p}\right) + \frac{\partial}{\partial p}\left(-\frac{\partial H}{\partial q}\right) = \frac{\partial^2 H}{\partial q \partial p} - \frac{\partial^2 H}{\partial p \partial q} = 0$$
Conclusion: the phase flow is divergence-free ($\nabla \cdot \mathbf{v} = 0$). The phase-space "fluid" is **incompressible**. Putting $\nabla \cdot \mathbf{v} = 0$ back into the continuity equation gives
$$
\frac{d\rho}{d t}=\frac{\partial \rho}{\partial t}+(\mathbf{v} \cdot \nabla) \rho=0
$$
which is the **differential form of Liouville's theorem**. Its physical meaning is deep:
- **$\frac{\partial \rho}{\partial t}$ (Eulerian view):** you stand fixed at a point in phase space and watch the density of fluid flowing past.
- **$\frac{d \rho}{dt}$ (Lagrangian view):** you ride on a grain of sand (moving with the flow) and watch the density around you. The conclusion: if you go with the flow, the probability density around you **never changes**. Like an incompressible cloud, drifting and deforming in the wind, but always equally dense — never compacted or diluted.

Now we can connect to statistical mechanics. What is a "statistical equilibrium state"? Equilibrium means macroscopic properties do not change in time. Statistically, this means the probability distribution does not change in time at a **fixed location**:
$$\text{Equilibrium} \quad \Longleftrightarrow \quad \frac{\partial \rho}{\partial t} = 0$$
Combined with the Liouville equation $\frac{\partial \rho}{\partial t} + (\mathbf{v} \cdot \nabla) \rho = 0$, since $\frac{\partial \rho}{\partial t} = 0$ we must have
$$(\mathbf{v} \cdot \nabla) \rho = 0$$

Reintroducing the Poisson bracket, expand $(\mathbf{v} \cdot \nabla) \rho$:
$$
(\mathbf{v} \cdot \nabla) \rho=\dot{q} \frac{\partial \rho}{\partial q}+\dot{p} \frac{\partial \rho}{\partial p}=\frac{\partial H}{\partial p} \frac{\partial \rho}{\partial q}-\frac{\partial H}{\partial q} \frac{\partial \rho}{\partial p}
$$
so the equilibrium condition is equivalent to
$$
\{\rho, H\}=0
$$
The equation $\{\rho, H\} = 0$ tells us: **the distribution function $\rho$ must Poisson-commute with the Hamiltonian $H$.** Mathematically, if a function $\rho(q, p)$ is to have vanishing Poisson bracket with $H(q, p)$ everywhere, the most natural and general solution is that **$\rho$ depends on $(q, p)$ only through $H$**:
$$\rho(q, p) = f(H(q, p))$$
with $f$ arbitrary. So now we know $\rho$ must be a function of the energy $H$.

For an **isolated system** (energy conserved, no exchange with any other reservoir), the energy is strictly confined to the surface $H(q, p) = E$. Off the surface ($H \neq E$) the probability density must be zero; on the surface ($H = E$), $\rho$ is constant (since $H$ is constant, $f(H)$ is too). This directly yields the **microcanonical distribution**:
$$\rho(q, p) \propto \delta(H(q, p) - E)$$
- The $\delta$ **function** guarantees a value only where $H=E$.
- The $\propto$ **constant** says that on the energy surface, all points have **equal** probability density.

**This is the origin of the "principle of equal a priori probabilities."** It is not something physicists guessed off the top of their heads; rather:
1. **Liouville's theorem** guarantees the density does not change with the flow (else there is no steady state to speak of).
2. **The equilibrium assumption** guarantees the density has no explicit time dependence.
3. **The Poisson-commutation relation** locks the density into depending only on conserved quantities (mainly energy).
4. **Energy conservation** confines the distribution to the energy surface.

The four together give the only logical result: a uniform distribution on the energy surface. But note that the principle of equal a priori probabilities (the fundamental assumption) is still a *postulate* — it cannot be purely "derived" from Hamiltonian dynamics (Liouville's theorem) alone. The derivation just given shows only its "dynamical consistency" (i.e. if you assume uniformity, it does not contradict the dynamics), but we did skip over a huge logical gap. That gap is **ergodicity**, which we will discuss in Part 4, on near-integrable systems and chaos.

### 4.5 Generating functions

Now let us consider how to *build* a canonical transformation. We already have a sufficient (and usually necessary) condition for a transformation to be canonical: $p_adq^a-p_a'dq'^a=dF$, where $F$ is a function on phase space.

Suppose we take $F$ of the form $F_1(q,q')$. Then
$$p_a d q^a-p_a^{\prime} d q^{\prime a}=d F_1\quad \Rightarrow \quad p_a d q^a-p_a^{\prime} d q^{\prime a}=\frac{\partial F_1}{\partial q^a} d q^a+\frac{\partial F_1}{\partial q^{\prime a}} d q^{\prime a} .$$
so it suffices to take
$$
p_a=\frac{\partial F_1}{\partial q^a}\left(q, q^{\prime}\right) \quad-p_a^{\prime}=\frac{\partial F_1}{\partial q^{\prime a}}\left(q, q^{\prime}\right)
$$
Each different $F_1(q,q')$ generates a different canonical transformation, so $F_1(q,q')$ is called the **first-kind generating function**. If we rewrite the original condition as $p_a d q^a+q^{\prime a} d p_a^{\prime}=d\left(F+p_a^{\prime} q^{\prime a}\right)=d F_2$, then we take
$$
p_a=\frac{\partial F_2}{\partial q^a}\left(q, p^{\prime}\right) \quad q^{\prime a}=\frac{\partial F_2}{\partial p_a^{\prime}}\left(q, p^{\prime}\right) .
$$
And one easily writes down the third- and fourth-kind generating functions:
$$
\begin{array}{lll}
F_3\left(p, q^{\prime}\right): \text { take } & q^a=-\frac{\partial F_3}{\partial p_a}\left(p, q^{\prime}\right), & p_a^{\prime}=-\frac{\partial F_3}{\partial q^{\prime a}}\left(p, q^{\prime}\right) \\
F_4\left(p, p^{\prime}\right): \text { take } & q^a=-\frac{\partial F_4}{\partial p_a}\left(p, p^{\prime}\right), & q^{\prime a}=\frac{\partial F_4}{\partial p_a^{\prime}}\left(p, p^{\prime}\right) .
\end{array}
$$
These four kinds do *not* exhaust all canonical transformations. For example, the $2\times 2=4$-dimensional canonical transformation $q^{\prime 1}=q^1, q^{\prime 2}=p_2, p_1^{\prime}=p_1, p_2^{\prime}=-q^2$ is in fact generated by a mixed-type (first- and second-kind) generating function, concretely $q^1p_1'+q^2q'^2$.

Finally, when the functional relation of the canonical transformation explicitly contains time, $\mathbf{x}^{\prime}(\mathbf{x}, t)$, we must introduce a $K$ so that $p_a d q^a-H d t=p_a^{\prime} d q^{\prime a}-K d t+d F$ holds — exactly cancelling the $t$ partial. Taking $F$ to be a first-kind generating function $F_1(q,q',t)$, we have $K=H+\frac{\partial F_1}{\partial t}$, and just as before one shows $K$ is the new Hamiltonian: $\dot{q}^{\prime a}=\frac{\partial K}{\partial p_a^{\prime}}, \quad \dot{p}_a^{\prime}=-\frac{\partial K}{\partial q^{\prime a}}$.

### 4.6 The Hamilton–Jacobi equation and integrable systems

This is the climax of Hamiltonian theory, and the place where classical mechanics comes within a hair's breadth of quantum mechanics. Fix a start $q_0$ and an end $q$ in coordinate space, *without* specifying the momenta at the endpoints. Given a phase-space path $\left(q\left(t^{\prime}\right), p\left(t^{\prime}\right)\right)$ joining them, we can compute the action:
$$
S\left[q\left(t^{\prime}\right), p\left(t^{\prime}\right)\right]=\int_0^t\left[p_a\left(t^{\prime}\right) d q^a\left(t^{\prime}\right)-H\left(q\left(t^{\prime}\right), p\left(t^{\prime}\right)\right) d t^{\prime}\right] .
$$
Now suppose the path satisfies Hamilton's equations — i.e. it extremizes the action. With that condition the action depends only on $q_0,q,t$:
$$S\left(q_0, q, t\right)=\operatorname{extrem}_{\left[q\left(t^{\prime}\right), p\left(t^{\prime}\right)\right]} S\left[q\left(t^{\prime}\right), p\left(t^{\prime}\right)\right]$$
To study this function, give the endpoint an infinitesimal variation $\delta q$:
$$
\begin{aligned}
& \delta S\left(q_0, q, t\right)=\operatorname{extrem} \delta S\left[q\left(t^{\prime}\right), p\left(t^{\prime}\right)\right] \\
= & \int_0^t d\left(p_a \delta q^a\right)+\operatorname{extrem} \int_0^t d t^{\prime}\left[\left(\dot{q}^a-\frac{\partial H}{\partial p_a}\right) \delta p_a-\left(\dot{p}_a+\frac{\partial H}{\partial q^a}\right) \delta q^a\right] . \\
= & p_a(t) \delta q^a(t)=p_a(t) \delta q^a  \quad\Longrightarrow \quad p_a(t)=\frac{\partial S}{\partial q^a}\left(q_0, q, t\right)
\end{aligned}
$$
And because
$$S=\int pdq-Hdt,dS=pdq-Hdt\quad\Longrightarrow\quad \frac{\partial S}{\partial t}\left(q_0, q, t\right)=-H(q, p) .$$
we obtain the **Hamilton–Jacobi equation**:
$$
\frac{\partial S}{\partial t}+H\left(q, \frac{\partial S}{\partial q}, t\right)=0 .
$$
Turn it around. Suppose we start *from* the Hamilton–Jacobi equation and want to solve this partial differential equation. The reasoning above tells us how to construct a solution: take an extremal path starting at $q_0$ and reaching $q$ at time $t$, and compute its action functional. In this construction the starting point $q_0$ can be regarded as an integration constant. It also tells us that if the extremal path (the physical, or classical, path) can be solved analytically (allowing integral expressions), then we obtain an analytic solution of the form $S(q_0,q,t)$.

But $S(q_0,q,t)$ is only one class of solution, and in practice we usually cannot find its analytic form. Going further: for an $n$-degree-of-freedom system, if we can find a class of analytic solutions of the form $S(\alpha,q,t)$ (allowing integral expressions), where $\alpha$ stands for $\alpha^a (a = 1,2,...,n)$, integration constants (analogous to $q_0$), then such a system is called an **integrable system**. The reason it earns the name is that one can go on to obtain the analytic solution of the particle's motion (expressed via integrals and implicit functions). Here is the proof.

Suppose we have found a class of analytic solutions of the Hamilton–Jacobi equation with $n$ integration constants, written $S(\alpha,q,t)$ or $S\left(\alpha^1, \ldots, \alpha^n, q^1, \ldots, q^n, t\right)$. We can regard $\alpha^a ,a = 1,2,..,n$ as the new $q$ coordinates after a canonical transformation, and consider the canonical transformation from $(q, p)$ to $(\alpha,\beta)$, taking the Hamilton–Jacobi solution $S(\alpha,q,t)$ as the first-kind generating function. This is manifestly a time-dependent canonical transformation; the new Hamiltonian is $K=H+\frac{\partial S}{\partial t}$, and by the Hamilton–Jacobi equation $K=0$. So the new canonical equations give $\dot{\alpha}^a=0, \dot{\beta}_a=0$ — the new canonical coordinates are all conserved, hence mutually Poisson-commuting. Conversely, if a Hamiltonian system has $n$ Poisson-commuting independent conserved quantities, we can use them to construct a class of analytic solutions $S(\alpha,q,t)$. So **the existence of $n$ Poisson-commuting independent conserved quantities is the necessary and sufficient condition for a Hamiltonian system to be integrable.** Although the canonical momenta $\beta_a$ are also conserved, their Poisson bracket with the canonical coordinates is nonzero, so they do not Poisson-commute with $\alpha^a$; they are better interpreted as initial conditions. Since $S(\alpha,q,t)$ is the first-kind generating function, we have $\beta_a=-\frac{\partial S}{\partial \alpha^a}$, and solving these gives the configuration-space path $q^a(t)$ (as a function of $\alpha,\beta$); then $p_a=\frac{\partial S}{\partial q^a}$ determines $p_a(t)$. So the analytic solution of an integrable system's motion is indeed obtainable.

In general, having found a solution $S(q,t)$ of the Hamilton–Jacobi equation, we get the relation $p_a(t)=\frac{\partial S}{\partial q^a}\left(q_0, q, t\right)$, and substituting into the first canonical equation solves the configuration-space path,
$$
\dot{q}^a=\left.\frac{\partial H}{\partial p_a}\right|_{p=\frac{\partial S}{\partial q}}
$$
Notice this method only requires solving $n$ first-order ODEs, not $n$ second-order ones — a great simplification. But we must check that the second canonical equation also holds:
$$
\begin{aligned}
\dot{p}_a & =\frac{d}{d t}\left(\frac{\partial S}{\partial q^a}\right)=\frac{\partial^2 S}{\partial t \partial q^a}+\frac{\partial^2 S}{\partial q^b \partial q^a} \dot{q}^b \\
& \frac{\partial^2 S}{\partial t \partial q^a}+\left.\frac{\partial H}{\partial q^a}\right|_{p=\frac{\partial S}{\partial q}}+\left.\frac{\partial H}{\partial p_b}\right|_{p=\frac{\partial S}{\partial q}} \frac{\partial^2 S}{\partial q^b \partial q^a}=0 \\
\Rightarrow & \frac{\partial^2 S}{\partial t \partial q^a}+\left.\frac{\partial H}{\partial q^a}\right|_{p=\frac{\partial S}{\partial q}}+\dot{q}^b \frac{\partial^2 S}{\partial q^b \partial q^a}=0 . \\
\Rightarrow & \frac{\partial^2 S}{\partial t \partial q^a}+\dot{q}^b \frac{\partial^2 S}{\partial q^b \partial q^a}=-\left.\frac{\partial H}{\partial q^a}\right|_{p=\frac{\partial S}{\partial q}} .
\end{aligned}
$$
Suppose the Hamiltonian carries no explicit time, so energy is conserved; call this conserved quantity $E$. The Hamilton–Jacobi equation then has a solution depending on $E$. Define
$$
S(E, q, t)=W(E, q)-E t .
$$
Substituting into the Hamilton–Jacobi equation yields
$$
H\left(q, \frac{\partial W}{\partial q}\right)=E .
$$
Solving this PDE gives a class of solutions of the original Hamilton–Jacobi equation, characterized by the fact that the motion solved from it all has the same energy $E$. $W(E,q)$, often abbreviated $W(q)$, is sometimes called **Hamilton's characteristic function**, also the reduced action — the pure spatial part with the time-evolution term stripped off. It is in essence the "action" of the **Maupertuis least-action principle**, defined as $W = \int \mathbf{p} \cdot d\mathbf{q}$. When we ignore the passage of time and care only about the shape of the spatial path, $W$ is the decisive "action":
$$
p_i=\frac{\partial S}{\partial q^i}=\frac{\partial W}{\partial q^i} \quad \Longrightarrow \mathbf{p}=\nabla W
$$
Plug in a concrete Hamiltonian. For a classical particle in a potential $V(q)$, usually $H = \frac{p^2}{2m} + V(q)$. Putting in $p = \nabla W$: $\frac{1}{2 m}|\nabla W|^2+V(q)=E$, which rearranges to
$$
|\nabla W|^2=2 m(E-V(q))
$$
The left side is a squared gradient, the right a function of position $q$ alone. This is exactly the form of the **eikonal equation** of geometric optics, which describes the phase (optical path) $\mathcal{S}(q)$ of a light wave propagating through a medium of varying refractive index $n(q)$:
$$
|\nabla \mathcal{S}|^2=n^2(q)
$$
**The particle's momentum $p$** plays the role of the **refractive index $n$**: in optics light always bends toward higher $n$ (Snell's law); in mechanics the particle always bends toward higher momentum $p$ (where $V$ is low, kinetic energy high). So a particle's trajectory in a potential is *exactly equivalent* to a light ray's trajectory in a medium of varying refractive index. And the **action $W$** plays the role of the **phase $\mathcal{S}$**: the surfaces of constant $W$ are the **wavefronts** of the "mechanical wave," and the particle trajectories (rays) are the lines perpendicular to these wavefronts. This resemblance directly led to the discovery of quantum mechanics. Because **geometric optics** is the approximation of **wave optics** (as wavelength $\lambda \to 0$), and **classical mechanics** (the H–J equation) looks like geometric optics, Schrödinger asked: if classical mechanics is the "geometric optics," does that mean a more fundamental "wave mechanics" hides behind it? Working backward, treating $W$ as the phase of a wave, he successfully guessed the equation the wavefunction $\psi$ obeys — the Schrödinger equation.

## Where this leaves us

So this is the symplectic world. We started from a single closed, non-degenerate 2-form and watched almost all of mechanics crystallize out of it: the Poisson bracket revealed itself as a Lie-algebra structure (the classical ancestor of the quantum commutator); canonical transformations turned out to be the symplectomorphisms that preserve $\omega$, with time evolution itself just one such flow; Liouville and Poincaré followed from $\omega$'s rigidity, with Gromov's camel whispering the uncertainty principle; and the Hamilton–Jacobi equation brought us right up to the wavefront of the Schrödinger equation. Phase space, it turns out, was quietly quantum all along.

But we have so far lived in the gentle country of integrable systems — phase space neatly foliated into invariant tori, motion forever regular. That country has a border. Perturb an integrable system even slightly and some of those tori survive while others shatter, and in the rubble grows chaos: exponential sensitivity, homoclinic tangles, the mixing that finally lets statistical mechanics take hold. That is the story of Part 4, our finale, where the geometry we have built becomes the geometry of order *and* disorder, and where dynamics hands the baton to thermodynamics. *To be continued.*



