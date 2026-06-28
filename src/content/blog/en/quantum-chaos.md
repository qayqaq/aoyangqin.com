---
title: "Quantum Chaos: Where Did the Butterfly Go?"
date: "2025-09-14"
lang: "en"
translationKey: "quantum-chaos"
tags: ["quantum-mechanics", "chaos", "physics", "chaos-theory", "complex-systems"]
category: "Blog"
summary: "Classical chaos lives and dies by the butterfly effect. But the Schrödinger equation is linear, so two close quantum states stay close forever. So where does chaos hide in the quantum world?"
---

Here is a question that sounds almost like a trick. Classical chaos is defined by the *butterfly effect*: two trajectories that start a hair apart drift exponentially far apart. Quantum mechanics, on the other hand, is governed by the Schrödinger equation, which is perfectly **linear** — and we will see in a moment that linearity forbids any such exponential divergence. So if a classical system is chaotic, but its quantum version cannot be, what exactly happens to the chaos when we "quantize" it? Does it simply vanish?

It does not. And the story of where it hides is, to me, one of the most beautiful in modern physics. Let us go looking for the butterfly.

## 1. Why the classical definition breaks down

Before we can find the quantum fingerprints of chaos, we have to be honest about why the *classical* definition refuses to carry over. So let us first write down what we mean by classical chaos, and then watch each ingredient fail.

### 1.1 What makes a classical system chaotic

A classical system earns the label "chaotic" when it shows a few related symptoms:

- **Sensitive dependence on initial conditions.** Two initially close trajectories separate as $\delta x(t) \approx \delta x(0) e^{\lambda t}$, where $\lambda > 0$ is the **Lyapunov exponent**. This is the butterfly effect, made quantitative.
- **Topological mixing.** Any region of phase space eventually spreads to overlap any other region — stir long enough and the cream reaches every corner of the coffee.
- **Dense periodic orbits.** The system is threaded by infinitely many unstable periodic orbits, packed densely into phase space.

Hold on to that last one. It looks like the least important of the three, but it is the thread that will lead us all the way home.

### 1.2 Why quantum mechanics refuses to play along

Now watch what happens when we try to import this picture into the quantum world. Two walls go up immediately.

First, **the Schrödinger equation is linear**. A state $|\psi(t)\rangle$ evolves as
$$
i\hbar \frac{\partial}{\partial t}|\psi(t)\rangle = \hat{H}|\psi(t)\rangle
$$
where $\hat{H}$ is the Hamiltonian. Because this evolution is unitary, the overlap between any two states is frozen for all time:
$$
|\langle\psi_1(t)|\psi_2(t)\rangle|^2 = |\langle\psi_1(0)|\psi_2(0)\rangle|^2
$$
Read that equation slowly, because it is the whole problem in one line. Two quantum states that start close *stay* exactly as close — forever. There is simply no room for the exponential divergence that defines classical chaos. The butterfly has nowhere to flap.

Second, **there are no trajectories to diverge in the first place.** The uncertainty principle $\Delta x \Delta p \ge \hbar/2$ forbids us from naming a sharp point $(x, p)$ in phase space. With no trajectory, the very question "how fast do two trajectories separate?" stops making sense.

So we are stuck — if we keep staring at the *dynamics*. The way out, it turns out, is to stop watching the motion and start watching two other things: the **energy levels** and the **wavefunctions**. That is where the fingerprints are hiding.

## 2. The fingerprints of chaos

### 2.1 Energy levels that avoid each other

The first fingerprint is statistical, and it is captured by a remarkably bold claim, the **Bohigas–Giannoni–Schmit (BGS) conjecture**: if a system's classical analogue is chaotic, then the statistics of its quantum energy spectrum are those of **Random Matrix Theory (RMT)**. In other words, you can hear whether a system is chaotic just by listening to how its energy levels are spaced.

Let us see what "listening to the spacings" means. Take the gaps $s$ between adjacent energy levels (rescaled so the average gap is 1) and ask how they are distributed. We will not just quote the two answers — we will derive both, because each derivation tells us *why* the spectrum looks the way it does.

**The integrable case: deriving $P(s)=e^{-s}$.** For a classically **integrable** (non-chaotic) system, the levels know nothing about each other; they fall independently, like raindrops on a pavement. Let us turn that one assumption — independence — into a distribution. Suppose the levels form a Poisson process with mean density 1 (we have rescaled to unit mean spacing). Pick a level and ask for the probability that the *next* one lies a distance $s$ away. That requires two things to happen at once: no level anywhere in the open interval $(0,s)$, and one level in the sliver $[s, s+ds]$.

Slice $(0,s)$ into $N$ tiny bins of width $s/N$. With mean density 1, the chance of finding a level in one bin is $s/N$, so the chance of finding *none* is $1 - s/N$. Independence lets us multiply across the bins:
$$
P_0(s) = \lim_{N\to\infty}\left(1 - \frac{s}{N}\right)^{N} = e^{-s}
$$
The probability density of then placing a level right at $s$ is just the density, $1$. Multiplying the "empty gap" by the "one level here" gives the spacing distribution directly,
$$
P(s) = P_0(s)\cdot 1 = e^{-s}
$$
and one checks immediately that $\int_0^\infty P\,ds = 1$ and $\int_0^\infty s\,P\,ds = 1$, so it is correctly normalized with unit mean. Notice this peaks at $s = 0$: integrable systems are perfectly happy to let two levels sit right on top of each other. Independence *permits* coincidences. Hold that thought, because chaos will forbid them.

### 2.2 Level repulsion from a 2×2 matrix: the Wigner surmise

For a classically **chaotic** system, something strikingly different happens — the levels *repel* each other, as if each one carved out a little exclusion zone around itself. Wigner's insight was that you can capture the essence of this with the smallest possible random Hamiltonian: a $2\times 2$ real symmetric matrix, standing in for two levels that are about to collide. With time-reversal symmetry the matrix is real and symmetric (the Gaussian Orthogonal Ensemble, GOE):
$$
H = \begin{pmatrix} H_{11} & H_{12} \\ H_{12} & H_{22} \end{pmatrix}
$$
Its two eigenvalues are $E_\pm = \tfrac{1}{2}(H_{11}+H_{22}) \pm \tfrac{1}{2}\sqrt{(H_{11}-H_{22})^2 + 4H_{12}^2}$, so the **level spacing** is
$$
s = E_+ - E_- = \sqrt{(H_{11}-H_{22})^2 + 4H_{12}^2}
$$
Here is the geometric heart of the whole effect. For the gap $s$ to vanish, *two* independent quantities must vanish at once: $H_{11}-H_{22} = 0$ **and** $H_{12} = 0$. A single accidental coincidence is not enough; the levels have to thread two needles simultaneously. That is the origin of level repulsion, and we are about to see it appear as a Jacobian.

We give the matrix elements the natural GOE weight — independent Gaussians, with the off-diagonal element twice as "stiff" so that the measure is invariant under orthogonal rotations:
$$
P(H_{11},H_{22},H_{12}) \propto \exp\!\left[-\tfrac{1}{2}\big(H_{11}^2 + H_{22}^2 + 2H_{12}^2\big)\right]
$$
Now change variables. Introduce the half-difference and half-sum coordinates $u = \tfrac{1}{2}(H_{11}-H_{22})$ and $v=\tfrac{1}{2}(H_{11}+H_{22})$, together with $w=H_{12}$. In these coordinates $s = 2\sqrt{u^2 + w^2}$, so the surface of constant spacing is a *circle* of radius $r=s/2$ in the $(u,w)$ plane. To find $P(s)$ we integrate the Gaussian measure over everything except $s$. The average $v$ decouples and integrates away. What remains is an integral over the $(u,w)$ plane, which we do in polar coordinates $u = r\cos\theta,\ w=r\sin\theta$:
$$
P(s) \propto \iint \delta\!\big(s - 2\sqrt{u^2+w^2}\big)\, e^{-(u^2+w^2)}\,du\,dw
$$
The polar area element is $du\,dw = r\,dr\,d\theta$. That factor of $r$ is the **Jacobian of going to eigenvalue coordinates**, and it is everything: it is the reason the distribution is pushed to zero at small spacing. Doing the angular integral (a full $2\pi$) and the radial delta function with $r = s/2$,
$$
P(s) \propto r\, e^{-r^2}\Big|_{r=s/2} \propto s\, e^{-s^2/4}
$$
The linear factor $s$ out front is the level repulsion, and it was *not* put in by hand — it is purely the geometric price of asking two coordinates $(u,w)$ to land on a circle of vanishing radius. Fixing the two constants by demanding $\int_0^\infty P\,ds = 1$ and $\int_0^\infty s\,P\,ds = 1$ (normalization and unit mean) pins down the answer:
$$
P(s) = \frac{\pi s}{2}\, e^{-\pi s^2/4}
$$
And here is the punchline: this distribution is *zero* at $s = 0$, with a slope set by that lone factor of $s$. Two levels almost never coincide, because to coincide they would have to solve two equations at once, and the Gaussian measure assigns vanishing weight to that double coincidence. **Level repulsion is the mathematical signature of chaos**, written directly into the spectrum — and it is, at bottom, a Jacobian.

> *A quick sanity check on the normalization.* Write $P(s)=C\,s\,e^{-a s^2}$. Then $\int_0^\infty P\,ds = C/(2a)$ and $\int_0^\infty s\,P\,ds = C\sqrt{\pi}/(4a^{3/2})$. Setting both to $1$ and dividing gives $\sqrt{\pi}/(2\sqrt{a}) = 1$, so $a=\pi/4$ and $C=2a=\pi/2$. That is exactly $\tfrac{\pi s}{2}e^{-\pi s^2/4}$, with $\langle s\rangle = 1$ as promised.

### 2.3 The three ensembles and the Dyson index β

The factor of $s$ we just earned was no accident of the real symmetric case — it is the first member of a family. Look again at *why* the gap was hard to close: it took two independent real numbers, $u$ and $w$, hitting zero together, and the area element $r\,dr$ supplied one power of $s$. If the off-diagonal element had carried *more* real components, the constant-$s$ surface would have been a higher-dimensional sphere, and its volume element would have supplied a higher power of $s$.

That is the entire content of Dyson's classification. All three Gaussian ensembles share the form
$$
P(s) \propto s^{\beta}\, e^{-c\, s^2}
$$
and the exponent $\beta$ — the **Dyson index** — is simply the number of real parameters in the off-diagonal matrix element:

- **GOE, $\beta = 1$:** time-reversal symmetry present. The matrix is real symmetric, $H_{12}$ is a single real number, the constant-$s$ surface is a circle, and the Jacobian gives one power of $s$. This is the case we just derived.
- **GUE, $\beta = 2$:** time-reversal symmetry broken (say, by a magnetic field). The matrix is complex Hermitian, $H_{12} = a + ib$ has *two* real components, the constant-$s$ surface is a 2-sphere, and the volume element supplies $s^2$. One finds $P(s) = \tfrac{32}{\pi^2} s^2 e^{-4s^2/\pi}$.
- **GSE, $\beta = 4$:** time-reversal symmetry with half-integer spin. The off-diagonal element is a real quaternion with *four* real components, giving $s^4$.

So the strength of the level repulsion is not an arbitrary fact about each ensemble — it is a direct count of how many real numbers must simultaneously vanish for two levels to meet. Symmetry sets the count; the count sets $\beta$; and $\beta$ sets how violently the levels avoid one another.

> **Where does Random Matrix Theory come from?** Eugene Wigner introduced it to tackle the hopelessly complicated spectra of heavy atomic nuclei. The audacious idea: stop trying to solve the real Hamiltonian, and replace it with a giant matrix of random numbers. What survives this brutal simplification are exactly the *universal* features — the ones that depend only on symmetry. The relevant ensemble is fixed by what symmetries the system has:
> - **Gaussian Orthogonal Ensemble (GOE):** time-reversal symmetry present.
> - **Gaussian Unitary Ensemble (GUE):** time-reversal symmetry broken (say, by a magnetic field).
> - **Gaussian Symplectic Ensemble (GSE):** time-reversal symmetry with half-integer spin.

That a system as messy as a uranium nucleus and a clean mathematical billiard table share the *same* spacing statistics is, when you think about it, astonishing. It is the universality of chaos.

### 2.4 Scars: the ghost of a classical orbit

The energy levels give us a statistical fingerprint. The wavefunctions give us a *visual* one.

Naively, in a chaotic system you would expect each eigenfunction to be a structureless mess, smeared uniformly over all the space it is allowed to explore. (This expectation even has a name — quantum ergodicity.) And yet, when people actually computed these wavefunctions, many of them turned out to be *not* uniform at all. Instead, the probability density piles up along the tracks of the unstable **classical periodic orbits**.

This is the phenomenon of **scarring**, and the name is perfect: the quantum wavefunction carries a scar in the exact shape of a classical trajectory. Remember those dense unstable periodic orbits from Section 1.1, the ingredient that looked least important? Here they are, branded directly onto the quantum state. The classical ghost refuses to be exorcised.

## 3. The bridge: Gutzwiller's trace formula

By now you might suspect there is a deep link between periodic orbits and the quantum spectrum. There is, and it can be written down explicitly. The bridge is built in the **semiclassical** limit, where $\hbar$ is small, and its centerpiece is the **Gutzwiller trace formula**. Let us actually build it, because the logical chain — Green's function, then semiclassical propagator, then stationary phase, then periodic orbits — is the whole reason the two fingerprints of Section 2 turn out to be one.

**Step 1: the density of states is the trace of a Green's function.** Start from the object we want, the density of states $d(E) = \sum_n \delta(E - E_n)$. The retarded Green's function (resolvent) $\hat{G}(E) = (E - \hat{H} + i0^+)^{-1}$ has poles at every eigenvalue, and the Sokhotski–Plemelj identity $\tfrac{1}{x+i0^+} = \mathcal{P}\tfrac{1}{x} - i\pi\delta(x)$ turns those poles into delta functions. Taking the trace in the energy basis,
$$
\operatorname{Tr}\hat{G}(E) = \sum_n \frac{1}{E - E_n + i0^+} \;\Longrightarrow\; d(E) = -\frac{1}{\pi}\,\text{Im}\operatorname{Tr}\hat{G}(E)
$$
So the spectrum is encoded entirely in $\operatorname{Tr}\hat{G}$. In position space the trace is $\operatorname{Tr}\hat G = \int d^f q\; G(q,q;E)$ — a sum over amplitudes to start at $q$ and return to the same $q$. The word "return" is the first hint that closed orbits are coming.

**Step 2: the semiclassical propagator.** The Green's function is the time-Fourier transform of the propagator $K(q',q;t) = \langle q'|e^{-i\hat{H}t/\hbar}|q\rangle$. In the semiclassical limit Van Vleck gives the propagator as a sum over *classical paths* from $q$ to $q'$, each carrying the phase of its classical action $R$ and an amplitude set by how neighboring trajectories focus:
$$
K(q',q;t) \approx \sum_{\text{cl. paths}} \left|\det\frac{\partial^2 R}{\partial q'\,\partial q}\right|^{1/2} e^{\,i R(q',q;t)/\hbar - i\nu\pi/2}
$$
Fourier transforming to energy replaces time by a Legendre transform, turning the time action $R$ into the energy action $S(q',q;E) = \int_q^{q'} p\,dq$. The result is a semiclassical Green's function written as a sum over classical paths of fixed energy $E$ from $q$ to $q'$.

**Step 3: stationary phase selects periodic orbits.** Now take the trace, setting $q'=q$ and integrating over $q$. With $\hbar$ small, the phase $S/\hbar$ oscillates ferociously, and the integral is dominated by **stationary-phase points** where $\partial S/\partial q = 0$. But $\partial S/\partial q' - \partial S/\partial q = p' - p$, so stationarity at $q'=q$ demands $p' = p$ as well: the trajectory must return to the same position *and* the same momentum. That is precisely the condition for a **closed classical orbit**. The integral therefore collapses onto a sum over periodic orbits — exactly the dense, unstable orbits from Section 1.1 — and evaluating the Gaussian fluctuations around each one produces the stability amplitude. We arrive at the trace formula:
$$
d(E) \approx \bar{d}(E) + \frac{1}{\pi\hbar} \text{Re} \sum_{p} A_p e^{i(S_p(E)/\hbar - \mu_p \pi/2)}
$$
where
- $\bar{d}(E)$ is the smooth, average part of the density of states (the Weyl term, from the trajectories of zero length),
- the sum runs over all primitive periodic orbits $p$ and their repetitions,
- $S_p(E) = \oint_p p\,dq$ is the classical action of the orbit,
- $A_p$ is an amplitude set by the orbit's stability — concretely $A_p = T_p^{\text{prim}}/\sqrt{|\det(M_p - I)|}$, where $M_p$ is the monodromy (stability) matrix and $T_p^{\text{prim}}$ the primitive period, so that *unstable* orbits (large stretching) contribute *less*,
- $\mu_p$ is the Maslov index, an integer phase correction counting the conjugate points (focal points) along the orbit.

Look at what this is really saying. On the left sits a purely quantum object — the discrete energy levels. On the right sits a sum over purely *classical* trajectories. The wiggles in the quantum spectrum are *dictated* by the classical periodic orbits. In a chaotic system those orbits proliferate exponentially — their number grows like $e^{hT}/T$ with the topological entropy $h$ — and their tangled, incommensurate phases are exactly what conspire to produce the level repulsion that RMT describes. The two fingerprints of Section 2 turn out to be the same fingerprint, seen from two sides.

### 3.1 From orbits to correlations: the spectral form factor

There is a clean way to watch the trace formula *become* random-matrix statistics. Instead of the density of states, Fourier-transform the two-level correlations into the time domain, defining the **spectral form factor** $K(\tau)$ — loosely, $\big|\sum_n e^{-iE_n \tau}\big|^2$ averaged over the spectrum, with $\tau$ measured in units of the Heisenberg time $T_H = 2\pi\hbar\,\bar d$. Feeding the trace formula into this object turns it into a double sum over periodic orbits weighted by $e^{i(S_p - S_{p'})/\hbar}$.

At short times only the *diagonal* terms $p = p'$ survive the averaging (Berry's diagonal approximation), because off-diagonal pairs have wildly different actions and dephase. Counting periodic orbits with their stabilities — a classical sum rule due to Hannay and Ozorio de Almeida — gives $K(\tau) \approx 2\tau$ for the time-reversal-symmetric case, which is exactly the small-$\tau$ slope of the GOE form factor. Pushing to off-diagonal orbit pairs that differ only by a small self-crossing reproduces the higher-order corrections, and the curve bends over to the RMT plateau $K(\tau)\to 1$ at the Heisenberg time. This is the most direct statement of the BGS conjecture: classical periodic orbits, resummed, *are* random-matrix correlations. The linear ramp $2\tau$ is level repulsion, viewed in time.

## 4. Why any of this matters

This is not a museum piece. The same ideas keep showing up wherever quantum systems get complicated:

- **Nuclear physics:** the statistical spread of energy levels in heavy nuclei — the very problem that started Wigner off.
- **Condensed matter:** electron transport through quantum dots and "quantum billiards," where the dot's shape decides whether the spectrum is chaotic.
- **Quantum information and thermalization:** the **Eigenstate Thermalization Hypothesis (ETH)** proposes that in a chaotic many-body system, a *single* energy eigenstate already looks thermal. Chaos is how an isolated quantum system manages to thermalize at all.
- **Black holes:** information scrambling in black holes is believed to be *maximally* chaotic, which ties quantum chaos straight to quantum gravity through models like Sachdev–Ye–Kitaev (SYK).

## 5. So where did the butterfly go?

Let us return to the question we started with. We were worried that quantization kills chaos, because the linear Schrödinger equation will not let two states diverge. And that worry was correct, as far as it went: there is no butterfly effect *in the dynamics* of a quantum state.

But the chaos did not vanish. It changed its hiding place. It moved out of the *motion* and into the *structure* — into the way energy levels repel one another, and into the scars that classical orbits burn onto the wavefunctions. The butterfly is still there; we were simply looking for it in the wrong place. Chase the dynamics and you find nothing. Look instead at the spectrum and the eigenstates, and the fingerprints of classical chaos are unmistakable, universal, and everywhere.

Which raises a question I find hard to put down: if chaos can hide so completely by changing what we should measure, how many other "vanished" classical phenomena are simply waiting, fully intact, in a corner of the quantum world we have not yet thought to look?
