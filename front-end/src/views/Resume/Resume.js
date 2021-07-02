import React from "react";
import { CCard, CCardHeader, CCardBody } from "@coreui/react";

const Resume = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-white">Online Resume</h1>
          </div>
        </div>
        <hr className="mb-5"></hr>
        <CCard className="bg-blue1 br-50 p-5">
          <CCardBody className="">
            <section id="header-resume">
              <div className="d-flex fx-cl-1024">
                <div className="col">
                  <div className="w-100 align-items-center d-flex justify-content-center flex-column h-100">
                    <h2>Cezar Trentin</h2>
                    <h4 className="text-muted">Full Stack Developer</h4>
                  </div>
                </div>
                <div className="col">
                  <div className="w-100 align-items-center d-flex justify-content-center flex-column text-left">
                    <div className="w-50 w100-1024 contact-content">
                      <p>
                        <i className="fas fa-phone mr-2"></i>+55(51) 98659-3952
                      </p>
                      <p>
                        <i className="fas fa-envelope mr-2"></i>
                        czartrentin@gmail.com
                      </p>
                      <p>
                        <i class="fas fa-globe mr-2"></i>cezartrentin.dev
                      </p>
                      <p>
                        <i class="fas fa-map-marker-alt mr-2"></i>São Leopoldo,
                        RS, Brazil
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr className="w-100"></hr>
            <section id="content-xp">
              <div className="row mt-5">
                <div className="col-12">
                  <h2 className="blue-after title">WORK EXPERIENCE</h2>
                </div>
              </div>
              <div className="row mt-5 mb-1 d-none d-sm-flex">
                <div className="col-6">
                  <h3>Junior Full Stack Developer </h3>
                </div>
                <div className="col-6 text-right opacity-4">
                  <h3>
                    <a href="">Mave Tecnologia</a> | 01/2021 - 06/2021
                  </h3>
                </div>
              </div>
              <div className="row mt-5 mb-1 d-sm-none">
                <div className="col-12">
                  <h3>Junior Full Stack Developer </h3>
                  <h3>
                    <a href="">Mave Tecnologia</a> | <br></br> 01/2021 - 06/2021
                  </h3>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12">
                  <p>
                    Role description goes here ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis.
                  </p>
                </div>
              </div>
            </section>
            <hr className="w-100"></hr>
            <section id="geral" className="geral position relative">
              <div className="d-flex align-items-center justify-content-between fx-center-1024 fx-cl-1024 ">
                <div className="d-flex flex-column row w-50 w100-1024 mb-4 mt-4">
                  <h3 className="blue-after col">EDUCATION</h3>
                  <div className="ml-3">
                    <p className="mt-3 mb-2 h4">
                      Analysis and Systems Development
                    </p>
                    <p className="opacity-4 h4">Unisinos 2018 - 2021</p>
                  </div>
                </div>
                <div className="d-flex flex-column row content-idioms mb-4 mt-4">
                  <h3 className="blue-after col">IDIOMS</h3>
                  <div className="ml-3">
                    <p className="mt-3 mb-2 h4">
                      Portuguese
                      <span className="ml-1 opacity-4 h4">(Native)</span>
                    </p>
                    <p className="mt-3 mb-2 h4">
                      English
                      <span className="ml-1 opacity-4 h4">(Intermediate)</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <hr className="w-100"></hr>
            <section id="startups" className="mt-5 mb-5">
              <div className="row">
                <div className="col-12">
                  <h3 className="blue-after">STARTUP PROJECTS</h3>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center justify-content-evenly fx-cl-1024 fx-center-1024">
                    <div className="d-flex justify-content-around flex-column align-items-center fx-cl-1024 fx-center-1024 mt-2">
                      <img
                        className=""
                        src={
                          "http://localhost:1337/uploads/sophia_d4b04726bb.svg?687807.4000000358"
                        }
                        alt="Logo"
                      />
                      <h4 className="mt-2">Sophia Game Studio</h4>
                      <p className="w-75 text-center">
                        Game Studio specialized in Visual-Novels
                      </p>
                      <p className="h4 opacity-4">
                        {" "}
                        <i className="fas fa-tools mr-2"></i>In development
                      </p>
                    </div>
                    <div className="d-flex justify-content-around flex-column align-items-center fx-cl-1024 fx-center-1024 mt-2">
                      <img
                        className=""
                        src={
                          "http://localhost:1337/uploads/c5w_9b67367ec3.svg?2440665"
                        }
                        alt="Logo"
                      />
                      <h4 className="mt-2">C5 Web</h4>
                      <p className="w-75 text-center">
                        Web agency specialized in institutional websites{" "}
                      </p>
                      <a href="https://c5w.com.br/" className="">
                        www.c5w.com.br
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr className="w-100"></hr>
            <section id="pdf">
              <div className="d-flex justify-content-center align-items-center h-100 mt-5">
                <a
                  href="http://localhost:1337/uploads/cv_cezar_4_c796f753c6.pdf"
                  className="linkbutton p-4"
                  download
                >
                  <i class="fas fa-file-pdf mr-2 "></i>Download PDF Version
                </a>
              </div>
            </section>
          </CCardBody>
        </CCard>
      </div>
    </>
  );
};

export default Resume;
