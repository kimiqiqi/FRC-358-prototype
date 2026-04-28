export interface Sponsor {
  name: string;
  logoUrl?: string; // Add real image path when available, e.g., '/sponsors/logo.png'
}

export interface SponsorLevel {
  levelName: string;
  sponsors: Sponsor[];
}

// Future Student Editor: 
// Add your real sponsors here. Right now we use placeholders.
// If logoUrl is empty, it will fall back to just showing the sponsor name.
export const sponsorTiers: SponsorLevel[] = [
  {
    levelName: "Platinum Level",
    sponsors: [
      { name: "SPONSOR 1" },
      { name: "SPONSOR 2" },
    ]
  },
  {
    levelName: "Gold Level",
    sponsors: [
      { name: "LOGO 1" },
      { name: "LOGO 2" },
      { name: "LOGO 3" },
    ]
  }
];
