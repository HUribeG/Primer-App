const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "about", component: () => import("src/pages/AboutPage.vue") },
      {
        path: "basket",
        component: () => import("src/pages/BasketballPage.vue"),
      },
      {
        path: "volley",
        component: () => import("src/pages/VolleyballPage.vue"),
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
