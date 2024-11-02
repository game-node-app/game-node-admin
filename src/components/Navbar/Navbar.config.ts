import {
    IconCheckbox,
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
        label: "Achievements",
        icon: IconCheckbox,
        initiallyOpened: false,
        links: [
            {
                label: "Generate code",
                link: "/dashboard/achievement/generate",
            },
            {
                label: "Grant",
                link: "/dashboard/achievement/grant",
            },
        ],
    },
];