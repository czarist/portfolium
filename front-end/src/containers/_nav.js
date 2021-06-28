import React from "react";
import CIcon from "@coreui/icons-react";
import { cilDevices } from "@coreui/icons";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "About Me",
    to: "/dashboard",
    icon: "cil-user",
  },

  {
    _tag: "CSidebarNavItem",
    name: "Portfolio",
    to: "/Portfolio",
    icon: "cil-code",
    className: "kek",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Resume",
    to: "/resume",
    icon: "cil-notes",
  },

  {
    _tag: "CSidebarNavItem",
    name: "Certifications",
    to: "/charts",
    icon: "cil-list-rich",
  },

  {
    _tag: "CSidebarNavItem",
    name: "Contact",
    to: "/widgets",
    icon: "cil-envelope-closed",
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
