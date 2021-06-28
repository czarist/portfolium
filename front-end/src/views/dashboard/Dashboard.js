import React, { lazy } from "react";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ReactTooltip from "react-tooltip";




const Dashboard = () => {
  return (
    <>
      <CCard className="bg-transparent">
        <CCardBody className="bg-transparent">
          <CRow className="bg-transparent">
            <CCol className="box-contents" sm="12" md="7">
              <h1 id="title" className="text-white">
                Cezar Trentin
              </h1>
              <h4 className="text-muted">
                Full Stack Developer, Web Designer & System Analyst
              </h4>
              <p className="pr-5">
                I'm a web developer specialised in frontend and backend
                development for institucional websites, blogs, e-commerces and
                software aplications. Want to know how I may help your project?
                Check out my{" "}
                <a className="extra-link" href="/#/Portfolio">
                  project portfolio
                </a>{" "}
                and{" "}
                <a className="extra-link" href="/#/resume">
                  online resume
                </a>{" "}
                .{" "}
              </p>
              <div className="d-flex align-items-center justify-content-start mb-5">
                <a className="internal-link mr-4" href="/#/Portfolio">
                  <i class="fas fa-laptop-code mr-2"></i>
                  View Portfolio
                </a>
                <a className="internal-link mr-4" href="/#/resume">
                  <i class="fas fa-file-alt mr-2"></i>
                  View Resume
                </a>
              </div>
            </CCol>
            <CCol sm="12" md="5" className="justify-content-center d-flex">
              <img
                className="w-50 img-frente w100-1024"
                src={"https://c5w.com.br/wp-content/uploads/2021/06/cezars.jpg"}
                alt="Logo"
              />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <hr className="w-100"></hr>
      <CCard className="bg-transparent">
        <CCardBody className="bg-transparent">
          <CRow className="box-contents" sm="12">
            <CCol sm="12">
              <h1 className="blue-after">What I do</h1>
              <p className="w-75">
                I have more than {new Date().getFullYear() - 2018} years'
                experience with web development. Below is a quick overview of my
                main technical skill sets and technologies I use. Want to find o
                ut more about my experience? Check out my{" "}
                <a href="/#/Resume" className="extra-link">
                  {" "}
                  online resume
                </a>{" "}
                and{" "}
                <a href="/#/Portfolio" className="extra-link">
                  project portfolio
                </a>
                .
              </p>
            </CCol>
          </CRow>
          <div className="d-flex flex-wrap justify-content-between w-100">
            <div className="icons-content d-flex flex-wrap mt-5 w-25 w100-1024">
              <ReactTooltip id="jquery" place="top" effect="solid">
                jquery
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://icons-for-free.com/iconfiles/png/512/jquery+icon-1320185152994214115.png"
                data-tip
                data-for="jquery"
              />
              <ReactTooltip id="Typescript" place="top" effect="solid">
                Typescript
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                data-tip
                data-for="Typescript"
              />
              <ReactTooltip id="ES6" place="top" effect="solid">
                ES6
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0jwQ-NerBf8yIG9z52jit-F1MyLZ4VB5e6XQaGLnTSMQe-jotURbdlTxy9iH68SHPOM&usqp=CAU"
                data-tip
                data-for="ES6"
              />
              <ReactTooltip id="VanillaJS" place="top" effect="solid">
                VanillaJS
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png"
                data-tip
                data-for="VanillaJS"
              />
            </div>
            <div className="icons-content d-flex flex-wrap mt-5 w-25 w100-1024">
              <ReactTooltip id="jquery" place="top" effect="solid">
                jquery
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://icons-for-free.com/iconfiles/png/512/jquery+icon-1320185152994214115.png"
                data-tip
                data-for="jquery"
              />
              <ReactTooltip id="Typescript" place="top" effect="solid">
                Typescript
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                data-tip
                data-for="Typescript"
              />
              <ReactTooltip id="ES6" place="top" effect="solid">
                ES6
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0jwQ-NerBf8yIG9z52jit-F1MyLZ4VB5e6XQaGLnTSMQe-jotURbdlTxy9iH68SHPOM&usqp=CAU"
                data-tip
                data-for="ES6"
              />
              <ReactTooltip id="VanillaJS" place="top" effect="solid">
                VanillaJS
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png"
                data-tip
                data-for="VanillaJS"
              />
            </div>
            <div className="icons-content d-flex flex-wrap mt-5 w-25 w100-1024">
              <ReactTooltip id="jquery" place="top" effect="solid">
                jquery
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://icons-for-free.com/iconfiles/png/512/jquery+icon-1320185152994214115.png"
                data-tip
                data-for="jquery"
              />
              <ReactTooltip id="Typescript" place="top" effect="solid">
                Typescript
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                data-tip
                data-for="Typescript"
              />
              <ReactTooltip id="ES6" place="top" effect="solid">
                ES6
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0jwQ-NerBf8yIG9z52jit-F1MyLZ4VB5e6XQaGLnTSMQe-jotURbdlTxy9iH68SHPOM&usqp=CAU"
                data-tip
                data-for="ES6"
              />
              <ReactTooltip id="VanillaJS" place="top" effect="solid">
                VanillaJS
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png"
                data-tip
                data-for="VanillaJS"
              />
            </div>
            <div className="icons-content d-flex flex-wrap mt-5 w-25 w100-1024">
              <ReactTooltip id="jquery" place="top" effect="solid">
                jquery
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://icons-for-free.com/iconfiles/png/512/jquery+icon-1320185152994214115.png"
                data-tip
                data-for="jquery"
              />
              <ReactTooltip id="Typescript" place="top" effect="solid">
                Typescript
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                data-tip
                data-for="Typescript"
              />
              <ReactTooltip id="ES6" place="top" effect="solid">
                ES6
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0jwQ-NerBf8yIG9z52jit-F1MyLZ4VB5e6XQaGLnTSMQe-jotURbdlTxy9iH68SHPOM&usqp=CAU"
                data-tip
                data-for="ES6"
              />
              <ReactTooltip id="VanillaJS" place="top" effect="solid">
                VanillaJS
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png"
                data-tip
                data-for="VanillaJS"
              />
            </div>
            <div className="icons-content d-flex flex-wrap mt-5 w-25 w100-1024">
              <ReactTooltip id="jquery" place="top" effect="solid">
                jquery
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://icons-for-free.com/iconfiles/png/512/jquery+icon-1320185152994214115.png"
                data-tip
                data-for="jquery"
              />
              <ReactTooltip id="Typescript" place="top" effect="solid">
                Typescript
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                data-tip
                data-for="Typescript"
              />
              <ReactTooltip id="ES6" place="top" effect="solid">
                ES6
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0jwQ-NerBf8yIG9z52jit-F1MyLZ4VB5e6XQaGLnTSMQe-jotURbdlTxy9iH68SHPOM&usqp=CAU"
                data-tip
                data-for="ES6"
              />
              <ReactTooltip id="VanillaJS" place="top" effect="solid">
                VanillaJS
              </ReactTooltip>
              <img
                className="icon mr-2 mt-2"
                src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png"
                data-tip
                data-for="VanillaJS"
              />
            </div>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Dashboard;
