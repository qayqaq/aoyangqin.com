---
title: "A Path into Quantum Computing (Part 2): Measurement, Protocols, and the Circuit Model"
date: "2026-01-03"
lang: "en"
translationKey: "quantum-computing-2"
tags: ["quantum-computing"]
category: "Quantum Computing Series"
summary: "How do you pull a classical answer out of a quantum state? Measurement is the subtlest piece of the whole story — and the moment we understand it, superdense coding and teleportation fall right out. Part 2, the finale."
---

> Part 2 of two, and the finale. In [Part 1](/blog/quantum-computing-1) we built the foundations: reversible (unitary) dynamics, the qubit on its Bloch sphere, the standard gates, and the entanglement two qubits can share. We deliberately left out the one operation that turns all that quantum machinery into a classical answer — measurement. That is exactly where we pick up, and it is the key that unlocks everything else.

So far our entire story has been reversible. Every gate was a unitary you could undo; nothing was ever lost. But a computation that never produces a readable answer is useless, and reading the answer means *measurement* — the one moment where the smooth, reversible quantum world gives way to a probabilistic, irreversible classical outcome. This is the most counterintuitive postulate in the whole subject, so let us take it slowly, set up the language first, and only then watch the spectacular payoffs fall out of it.

## 1. Quantum Measurement

Quantum measurement is the process of extracting classical information from a quantum state.

### 1.1 Orthonormal Basis

Before we can say what a measurement *does*, we have to say what we measure *against*. The answer is: a choice of basis — a set of mutually perpendicular, unit-length directions to resolve the state along. An orthonormal basis is a set of vectors $\{|\varphi_i\rangle\}$ such that their inner product satisfies:

$$\langle \varphi_i |\varphi_j \rangle = \delta_{ij} = \begin{cases} 1 & i=j \\ 0 & i \ne j \end{cases}$$

**Examples for a 1-qubit system:**

- **Computational Basis:** $\{|0\rangle, |1\rangle\}$
- **Hadamard Basis:** $\{|+\rangle, |-\rangle\}$, where:
    - $|+\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$
    - $|-\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)$

For a 2-qubit system, the basis expands to $\{|00\rangle, |01\rangle, |10\rangle, |11\rangle\}$.

The crucial thing to notice — and it is easy to skate past — is that the basis is *our* choice. The same physical state can be measured against the computational basis or the Hadamard basis, and we will get different statistics. There is no single privileged "what the qubit really is"; there is only what it is *relative to the question we ask*.

### 1.2 Measurement Postulates

Now we can state the rule precisely. Let $B=\{|\varphi_i\rangle\}$ be an orthonormal basis. If a system is in state $|\psi\rangle = \sum_i a_i |\varphi_i\rangle$:

1. The output "$i$" occurs with probability $Pr(i) = |a_i|^2$.
2. The measurement collapses the system into the state $|\varphi_i\rangle$.

Notice how much this asks us to swallow at once. The outcome is *random* — a clean break from the determinism of unitary evolution. The probability is the squared amplitude, which is finally why Part 1 insisted those amplitudes be normalized: they were probabilities-in-waiting all along. And the act of looking *changes* the thing looked at, snapping the superposition down onto a single basis vector. That second point is the irreversible step we had been postponing for the whole series.

**Important Note:** The global phase does not matter, as $|a_i|^2 = |e^{i\theta} a_i|^2$.

**Example:** Measuring $|\psi\rangle = \frac{1}{2}|0\rangle + \frac{\sqrt{3}}{2}|1\rangle$ in the $\{|+\rangle, |-\rangle\}$ basis:

- $\langle + | \psi \rangle = \frac{1+\sqrt{3}}{2\sqrt{2}}$, so $Pr(+) = |\langle + | \psi \rangle|^2 = \frac{2+\sqrt{3}}{4}$.
- $\langle - | \psi \rangle = \frac{1-\sqrt{3}}{2\sqrt{2}}$, so $Pr(-) = \frac{2-\sqrt{3}}{4}$.

The recipe is mechanical once you trust it: to find the probability of an outcome, project the state onto that basis vector with an inner product, then square the magnitude. The example just runs that recipe twice, and as a sanity check the two probabilities dutifully sum to one.

### 1.3 Partial Measurement

There is one more wrinkle we cannot avoid, because the protocols ahead depend on it. What if we own only *part* of a larger system — say, one qubit of an entangled pair — and measure just that? The state does not fully collapse; it collapses only as far as our measurement reaches, and the rest is left in a correspondingly updated state. When measuring only the first qubit of a multi-qubit system:

Given $|\psi\rangle = \sqrt{\frac{1}{10}}|00\rangle + \sqrt{\frac{2}{10}}|01\rangle + \sqrt{\frac{3}{10}}|10\rangle + \sqrt{\frac{4}{10}}|11\rangle$:

- Grouping by the first qubit: $|\psi\rangle = \sqrt{\frac{3}{10}}|0\rangle \otimes (\sqrt{\frac{1}{3}}|0\rangle + \sqrt{\frac{2}{3}}|1\rangle) + \sqrt{\frac{7}{10}}|1\rangle \otimes (\sqrt{\frac{3}{7}}|0\rangle + \sqrt{\frac{4}{7}}|1\rangle)$.
- $Pr(0) = \frac{3}{10}$; State becomes $|0\rangle \otimes (\sqrt{\frac{1}{3}}|0\rangle + \sqrt{\frac{2}{3}}|1\rangle)$.
- $Pr(1) = \frac{7}{10}$; State becomes $|1\rangle \otimes (\sqrt{\frac{3}{7}}|0\rangle + \sqrt{\frac{4}{7}}|1\rangle)$.

The trick is purely bookkeeping: group the terms by the value of the qubit you are about to measure, factor it out, and the leftover coefficients (after renormalizing) are precisely the state the *other* qubit is left in. Hold on to this picture — measuring one half of an entangled pair instantly shapes the other half. That is the engine behind both protocols below.

## 2. Superdense Coding

Here is our first reward, and it sounds impossible at first hearing. Superdense coding allows Alice to send **two classical bits** to Bob by sending only **one qubit**, provided they share an entangled pair (ebit). One physical qubit carrying two bits of classical information — the catch, of course, is that the entangled pair had to be set up in advance, and it is that pre-shared correlation Alice secretly exploits.

**The Procedure:**
1. **Initial State:** Alice and Bob share $|\beta_{00}\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$.
2. **Alice's Operation:** Depending on the bits $(xy)$ she wants to send, Alice applies a gate to her qubit:
    - `00`: Apply $I \rightarrow |\beta_{00}\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$.
    - `01`: Apply $X \rightarrow |\beta_{01}\rangle = \frac{1}{\sqrt{2}}(|10\rangle + |01\rangle)$.
    - `10`: Apply $Z \rightarrow |\beta_{10}\rangle = \frac{1}{\sqrt{2}}(|00\rangle - |11\rangle)$.
    - `11`: Apply $iY$ (or $ZX$) $\rightarrow |\beta_{11}\rangle = \frac{1}{\sqrt{2}}(|01\rangle - |10\rangle)$.
3. **Transmission:** Alice sends her qubit to Bob.
4. **Decoding:** Bob measures both qubits in the **Bell basis** to retrieve $xy$.

Look at what makes this work. By touching *only her own qubit* with one of four gates, Alice steers the *joint* state into one of the four mutually orthogonal Bell states. Because those four are perfectly distinguishable by a measurement in the Bell basis, Bob — once he holds both halves — can read off which of the four Alice chose, and that is a full two bits. Entanglement is the channel; her local gate is the message.

## 3. Quantum Teleportation

Teleportation is the reverse: moving a quantum state $|\psi\rangle$ using **two classical bits** and **one ebit**. If superdense coding sent classical bits through a qubit, teleportation sends a *qubit* through classical bits — and it must, because an unknown quantum state cannot simply be copied and emailed over. The entangled pair is again what makes the impossible merely clever.

**The Procedure:**
1. **Setup:** Alice has a qubit in state $|\psi\rangle = a_0|0\rangle + a_1|1\rangle$ and shares $|\beta_{00}\rangle$ with Bob.
2. **Alice's Measurement:** Alice performs a Bell measurement on her two qubits (the unknown state and her half of the ebit).
3. **The State Shift:** The total state can be rewritten such that Bob’s qubit is in one of four states: $|\psi\rangle$, $X|\psi\rangle$, $Z|\psi\rangle$, or $XZ|\psi\rangle$, depending on Alice's outcome.
4. **Correction:** Alice sends her classical outcomes (2 bits) to Bob. Bob applies the corresponding Pauli gates ($Z^a X^b$) to recover exactly $|\psi\rangle$.

This is the partial-measurement picture from Section 1.3 paying off in full. Alice's Bell measurement instantly throws Bob's qubit into one of four versions of $|\psi\rangle$ — but she does not yet know, and crucially neither does *he*, which one. The two classical bits she mails over are nothing but the instructions for which Pauli correction to undo. Note the bits travel no faster than light, so causality survives intact; and note too that Alice's original copy is destroyed in the measurement, so nothing was ever cloned. The state did not travel through space — it was reconstructed, atom-for-atom in its amplitudes, on the far end.

## 4. Quantum Circuits and the Bloch Sphere

With measurement and the two headline protocols in hand, let us close the loop by returning to where Part 1 started — the gates — and seeing them as the moving parts of a *circuit*, with the Bloch sphere as our guide to what each one physically does.

### 4.1 The Bloch Sphere

Any single-qubit state can be represented as a point on the Bloch Sphere:

$$|\psi\rangle = \cos\frac{\theta}{2}|0\rangle + e^{i\phi}\sin\frac{\theta}{2}|1\rangle $$
### 4.2 Single-Qubit Rotation Gates

We hinted in Part 1 that every single-qubit gate is some rotation of this sphere. Here that promise is made literal: the rotation gates are *exactly* rotations by an angle $\theta$ about the $x$, $y$, and $z$ axes. Gates rotate the state vector around axes on the Bloch Sphere:

- $R_x(\theta) = e^{-i\theta X/2} = \begin{pmatrix} \cos\frac{\theta}{2} & -i\sin\frac{\theta}{2} \\ -i\sin\frac{\theta}{2} & \cos\frac{\theta}{2} \end{pmatrix}$
    
- $R_y(\theta) = \begin{pmatrix} \cos\frac{\theta}{2} & -\sin\frac{\theta}{2} \\ \sin\frac{\theta}{2} & \cos\frac{\theta}{2} \end{pmatrix}$
    
- $R_z(\theta) = \begin{pmatrix} e^{-i\theta/2} & 0 \\ 0 & e^{i\theta/2} \end{pmatrix}$

The $\theta/2$ appearing where you might expect $\theta$ is not a typo — it is the same factor-of-two signature of spin-½ geometry, the reminder that a qubit must be turned through $720°$, not $360°$, to come all the way home.

### 4.3 Multi-Qubit Gates

One-qubit rotations only ever slide a point around its own sphere; they can never *correlate* two qubits. For that — and therefore for entanglement, and therefore for everything in Sections 2 and 3 — we need a gate that lets one qubit's value condition another's.

- **CNOT Gate:** Flips the target qubit if the control qubit is $|1\rangle$.
    - $|0\rangle|\psi\rangle \rightarrow |0\rangle|\psi\rangle$
    - $|1\rangle|\psi\rangle \rightarrow |1\rangle X|\psi\rangle$
- **Creating Entanglement:** A Hadamard gate (H) followed by a CNOT gate converts $|00\rangle$ into the Bell state $|\beta_{00}\rangle$.

And there is the whole series tied off in a single line. That last recipe — Hadamard, then CNOT — is precisely the two-step we ran as Qiskit code at the end of Part 1, and precisely the $|\beta_{00}\rangle$ that Alice and Bob shared in both protocols above. The Hadamard manufactures the superposition; the CNOT welds it to a second qubit; out comes the entangled pair that powers superdense coding and teleportation alike. Every thread we pulled — reversibility, the qubit, the gates, measurement, the protocols — runs back through these two gates.

We began Part 1 with a complaint that an ordinary AND gate is forbidden in a quantum computer, and we end with a circuit of two reversible gates conjuring a correlation that has no classical analogue at all. The distance between those two facts *is* quantum computing. That is where this series rests. **Fin.**
