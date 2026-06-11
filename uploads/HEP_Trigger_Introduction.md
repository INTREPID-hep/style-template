# Don't Miss the Good Stuff: An Introduction to Triggering in HEP

> **45-minute presentation for CPAN PhD Network**
> Audience: PhD students in particle, astroparticle and nuclear physics (mixed background)

---

## Overview & Timing

| Block | Duration | Content |
|---|---|---|
| Hook & Motivation | 5' | Why triggers exist |
| The Problem | 8' | Rates, bandwidth, the fundamental challenge |
| Trigger Architecture | 12' | L1, HLT, DAQ — the layered solution |
| Case Studies | 12' | ATLAS/CMS, LHCb, ALICE — different philosophies |
| Frontier & Future | 5' | Allen, TDAQ upgrades, ML |
| Summary & Discussion | 3' | Key takeaways + open questions |

---

## Slide 1 — Title Slide

**Title:** *"Don't miss the good stuff: An introduction to triggering in HEP"*

**Icebreaker:**
> "By the end of this talk, I want you to appreciate that some of the most ingenious engineering in experimental HEP has nothing to do with the detector itself — it's about deciding, in microseconds, whether what just happened is worth keeping."

---

## Slide 2 — The Universe Is Not Cooperative

**Title:** *The rare vs. the mundane*

**Visual:** Cartoon — billions of pp collisions, with one tiny ★ labelled "Higgs"

### Key points

- At the LHC, proton bunches cross **40 million times per second** (40 MHz)
- Each crossing can produce ~40 simultaneous pp collisions (**pileup**)
- The vast majority are *soft QCD* — elastic scattering, minimum bias — **uninteresting**
- Processes we care about (Higgs, SUSY, rare B decays…) are **orders of magnitude rarer**
- Example: σ(H→γγ) / σ(inelastic) ~ 10⁻⁹

> **Speaker note:** *"The LHC is like a firework factory where 99.9999999% of what comes out is confetti. The trigger is your eye trained to spot the one rocket."*

---

## Slide 3 — The Storage Problem

**Title:** *Why you can't just record everything*

**Visual:** Back-of-envelope calculation

### Key points

- A single ATLAS/CMS event ~ **1–2 MB** (after zero-suppression)
- 40 MHz × 1.5 MB = **~60 TB/s** of raw data
- Total worldwide disk in 2024 ≈ a few hundred exabytes — you'd fill it in hours
- Budget for permanent storage: **~1–2 GB/s** → need a reduction factor of **~10⁵**
- This is **not** solvable with more money or faster disks — it is a fundamental constraint

> **Speaker note:** *"This isn't an engineering bottleneck we'll solve next year. It's a hard physical and financial constraint. The trigger is the solution."*

---

## Slide 4 — What Is a Trigger?

**Title:** *Definition and goals*

### Key points

A trigger is a **real-time decision system** that selects events to record. It must be:

- **Fast** — keep up with the beam crossing rate
- **Selective** — high background rejection
- **Efficient** — retain signal events
- **Flexible** — configurable to serve many simultaneous physics goals

Two distinct technical challenges:

| Challenge | Requirement |
|---|---|
| **Rate reduction** | 40 MHz → O(kHz) |
| **Latency** | Decision must fit within front-end readout buffer |

> **Key definition for the slide:**
> *Trigger = real-time classification under extreme resource constraints*

---

## Slide 5 — The Layered Architecture

**Title:** *Divide and conquer: trigger levels*

**Visual:** Funnel diagram

```
40 MHz  →  [Level-1 Hardware]  →  ~100 kHz  →  [HLT Software]  →  ~1–3 kHz  →  Storage
```

### Key points

- The problem is too hard to solve in one step → split into **levels**
- **Level-1 (L1):** Hardware-based, custom ASICs/FPGAs, fixed latency (~few μs), coarse information (calorimeters + muon systems, no tracking)
- **High-Level Trigger (HLT):** Software-based farm of ~O(10,000) CPU cores, full event reconstruction, O(100 ms) per event
- Between L1 and HLT: the **DAQ** (Data Acquisition System) buffers and ships data

---

## Slide 6 — Level-1 Trigger

**Title:** *The hardware gatekeeper*

**Visual:** Simplified L1 trigger schematic (CMS or ATLAS)

### Key points

- L1 must decide in **fixed latency** — CMS example: **3.8 μs** from collision to decision
- During this time, data is held in **pipeline buffers** in the detector front-end electronics
- L1 uses **coarse, fast** information:
  - Calorimeter clusters (e, γ, jets, MET)
  - Muon track stubs
- Implemented in **custom FPGAs and ASICs** — no commercial off-the-shelf hardware
- Output: list of "trigger objects" (e.g., *"electron candidate with E_T > 30 GeV at η, φ = …"*)
- L1 accept rate: **~100 kHz** (ATLAS/CMS), constrained by L1 latency and front-end buffers

> **Speaker note:** *"L1 is like a bouncer at a club who has 4 microseconds to look at your shoes and decide if you get in. No time to check your ID."*

---

## Slide 7 — Inside an FPGA Trigger

**Title:** *How does L1 actually work?*

**Visual:** Block diagram — trigger primitives → regional → global

### Key points

- Detector signals → **trigger primitives** (e.g. calorimeter trigger towers, muon hit patterns)
- Local/regional processing: form clusters, track stubs
- **Global trigger (GT):** combines all objects, applies the **menu** — a list of logical conditions

**Example trigger menu conditions (CMS-style):**

| Seed name | Condition |
|---|---|
| `SingleEle32` | Single electron, E_T > 32 GeV |
| `DoubleMu7` | Two muons, each p_T > 7 GeV |
| `MET200` | Missing E_T > 200 GeV |

→ If **any** condition in the menu is satisfied: **L1 accept** → readout all subdetectors

---

## Slide 8 — The Trigger Menu

**Title:** *The physics program in a lookup table*

### Key points

- The trigger menu **is the experiment's physics programme** encoded in real-time logic
- ~O(500) trigger seeds/paths in current LHC experiments
- Each path has a **prescale** (keep 1 in N events) to manage rates

| Type | Examples | Purpose |
|---|---|---|
| **Unprescaled** | H→γγ, di-muon resonances, high-p_T jets | Primary physics |
| **Prescaled** | Minimum bias, low-p_T objects | Calibration, exotic searches |

- The menu must be agreed upon **before data taking** — this is a physics/political process!

> **Speaker note:** *"The trigger menu is where detector physicists, theorists and analysts all argue. What you don't trigger on, you lose forever."*

---

## Slide 9 — High-Level Trigger (HLT)

**Title:** *Software reconstruction at 100 kHz input*

**Visual:** Server farm photo + flow: L1 accept → partial reco → full reco → decision

### Key points

- HLT runs on a CPU farm: CMS ~30,000 cores, ATLAS similar scale
- At 100 kHz input → **~O(300 ms)** per event on average
- Runs a **partial version of offline reconstruction**: tracking, clustering, jet finding, b-tagging
- Key trick: **seeded reconstruction** — only reconstruct in the Region of Interest (RoI) flagged by L1
- At each step, partial results can **reject early** → save CPU time
- Output rate: **~1–2 kHz** → permanent storage

---

## Slide 10 — Tracking at the HLT

**Title:** *The most expensive step — and the most powerful*

### Key points

- Track reconstruction = **combinatorial problem**, scales badly with pileup
- Inner tracker: ~O(10⁸) channels → billions of hits per event at high pileup
- HLT uses **fast track finding** algorithms: road-based, Hough transform, cellular automaton
- Tracking unlocks the key physics quantity: **impact parameter** → b-tagging, τ-tagging, displaced vertices
- Example performance: HLT b-tagging efficiency ~70% for b-jets with <1% light-jet fake rate

> **Speaker note:** *"Tracking at the HLT is the difference between knowing an electron exists and knowing where it came from."*

---

## Slide 11 — Case Study 1: ATLAS & CMS

**Title:** *General purpose detectors — keeping all options open*

**Visual:** L1 + HLT funnel with Run 3 numbers

### Key points

- Both designed to discover the **unexpected** → broad menu philosophy
- **ATLAS:** L1Calo + L1Muon + L1Topo (topological correlations) → ~100 kHz → HLT → ~1.5 kHz
- **CMS:** Time-multiplexed Layer-1 + Global Trigger → ~100 kHz → HLT → ~2 kHz
- Key challenge: **MET triggers** — need full calorimeter sum, very sensitive to noise

**Key Higgs triggers:**

| Channel | Trigger seed |
|---|---|
| H→ZZ→4ℓ | Isolated lepton seeds |
| H→γγ | Diphoton seeds |
| H→ττ | τ + τ coincidence seeds |

---

## Slide 12 — Case Study 2: LHCb

**Title:** *B physics — a completely different philosophy*

**Visual:** LHCb schematic + Run 3 trigger architecture

### Key points

- LHCb is a **forward spectrometer** optimised for B-physics and CP violation
- Key signature: **displaced vertices** from B decay (cτ ~ 500 μm)

**Evolution of the LHCb trigger:**

| Run | Architecture | Output rate |
|---|---|---|
| Run 2 (≤2018) | L0 hardware + HLT1 + HLT2 | 12.5 kHz |
| **Run 3 (now)** | **No hardware trigger — full software at 30 MHz** | ~2 MHz |

- **Run 3 revolution:** luminosity ×5, reads out all 30 MHz collisions fully
- GPU-based real-time reconstruction (**Allen framework**)
- **First LHC experiment with a fully software trigger**
- Possible because: lower luminosity than ATLAS/CMS, simpler track geometry, GPUs

> **Speaker note:** *"LHCb's Run 3 trigger is arguably the most radical change in HEP data acquisition in 20 years."*

---

## Slide 13 — Allen: GPU Trigger at LHCb

**Title:** *Heterogeneous computing comes to the trigger*

**Visual:** GPU card + reconstruction pipeline diagram

### Key points

- **Allen** is LHCb's GPU-based first-stage software trigger (HLT1)
- Runs on **~500 NVIDIA GPUs** (A100/H100 class)
- Reconstructs VELO (Vertex Locator) tracks in **~500 μs** per event
- Finds primary vertices, selects displaced tracks → rate reduction: **40 MHz → ~1 MHz**
- Demonstrates massively parallel architectures can handle real-time HEP reconstruction
- Open-source framework, influential beyond LHCb

---

## Slide 14 — Case Study 3: ALICE

**Title:** *Heavy-ion collisions — the extreme case*

### Key points

- ALICE studies the **Quark-Gluon Plasma (QGP)** in Pb-Pb collisions — very different physics
- Pb-Pb: event size **~100× larger** than pp, but collision rate much lower (~10 kHz during Pb runs)

**Run 3 upgrade — continuous readout:**
- No hardware trigger for most detectors
- TPC reads out continuously at **50 kHz minimum bias**
- **Online-Offline (O²) framework:** compression, online calibration and reconstruction
- For Pb-Pb: essentially record **everything**, compress online, select interesting events later

→ Completely different trigger philosophy from ATLAS/CMS, driven entirely by the physics

---

## Slide 15 — Trigger Efficiency & Bias

**Title:** *What the trigger does to your measurement*

### Key points

- Every trigger introduces **efficiency** (signal kept) and **bias** (shape distortion)
- Example: a p_T threshold on muons creates a sharp **turn-on curve** — must be measured in data
- **Tag-and-probe method:** use clean samples (J/ψ→μμ, Z→ℓℓ) to measure trigger efficiency
- Efficiency corrections applied as **per-event weights** in analyses
- **Trigger bias** can distort distributions: e.g. isolation requirement changes jet activity near lepton

> **Speaker note:** *"You cannot publish a cross-section measurement without understanding your trigger efficiency. It's not optional."*

---

## Slide 16 — Trigger-Level Analysis & Data Scouting

**Title:** *When you can't afford the full event*

### Key points

- For some physics (e.g. dijet resonances at low mass), rates are too high to store full events
- Solution: store only trigger-level objects — ~few kB per event instead of ~1.5 MB

| Experiment | Name | Rate accessible |
|---|---|---|
| ATLAS | Trigger-Level Analysis (TLA) | O(MHz) |
| CMS | Data Scouting | O(MHz) |

**Physics targets:**
- Searches at **lower mass thresholds** with huge statistics
- Dark sector searches: dark photons, light dijet resonances

**Trade-off:** no offline reconstruction, limited systematic control

---

## Slide 17 — Machine Learning in the Trigger

**Title:** *The new frontier*

**Visual:** Simple NN diagram with label "deployed at L1 / HLT"

### Key points

ML has transformed the HLT in the last ~5 years:

- **b-tagging at HLT:** deep NNs (ParticleNet, DeepJet variants) deployed in production
- **τ identification:** BDTs and DNNs → crucial for H→ττ
- **Anomaly detection:** model-agnostic triggers
  - CMS **AXOL1TL:** autoencoder-based anomaly detection **at L1**, running on FPGAs
  - ATLAS NEOS and other AD approaches in HLT
- **Fast ML / hls4ml:** framework to compile NNs directly to FPGA firmware
  - Inference latency: **~50 ns** on FPGA — compatible with L1!

**Open question:** Can we trigger on "something unusual" without knowing what we're looking for?

---

## Slide 18 — HL-LHC and Future Challenges

**Title:** *The trigger problem gets harder*

### Key points

- **HL-LHC** (starting ~2029): luminosity ×5–7 → **pileup ~200** simultaneous pp interactions
- This breaks current trigger architectures: L1 rates and HLT CPU time both explode

**Phase-2 upgrades (ATLAS + CMS):**

| Upgrade | Experiment | What it enables |
|---|---|---|
| L1 Track Trigger | CMS | Silicon tracker info at 40 MHz in FPGAs |
| Hardware Track Trigger (HTT) | ATLAS | Fast track finding at L1 |
| → Isolated leptons at L1 | Both | Lower p_T thresholds, b-jets at L1 |

- DAQ bandwidth: **O(100 Tb/s)** — requires entirely new network infrastructure
- Timeline: installation ongoing, commissioning ~2028–2029

---

## Slide 19 — Key Takeaways

**Title:** *What to remember*

1. The trigger is **not optional** — LHC data rates exceed recordable capacity by ~10⁵
2. The solution is **layered**: fast hardware (L1) + slower software (HLT), each doing what it does best
3. Different experiments have **radically different** trigger philosophies driven by their physics goals
4. The trigger **shapes your physics**: efficiency, bias and thresholds matter as much as detector resolution
5. ML and heterogeneous computing (GPUs, FPGAs) are **transforming** real-time data processing
6. HL-LHC will require another generation of trigger innovation

---

## Slide 20 — Discussion / Q&A

**Title:** *Things worth arguing about*

**Provocative questions to seed discussion:**

- *"If you had infinite bandwidth, would you still want a trigger?"*
  → (discuss online calibration, data quality, computing models)
- *"LHCb removed the hardware trigger. Should everyone?"*
  → (discuss luminosity dependence, detector geometry, GPU scalability)
- *"Should the trigger be physics-model-agnostic?"*
  → (anomaly detection debate — what does "unusual" mean at a collider?)
- *"Who owns the trigger menu — the detector team or the physics analysts?"*
  → (governance, prescale decisions, rare process protection)

---

## Presenter Notes

### Pacing

- **1.5–2 minutes per slide** at this density → 20 slides fits 40–45'
- Leave ~5' at the end for discussion, or weave in questions after the case studies
- Don't rush slides 2–5 — the motivation section is critical for newcomers

### Audience calibration

| Audience | Critical slides | Notes |
|---|---|---|
| **Complete newbies** | 2–5 | Nail the scale of the problem before anything else |
| **Detector experts** | 6–10 | Can go faster, invite comments |
| **Analysts** | 15–16 | Efficiency/bias and scouting are very relevant to their work |
| **All / frontier** | 12–13, 17–18 | LHCb Run 3 and ML will be interesting for everyone |

### Recommended visuals to prepare

- **Slide 5:** Clean funnel diagram (worth making fresh — the ones in talks are often ugly)
- **Slide 6:** ATLAS or CMS L1 architecture schematic — available in public TDRs
- **Slide 13:** Allen GPU pipeline — in LHCb public documentation
- **Slide 17:** hls4ml latency vs. network size plot — classic figure, widely used in talks
- **Slide 18:** HL-LHC pileup illustration — available in CMS/ATLAS public material

---

## References & Further Reading

- ATLAS Trigger/DAQ TDR (Phase-2): [CERN-LHCC-2017-020](https://cds.cern.ch/record/2285584)
- CMS L1 Trigger TDR (Phase-2): [CERN-LHCC-2020-004](https://cds.cern.ch/record/2714892)
- LHCb Trigger and Online Upgrade TDR: [CERN-LHCC-2014-016](https://cds.cern.ch/record/1701361)
- Allen framework paper: Aaij et al., *Computing and Software for Big Science* 4 (2020) 7
- hls4ml: Duarte et al., *JINST* 13 (2018) P07027
- CMS Data Scouting: CMS-EXO-22-026 and related publications
- AXOL1TL (CMS anomaly detection at L1): Govorkova et al., *Nature Machine Intelligence* (2022)
