import React from "react";
import { CCard, CCardBody, CCardGroup, CRow, CCol } from "@coreui/react";

const Portfolio = () => {
  return (
    <>
      <CCard className="bg-transparent">
        <CCardBody>
          <h1 className="text-center">PORTFOLIO</h1>
          <p className="text-center h4">
            Welcome to my online portfolio. I'm taking on freelance work at the
            moment. Want some help building your project?
          </p>
        </CCardBody>
      </CCard>
      <hr className="w-100"></hr>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <CCardGroup columns className="cols-2 cols-md-1 col-12">
          <CCard className="bg-case mt-2">
            <CCardBody className="case-body p-0 h-100">
              <CRow className="">
                <CCol
                  className="case-left d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: "#25AAE1" }}
                >
                  <img
                    className="logo-case"
                    src={
                      "https://yoobot.com.br/wp-content/themes/bones/library/images/logotipo.png"
                    }
                    alt="Logo"
                  />
                </CCol>
                <CCol className="p-4">
                  <h2>Yoobot</h2>
                  <h5 className="text-muted">Institucional Website</h5>
                  <h6>
                    <i class="fas fa-users mr-1"></i>
                    <b className="text-muted mr-2">Client:</b>
                    Yoboot
                  </h6>
                  <h6>
                    <i class="fas fa-handshake mr-1"></i>
                    <b className="text-muted mr-2">Intermediary:</b>
                    <a href="">C5 web</a>
                  </h6>
                  <h6>
                    <i class="fas fa-link mr-1"></i>
                    <b className="text-muted mr-2">Link:</b>
                    <a href="">www.yoboot.com.br</a>
                  </h6>
                  <h6>
                    <i class="fas fa-paint-brush mr-1"></i>
                    <b className="text-muted mr-2">UX & UI Designer:</b>
                    <a href="">Gilvan</a>
                  </h6>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCardGroup>
      </div>
      <div></div>
    </>
  );
};

export default Portfolio;
