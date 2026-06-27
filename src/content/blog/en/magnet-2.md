---
title: "What Happens When a Magnet Attracts Metal? (Part 2): Dirac, and the Magnetism Hidden in Spacetime"
date: "2026-01-18"
lang: "en"
translationKey: "magnet-2"
tags: ["physics", "electromagnetism"]
category: "Magnetism Series"
summary: "Demand a wave equation that is first order in time and respects relativity, and the electron is forced to grow four components, an internal axis, and a magnetic moment out of thin air. Part 2: how spin — and magnetism — fall out of Dirac's equation."
---

> Part 2 of four. [Part 1](/blog/magnet-1) showed that classical physics forbids magnetism (Bohr–van Leeuwen), and that the first relativistic patch (Klein–Gordon) collapses under negative energies and negative probabilities. We left Dirac holding one clue: insist on a wave equation that is **first order in time** yet **relativistically covariant**, and see what you are forced to accept.

Let me pick up exactly where we left off. We had written down Dirac's audacious guess — a Hamiltonian that is merely *linear* in momentum,
$$\hat{H} = c(\alpha_x \hat{p}_x + \alpha_y \hat{p}_y + \alpha_z \hat{p}_z) + \beta m c^2$$
with four unknown coefficients $\alpha_x, \alpha_y, \alpha_z, \beta$ left dangling. The whole game now is to ask: what must these objects *be* for the equation to be consistent with relativity? We will not assume they are matrices. We will be forced into it.

## 1. Squaring the equation forces a Clifford algebra

The consistency demand is simple to state. Any solution of Dirac's first-order equation must *also* solve the relativistic energy–momentum relation — that is, applying the operator twice must reproduce $E^2 = c^2\vec{p}^2 + m^2c^4$. So let us square the Hamiltonian and insist it come out right:
$$(c\textstyle\sum \alpha_i p_i + \beta mc^2)^2 = c^2 \sum p_i^2 + m^2 c^4$$
Expanding the left side carefully — the momenta $p_i$ commute with one another, but we must *not* assume the coefficients do — gives
$$c^2 \sum_i \alpha_i^2 p_i^2 + c^2 \sum_{i < j} \{\alpha_i, \alpha_j\} p_i p_j + mc^3 \sum_i \{\alpha_i, \beta\} p_i + \beta^2 m^2 c^4$$
Now match this against the clean right-hand side, term by term. The cross terms have no business being there, so they must vanish; the square terms must have unit coefficient. That comparison hands us four algebraic commandments — the **Clifford algebra**:

1. $\alpha_i^2 = I$
2. $\beta^2 = I$
3. $\{\alpha_i, \alpha_j\} = 0 \quad (i \neq j)$
4. $\{\alpha_i, \beta\} = 0$

Stare at commandment 3 for a second. It says $\alpha_1 \alpha_2 = -\alpha_2 \alpha_1$ — the coefficients *anticommute*. No ordinary numbers do that (for numbers, $ab = ba$ always). So the $\alpha_i$ and $\beta$ *cannot* be numbers. They are forced to be matrices, and we never assumed it — relativity plus first-order-in-time *compelled* it. This is the moment the electron grows an internal structure.

## 2. Gamma matrices and the inevitability of four components

To make the Lorentz covariance manifest, it is cleaner to repackage the coefficients into the **gamma matrices**, $\gamma^0 = \beta$ and $\gamma^i = \beta\alpha_i$. The four commandments above collapse into a single elegant relation,
$$\{\gamma^\mu, \gamma^\nu\} = 2\eta^{\mu\nu} I$$
where $\eta^{\mu\nu} = \text{diag}(1,-1,-1,-1)$ is the Minkowski metric, and the Dirac equation itself takes its famous compact form,
$$(i \gamma^\mu \partial_\mu - \tfrac{mc}{\hbar}) \psi = 0,\quad \text{where } \partial_\mu = (\tfrac{1}{c}\partial_t, \nabla)$$
But how *big* are these matrices? Here is the beautiful part: the algebra fixes the answer. We need four mutually anticommuting matrices, all with square $\pm I$ and zero trace. Run down the dimensions: 1×1 numbers can't anticommute at all; in 2D the Pauli matrices give us only **three** anticommuting matrices, one short; the trace and square conditions force the dimension to be even, ruling out 3D. The first dimension that fits four is **4D**. The smallest representation of the electron's relativistic algebra is unavoidably four-dimensional.

A standard concrete choice is the **Dirac representation**, built from the $2\times 2$ identity and the Pauli matrices:
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
Let us not rush past what just happened. Demanding nothing more than a linear, relativistic wave equation has forced the wavefunction $\psi$ to carry **four components** — which we now read as the electron (spin up/down) and its antiparticle the positron (spin up/down). Dirac was only trying to fix the negative-probability disease; he accidentally kicked open the door to spin and antimatter. The lesson, which we will keep meeting: **magnetism is not a property bolted onto matter — it is an inevitable consequence of spacetime symmetry.**

## 3. Switching on the electromagnetic field

Beautiful as that is, it is still a free electron. To see magnetism we have to let the electron feel a field. The recipe is the **minimal coupling** substitution: replace momentum by the kinetic momentum $\vec{p} \to \vec{p} - q\vec{A}$, and the energy operator by $i\hbar\partial_t \to i\hbar\partial_t - q\Phi$, where $\vec{A}$ and $\Phi$ are the vector and scalar potentials. The Dirac equation becomes
$$i\hbar \frac{\partial \psi}{\partial t} = [c \vec{\alpha} \cdot (\vec{p} - q\vec{A}) + \beta m c^2 + q\Phi] \psi$$
or, in fully covariant dress with the covariant derivative $D_\mu = \partial_\mu + \frac{iq}{\hbar}A_\mu$,
$$(i\hbar \gamma^\mu D_\mu - mc) \psi = 0\quad \text{or}\quad \gamma^\mu (p_\mu - qA_\mu) \psi = mc \psi$$
We do not need the relativistic regime here — a fridge magnet is hardly relativistic. We need the **non-relativistic limit**, where the rest energy $mc^2$ dwarfs everything else. Split the four-spinor into a "large component" $\phi$ and a "small component" $\chi$ (each a 2-spinor), and peel off the fast rest-energy phase:
$$\psi(\vec{r}, t) = \begin{pmatrix} \phi(\vec{r}, t) \\ \chi(\vec{r}, t) \end{pmatrix} e^{-imc^2t/\hbar}$$
Differentiating in time by the product rule,
$$i\hbar \frac{\partial \psi}{\partial t} = \left( i\hbar \frac{\partial}{\partial t} \begin{pmatrix} \phi \\ \chi \end{pmatrix} + mc^2 \begin{pmatrix} \phi \\ \chi \end{pmatrix} \right) e^{-imc^2t/\hbar}$$
and substituting into the Dirac equation (in the standard representation), the exponential cancels on both sides and we are left with
$$i\hbar \frac{\partial}{\partial t} \begin{pmatrix} \phi \\ \chi \end{pmatrix} + mc^2 \begin{pmatrix} \phi \\ \chi \end{pmatrix} = c \begin{pmatrix} 0 & \vec{\sigma} \\ \vec{\sigma} & 0 \end{pmatrix} \cdot \vec{\pi} \begin{pmatrix} \phi \\ \chi \end{pmatrix} + \begin{pmatrix} mc^2 & 0 \\ 0 & -mc^2 \end{pmatrix} \begin{pmatrix} \phi \\ \chi \end{pmatrix} + q\Phi \begin{pmatrix} \phi \\ \chi \end{pmatrix}$$
where $\vec{\pi} = \vec{p} - q\vec{A}$ is the kinetic momentum. This is really two coupled equations:
$$\begin{aligned} & i \hbar \frac{\partial \phi}{\partial t}+m c^2 \phi=c(\vec{\sigma} \cdot \vec{\pi}) \chi+m c^2 \phi+q \Phi \phi \\ & i \hbar \frac{\partial \chi}{\partial t}+m c^2 \chi=c(\vec{\sigma} \cdot \vec{\pi}) \phi-m c^2 \chi+q \Phi \chi \end{aligned}$$
In the non-relativistic limit the kinetic and potential energies are tiny next to the rest energy, so $|i\hbar\partial_t\chi| \ll |2mc^2\chi|$ and $|q\Phi\chi| \ll |2mc^2\chi|$. The small-component equation then collapses to an algebraic relation:
$$2mc^2 \chi \approx c(\vec{\sigma} \cdot \vec{\pi})\phi \implies \chi \approx \frac{\vec{\sigma} \cdot \vec{\pi}}{2mc} \phi$$
which incidentally explains the name: $\chi$ is smaller than $\phi$ by a factor of order $v/c$.

## 4. The payoff: magnetism falls out

Now substitute $\chi$ back into the large-component equation. Everything reduces to a single equation for $\phi$:
$$i\hbar \frac{\partial \phi}{\partial t} = \left[ \frac{(\vec{\sigma} \cdot \vec{\pi})^2}{2m} + q\Phi \right] \phi$$
And here, in that innocent-looking $(\vec{\sigma}\cdot\vec{\pi})^2$, is where the magnet has been hiding all along. Use the Pauli identity $(\vec{\sigma}\cdot\vec{A})(\vec{\sigma}\cdot\vec{B}) = \vec{A}\cdot\vec{B} + i\vec{\sigma}\cdot(\vec{A}\times\vec{B})$:
$$(\vec{\sigma} \cdot \vec{\pi})^2 = \vec{\pi} \cdot \vec{\pi} + i\vec{\sigma} \cdot (\vec{\pi} \times \vec{\pi})$$
If $\vec{\pi}$ were an ordinary vector this second term would be zero — any vector crossed with itself vanishes. But $\vec{\pi} = \vec{p} - q\vec{A}$ is an *operator*, and $\vec{p}$ does not commute with $\vec{A}$. Acting on a test function $f$,
$$(\vec{\pi} \times \vec{\pi})f = (\vec{p} - q\vec{A}) \times (\vec{p} - q\vec{A})f= (\vec{p} \times \vec{p} - q\vec{p} \times \vec{A} - q\vec{A} \times \vec{p} + q^2\vec{A} \times \vec{A})f$$
With $\vec{p}\times\vec{p}=0$ and $\vec{A}\times\vec{A}=0$, the survivors are
$$\begin{aligned}-q(\vec{p} \times \vec{A} & + \vec{A} \times \vec{p})f = -q \left[ (-i\hbar \nabla) \times (\vec{A}f) + \vec{A} \times (-i\hbar \nabla f) \right]\\&= i\hbar q \left[ (\nabla \times \vec{A})f - \vec{A} \times (\nabla f) + \vec{A} \times (\nabla f) \right]= i\hbar q (\nabla \times \vec{A})f = i\hbar q \vec{B} f\end{aligned}$$
because $\nabla\times\vec{A} = \vec{B}$. So the self-cross-product, far from vanishing, *is the magnetic field*:
$$(\vec{\sigma} \cdot \vec{\pi})^2 = \vec{\pi}^2 + i\vec{\sigma} \cdot (i\hbar q \vec{B}) = \vec{\pi}^2 - \hbar q \vec{\sigma} \cdot \vec{B}$$
Put it back, and we have derived the **Pauli equation**, with a brand-new term sitting in the Hamiltonian:
$$i\hbar \frac{\partial \phi}{\partial t} = \left[ \frac{(\vec{p}-q\vec{A})^2}{2m} + q\Phi - \frac{q\hbar}{2m} \vec{\sigma} \cdot \vec{B} \right] \phi$$
$$H = \frac{(\vec{p}-q\vec{A})^2}{2m} + q\Phi - \frac{q\hbar}{2m} \vec{\sigma} \cdot \vec{B}$$
That last term, $-\frac{q\hbar}{2m}\vec{\sigma}\cdot\vec{B}$, is a Zeeman energy $U = -\vec{\mu}\cdot\vec{B}$ — an *intrinsic* magnetic moment coupling directly to the field. Compare its size to the magnetic moment from orbital motion and you find the moment is **twice** as large as a naive classical estimate: the famous gyromagnetic ratio $g = 2$, predicted with no extra input.

It is worth dwelling on *why* it appeared. Had we never introduced the $\vec{\sigma}$ matrices — that is, had we stayed with the spinless Klein–Gordon world — the kinetic term would have been a plain $\vec{\pi}^2$, which produces no linear coupling to $\vec{B}$, and the Hamiltonian would have degenerated to the spinless $H_{\text{Spin-0}} = \frac{(\vec{p}-q\vec{A})^2}{2m} + q\Phi$. In other words: the $\vec{\sigma}$ matrix is what gives the particle an *internal axis*. Without it the electron is an isotropic point that a field can only push around from the outside. With it, the non-commutativity of $\vec{\pi}$ — which is just $\vec{B}$ in disguise — gets piped directly into the electron's internal dimensions and becomes a magnetic energy. The matrix structure relativity forced upon us in Section 1 is, quite literally, the source of the magnet.

## Where this leaves us

So we have our culprit. The magnet a child plays with is powered by an intrinsic magnetic moment that has no classical cause whatsoever; it is the low-speed residue of the electron's relativistic, four-component nature. Bohr and van Leeuwen were right that classical physics forbids magnetism — they were simply working in a world that was missing two of its dimensions.

But notice that we obtained spin almost by a side door, by switching on a field and watching a term appear. That should leave us slightly uneasy. Spin is supposed to be *intrinsic* — it ought to be there with no field at all, written into the very way the electron responds when we rotate our laboratory. And there is a loose thread we tied off and ignored: the dynamical argument gave us a *two*-component spinor, yet the Dirac equation insisted on *four*. Where did the other two go?

Answering that means leaving dynamics behind and asking a purely kinematic question: how must a wavefunction transform when we rotate space — and rotate spacetime? That is the subject of Part 3, where SU(2), SO(3), and the Lorentz group will explain why the electron is a spinor in the first place. *To be continued.*
