---
title: "Quantum Chaos: Where Did the Butterfly Go?"
date: "2025-10-06"
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

PLACEHOLDER_GUTZWILLER
