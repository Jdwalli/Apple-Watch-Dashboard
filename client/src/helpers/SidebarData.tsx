import {
  FaHome,
  FaRunning,
  FaHeartbeat,
  FaDumbbell,
  FaBed,
  FaChartPie,
  FaCog,
} from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    title: "Activity",
    link: "/activity",
    icon: <FaRunning />,
  },
  {
    title: "Vitals",
    link: "/vitals",
    icon: <FaHeartbeat />,
  },
  {
    title: "Workouts",
    link: "/workouts",
    icon: <FaDumbbell />,
  },
  {
    title: "Sleep",
    link: "/sleep",
    icon: <FaBed />,
  },
  {
    title: "Report",
    link: "/report",
    icon: <FaChartPie />,
  },
  {
    title: "Settings",
    link: "/settings",
    icon: <FaCog />,
  },
];
