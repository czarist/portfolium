import React, { useEffect, useState, createRef } from "react";
import classNames from "classnames";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import { rgbToHex } from "@coreui/utils";
import { DocsLink } from "src/reusable";

const Portfolio = () => {
  return (
    <>
      <CCard>
        <CCardHeader>Theme colors</CCardHeader>
        <CCardBody>
          <CRow></CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Grays</CCardHeader>
        <CCardBody>
          <CRow className="mb-3"></CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Portfolio;
