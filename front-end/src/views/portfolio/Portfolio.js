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
            <CCardBody className="case-body p-0">
              <CRow className="h-100">
                <CCol
                  className="case-left"
                  style={{ backgroundColor: "#25AAE1" }}
                ></CCol>
                <CCol className></CCol>
              </CRow>
            </CCardBody>
          </CCard>

          <CCard className="bg-case mt-2">
            <CCardBody className="case-body p-0">
              <CRow className="h-100">
                <CCol
                  className="case-left"
                  style={{ backgroundColor: "#445468" }}
                ></CCol>
                <CCol></CCol>
              </CRow>
            </CCardBody>
          </CCard>

          <CCard className="bg-case mt-2">
            <CCardBody className="case-body p-0">
              <CRow className="h-100">
                <CCol
                  className="case-left"
                  style={{ backgroundColor: "#fff" }}
                ></CCol>
                <CCol></CCol>
              </CRow>
            </CCardBody>
          </CCard>

          <CCard className="bg-case mt-2">
            <CCardBody className="case-body p-0">
              <CRow className="h-100">
                <CCol
                  className="case-left"
                  style={{ backgroundColor: "#fff" }}
                ></CCol>
                <CCol></CCol>
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
