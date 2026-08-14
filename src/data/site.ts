// ── Site-wide identity + contact ─────────────────────────────
// Single source of truth for the header/footer of the printable
// CV and portfolio. Edit here once; both PDFs update.

export const site = {
  name: "Oleksandr Mykhalskyi",
  role: "Composer & sound artist",
  location: "Kalush → Hamburg / Gießen",
  tagline: "Composing with living systems.",
  bio:
    "Composer and sound artist from Kalush, western Ukraine; studied in " +
    "Lviv, based between Hamburg and Gießen. Makes sound for performance, " +
    "theatre and installation, performs live as Magdeburg 96 and " +
    "kaluskie eksportowe, and builds instruments in which the improvising " +
    "partner is a living system: an EEG signal, a plant, a room. Before " +
    "that he was a doctoral researcher at the National Academy of Sciences " +
    "of Ukraine, where he built the environmental models inside the EU's " +
    "nuclear-emergency decision-support system. SYMBIONT turns the same " +
    "instinct inside out and uses scientific tools to make data heard " +
    "instead of acted on.",

  // Education & research — the scientific-research background (Academy of
  // Sciences / JRODOS). Rendered as its own CV section; framed as method,
  // not a second career: scientific tools used to make data audible.
  education: [
    {
      period: "c. 2015–2018",
      title: "Doctoral research (unfinished) — environmental modelling",
      detail:
        "Institute of Mathematical Machines and Systems Problems, National " +
        "Academy of Sciences of Ukraine, Kyiv. Radionuclide transport in " +
        "rivers and transboundary flood forecasting for JRODOS, the EU's " +
        "nuclear-emergency decision-support system; the real-time " +
        "Ukraine–Romania flood-forecasting exchange (Prut / Siret); " +
        "catchment modelling with the Institute of Environmental " +
        "Radioactivity, Fukushima (Niida river; Chernobyl Exclusion Zone GIS).",
    },
    {
      period: "2018",
      title: "Co-author, EGU General Assembly, Vienna",
      detail:
        "“Updated module of radionuclide hydrological dispersion of the " +
        "Decision Support System RODOS” (Kivva et al.).",
    },
    {
      period: "",
      title: "Information Technology — Lviv",
      detail: "",
    },
  ],

  // Contact — fill in email + website when settled. Empty strings are
  // simply not rendered, so the sheet never shows a blank line.
  contact: {
    email: "michalsky.alex@gmail.com",
    website: "",                            // e.g. "oleksandrmykhalskyi.com"
    instagram: "@omykhalskyi",
    instagramUrl: "https://instagram.com/omykhalskyi",
  },
};
