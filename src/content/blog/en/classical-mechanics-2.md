---
title: "A Journey Through Classical Mechanics (Part 2): How Symmetry Writes the Law"
date: "2026-01-11"
lang: "en"
translationKey: "classical-mechanics-2"
tags: ["physics", "classical-mechanics"]
category: "Classical Mechanics Series"
summary: "Every continuous symmetry hides a conserved quantity, and — turned around — symmetry alone can dictate the action. Part 2 follows that idea from Noether's theorem through relativistic invariance to the electromagnetic coupling and its quantum echo."
---

> Part 2 of four. [Part 1](/blog/classical-mechanics-1) built the foundations: how force comes from a potential, how differential forms unify the integral theorems, and how the principle of least action lets us attach a single number to an entire path. We ended on a promise — that the action is not something to compute *after* the physics, but something *symmetry can hand us in advance*. This part makes good on it.

Let me restate where we left off, because it sets the whole agenda. We learned to write a system's action and extremize it. But for a system we have never seen before, *where does the action come from?* The honest answer is: we guess it. The miraculous answer is: the guess is almost completely pinned down by symmetry. A physical law's symmetry is just the indistinguishability of certain situations — we can perform some operation on the system, and the law comes out in exactly the same mathematical form afterward. So symmetry is the *invariance* of the law under an operation. In this part we make that precise (Noether's theorem), then turn it into a construction tool, building the relativistic free particle and its electromagnetic coupling out of nothing but invariance — and finally watch the same structure reappear in quantum mechanics.

A first orientation on symmetry:
- The symmetry of a physical law is the indistinguishability of certain physical situations.
- That indistinguishability means we can perform some operation on the system, and before and after, the law keeps exactly the same mathematical form.
- So the symmetry of a physical law is the invariance of the law under the operation.

## 3. Symmetry

### 3.1 Noether's theorem: symmetry and conservation laws

Continuing from Part 1, we may take a physical law to be whatever comes out of demanding the action be stationary, $\delta S[q(t)]=0$. So before and after a transformation we need both $\delta S[q(t)]=\delta S[\tilde{q}(t)]=0$, where $\tilde{q}(t)=F(q(t))$. The simplest, most direct way to guarantee this is for the action to be *equal* before and after, $S[q(t)]= S[\tilde{q}(t)]$. That is, under a symmetry operation the action functional is unchanged — symmetry is the invariance of the action.

Operations come in two kinds, discrete and continuous, and so do symmetries. The celebrated **Noether theorem** says: every continuous symmetry corresponds to a conserved physical quantity.

Here is the proof (assuming, for simplicity, that the operation does not change time — this can be generalized). Suppose the system has a continuous symmetry $G(\theta)$ with parameter $\theta$, where $\theta=0$ is the identity and $\theta=\varepsilon$ is an infinitesimal transformation, so $q(t) \rightarrow \widetilde{q}(t)=q(t)+\varepsilon F(q(t))$ still keeps $\delta S=S[\tilde{q}(t)]-S[q(t)]=\int d t L(\tilde{q}, \dot{\tilde{q}})-\int d t L(q, \dot{q})=0$. Now here is the clever move: imagine the constant $\varepsilon$ becomes an arbitrary function $\varepsilon(t)$, but with $\varepsilon(t_i)=\varepsilon(t_f)=0$, so that $\delta q=\tilde{q}(t)-q(t)=\varepsilon(t) F(q(t))$. Of course, such a time-dependent $\varepsilon(t)$ is no longer a symmetry parameter — a symmetry parameter cannot depend on $t$ — so this transformation is not a symmetry and need not leave the action invariant. *But* if $\varepsilon(t)$ relaxes back to a constant, the action must again be invariant. To pin down $\delta S$, consider three points:
- The action is a time integral of some function (the Lagrangian), so its change must also be a time integral.
- The Lagrangian contains only first derivatives of $q(t)$, so its change can contain at most first derivatives of $\varepsilon(t)$.
- Computed to first order, the change cannot contain $\varepsilon(t)$ itself, because such a term would fail to vanish when $\varepsilon(t)$ relaxes to a constant. So the first-order change can only contain $\dot{\varepsilon}$, which automatically vanishes when $\varepsilon(t)$ becomes constant.

Putting the three together, we must have
$$
\delta S=\int_{t_i}^{t_f} d t\delta L=\int_{t_i}^{t_f} d t(L(\widetilde{q}, \dot{\widetilde{q}})-L(q, \dot{q}))=\int_{t_i}^{t_f} d t Q(q, \dot{q}) \dot{\varepsilon}(t).
$$
For the true physical path $\delta S=0$, so integrating by parts gives $\delta S=-\int_{t_i}^{t_f} d t \dot{Q}(q, \dot{q}) \varepsilon(t)=0,\frac{dQ}{dt}=0$. That is: $Q(q,\dot{q})$ is conserved. And notice — this hands us a *recipe* for finding conserved quantities, not just a theorem about them.

> **Example (spatial translation invariance and momentum conservation).** Translate coordinates: $\mathbf{x}_i \rightarrow \widetilde{\mathbf{x}}_i=\mathbf{x}_i+\mathbf{a}$. Taking $\mathbf{a}=\varepsilon$, $$0=\delta L=L\left(\mathbf{x}_i+\varepsilon, \dot{\mathbf{x}}_i\right)-L\left(\mathbf{x}_i, \dot{\mathbf{x}}_i\right)=\varepsilon \cdot \sum_j \frac{\partial L}{\partial \mathbf{x}_j}.$$ Promoting $\varepsilon$ to $\varepsilon(t)$,
> $$
> \begin{aligned}
> \delta S & =\int d t \delta L=\int d t\left[\sum_j \frac{\partial L}{\partial \mathbf{x}_j} \cdot \delta \mathbf{x}_j+\sum_j \frac{\partial L}{\partial \dot{\mathbf{x}}_j} \delta \dot{\mathbf{x}}_j\right] \\
> & =\int d t\left[\sum_j \frac{\partial L}{\partial \mathbf{x}_j} \cdot \varepsilon+\sum_j \frac{\partial L}{\partial \dot{\mathbf{x}}_j} \cdot \dot{\varepsilon}\right]=\int d t\left(\sum_j \frac{\partial L}{\partial \dot{\mathbf{x}}_j}\right) \cdot \dot{\varepsilon}
> \end{aligned}
> $$
> so the conserved quantity is the total momentum: $$\sum_j \frac{\partial L}{\partial \dot{\mathbf{x}}_j}=\sum_j \mathbf{p}_j=\mathbf{p}.$$

> **Example (spatial rotation invariance and angular momentum conservation).** In $d$-dimensional space $\vec{x}=\left(x^1, x^2, \cdots x^d\right)=x^\alpha ,\alpha=1,2, \cdots d$, an infinitesimal rotation gives
> $$
> \delta x_\alpha=\varepsilon_{\alpha \beta} x^\beta . \delta \vec{x}^2=0=\vec{x} \delta \vec{x}=\varepsilon_{\alpha \beta} x^\alpha x^\beta \Rightarrow \varepsilon_{\alpha \beta}=-\varepsilon_{\beta \alpha} .
> $$
> So the number of independent parameters is $\frac{d(d-1)}{2}$. If $\varepsilon_{\alpha \beta}$ is constant, $\delta \dot{x}_\alpha=\varepsilon_{\alpha \beta} \dot{x}^\beta$; if it becomes $\varepsilon_{\alpha \beta}(t)$, then $\delta \dot{x}_\alpha=\varepsilon_{\alpha \beta} \dot{x}^\beta+\dot{\varepsilon}_{\alpha \beta} x^\beta$, whence $$\begin{aligned}\delta L & =\frac{\partial L}{\partial \dot{x}^\beta} \dot{\varepsilon}^{\beta \alpha} x_\alpha=p_\beta x_\alpha \dot{\varepsilon}^{\beta \alpha}=-\frac{1}{2}\left(x_\alpha p_\beta-x_\beta p_\alpha\right) \dot{\varepsilon}^{\alpha \beta} . \\ \delta S & = -\frac{1}{2} \int d t\left(x_\alpha p_\beta-x_\beta p_\alpha\right) \dot{\varepsilon}^{\alpha \beta} \end{aligned}$$ so angular momentum is conserved:
> $$
> J_{\alpha \beta}=x_\alpha p_\beta-x_\beta p_\alpha,\quad J^i=\frac{1}{2} \varepsilon^{i j k} J_{j k}.
> $$

> **Example (time translation symmetry and energy conservation).** For a closed system the Lagrangian carries no explicit $t$, so under $t \rightarrow \tilde{t}=t+a, q(t) \rightarrow \tilde{q}(t)=q(\tilde{t})$ the action is unchanged:
> $$
> \begin{aligned}
> S[q(t)]=\int_{t_i}^{t_f} d t L(q(t), \dot{q}(t)) & \rightarrow \\
> \left.S[q(\widetilde{t})]=\int_{t_i-a}^{t_f-a} d t L(q \widetilde{t}), \frac{d}{d t} q(\widetilde{t})\right) & \left.=\int_{t_i}^{t_f} d \widetilde{t} L(q \widetilde{t}), \dot{q}(\widetilde{t})\right) \\
> & =\int_{t_i}^{t_f} d t L(q(t), \dot{q}(t))=S[q(t)].
> \end{aligned}
> $$
> But an open system, with $L(q,\dot{q},t)$ depending explicitly on time, has no time-translation invariance. Now take the transformation $t \rightarrow \widetilde{t}(t)=t+\varepsilon(t)$:
> $$
> \begin{aligned}
> S[q(\widetilde{t})] & =\int d t L\left(q(\widetilde{t}), \frac{d}{d t} q(\widetilde{t})\right)=\int d \widetilde{t}\left(\frac{d t}{d \widetilde{t}}\right) L\left(q(\widetilde{t}),\left(\frac{d \widetilde{t}}{d t}\right) \dot{q}(\widetilde{t})\right) \\
> & =\int d \widetilde{t}\left(\frac{1}{1+\dot{\varepsilon}}\right) L(q(\widetilde{t}),(1+\dot{\varepsilon}) \dot{q}(\widetilde{t})) \\
> & =\int d \widetilde{t} L(q (\widetilde{t}), \dot{q}(\widetilde{t}))-\int d \widetilde{t}(\dot{\varepsilon}) L(q (\widetilde{t}), \dot{q}(\widetilde{t}))+\int d \widetilde{t} \frac{\partial L}{\partial(\dot{q}(\widetilde{t}))} \dot{q}(\widetilde{t})(\dot{\varepsilon}) \\
> & =\int d t L(q(t), \dot{q}(t))+\int d t\left[\frac{\partial L}{\partial(\dot{q}(t))} \dot{q}(t)-L(q(t), \dot{q}(t))\right] \dot{\varepsilon}, \\ 0= \delta S & = S[q(\widetilde{t})]-S[q(t)]=\int d t\left[\frac{\partial L}{\partial \dot{q}} \dot{q}-L(q, \dot{q})\right] \dot{\varepsilon}=\int d t\left[p \dot{q}-L(q, \dot{q})\right] \dot{\varepsilon}=\int d tH(q,p) \dot{\varepsilon}
> \end{aligned}
> $$
> which is precisely conservation of the Hamiltonian — energy. This derivation is also the proof of the time-varying Noether theorem.

> **Example (Galilean invariance).** Under $\mathbf{x} \rightarrow \mathbf{x}+\mathbf{v} t$, consider the many-particle action $S[\mathbf{x}(t)]=\int d t\left[\frac{1}{2} \sum_i m_i \dot{\mathbf{x}}_i^2-\sum_{i<j} V\left(\mathbf{x}_i-\mathbf{x}_j\right)\right]$. We can compute the transformed action as $S[\tilde{\mathbf{x}}(t)]=S[\mathbf{x}(t)]+\sum_i m_i\left[\mathbf{x}_i\left(t_f\right)-\mathbf{x}_i\left(t_i\right)\right] \cdot \mathbf{v}+\frac{1}{2} m \mathbf{v}^2\left(t_f-t_i\right)$. This differs from the original, but only by endpoint terms, which do not affect $\delta S=0$ — so the Galilean transformation is still a symmetry of this system. Further, taking $\mathbf{x}_i \rightarrow \widetilde{\mathbf{x}}_i=\mathbf{x}_i+\varepsilon(t) t$ gives $\delta S=\int_{t_i}^{t_f} d t\left[\left(\sum_i m_i \dot{\mathbf{x}}_i\right) t-\sum_i m_i \mathbf{x}_i\right] \cdot \dot{\varepsilon}$, so the conserved quantity of Galilean symmetry is $\mathbf{K}=\mathbf{p} t-m \mathbf{x}_c=\mathbf{p} t-\sum_i m_i \mathbf{x}_i$ — exactly what you would expect.

### 3.2 Symmetry determines the action

Let us collect what we now know:
- The action gives the equations of motion.
- The action gives the Lagrangian, and a Legendre transform gives the Hamiltonian.
- Invariance of the action gives invariance of the physical law.

So how do we get a system's action in the first place? Basically by guessing — but with symmetry as the constraint. Here is the roadmap for the rest of this part, and for physics far beyond it:
- We will focus on using *relativistic invariance* to fix the action of a free particle in special relativity.
- And then use *gauge invariance* to fix the action of a charged particle coupled to the electromagnetic field.
- Later, the gauge symmetry of electromagnetism was generalized by Yang and Mills into the so-called non-Abelian gauge symmetry.
- Later still, people found that the strong and weak interactions are each governed by a non-Abelian gauge symmetry.
- And Einstein found that gravity obeys a general covariance — more modernly, diffeomorphism invariance — which determines both the action of a particle in a gravitational field and the action of the gravitational field itself, and so the Einstein equations. With that, all four fundamental interactions are determined by symmetry.

### 3.3 Relativistic invariance and the Lorentz transformation

Let me not rehearse the basic setup of special relativity. I will just write down the relation between the spacetime coordinates of two nearby events in two inertial frames: $d t^{\prime 2}-d x^{\prime 2}-d y^{\prime 2}-d z^{\prime 2}=d\tau^{\prime 2}=d\tau^2=d t^2-d x^2-d y^2-d z^2$, the **invariance of the spacetime interval**. For two given events, different observers measure different times and positions, but the spacetime interval $d\tau$ is an absolute, objective physical quantity, the same in every frame. If a particle moves from $(t, x, y,z)$ to $(t + dt, x + dx, y + dy,z + dz)$, then the interval $d\tau^2$ equals the square of the time elapsed on a clock riding along with the particle (because in the particle's own frame the clock's spatial coordinate does not change) — so $d\tau$ is the particle's **proper time**. The interval is defined without reference to any particle, while proper time is tied to a moving particle; they are two different concepts, often given different symbols.

Adopt $x^\mu,\mu=0,1,2,3,t=x^0, x=x^1, y=x^2, z=x^3$. The interval is $-d \tau^2=\eta_{\mu v} d x^\mu d x^v,-\eta_{00}=\eta_{11}=\eta_{22}=\eta_{33}=1$, with $\eta_{\mu\nu}$ the metric tensor of four-dimensional Minkowski spacetime — the flat spacetime of special relativity — and inner product $A \cdot B=A^\mu B_\mu=A_\mu B^\mu=\eta_{\mu v} A^\mu B^v$. The coordinate transformation between two frames is the **Lorentz transformation**, a linear transformation preserving the interval, $x^{\prime \mu}=\Lambda_v^\mu x^v$. Taking $y=y',z=z'$ gives $-d \tau^2=-d t^2+d x^2=d x^{+} d x^{-},x^+=x+t,x^-=x-t$, so we must have $d x^{+^{\prime}} d x^{-^{\prime}}=d x^{+} d x^{-}$, i.e. there exists $\omega$ with $x^{+^{\prime}}=e^{-\omega} x^{+},x^{-^{\prime}}=e^{\omega} x^{-}$, that is:
$$
\begin{aligned}
x^{\prime} & =\cosh (\omega) x-\sinh (\omega) t \\
t^{\prime} & =-\sinh (\omega) x+\cosh (\omega) t.
\end{aligned}
$$
Physically, the origin $x'=0$ of the $S'$ frame moves at speed $v$ in $S$, so $\tanh (\omega)=v$, hence $\cosh (\omega)=1 / \sqrt{1-v^2}, \sinh (\omega)=v / \sqrt{1-v^2}$, and
$$
\begin{aligned}
t^{\prime} & =\frac{t-v x}{\sqrt{1-v^2}}, \\
x^{\prime} & =\frac{x-v t}{\sqrt{1-v^2}}.
\end{aligned}
$$
Relativistic invariance says the action of a relativistic particle must be Lorentz invariant, and the only coordinate-related invariant available is the proper time $d\tau$. By dimensional analysis, the most direct relativistic particle action is therefore
$$
S[x(s)]=-m \int d \tau=-m \int d s \sqrt{-\eta_{\mu v} \frac{d x^\mu}{d s} \frac{d x^v}{d s}}
$$
where $s$ parametrizes the trajectory and the minus sign is there so it degenerates correctly to the non-relativistic limit. This action is manifestly reparametrization invariant. For instance, take $s=\tau$,
$$
S[x(\tau)]=-m \int d \tau=-m \int d \tau \sqrt{-\eta_{\mu v} \frac{d x^\mu}{d \tau} \frac{d x^v}{d \tau}} .
$$
Or take $s=x^0=t$, so $d \tau^2=d t^2-d \mathbf{x}^2=d t^2\left(1-\mathbf{v}^2\right)$; one then computes the four-momentum conjugate to the four-vector, $p^0=\frac{m}{\sqrt{1-\mathbf{v}^2}}, \mathbf{p}=\frac{m \mathbf{v}}{\sqrt{1-\mathbf{v}^2}}, -p^\mu p_\mu=\left(p^0\right)^2-\mathbf{p}^2=m^2$, and the action reads
$$
S[\mathbf{x}(t)]=-m \int d t \sqrt{1-\mathbf{v}^2}=-m \int d t+\int d t \frac{1}{2} m \mathbf{v}^2+\ldots
$$
So at low speed it degenerates to the non-relativistic free-particle action — the first term is a constant and drops out under variation. The whole free particle, recovered from one demand: Lorentz invariance.

We can go a step further and introduce an auxiliary variable $e(s)$ to write the action without a square root:
$$
S[e(s), x(s)]=\frac{1}{2} \int d s\left(e^{-1} \eta_{\mu v} \frac{d x^\mu}{d s} \frac{d x^v}{d s}-e m^2\right) .
$$
Simply using $\frac{\delta S}{\delta e(s)}=0$ to eliminate $e(s)$ returns the original action — much as the phase-space least-action principle gave us the coordinate-space one back in Part 1.

### 3.4 Coupling with the electromagnetic field

Now let the free particle interact with a field. In the Lorentz-force example back in Part 1 we introduced a vector potential $\mathbf{A}$; together with the scalar potential, and just like the four-momentum, we build a four-vector $A^\mu,\mu=0,1,2,3,A^0=\phi,A^i=A_i,i=1,2,3$. Note that $A^\mu$ is not itself physical — the physically measurable objects are the electric field $\mathbf{E}$ and magnetic field $\mathbf{B}$, packaged as $F_{i 0}=E_i, F_{i j}=\varepsilon_{i j k} B^k,i, j=1,2,3$, with the relation
$$
F_{\mu v}=\partial_\mu A_v-\partial_v A_\mu, \partial_\mu=\frac{\partial}{\partial x^\mu}.
$$
Clearly $F_{\mu\nu}$ is unchanged under $A_\mu \rightarrow A_\mu+\partial_\mu \varepsilon$, where $\varepsilon(x)$ is an arbitrary function of the spacetime coordinates $x^\mu$. This is the **gauge transformation** of electromagnetism; in the language of forms, $A=A_\mu d x^\mu,A\rightarrow A+d\varepsilon$. Since the fields are unchanged, the particle's motion under their influence is unchanged, so its action must also be unchanged — that is the **gauge symmetry**.

We now want to add to $-m\int d\tau$ a term that is *both* gauge invariant and Lorentz invariant. The only ingredients are $F$ or $A$. If we use $F$, the most direct Lorentz scalars are $F_{\mu \nu} \frac{d x^\mu}{d s} \frac{d x^v}{d s}$ or $F_{\mu v} F^{\mu v}$ — but the former vanishes by antisymmetry, and the latter is second order, negligible for small fields. We find instead that the term using $A$, namely $q\int^b_aA$, is the more reasonable one: although under a gauge transformation $q \int_a^b A \rightarrow q \int_a^b A+q \int_a^b d \varepsilon=q \int_a^b A+q(\varepsilon(b)-\varepsilon(a))$ the action itself changes, after variation the endpoint terms disappear, so it is admissible. The complete action of a relativistic charged particle is
$$
\begin{aligned}
S[x(s)] & =-m \int d \tau+q \int A \\
& =-m \int d s \sqrt{-\eta_{\mu v} \frac{d x^\mu}{d s} \frac{d x^v}{d s}}+q \int d s A_\mu \frac{d x^\mu}{d s}  \\
& \approx -m \int d t+\int d t\left[\frac{1}{2} m \mathbf{v}^2-q \phi+q \mathbf{A} \cdot \mathbf{v}\right]+\ldots
\end{aligned}
$$
The low-speed Lagrangian is $L \approx \frac{1}{2} m \mathbf{v}^2-q \phi+q \mathbf{A} \cdot \mathbf{v}$, with generalized momentum $\mathbf{p}=\frac{\partial L}{\partial \dot{\mathbf{x}}}=m \dot{\mathbf{x}}+q \mathbf{A}$, so the Hamiltonian is
$$
H=\mathbf{p} \cdot \mathbf{v}-L=\mathbf{p} \cdot \frac{\mathbf{p}-q \mathbf{A}}{m}-\left[\frac{1}{2} m\left(\frac{\mathbf{p}-q \mathbf{A}}{m}\right)^2-q \phi+q \mathbf{A} \cdot \frac{\mathbf{p}-q \mathbf{A}}{m}\right]=\frac{(\mathbf{p}-q \mathbf{A})^2}{2 m}+q \phi.
$$
Now we can cash in the geometric viewpoint from the end of Part 1 to understand *why* the canonical momentum is no longer $m\mathbf{v}$. In fact $\mathbf{p}$ is the **canonical momentum**, conjugate to the generalized coordinate, while $m\mathbf{v}$ is the **mechanical (kinematic) momentum**. The fact that $p \neq mv$ is the defining feature of an electromagnetically coupled system. The decomposition $\mathbf{p} = m\mathbf{v} + q\mathbf{A}$ is not an arbitrary mathematical combination; it is the fusion of two utterly different geometric structures on the manifold. In tensor notation the canonical momentum reads
$$
\begin{aligned}
p_i=\frac{\partial L}{\partial v^i} & =\frac{\partial}{\partial v^i}\left(\frac{1}{2} m g_{j k} v^j v^k+q A_j v^j-q \phi\right) \\
& =\frac{1}{2} m g_{j k}\left(\delta_i^j v^k+v^j \delta_i^k\right)+q A_j \delta_i^j \\
& =\frac{1}{2} m\left(g_{i k} v^k+g_{j i} v^j\right)+q A_i \\
& =m g_{i j} v^j+q A_i.
\end{aligned}
$$

- **The kinetic piece ($m\mathbf{v}$)** comes from the kinetic energy $T = \frac{1}{2} m g_{ij} v^i v^j$. Its very existence depends explicitly on the **metric tensor** $g_{ij}$ (the ruler that measures distances). Without a metric we could not define the magnitude $v^2$, and so could not define this part of the momentum. This piece encodes the particle's **inertia**.
- **The interaction piece ($q\mathbf{A}$)** comes from the coupling $q A_i v^i$. Geometrically, $A_i$ is a 1-form field. Note the contraction $A_i v^i$ does **not** need a metric; it is the natural pairing between the tangent vector $v$ and the cotangent vector $A$. In the language of fiber bundles, $\mathbf{A}$ is a **connection**. It dictates how the particle's internal state (its phase) is parallel-transported as it moves through space. This piece is purely **topological/geometric**, independent of how we measure distance.

The canonical momentum $\mathbf{p}$ welds together the metric-dependent inertial information ($mv$) and the connection-dependent geometric information ($qA$). Since $\mathbf{p}$ is defined as the gradient of $L$ ($\partial L / \partial \dot{q}$), it naturally lives as a covariant vector (1-form) on the cotangent bundle $T^*\mathcal{M}$, which makes it the most fundamental geometric object in phase-space dynamics.

### 3.5 Quantum extension

Through the canonical momentum and gauge invariance, we can make contact with quantum mechanics — and understand better *why* the connection that the gauge represents carries the particle's internal phase information. Let us ask: why, in quantum mechanics, is the basic variable corresponding to the gradient operator $-i\hbar\nabla$ the *canonical* momentum $\mathbf{p}$, rather than the mechanical momentum $m\mathbf{v}$? The answer comes from studying how the action $S$ responds to **gauge transformations**. Substituting, for an arbitrary scalar function $\chi(\mathbf{x},t)$, the gauge transformation
$$\mathbf{A}^{\prime}=\mathbf{A}+\nabla \chi, \quad \phi^{\prime}=\phi-\frac{\partial \chi}{\partial t}$$
into the Lagrangian gives
$$
\begin{aligned}
L^{\prime} & =\frac{1}{2} m \mathbf{v}^2-q\left(\phi-\partial_t \chi\right)+q(\mathbf{A}+\nabla \chi) \cdot \mathbf{v} \\
& =\left(\frac{1}{2} m \mathbf{v}^2-q \phi+q \mathbf{A} \cdot \mathbf{v}\right)+q\left(\partial_t \chi+\mathbf{v} \cdot \nabla \chi\right)=L+q \frac{d \chi}{d t}.
\end{aligned}
$$
The Lagrangian changes by a total time derivative. So the action $S = \int_{t_1}^{t_2} L dt$ changes by a boundary term:
$$
S^{\prime}=S+q\left[\chi\left(t_2\right)-\chi\left(t_1\right)\right].
$$
In the semiclassical path-integral formulation (or WKB approximation), the quantum wavefunction relates to the classical action as $\psi \sim e^{iS/\hbar}$. Applying the change $\Delta S = q\chi$, the transformed wavefunction $\psi'$ must relate to the original $\psi$ by
$$
\psi^{\prime}(\mathbf{x}, t)=e^{i \frac{q}{\hbar} \chi(\mathbf{x}, t)} \psi(\mathbf{x}, t).
$$
This reveals the physical essence of the gauge transformation: **it is a local rotation of the wavefunction's phase.** The field $\mathbf{A}$ is precisely the "connection" that manages this phase.

In quantum mechanics momentum is the generator of spatial translations, represented by the gradient $\nabla$. But if we apply the ordinary gradient to the transformed wavefunction, $\nabla \psi^{\prime}=\nabla\left(e^{i \frac{q}{\hbar} \chi} \psi\right)=e^{i \frac{q}{\hbar} \chi}\left(\nabla \psi+i \frac{q}{\hbar}(\nabla \chi) \psi\right)$, the result is **not** covariant: the $\nabla \chi$ term (from the gauge transformation of $\mathbf{A}$) spoils the simple transformation law. This means the ordinary derivative $\nabla$ (corresponding to mechanical momentum) is not a well-defined physical quantity under gauge transformations. To fix it, we introduce the **covariant derivative** $\mathbf{D} = \nabla - i \frac{q}{\hbar} \mathbf{A}$. Check its transformation under $\mathbf{A}' = \mathbf{A} + \nabla \chi$:
$$
\begin{aligned}
\mathbf{D}^{\prime} \psi^{\prime} & =\left(\nabla-i \frac{q}{\hbar} \mathbf{A}^{\prime}\right)\left(e^{i \frac{q}{\hbar} \chi} \psi\right) \\
& =\nabla\left(e^{i \frac{q}{\hbar} \chi} \psi\right)-i \frac{q}{\hbar}(\mathbf{A}+\nabla \chi)\left(e^{i \frac{q}{\hbar} \chi} \psi\right) \\
& =e^{i \frac{q}{\hbar} \chi}\left[\left(\nabla \psi+i \frac{q}{\hbar}(\nabla \chi) \psi\right)-i \frac{q}{\hbar} \mathbf{A} \psi-i \frac{q}{\hbar}(\nabla \chi) \psi\right] \\
& =e^{i \frac{q}{\hbar} \chi}\left(\nabla-i \frac{q}{\hbar} \mathbf{A}\right) \psi \\
& =e^{i \frac{q}{\hbar} \chi} \mathbf{D} \psi.
\end{aligned}
$$
The extra $\nabla \chi$ cancels perfectly! The operator $\mathbf{D}$ preserves the physical symmetry. Comparing with the momentum operator, the **physical (mechanical) momentum** corresponds to the gauge-invariant operator $\frac{\hat{\mathbf{p}}_{mech}}{i\hbar} \leftrightarrow \mathbf{D} = \nabla - i\frac{q}{\hbar}\mathbf{A}$. Multiplying both sides by $-i\hbar$: $\hat{\mathbf{p}}_{mech} = -i\hbar\nabla - q\mathbf{A}$. Since the classical relation is $\mathbf{p}_{mech} = \mathbf{p}_{can} - q\mathbf{A}$, we identify the **canonical momentum** operator as
$$
\hat{\mathbf{p}}_{c a n}=-i \hbar \nabla.
$$
The canonical momentum $\mathbf{p}$ corresponds to the pure differential operator $-i\hbar\nabla$ (the translation generator). Although $\nabla$ itself is not gauge invariant, it serves as the coordinate basis of the cotangent bundle. The vector potential $\mathbf{A}$, as a **connection**, corrects the geometry of phase space so that physical quantities (like velocity) become meaningful. This establishes that $\mathbf{p} = m\mathbf{v} + q\mathbf{A}$ is the inevitable bridge connecting classical geometry to quantum phase dynamics.

Push it one step further and we find the gauge transformation corresponds to a phase rotation of the wavefunction, $\psi' = e^{i\theta(\mathbf{x})} \psi$, with $\theta(\mathbf{x}) = \frac{q}{\hbar}\chi(\mathbf{x})$. All the possible phase factors $e^{i\theta}$ form a mathematical group, the **$U(1)$ group** (the one-dimensional unitary group). So from a **Lie-group viewpoint**, the essence of the electromagnetic interaction is that the physical system has a **local $U(1)$ gauge symmetry**. And from a **Lie-algebra viewpoint**, $U(1)$ is an **Abelian group**, meaning its transformations commute ($e^{i\theta_1} e^{i\theta_2} = e^{i\theta_2} e^{i\theta_1}$). Its Lie algebra is very simple — a single generator (the imaginary unit $i$) and vanishing structure constants. The power of this viewpoint is its generalization. Replace $U(1)$ with a more complicated, non-commuting matrix group (like $SU(2)$ or $SU(3)$) and we enter the realm of **Yang–Mills theory**, the foundation for describing the weak and strong interactions. There the vector potential $\mathbf{A}$ becomes a matrix (a non-Abelian gauge field), the gauge transformations no longer commute, and the physical picture grows far richer — but its geometric core is still the "connection" and "covariant derivative" we built right here in electromagnetism.

## Where this leaves us

Look at what symmetry alone accomplished. We never solved a single force law from scratch. We demanded Lorentz invariance and out came the free relativistic particle; we demanded gauge invariance and out came the entire electromagnetic coupling, complete with the $p \neq m\mathbf{v}$ we had first stumbled into geometrically in Part 1. Then the same gauge structure walked straight into quantum mechanics and explained why $-i\hbar\nabla$ is the canonical, not the mechanical, momentum. The action was never really ours to invent — symmetry was holding it the whole time.

But we have so far been content to let symmetry *constrain* the dynamics. We have not yet asked what the dynamics looks like in its own most natural geometry — the geometry the canonical momentum was quietly pointing at, the one where position and momentum stand on perfectly equal footing. That is the symplectic world of Hamiltonian mechanics: Poisson brackets, canonical transformations, and the surprising rigidity of phase space itself. That is where Part 3 takes us. *To be continued.*

