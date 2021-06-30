import React from "react";
import { CCard, CCardBody, CCardGroup, CCardHeader } from "@coreui/react";

const Contact = () => {
  return (
    <CCardGroup columns className="cols-2">
      <CCard>
        <CCardHeader>Bar Chart</CCardHeader>
        <CCardBody></CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>Doughnut Chart</CCardHeader>
        <CCardBody></CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>Line Chart</CCardHeader>
        <CCardBody></CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>Pie Chart</CCardHeader>
        <CCardBody></CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>Polar Area Chart</CCardHeader>
        <CCardBody></CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>Radar Chart</CCardHeader>
        <CCardBody></CCardBody>
      </CCard>
    </CCardGroup>
  );
};

export default Contact;
