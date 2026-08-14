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
  images?: { src: string; alt: string; caption?: string }[];
  audio?: { title: string; src: string }[];
  soundcloud?: { url: string; height?: number }[];
  youtube?: string;    // YouTube video id, embedded 16:9
  links?: { label: string; url: string }[];
  todo?: string;       // visible "to confirm" flag on the detail page
  featured?: boolean;  // pinned on the home page (SYMBIONT)
  video?: string;      // background/hero video
  videos?: { src: string; caption?: string }[];  // extra clips on the detail page
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
      quote:
        "Five brainwave bands become five voices in a stereo field — the slow brain sings bass, the fast brain sings air.",
      source: "braino — the mapping",
    },
    body: [
      "SYMBIONT is an instrument that renders a living system's signal as sound in real time. My work is composition and sound for performance — a fragmenting text, a body in a dreamscape, a collective in catastrophe. SYMBIONT keeps that practice exactly and swaps one performer for a living system: an EEG signal, a plant, a room.",
      "I stand in the lineage of biofeedback music — Lucier, Rosenboom, Teitelbaum — but where that tradition asked what the body sounds like, SYMBIONT asks what a symbiosis sounds like when the human ear is only one of several nervous systems in the room.",
      "braino, its engine, listens to the five rhythms a brain runs at the same time — from the slow delta of deep rest to the fast gamma of alert attention — and gives each one a voice in a shared stereo field. The slowest becomes a bass you feel more than hear; the fastest becomes air and shimmer overhead. Every voice is held inside a chosen scale, so what comes out is music rather than data made loud, and the deep drone stays pinned to the root, so the floor always agrees with whatever is happening above it. When a band goes quiet its voice recedes; when attention returns, it steps back into the chord. Nobody presses a key, and yet the thing is unmistakably being played.",
      "Live, the field opens outward. Around the human band the same engine layers slower, non-human sources, each setting the space and density of the room: satellites passing overhead, the Wi-Fi environment, a shortwave band, the level of the Elbe at St. Pauli, the real positions of sun and moon, the Schumann resonance, the solar wind. Each gets a quiet hand on the stereo field and, when invited, a voice of its own — the moon as a drone that swells only when it is full and risen, the river as filtered water-noise, the cavity as a sub-low throb. A living plant, read through a pair of electrodes, becomes another organism in the mix. The performer is dispersed across all of them.",
      "That last source matters more than it sounds. The Schumann resonance is a standing wave in the cavity between the earth and the ionosphere, and it sits at roughly the frequency of the alpha rhythm of a calm human brain. When it is allowed to bend the tuning the piece is built from, the person and the planet are not being compared — they are bending the same note.",
      "The excerpts below are recordings from sessions with the instrument. They move at the speed a nervous system moves: slowly, and never quite repeating. What you are hearing is not a recording of a brain. It is a duet in which one of the players happens to be one.",
      "The screenshots are the working surface, and it is closer to a score than to a control panel: five bands drawn live, a list of voices they can be given, and a mixer in which the brain, the plant, the satellites, the river and the cavity each get a fader and a place in the stereo field. Preparing a piece means deciding who is allowed into the room, and how loudly — and then leaving them to it.",
      "The apparatus is intentionally modest: consumer hardware and off-the-shelf parts, and the mapping above is one configuration among many — an instrument, not a fixed patch. An ongoing inquiry into post-human authorship and making music with, rather than about, the living world.",
    ],
    credits: [
      ["Signal", "EEG (Muse) · plant · room"],
      ["Engine", "braino — WebAudio / OSC"],
      ["Live sources", "satellites · Wi-Fi · river · moon · Schumann · solar wind"],
      ["Documentation", "Session excerpts & interface, August 2026"],
      ["Status", "In documentation"],
    ],
    video: "/video/braino-flame.mp4",
    videos: [
      { src: "/video/braino-water.mp4", caption: "braino — live visual" },
    ],
    audio: [
      { title: "Session excerpt I", src: "/audio/braino-session-1.mp3" },
      { title: "Session excerpt II", src: "/audio/braino-session-2.mp3" },
      { title: "Session excerpt III", src: "/audio/braino-session-3.mp3" },
    ],
    images: [
      {
        src: "/images/symbiont/01-bands.jpg",
        alt: "The braino interface: five brainwave bands drawn live, with the list of voices open",
        caption: "Five bands, live — each drawn twice, as a level and as its own recent history. The open list is the voice a band can be given: drone, ocean, singing bowls, choir, symbiont.",
      },
      {
        src: "/images/symbiont/02-mixer.jpg",
        alt: "The braino mixer, with faders for brain, plant, satellites, Wi-Fi, shortwave, river, celestial and Schumann",
        caption: "The mixer. Brain, plant, satellites, Wi-Fi, shortwave, river, sun and moon, Schumann cavity — one fader and one position in the stereo field each.",
      },
      {
        src: "/images/symbiont/03-sources.jpg",
        alt: "The braino sources panel, listing satellites, Wi-Fi, shortwave, river gauge, celestial and Schumann inputs",
        caption: "Choosing who is in the room: satellites overhead, the local Wi-Fi, a shortwave band, the Elbe gauge at St. Pauli, sun and moon, the cavity, the solar wind.",
      },
      {
        src: "/images/symbiont/04-sky.jpg",
        alt: "The celestial strip in braino, showing the real positions of sun and moon over Hamburg",
        caption: "The sky over Hamburg at the time of playing — sun at 50°, a 4% moon at 39°. The moon's voice only swells when it is up.",
      },
      {
        src: "/images/symbiont/05-synth.jpg",
        alt: "The braino synth panel with tuning, sampler and arpeggiator settings",
        caption: "Tuning and voicing: the temperament, the scale, the root note — the frame the live cavity is then allowed to bend.",
      },
      {
        src: "/images/symbiont/06-effects.jpg",
        alt: "The braino effects panel with reverb, binaural beats, bilateral panning and filter settings",
        caption: "The room the voices are heard in — reverb, binaural beating, a slow bilateral pan that moves the whole field from ear to ear.",
      },
    ],
    todo: "session excerpt titles & dates — placeholders",
    featured: true,
  },
  {
    slug: "kaluskie-baarm-sommerfest",
    title: "kaluskie eksportowe @ BAARM Sommerfest",
    sort: "2025-08-30",
    yearLabel: "2025",
    category: "Live performance",
    role: "Live set (as kaluskie eksportowe)",
    summary: "A live set at the BAARM Sommerfest in Hamburg, as kaluskie eksportowe — solo guitar through an infinite-sustain pedal and effects chain.",
    body: [
      "A live set performed as kaluskie eksportowe at the BAARM Sommerfest — the summer festival of the BAARM artist-and-workshop collective in Hamburg, a former motorway rest stop now given over to studios for art, design, music and craft.",
      "Solo guitar, played through an infinite-sustain pedal into a live effects chain — single notes held and layered into sustained fields.",
    ],
    credits: [
      ["Where", "BAARM, Marschnerstraße 21, Hamburg"],
      ["When", "30 August 2025"],
      ["As", "kaluskie eksportowe"],
      ["Setup", "Guitar · infinite-sustain pedal · effects chain"],
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
    summary: "A live set at the BYE BYE RAUM closing, 18 January 2025 — solo guitar through an infinite-sustain pedal and effects chain.",
    body: [
      "A live set performed as Magdeburg 96 at the BYE BYE RAUM closing night, 18 January 2025. Solo guitar, played through an infinite-sustain pedal into a live effects chain.",
    ],
    credits: [
      ["Where", "BYE BYE RAUM"],
      ["When", "18 January 2025"],
      ["As", "Magdeburg 96"],
      ["Setup", "Guitar · infinite-sustain pedal · effects chain"],
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
    summary: "A live set at Locke, 20 June 2024 — solo guitar through an infinite-sustain pedal and effects chain.",
    body: ["A live set performed as Magdeburg 96 at Locke, 20 June 2024. Solo guitar, played through an infinite-sustain pedal into a live effects chain."],
    credits: [
      ["Where", "Locke"],
      ["When", "20 June 2024"],
      ["As", "Magdeburg 96"],
      ["Setup", "Guitar · infinite-sustain pedal · effects chain"],
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
    images: [
      { src: "/images/thin-skinned-moon/01.jpg", alt: "Oleksandr Mykhalskyi performing live music during a Thin Skinned Moon try-out" },
      { src: "/images/thin-skinned-moon/02.jpg", alt: "A performer working with glass vessels in a blue-lit Thin Skinned Moon try-out" },
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
      ["Photos", "Tillmann Engel"],
    ],
    images: [
      { src: "/images/4-48-psychose/01.jpg", alt: "Oleksandr Mykhalskyi performing live sound at the mixing desk in 4.48 Psychose" },
      { src: "/images/4-48-psychose/02.jpg", alt: "The actress inside the caged stage structure in 4.48 Psychose" },
      { src: "/images/4-48-psychose/03.jpg", alt: "The stage structure lit in violet in 4.48 Psychose" },
    ],
    youtube: "mN-v-RCEi34",
    soundcloud: [
      { url: "https://soundcloud.com/getschwifty/448-intro" },
      { url: "https://soundcloud.com/getschwifty/um-antwort-wird-gebeten" },
      { url: "https://soundcloud.com/getschwifty/zopiklon" },
    ],
    links: [
      { label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=mN-v-RCEi34" },
    ],
  },
];

// Newest → oldest, with SYMBIONT (sort 9999) naturally pinned first.
export const byNewest = [...projects].sort((a, b) => (a.sort < b.sort ? 1 : -1));

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
