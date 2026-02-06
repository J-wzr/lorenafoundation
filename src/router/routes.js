const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "campaigns",
        name: "campaigns",
        component: () => import("pages/CampaignsPage.vue"),
      },
      {
        path: "wash",
        name: "wash",
        component: () => import("pages/WashCampaignPage.vue"),
      },
      {
        path: "community-health",
        name: "commhealth",
        component: () => import("pages/ComHealthPage.vue"),
      },
      {
        path: "education-for-all",
        name: "ednforall",
        component: () => import("pages/EdnforAllPage.vue"),
      },
      {
        path: "equality-and-empowerment",
        name: "eqempow",
        component: () => import("pages/EqEmpowPage.vue"),
      },
      {
        path: "green-transformation",
        name: "greentrans",
        component: () => import("pages/GreenTransPage.vue"),
      },
      {
        path: "livelihood-and-economic-inclusion",
        name: "livelihood",
        component: () => import("pages/LivelihoodPage.vue"),
      },
      {
        path: "core-values",
        name: "corevalues",
        component: () => import("pages/CoreValuesPage.vue"),
      },
      {
        path: "our-team",
        name: "ourteam",
        component: () => import("pages/OurTeamPage.vue"),
      },
      {
        path: "our-story",
        name: "ourstory",
        component: () => import("pages/OurStoryPage.vue"),
      },
      {
        path: "volunteer",
        name: "volunteer",
        component: () => import("pages/VolunteerPage.vue"),
      },
      {
        path: "contact-us",
        name: "contact",
        component: () => import("pages/ContactUsPage.vue"),
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
