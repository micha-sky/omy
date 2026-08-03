// ── Single source of truth for all project pages ─────────────
// Add a project by adding an object here. Photos: drop files in
// public/images/<slug>/ and list them under `images`. Music: local
// files go in public/audio/ (list under `audio`), or embed SoundCloud
// via `soundcloud`. The site sorts everything by `sort` (newest first).

export type Project = {
  slug: string;
  title: string;
  sort: string;        // ISO date used only for ordering (newest → oldest)
  yearLabel: string;   // what the visitor sees
  category: string;    // small mono tag, e.g. "Theatre", "Live performance"
  role: string;
  summary: string;     // one line, shown in the work index
  body: string[];      // paragraphs on the detail page
  credits: [string, string][];
  images?: { src: string; alt: string }[];
  audio?: { title: string; src: string }[];
  soundcloud?: { url: string; height?: number }[];
  links?: { label: string; url: string }[];
  todo?: string;       // visible "to confirm" flag on the detail page
  featured?: boolean;  // pinned on the home page (SYMBIONT)
  video?: string;      // background/hero video
};

export const projects: Project[] = [
  {
    slug: "symbiont",
    title: "SYMBIONT",
    sort: "9999-01-01",
    yearLabel: "ongoing",
    category: "Instrument",
    role: "Concept, instrument, performance",
    summary:
      "A biofeedback instrument where a living system — EEG, plant, room — improvises in place of a second musician.",
    body: [
      "SYMBIONT is an instrument that renders a living system's signal as sound in real time. It keeps the practice of live performance and swaps one performer for a living system: an EEG signal, a plant, a room.",
      "braino, its EEG-to-sound engine, maps the five brainwave bands to a stereo field in the browser — offline from a CSV, or live while the signal streams in over OSC. The living system becomes the improvising partner.",
    ],
    credits: [
      ["Signal", "EEG (Muse) · plant · room"],
      ["Engine", "braino — WebAudio / OSC"],
      ["Status", "In documentation"],
    ],
    video: "/video/braino-loop.mp4",
    featured: true,
  },
  {
    slug: "birthday-set-bye-bye-raum",
    title: "birrthday set @ BYE BYE RAUM",
    sort: "2025-01-18",
    yearLabel: "2025",
    category: "Live performance",
    role: "Live set (as Magdeburg 96)",
    summary: "A live set at the BYE BYE RAUM closing, 18 January 2025.",
    body: [
      "A live set performed as Magdeburg 96 at the BYE BYE RAUM closing night, 18 January 2025.",
    ],
    credits: [
      ["Where", "BYE BYE RAUM"],
      ["When", "18 January 2025"],
      ["As", "Magdeburg 96"],
    ],
    soundcloud: [
      { url: "https://soundcloud.com/getschwifty/sets/birrthday-set-bye-bye-raum-18012025", height: 340 },
    ],
  },
  {
    slug: "sacha-live-locke",
    title: "Sacha live @ Locke",
    sort: "2024-06-20",
    yearLabel: "2024",
    category: "Live performance",
    role: "Live set (as Magdeburg 96)",
    summary: "A live set at Locke, 20 June 2024.",
    body: ["A live set performed as Magdeburg 96 at Locke, 20 June 2024."],
    credits: [
      ["Where", "Locke"],
      ["When", "20 June 2024"],
      ["As", "Magdeburg 96"],
    ],
    soundcloud: [{ url: "https://soundcloud.com/getschwifty/sacha-locke", height: 166 }],
  },
  {
    slug: "petromelancholia",
    title: "Petromelancholia",
    sort: "2023-09-01",
    yearLabel: "2023",
    category: "Installation",
    role: "Sound mixing & mastering",
    summary:
      "Sound for a collective learning-video installation with the Chto Delat collective.",
    body: [
      "A collective learning-video installation grown out of the “Clash of Elements” summer school at HFBK Hamburg, conceived with the Chto Delat collective (Dmitry Vilensky).",
      "Portraits of participants — HFBK students alongside cultural workers who had fled Russia — are staged against their own shadows, exploring energy, catastrophe, and the fragility of collective futures.",
    ],
    credits: [
      ["With", "Chto Delat (Dmitry Vilensky)"],
      ["Where", "HFBK Hamburg · Brutus, NL"],
      ["When", "opening 1 Sept 2023"],
    ],
  },
  {
    slug: "thin-skinned-moon",
    title: "Thin Skinned Moon",
    sort: "2022-06-01",
    yearLabel: "2022–",
    category: "Performance",
    role: "Live music",
    summary:
      "Live music for a performance-in-continuous-process with Helena Aljona Kühn.",
    body: [
      "A performance in continuous process with Helena Aljona Kühn, blending performance, dance, text, and live music into an autofictional (night)dreamscape of trauma, neurodiversity, and loneliness.",
      "Monthly try-outs invite the audience into each new iteration.",
    ],
    credits: [
      ["With", "Helena Aljona Kühn"],
      ["Support", "Fonds Darstellende Künste (Take Heart)"],
      ["Status", "Ongoing since 2022"],
    ],
  },
  {
    slug: "afw-analogfilmwerke",
    title: "AFW — live at Analogfilmwerke",
    sort: "2021-09-04",
    yearLabel: "2021",
    category: "Live performance",
    role: "Live set (as Magdeburg 96)",
    summary: "A live set at an Analogfilmwerke screening.",
    body: ["A live set performed as Magdeburg 96 at an Analogfilmwerke screening."],
    credits: [
      ["Where", "Analogfilmwerke screening"],
      ["As", "Magdeburg 96"],
    ],
    soundcloud: [{ url: "https://soundcloud.com/getschwifty/afw", height: 166 }],
    todo: "confirm date — inferred from upload (Sept 2021)",
  },
  {
    slug: "4-48-psychose",
    title: "4.48 Psychose",
    sort: "2021-06-17",
    yearLabel: "2021",
    category: "Theatre",
    role: "Composition & sound",
    summary:
      "Composition & sound for a Studienprojekt after Sarah Kane at Theaterakademie Hamburg.",
    body: [
      "A queer-feminist reckoning with Sarah Kane's most fragmentary text — tracing the “invisible women” of a medical system that treats the male body as the default.",
      "Staged as a 60-minute duet between one actress, one musician, and one text: a Studienprojekt at Theaterakademie Hamburg.",
    ],
    credits: [
      ["Direction", "Charlotte Heße"],
      ["Performance", "Julia Buchmann"],
      ["Where", "Theaterakademie Hamburg"],
      ["When", "17–20 June 2021"],
    ],
  },
];

// Newest → oldest, with SYMBIONT (sort 9999) naturally pinned first.
export const byNewest = [...projects].sort((a, b) => (a.sort < b.sort ? 1 : -1));

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
