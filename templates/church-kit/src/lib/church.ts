/**
 * PLACEHOLDER CONTENT — replace for each client church.
 * Keep this file as the single source for sample copy so HTML drops
 * and client customizations stay easy to swap.
 */
export const church = {
  name: "Grace Fellowship Church",
  tagline: "A place to belong, grow, and serve.",
  city: "Your City",
  state: "ST",
  addressLine: "123 Main Street",
  phone: "(555) 010-2000",
  email: "hello@example-church.org",
  serviceTimes: [
    { label: "Sunday Worship", time: "10:30 AM" },
    { label: "Sunday Bible Study", time: "9:15 AM" },
    { label: "Wednesday Prayer", time: "6:30 PM" },
  ],
  ministries: [
    {
      name: "Kids & Students",
      blurb: "Age-graded teaching and midweek gatherings for the next generation.",
    },
    {
      name: "Small Groups",
      blurb: "Weekday groups for fellowship, Scripture, and prayer.",
    },
    {
      name: "Outreach",
      blurb: "Local service opportunities that put faith into action.",
    },
  ],
  sermons: [
    {
      title: "Placeholder: Walking in Grace",
      speaker: "Guest Speaker",
      date: "Sample date",
      series: "Sample Series",
    },
    {
      title: "Placeholder: Built on the Word",
      speaker: "Guest Speaker",
      date: "Sample date",
      series: "Sample Series",
    },
    {
      title: "Placeholder: Sent to Serve",
      speaker: "Guest Speaker",
      date: "Sample date",
      series: "Sample Series",
    },
  ],
  givingUrl: "#giving",
  mapNote: "Replace with embedded map or directions link.",
} as const;
