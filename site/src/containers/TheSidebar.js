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
// sidebar nav config
import navigation from "./_nav";

const TheSidebar = () => {

  let url = window.location.hash.includes("?pt");
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);
  const apresentacao_en = " Hi, my name is Cezar and I'm a brazilian Web Developer & Web Designer. Welcome to my personal website!";
  const apresentacao_pt = "Olá, meu nome é Cezar e sou um desenvolvedor web e web designer. Bem vindo ao meu site pessoal!  ";

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
    >
      <CSidebarBrand
        className=" d-flex flex-column justify-content-center align-items-center pb-4 "
        to={url ? "/dashboard?pt" : "/dashboard"}
      >
        <h4 className="mt-4 mb-2">Cezar Trentin</h4>
        <img src={"avatars/perfil.png"} alt="Logo" />
        <p className="mt-2 mb-2 text-center text-white pl-2 pr-2">
          {url ? apresentacao_pt : apresentacao_en}
        </p>
      </CSidebarBrand>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="icons d-flex align-items-center justify-content-around">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/lucas-cezar-trentin-7a5980a8/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/czarist/"
            target="_blank">
            <i className="fab fa-github-alt"></i>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://stackoverflow.com/users/15217778/cezar-trentin"
          >
            <i className="fab fa-stack-overflow"></i>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://codepen.io/czarist">
            <i className="fab fa-codepen"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.behance.net/lucastrentin2"
          >
            <i className="fab fa-behance"></i>
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
        <a
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=5551986593952&text="
          className="linkbutton"
        >
          <i className="fab fa-whatsapp mr-2"></i>
          {url ? "Faça contato" : "Contact me"}
        </a>
        <p>© {new Date().getFullYear()} {url ? "Todos os Direitos Reservados" : "All Rights Reserved"} </p>
      </div>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
