import {
  IconComponents,
  IconDashboard,
  IconLock,
  IconMoodSmile,
  IconReport,
} from "@tabler/icons-react";
import type { NavItem } from "@/types/nav-item";

export const navLinks: NavItem[] = [
  { label: "Dashboard", icon: IconDashboard, link: "/dashboard" },
  { label: "Reports", icon: IconReport, link: "/dashboard/report" },
  {
    label: "Components",
    icon: IconComponents,
    initiallyOpened: true,
    links: [
      {
        label: "Table",
        link: "/dashboard/table",
      },
      {
        label: "Form",
        link: "/dashboard/form",
      },
    ],
  },
  {
    label: "Auth",
    icon: IconLock,
    initiallyOpened: true,
    links: [
      {
        label: "Login",
        link: "/login",
      },
      {
        label: "Register",
        link: "/register",
      },
    ],
  },
  {
    label: "Sample",
    icon: IconMoodSmile,
    initiallyOpened: true,
    links: [
      {
        label: "Landing",
        link: "/",
      },
    ],
  },
];
