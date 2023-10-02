const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        name: "home",
      },
      {
        path: "/dr-manzo",
        component: () => import("pages/DrManzo.vue"),
        name: "manzo",
      },
      {
        path: "/bishop-kukah",
        component: () => import("pages/BishopKukah.vue"),
        name: "kukah",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
