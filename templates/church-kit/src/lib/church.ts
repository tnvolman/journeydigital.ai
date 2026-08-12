/**
 * File-based church content config.
 *
 * Field shape inspired by reference/tabernacle-html admin notes:
 * banner, service times, latest sermon (+ YouTube URL), events (≤3),
 * contact/socials, pastor, ministries, giving.
 *
 * PLACEHOLDER / FICTIONAL sample church only — not Tabernacle branding.
 * No client-side password auth — edit this file (or a real CMS) instead.
 */

export type BannerConfig = {
  enabled: boolean;
  text: string;
  href?: string;
};

export type ServiceTime = {
  label: string;
  time: string;
  note?: string;
};

export type Sermon = {
  title: string;
  speaker: string;
  date: string;
  passage?: string;
  series?: string;
  /** Optional YouTube / media URL */
  mediaUrl?: string;
};

export type Ministry = {
  name: string;
  blurb: string;
};

export type EventItem = {
  title: string;
  date: string;
  time?: string;
  blurb: string;
};

export type ChurchConfig = {
  name: string;
  shortName: string;
  /** Hero headline — keep warm and congregational */
  tagline: string;
  /** Supporting mission line under the hero */
  mission: string;
  description: string;
  city: string;
  state: string;
  addressLine: string;
  zip: string;
  phone: string;
  email: string;
  mapsUrl: string;
  watchOnlineUrl: string;
  social: {
    facebook?: string;
    youtube?: string;
    instagram?: string;
  };
  pastor: {
    name: string;
    title: string;
    bio: string;
  };
  banner: BannerConfig;
  serviceTimes: ServiceTime[];
  latestSermon: Sermon;
  sermons: Sermon[];
  ministries: Ministry[];
  /** Up to ~3 homepage events */
  events: EventItem[];
  give: {
    headline: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  visit: {
    headline: string;
    body: string;
    ctaLabel: string;
  };
};

export const church: ChurchConfig = {
  name: "Grace Fellowship Church",
  shortName: "Grace Fellowship",
  tagline: "A church for every neighbor.",
  mission:
    "We gather to worship Jesus, grow as disciples, and serve our city with the hope of the gospel.",
  description:
    "A welcoming congregation where Scripture is opened clearly, families grow together, and guests find a place to belong.",
  city: "Your City",
  state: "ST",
  addressLine: "123 Main Street",
  zip: "00000",
  phone: "(555) 010-2000",
  email: "hello@example-church.org",
  mapsUrl: "https://maps.google.com/?q=church",
  watchOnlineUrl: "#sermons",
  social: {
    facebook: "",
    youtube: "",
  },
  pastor: {
    name: "Pastor James Carter",
    title: "Lead Pastor",
    bio: "Placeholder bio — Pastor James and his family love opening Scripture clearly and walking with people through every season of life.",
  },
  banner: {
    enabled: true,
    text: "Placeholder banner — e.g. special services this Sunday at 10:30 AM",
    href: "#services",
  },
  serviceTimes: [
    {
      label: "Sunday Morning Worship",
      time: "10:30 AM",
      note: "Nursery & kids ministry available",
    },
    {
      label: "Sunday Evening",
      time: "6:00 PM",
      note: "Worship & teaching",
    },
    {
      label: "Wednesday",
      time: "6:30 PM",
      note: "Prayer & Bible study",
    },
  ],
  latestSermon: {
    title: "Placeholder: Walking in Grace",
    speaker: "Pastor James Carter",
    date: "August 3, 2026",
    passage: "Ephesians 2:8–10",
    series: "Sample Series",
    mediaUrl: "",
  },
  sermons: [
    {
      title: "Placeholder: Walking in Grace",
      speaker: "Pastor James Carter",
      date: "August 3, 2026",
      passage: "Ephesians 2:8–10",
      series: "Sample Series",
    },
    {
      title: "Placeholder: Built on the Word",
      speaker: "Pastor James Carter",
      date: "July 27, 2026",
      passage: "Matthew 7:24–27",
      series: "Sample Series",
    },
    {
      title: "Placeholder: Sent to Serve",
      speaker: "Guest Speaker",
      date: "July 20, 2026",
      passage: "Acts 1:8",
      series: "Sample Series",
    },
  ],
  ministries: [
    {
      name: "Kids & Students",
      blurb:
        "Age-graded teaching and midweek gatherings for the next generation.",
    },
    {
      name: "Connect Groups",
      blurb: "Weekday groups for fellowship, Scripture, and prayer.",
    },
    {
      name: "Find Your Place",
      blurb: "Serve on a team and put your gifts to work in the body.",
    },
    {
      name: "Outreach",
      blurb: "Local service opportunities that put faith into action.",
    },
  ],
  events: [
    {
      title: "Placeholder: Church Picnic",
      date: "Coming soon",
      time: "After morning worship",
      blurb: "Sample event — replace with the church calendar.",
    },
    {
      title: "Placeholder: Newcomers Lunch",
      date: "First Sunday",
      time: "12:15 PM",
      blurb: "Meet the pastors and learn how to get connected.",
    },
    {
      title: "Placeholder: Prayer Night",
      date: "Last Wednesday",
      time: "6:30 PM",
      blurb: "An extended evening of prayer for our city and church family.",
    },
  ],
  give: {
    headline: "Partner with the mission",
    body: "Your generosity fuels worship, discipleship, and care in our community. Connect your church’s secure giving platform here.",
    ctaLabel: "Give online (placeholder)",
    ctaHref: "#give",
  },
  visit: {
    headline: "Plan your visit",
    body: "Come as you are — we’ll help you find a seat, a class, and a warm welcome.",
    ctaLabel: "Get directions",
  },
};

export function formatAddress(config: ChurchConfig = church): string {
  return `${config.addressLine}, ${config.city}, ${config.state} ${config.zip}`;
}
