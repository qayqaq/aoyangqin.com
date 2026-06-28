---
title: "What Happens When a Magnet Attracts Metal? (Part 1): The Classical Dead End"
date: "2026-03-15"
lang: "en"
translationKey: "magnet-1"
tags: ["physics", "electromagnetism"]
category: "Magnetism Series"
summary: "A magnet pulls a nail across the table — surely the simplest demonstration in physics. Yet the magnetic force does no work, and classical physics turns out to forbid magnetism outright. Part 1 of a series: setting up the paradox."
---

> This is Part 1 of a four-part series on a deceptively simple question. **Part 1 (this one):** the paradox, why classical physics forbids magnets, and a first relativistic attempt that fails. **Part 2:** Dirac's equation and the magic factor $g = 2$. **Part 3:** the group theory of spin — SU(2), SO(3), and the Lorentz group. **Part 4:** many-body physics, the Ising model, and the symmetry breaking that ties a fridge magnet to the Higgs mechanism.

Let me start with something you have done a hundred times without a second thought: you bring a magnet near a nail, and the nail jumps to it. It is probably the first physics experiment any of us ever ran, back when we were children. And yet, if you take the textbook laws of electromagnetism completely seriously, this little jump should be *impossible*. Not "hard to explain" — impossible.

That is the puzzle I want to chase in this series. It is one of those questions that looks trivial, and then quietly opens a trapdoor under your feet, dropping you straight down through relativity, quantum mechanics, and the deepest organizing principle we know of in physics. But let us not get ahead of ourselves. First, we have to earn the paradox.

## 1. Why the Lorentz force is "lazy"

In classical electromagnetism, the force on a charge $q$ moving with velocity $\vec{v}$ through a magnetic field $\vec{B}$ is the Lorentz force:
$$\vec{F}_{mag} = q(\vec{v} \times \vec{B})$$
Now look closely at that cross product, because it hides a strong constraint. By construction, $\vec{v} \times \vec{B}$ is perpendicular to $\vec{v}$, so the force is *always* at right angles to the motion: $\vec{F} \cdot \vec{v} = 0$. And the rate at which a force does work is exactly $P = \vec{F} \cdot \vec{v}$. Put those two facts side by side and the conclusion is unavoidable: **the magnetic force does no work.** Ever. It can bend a charge's path into a circle, but it can never speed it up or hand it energy.

Here, then, is the paradox in one breath. When a magnet hauls a nail off the table, the nail visibly *gains* kinetic energy — it was at rest, now it is moving. But the one agent we wanted to credit for the pull, the magnetic force, is constitutionally incapable of doing work. So who paid the energy bill? Something is badly wrong with the naive picture, and the resolution — I will spoil this much now — is that magnetism is not really a classical force at all. It is a **relativistic quantum correction** wearing a classical disguise.

## 2. The dead end: the Bohr–van Leeuwen theorem

Before we go hunting for the real answer, we should make the crisis as sharp as possible. I want to convince you not merely that classical physics *struggles* with magnetism, but that it forbids it entirely. This is the content of the **Bohr–van Leeuwen theorem**, and it is worth working through, because the way it fails is the whole point.

Consider a system of $N$ electrons. The magnetic moment $\vec{\mu}$ comes from the orbital motion of charge:
$$\vec{\mu} = \frac{q}{2} \vec{r} \times \vec{v} = \frac{q}{2m}(\vec{r} \times m\vec{v}) = \frac{q}{2m}\vec{L}$$
The key structural fact — and the hinge of the whole argument — is that the total magnetization along $z$ is a *linear* function of the generalized velocities $\dot{q}_i$:
$$M_z = \sum_{i=1}^{3N} a_i(q_1, \dots, q_{3N}) \dot{q}_i$$
Keep an eye on that linearity; it is what will kill us in a moment. In an electromagnetic field, the system's Hamiltonian (its total energy) is
$$H = \sum_{i=1}^N \frac{(\vec{p}_i - q \vec{A})^2}{2m} + q V(q_1, \dots, q_N)$$
and by Hamilton's equations the velocity is $\dot{q}_i = \frac{\partial H}{\partial p_i}$. To get the *observable* magnetization we have to average over thermal fluctuations, which in classical statistical mechanics means weighting every state by the Boltzmann factor and integrating over all of phase space:
$$\langle M_z \rangle = \frac{\int dq_1 \dots dq_{3N} \int dp_1 \dots dp_{3N} M_z e^{-H/k_B T}}{\int dq_1 \dots dq_{3N} \int dp_1 \dots dp_{3N} e^{-H/k_B T}}$$
This looks forbidding, but we only need to stare at one piece of it. Focus on a single term $a_i \dot{q}_i$ in the numerator. Since $a_i$ depends only on coordinates, not momenta, we can pull it aside and do the integral over the momentum $p_i$ on its own:
$$\int_{-\infty}^{+\infty} dp_i \dot{q}_i e^{-H/k_B T} = \int_{-\infty}^{+\infty} dp_i \frac{\partial H}{\partial p_i} e^{-H/k_B T}$$
And now comes the quiet little trick that decides everything. The integrand is a total derivative in disguise. Using $\frac{\partial H}{\partial p_i} e^{-\beta H} = -\frac{1}{\beta} \frac{\partial}{\partial p_i} (e^{-\beta H})$ (with $\beta = 1/k_B T$), the momentum integral collapses to a boundary term:
$$ \int_{H(p=-\infty)}^{H(p=+\infty)} dH e^{-H/k_B T} = \left[ -k_B T e^{-H/k_B T} \right]_{p_i=-\infty}^{p_i=+\infty}$$
But the kinetic energy $\frac{(p-qA)^2}{2m}$ blows up as $p \to \pm\infty$, so the Boltzmann factor $e^{-H/k_B T}$ is crushed to zero at both ends. The boundary term is just
$$\left[ -k_B T e^{-H/k_B T} \right]_{-\infty}^{+\infty} = 0 - 0 = 0$$
And there it is. $\langle M \rangle = 0$. In other words: classical physics is merciless here. The vector potential $\vec{A}$ does shift the momentum around, but because we integrate the momentum over its entire range from $-\infty$ to $+\infty$, that shift contributes *exactly nothing* to the average. The magnetic field leaves no thermodynamic trace whatsoever. **Classical physics predicts, flatly, that magnets cannot exist.**

## 3. The first rescue attempt — and why it fails

Faced with a paradox this severe, the instinct of any physicist is the same: classical physics is missing something, and the two great corrections of the twentieth century are quantum mechanics and relativity. So let us try the obvious thing and bolt them together.

The Schrödinger equation is built on the *non-relativistic* energy–momentum relation $E = \vec{p}^2 / 2m$. The honest fix is to start from the relativistic relation $E^2 = c^2\vec{p}^2 + m^2c^4$ instead, and promote energy and momentum to the usual quantum operators, $E \to i\hbar \partial_t$ and $\vec{p} \to -i\hbar \nabla$. Do that, and out drops the **Klein–Gordon equation**:
$$\frac{1}{c^2} \frac{\partial^2 \psi}{\partial t^2} - \nabla^2 \psi + \left( \frac{mc}{\hbar} \right)^2 \psi = 0$$
It is prettier than it looks. Introducing the **d'Alembertian** $\Box = \frac{1}{c^2}\frac{\partial^2}{\partial t^2} - \nabla^2$, the spacetime cousin of the Laplacian, the whole thing collapses to
$$\left(\Box + \left(\frac{mc}{\hbar}\right)^2\right) \psi = 0$$
This is the most natural relativistic wave equation you could write down. And when it was first proposed, it was very nearly thrown away. The reason it was abandoned is more instructive than any success would have been, so let us see exactly what goes wrong — because both failures are clues.

The **first** problem is energy. The relativistic relation is quadratic in $E$, so it admits two roots:
$$E = \pm \sqrt{(pc)^2 + (mc^2)^2}$$
That innocent $\pm$ is a disaster. The **negative-energy states** have no floor: a particle could cascade down through ever lower negative energies, radiating endlessly, and no stable ground state for matter would exist at all. The universe would be unstable.

The **second** problem is probability. In quantum mechanics the wavefunction must furnish a conserved probability current $j^\mu = (\rho, \mathbf{j})$, and for the Schrödinger equation the density $\rho = |\psi|^2$ is reassuringly non-negative. For Klein–Gordon, the conserved density that the math forces on us is instead
$$\rho = \frac{i\hbar}{2mc^2} \left( \psi^* \frac{\partial \psi}{\partial t} - \psi \frac{\partial \psi^*}{\partial t} \right)$$
And here is the trouble: because the equation is *second* order in time, $\psi$ and $\frac{\partial \psi}{\partial t}$ can be chosen independently at the initial instant. Nothing stops us from arranging $\rho < 0$. A **negative probability** is meaningless — a particle cannot have a $-30\%$ chance of being somewhere.

Notice that *both* diseases trace back to the same anatomical feature: the equation is second order in time. That is the diagnosis Dirac fixed on. His demand was audacious in its simplicity — find an equation that is **first order in time**, like Schrödinger's, yet fully **relativistically covariant**. The most naive way to attempt it is to write a Hamiltonian that is merely *linear* in momentum, with some unknown coefficients to be pinned down later:
$$\hat{H} = c(\alpha_x \hat{p}_x + \alpha_y \hat{p}_y + \alpha_z \hat{p}_z) + \beta m c^2$$
What are these mysterious objects $\alpha_x, \alpha_y, \alpha_z, \beta$? They cannot be ordinary numbers — and forcing this equation to be consistent with relativity will compel them to be *matrices*, dragging a whole new internal structure into the electron out of nothing but the demand for consistency. That structure will turn out to be spin, and spin will turn out to be the missing source of magnetism. But unpacking that is a story in its own right.

## Where this leaves us

Let us take stock. We set out to explain the most ordinary thing in the world — a magnet lifting a nail — and instead we have demolished two theories. Classical statistical mechanics forbids magnetism outright (Bohr–van Leeuwen). The first relativistic patch, Klein–Gordon, hands us negative energies and negative probabilities. The fridge magnet remains, stubbornly, a paradox.

But we are not lost; we are exactly where Dirac stood in 1928, holding a single sharp clue. Both failures came from a time derivative that was one order too high. Demand an equation that is first order in time *and* respects relativity, and you are forced — not invited, *forced* — to introduce matrix coefficients, and with them an entirely new internal degree of freedom for the electron. That degree of freedom is spin, and spin carries a magnetic moment that no classical argument can produce.

That is where Part 2 begins. *To be continued.*
