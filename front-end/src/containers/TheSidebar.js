import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

// sidebar nav config
import navigation from "./_nav";

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
    >
      <CSidebarBrand
        className=" d-flex flex-column justify-content-center align-items-center pb-4 "
        to="/"
      >
        <h4 className="mt-4 mb-2">Cezar Trentin</h4>
        <img src={"avatars/perfil.png"} alt="Logo" />
        <p className="mt-2 mb-2 text-center text-white pl-2 pr-2">
          Hi, my name is Cezar and I'm a brazilian Full Stack Developer & Web
          Designer. Welcome to my personal website!
        </p>
      </CSidebarBrand>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="icons d-flex align-items-center justify-content-around">
          <a target="_blank" href="https://www.linkedin.com/in/lucas-cezar-trentin-7a5980a8/">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a target="_blank" href="https://github.com/czarist/">
            <i class="fab fa-github-alt"></i>
          </a>
          <a target="_blank" href="https://stackoverflow.com/users/15217778/cezar-trentin">
            <i class="fab fa-stack-overflow"></i>
          </a>
          <a target="_blank" href="https://codepen.io/czarist">
            <i class="fab fa-codepen"></i>
          </a>
          <a target="_blank" href="https://www.behance.net/lucastrentin2">
            <i class="fab fa-behance"></i>
          </a>
        </div>
      </div>

      <hr></hr>
      <CSidebarNav className="content-icons">
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <hr></hr>
      <div className="text-center d-flex w-100 justify-content-center flex-column align-items-center">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5551986593952&text=" className="linkbutton">
          <i class="fab fa-whatsapp mr-2"></i>
          Hire me
        </a>
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
