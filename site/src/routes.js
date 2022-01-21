import React from "react";

const Toaster = React.lazy(() =>
  import("./views/notifications/toaster/Toaster")
);

const Certifications = React.lazy(() =>
  import("./views/Certifications/Certifications")
);
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Portfolio = React.lazy(() => import("./views/portfolio/Portfolio"));
const Resume = React.lazy(() => import("./views/Resume/Resume"));
const Contact = React.lazy(() => import("./views/contact/Contact"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/portfolio", name: "Portfolio", component: Portfolio },
  { path: "/resume", name: "Resume", component: Resume },

  {
    path: "/Certifications",
    name: "Certifications",
    component: Certifications,
  },

  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/contact", name: "Contact", component: Contact },
];

export default routes;
