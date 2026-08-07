// ── Site-wide identity + contact ─────────────────────────────
// Single source of truth for the header/footer of the printable
// CV and portfolio. Edit here once; both PDFs update.

export const site = {
  name: "Oleksandr Mykhalskyi",
  role: "Composer & sound artist",
  location: "Kalush → Hamburg / Gießen",
  tagline: "We are one. OM.",
  bio:
    "Composer and sound artist from Kalush, western Ukraine; studied in " +
    "Lviv, based between Hamburg and Gießen. Makes sound for performance, " +
    "theatre and installation, performs live as Magdeburg 96, and builds " +
    "instruments where the improvising partner is a living system — an EEG " +
    "signal, a plant, a room.",

  // Contact — fill in email + website when settled. Empty strings are
  // simply not rendered, so the sheet never shows a blank line.
  contact: {
    email: "michalsky.alex@gmail.com",
    website: "",                            // e.g. "oleksandrmykhalskyi.com"
    instagram: "@omykhalskyi",
    instagramUrl: "https://instagram.com/omykhalskyi",
  },
};
