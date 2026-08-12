/**
 * Church site configuration — the main handoff surface for a new client.
 * Update this file (plus copy/images) and most of the site follows.
 */
export type ChurchConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  pastor: {
    name: string;
    title: string;
    bio: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    mapsUrl: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  serviceTimes: Array<{
    label: string;
    time: string;
    note?: string;
  }>;
  ministries: Array<{
    name: string;
    summary: string;
  }>;
  sermons: Array<{
    title: string;
    speaker: string;
    date: string;
    passage?: string;
    href?: string;
  }>;
  give: {
    headline: string;
    body: string;
    ctaLabel: string;
    /** External giving URL or leave empty for placeholder */
    ctaHref: string;
  };
  colors: {
    background: string;
    surface: string;
    ink: string;
    muted: string;
    accent: string;
    accentSoft: string;
  };
  logoPath: string;
  social?: {
    facebook?: string;
    youtube?: string;
    instagram?: string;
  };
};

const churchConfig: ChurchConfig = {
  name: "Grace Fellowship Church",
  shortName: "Grace Fellowship",
  tagline: "A place to belong. A people on mission.",
  description:
    "We gather to worship Jesus, grow as disciples, and serve our neighbors with the hope of the gospel.",
  pastor: {
    name: "Pastor James Carter",
    title: "Lead Pastor",
    bio: "Pastor James and his family have served Grace Fellowship since 2014. He loves opening Scripture clearly and walking with people through every season of life.",
  },
  address: {
    street: "123 Oak Street",
    city: "Wilson",
    state: "NC",
    zip: "27893",
    mapsUrl: "https://maps.google.com/?q=Wilson+NC",
  },
  contact: {
    phone: "(252) 555-0140",
    email: "hello@examplechurch.org",
  },
  serviceTimes: [
    {
      label: "Sunday Worship",
      time: "10:30 AM",
      note: "Nursery & kids ministry available",
    },
    {
      label: "Wednesday Bible Study",
      time: "6:30 PM",
    },
  ],
  ministries: [
    {
      name: "Kids",
      summary:
        "Safe, joyful environments where children learn the love of Jesus each Sunday.",
    },
    {
      name: "Students",
      summary:
        "Middle and high schoolers growing in faith, friendship, and purpose.",
    },
    {
      name: "Groups",
      summary:
        "Small groups that meet during the week for Scripture, prayer, and community.",
    },
    {
      name: "Care & Outreach",
      summary:
        "Practical help for neighbors in need — meals, visits, and local partnerships.",
    },
  ],
  sermons: [
    {
      title: "The Welcome of Christ",
      speaker: "Pastor James Carter",
      date: "2026-08-03",
      passage: "Romans 15:7",
    },
    {
      title: "Built on the Rock",
      speaker: "Pastor James Carter",
      date: "2026-07-27",
      passage: "Matthew 7:24–27",
    },
    {
      title: "One Body, Many Gifts",
      speaker: "Guest: Rev. Anna Wells",
      date: "2026-07-20",
      passage: "1 Corinthians 12",
    },
  ],
  give: {
    headline: "Give generously",
    body: "Your generosity fuels worship, discipleship, and care in our community. Online giving placeholder — connect your church’s preferred platform.",
    ctaLabel: "Give online",
    ctaHref: "#",
  },
  colors: {
    background: "#f7f3ec",
    surface: "#ffffff",
    ink: "#1f2a24",
    muted: "#5c685f",
    accent: "#2f5d50",
    accentSoft: "#dce8e2",
  },
  logoPath: "/church-mark.svg",
  social: {
    facebook: "",
    youtube: "",
  },
};

export default churchConfig;

export function formatAddress(config: ChurchConfig = churchConfig): string {
  const { street, city, state, zip } = config.address;
  return `${street}, ${city}, ${state} ${zip}`;
}
