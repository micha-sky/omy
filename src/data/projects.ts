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
  epigraph?: { quote: string; source: string };
  body: string[];      // paragraphs on the detail page
  credits: [string, string][];
  images?: { src: string; alt: string }[];
  audio?: { title: string; src: string }[];
  soundcloud?: { url: string; height?: number }[];
  youtube?: string;    // YouTube video id, embedded 16:9
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
    epigraph: {
      quote: "The circuit is a prayer wheel that happens to run on electricity.",
      source: "Tikkun, in hardware",
    },
    body: [
      "SYMBIONT is an instrument that renders a living system's signal as sound in real time. My work is composition and sound for performance — a fragmenting text, a body in a dreamscape, a collective in catastrophe. SYMBIONT keeps that practice exactly and swaps one performer for a living system: an EEG signal, a plant, a room.",
      "I stand in the lineage of biofeedback music — Lucier, Rosenboom, Teitelbaum — but where that tradition asked what the body sounds like, SYMBIONT asks what a symbiosis sounds like when the human ear is only one of several nervous systems in the room.",
      "In the Kabbalistic tradition, Tikkun names the work of repair — the mending of vessels that shattered because they could not hold the light passing through them. I make this work as a Ukrainian, from a home that has itself been shattered and scattered by war; repair is not a metaphor I reach for but the condition I work in. I understand SYMBIONT as that work made literal: building a vessel of sensors, signal, and sound sturdy enough to carry what moves through a living system without breaking it.",
      "braino, its EEG-to-sound engine, maps the five brainwave bands to a stereo field in the browser — offline from a CSV, or live while the signal streams in over OSC. The apparatus is intentionally modest: consumer hardware, off-the-shelf parts, mystic technology. An ongoing inquiry into post-human authorship, repair as a compositional principle, and making music with — rather than about — the living world.",
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
    slug: "kaluskie-baarm-sommerfest",
    title: "kaluskie eksportowe @ BAARM Sommerfest",
    sort: "2025-08-30",
    yearLabel: "2025",
    category: "Live performance",
    role: "Live set (as kaluskie eksportowe)",
    summary: "A live set at the BAARM Sommerfest in Hamburg, as kaluskie eksportowe.",
    body: [
      "A live set performed as kaluskie eksportowe at the BAARM Sommerfest — the summer festival of the BAARM artist-and-workshop collective in Hamburg, a former motorway rest stop now given over to studios for art, design, music and craft.",
    ],
    credits: [
      ["Where", "BAARM, Marschnerstraße 21, Hamburg"],
      ["When", "30 August 2025"],
      ["As", "kaluskie eksportowe"],
    ],
    images: [
      { src: "/images/kaluskie-baarm/01.jpg", alt: "Oleksandr Mykhalskyi performing as kaluskie eksportowe at the BAARM Sommerfest" },
    ],
    links: [{ label: "BAARM", url: "https://www.baarm.net/" }],
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
    slug: "pose-dia-phoenix",
    title: "Pose Dia — Phoenix",
    sort: "2023-06-30",
    yearLabel: "2023",
    category: "Music video",
    role: "VFX & 3D scan",
    summary: "VFX and 3D scanning for the official video of Pose Dia's “Phoenix.”",
    body: [
      "VFX and 3D-scan work for the official music video of “Phoenix” by Pose Dia.",
    ],
    credits: [
      ["Artist", "Pose Dia"],
      ["Released", "30 June 2023"],
    ],
    youtube: "BWPDmFROIRk",
    links: [
      { label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=BWPDmFROIRk" },
    ],
  },
  {
    slug: "drink-milk-not-oil",
    title: "Drink Milk Not Oil",
    sort: "2022-03-26",
    yearLabel: "2022",
    category: "Event",
    role: "Organisation, 3D scan, performance, poster design",
    summary:
      "A solidarity fundraiser for Ukraine at Kunsthaus Hamburg — organised, performed, 3D-scanned and designed.",
    body: [
      "A fundraising concert for the people of Ukraine, held in the Halle of Kunsthaus Hamburg on 26 March 2022 — a collective response to Russia's invasion. All entrance fees and bar profits were donated: half directly to people in Ukrainian cities, half to NGOs supporting relief efforts.",
      "I co-organised the evening and contributed across it — 3D scanning, performance, and the poster design — for a line-up of Hamburg live-electronic and DJ acts. The video was made in collaboration with Julian Huelser.",
    ],
    credits: [
      ["Where", "Kunsthaus Hamburg (Halle)"],
      ["When", "26 March 2022"],
      ["Video", "with Julian Huelser"],
      ["Co-organised with", "Lion Frenster, Philipp Kehder, Nikita Kotliar, Christopher Ramm"],
    ],
    video: "/video/drink-milk-not-oil.mp4",
    links: [
      { label: "Kunsthaus Hamburg", url: "https://kunsthaushamburg.de/veranstaltungen/drink-milk-not-oil-16706/" },
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
    epigraph: {
      quote:
        "Frauen werden in diesem System chronisch falsch verstanden, falsch behandelt und falsch diagnostiziert.",
      source: "Caroline Criado-Perez",
    },
    body: [
      "Sarah Kane's fragmentary text lets us look into the mind of a woman in psychic crisis, wrestling with the bitter incompatibility of body and soul. Against the backdrop of a medicine that treats the male body as the norm, we follow — through a weave of sound and poetic language — the trail of the wrongly diagnosed: the “hysterical”, the “invisible women”. Enraged, we rattle at the patriarchal system and pull the invisible into the spotlight.",
      "Staged as a duet between one actress, one musician, and one text: a Studienprojekt at Theaterakademie Hamburg.",
    ],
    credits: [
      ["Direction", "Charlotte Heße"],
      ["Dramaturgy", "Emily Richards"],
      ["Stage", "Carl Fischer, Sarah Matthies"],
      ["Costume", "Dina Polus, Duc-Thu Mach, Sara Bentivogli"],
      ["Performance", "Julia Buchmann, Oleksandr Mykhalskyi"],
      ["Where", "Theaterakademie Hamburg"],
      ["When", "17–20 June 2021"],
    ],
    youtube: "mN-v-RCEi34",
    links: [
      { label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=mN-v-RCEi34" },
    ],
  },
];

// Newest → oldest, with SYMBIONT (sort 9999) naturally pinned first.
export const byNewest = [...projects].sort((a, b) => (a.sort < b.sort ? 1 : -1));

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
