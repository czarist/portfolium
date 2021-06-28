import React from "react";
import { CCard, CCardHeader, CCardBody } from "@coreui/react";
import { DocsLink } from "src/reusable";

const Resume = () => {
  return (
    <>
      <CCard>
        <CCardHeader>Headings</CCardHeader>
        <CCardBody></CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Headings</CCardHeader>
        <CCardBody></CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>Inline text elements</CCardHeader>
        <CCardBody></CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Description list alignment</CCardHeader>
        <CCardBody></CCardBody>
      </CCard>
    </>
  );
};

export default Resume;
