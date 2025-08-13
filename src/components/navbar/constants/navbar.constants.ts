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
    name: "About",
    path: "/about",
    children: [
      {
        name: "Initial OPT",
        path: "/about/initial-opt",
      },
      {
        name: "STEM OPT",
        path: "/about/stem-opt",
      },
      {
        name: "Examples",
        path: "/about/examples",
      },
    ],
  },
  {
    name: "FAQ",
    path: "/faq",
  },
];