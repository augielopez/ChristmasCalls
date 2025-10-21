import { AppLayout } from "@/layout/components/app.layout";
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: "",
    component: AppLayout,
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./app/pages/travel/index").then((c) => c.Travel),
      },
      {
        path: "saas",
        loadComponent: () =>
          import("./app/pages/saas/index").then((c) => c.Saas),
      },
      {
        path: "startup",
        loadComponent: () =>
          import("./app/pages/startup/index").then((c) => c.Startup),
      },
      {
        path: "enterprise",
        loadComponent: () =>
          import("./app/pages/enterprise/index").then((c) => c.Enterprise),
      },
      {
        path: "e-learning",
        loadComponent: () =>
          import("./app/pages/e-learning/index").then((c) => c.ELearning),
      },
      {
        path: "real-estate",
        loadComponent: () =>
          import("./app/pages/real-estate/index").then((c) => c.RealEstate),
      },
      {
        path: "logistic",
        loadComponent: () =>
          import("./app/pages/logistic/index").then((c) => c.Logistic),
      },
      {
        path: "agency",
        loadComponent: () =>
          import("./app/pages/agency/index").then((c) => c.Agency),
      },
      {
        path: "agency",
        loadComponent: () =>
          import("./app/pages/agency/index").then((c) => c.Agency),
      },
      {
        path: "404",
        loadComponent: () => import("./app.error").then((c) => c.Error),
      },
      {
        path: "second-pages",
        children: [
          {
            path: "about",
            loadComponent: () =>
              import("./app/pages/second-pages/about/index").then(
                (c) => c.About
              ),
          },
          {
            path: "pricing",
            loadComponent: () =>
              import("./app/pages/second-pages/pricing/index").then(
                (c) => c.Pricing
              ),
          },
          {
            path: "blog",
            children: [
              {
                path: "",
                loadComponent: () =>
                  import("./app/pages/second-pages/blog/index").then(
                    (c) => c.Blog
                  ),
              },
              {
                path: "detail",
                loadComponent: () =>
                  import("./app/pages/second-pages/blog/detail/index").then(
                    (c) => c.BlogDetail
                  ),
              },
            ],
          },
          {
            path: "contact",
            loadComponent: () =>
              import("./app/pages/second-pages/contact/index").then(
                (c) => c.Contact
              ),
          },
        ],
      },

      {
        path: "second-pages",
        children: [
          {
            path: "about",
            loadComponent: () =>
              import("./app/pages/second-pages/about/index").then(
                (c) => c.About
              ),
          },
          {
            path: "pricing",
            loadComponent: () =>
              import("./app/pages/second-pages/pricing/index").then(
                (c) => c.Pricing
              ),
          },
          {
            path: "contact",
            loadComponent: () =>
              import("./app/pages/second-pages/contact/index").then(
                (c) => c.Contact
              ),
          },
          {
            path: "signup",
            loadComponent: () =>
              import("./app/pages/second-pages/signup/index").then(
                (c) => c.Signup
              ),
          },
          {
            path: "signin",
            loadComponent: () =>
              import("./app/pages/second-pages/signin/index").then(
                (c) => c.Signin
              ),
          },
          {
            path: "error",
            loadComponent: () => import("./app.error").then((c) => c.Error),
          },
          {
            path: "reset-password",
            loadComponent: () =>
              import("./app/pages/second-pages/reset-password/index").then(
                (c) => c.ResetPassword
              ),
          },
          {
            path: "account",
            loadComponent: () =>
              import("./app/layout/components/app.accountlayout").then(
                (c) => c.AccountLayout
              ),
            children: [
              {
                path: "",
                loadComponent: () =>
                  import("./app/pages/second-pages/account/index").then(
                    (c) => c.Account
                  ),
              },
              {
                path: "privacy-security",
                loadComponent: () =>
                  import(
                    "./app/pages/second-pages/account/privacy-security/index"
                  ).then((c) => c.PrivacySecurity),
              },
              {
                path: "subscription-billing",
                loadComponent: () =>
                  import(
                    "./app/pages/second-pages/account/subscription-billing/index"
                  ).then((c) => c.SubscriptionBilling),
              },
              {
                path: "support",
                loadComponent: () =>
                  import("./app/pages/second-pages/account/support/index").then(
                    (c) => c.Support
                  ),
              },
            ],
          },
        ],
      },
    ],
  },

  { path: "**", redirectTo: "/404" },
];
