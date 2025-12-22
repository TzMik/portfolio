
const startDate = new Date(2018, 8, 1); // Mes 8 = septiembre (0-indexed)
const today = new Date();
const diffYears = today.getFullYear() - startDate.getFullYear();
const diffMonths = today.getMonth() - startDate.getMonth();
const diffDays = today.getDate() - startDate.getDate();
let years = diffYears;
if (diffMonths < 0 || (diffMonths === 0 && diffDays < 0)) {
  years--;
}
export const yearsOfExperience = years;

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/mikel-cantero-loi/",
    icon: "fab fa-linkedin-in",
  },
  {
    href: "https://github.com/TzMik",
    icon: "fab fa-github",
  },
  {
    href: "https://x.com/Tzmik",
    icon: "fab fa-x-twitter",
  },
  {
    href: "https://www.tiktok.com/@mikelcantero",
    icon: "fab fa-tiktok",
  },
  {
    href: "https://www.instagram.com/mikelcantero.dev/",
    icon: "fab fa-instagram",
  },
  {
    href: "https://www.youtube.com/@mikelcanterodev",
    icon: "fab fa-youtube",
  },
];

export const calendarLink = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Y1CaEdN8br00DT2DQWWlv02XUJ39RCPMCn5KDXygf8GmQMTz0ayBlbEcIiwq33mlIn9FeZtk-?gv=true";
