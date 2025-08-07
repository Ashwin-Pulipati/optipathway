export const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Tools",
    path: "/tools",
  },
  {
    name: "Forms",
    path: "/forms",
  },
  {
    name: "Photo Tool",
    path: "/photo-tool",
  },
  {
    name: "Pro Tips",
    path: "/pro-tips",
    children: [
      {
        name: "Initial OPT",
        path: "/pro-tips/initial-opt",
      },
      {
        name: "STEM OPT",
        path: "/pro-tips/stem-opt",
      },
      {
        name: "Examples",
        path: "/pro-tips/examples",
      },
    ],
  },
  {
    name: "FAQ",
    path: "/faq",
  },
];