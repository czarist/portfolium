import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },

  {
    _tag: "CSidebarNavItem",
    name: "Colors",
    to: "/theme/colors",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Typography",
    to: "/theme/typography",
    icon: "cil-pencil",
  },

  {
    _tag: "CSidebarNavItem",
    name: "Charts",
    to: "/charts",
    icon: "cil-chart-pie",
  },

  {
    _tag: "CSidebarNavItem",
    name: "Widgets",
    to: "/widgets",
    icon: "cil-calculator",
  },
  {
    _tag: "CSidebarNavDivider",
  },

  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },

  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

export default _nav;
