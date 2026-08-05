# INHABIT #16 / #17 — Artist-in-Residence @ MPIEA Frankfurt

Max Planck Institute for Empirical Aesthetics.
https://www.aesthetics.mpg.de/en/research/inhabit-artist-in-residence/

## Deadline & timeline
- **Application deadline: 01 September 2026, 23:59 CET** (~4 weeks from 2026-08-05).
- Jury decision: November 2026.
- Residency: #16 Apr–Jul 2027 · #17 Sep–Dec 2027. Duration 4 months.

## What they offer
Artist fee €8,000 · accommodation €2,000 · production budget (project-dependent) ·
final project realisation · travel to/in Frankfurt · collaboration with scientists ·
access to library, sound studio, scientific facilities · curatorial support.

## Who they want
Performing-arts / music artists open to interdisciplinary art×science collaboration;
willing to develop + share a project (exhibition / performance / concert / other);
active in contemporary culture, innovative & challenging.

## Deliverables to upload
- [ ] **CV**
- [x] **Artist's statement** (max 500 words) — draft in `statement.md`
- [x] **Project description** (max 500 words) — draft in `project.md` ("The Listening Circuit")
- [ ] **Portfolio** (max 20 pages) — PDF

## Strategy (decided)
- Proposed project = **SYMBIONT / braino** (EEG→sound). This is a near-perfect fit:
  MPIEA is empirical aesthetics (neuroscience/psychology of aesthetic response), with EEG
  labs + sound studio. Angle = close the biofeedback loop between performer & listener;
  "entrainment" as compositional material. Working title **The Listening Circuit**.

## Document/PDF plan
Build an on-brand **print layer inside the omy Astro repo**, generate PDFs via browser
Print-to-PDF (⌘P → Save as PDF). Single source of truth, reusable for every open call.
- [ ] `/print/cv` — A4 print CSS, sourced from `src/data/projects.ts`.
- [ ] `/print/portfolio` — one work per spread (image + still mono spec block + short text),
      capped at ≤20 pages. Also from `projects.ts`.
Alt (max polish, later): rebuild portfolio in Affinity/InDesign.

## Open TODOs (user is doing these)
- [ ] **Photos** — user adding (theatre/installation works have none in repo yet:
      Thin Skinned Moon, Petromelancholia; also SYMBIONT/braino rig shots).
- [ ] **Text** — user writing more.
- [ ] **Video** — user recording clean braino re-export (current braino-loop.mp4 has a
      "Tineco_0069" watermark).

## TODOs for Claude next session
- [x] Verify word counts of statement.md + project.md are ≤500.
      (2026-08-05: statement = 482; project = 483 after adding real names. Both OK, both tight.)
- [x] Fetch MPIEA site → replace "Department of Music" placeholder with real current
      department/research-group names + a named interlocutor (strengthens project.md).
      (2026-08-05: Dept. of Music = Prof. Dr. Melanie Wald-Fuhrmann; Research Group
      "Neurocognition of Music and Language" = PD Dr. Daniela Sammler — she studies neural
      entrainment, which is *exactly* project.md's compositional material. Named both in project.md.)
- [ ] Build the `/print/cv` + `/print/portfolio` print layer once photos land.
