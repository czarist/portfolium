
let url = window.location.hash.includes("?pt");

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: url ? "Sobre mim" : "About Me",
    to: url ? "/dashboard?pt" : "/dashboard",
    icon: "cil-user",
  },

  {
    _tag: "CSidebarNavItem",
    name: "Portfolio",
    to: url ? "/Portfolio?pt" : "/Portfolio",
    icon: "cil-code",
    className: "kek",
  },
  {
    _tag: "CSidebarNavItem",
    name: url ? "Curriculo" : "Resume",
    to: url ? "/resume?pt" : "/resume",
    icon: "cil-notes",
  },

  {
    _tag: "CSidebarNavItem",
    name: url ? "Certificados" : "Certifications",
    to: url ? "/Certifications?pt" : "/Certifications",
    icon: "cil-list-rich",
  },

  {
    _tag: "CSidebarNavItem",
    name: url ? "Contato" : "Contact",
    to: url ? "/contact?pt" : "/contact",
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
