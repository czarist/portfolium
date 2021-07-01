import React from "react";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import ReactTooltip from "react-tooltip";

class Dashboard extends React.Component {
  state = {
    Tecnologias: [],
    error: null,
  };

  componentDidMount = async () => {
    const parseJSON = (resp) => (resp.json ? resp.json() : resp);

    const checkStatus = (resp) => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return parseJSON(resp).then((resp) => {
        throw resp;
      });
    };
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const Tecnologias = await fetch("http://localhost:1337/Tecnologias", {
        method: "GET",
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ Tecnologias });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, Tecnologias } = this.state;

    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return this.state.Tecnologias ? (
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
                  software aplications. Want to know how I may help your
                  project? Check out my{" "}
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
                    <i className="fas fa-laptop-code mr-2"></i>
                    View Portfolio
                  </a>
                  <a className="internal-link mr-4" href="/#/resume">
                    <i className="fas fa-file-alt mr-2"></i>
                    View Resume
                  </a>
                </div>
              </CCol>
              <CCol sm="12" md="5" className="justify-content-center d-flex">
                <img
                  className="w-50 img-frente w100-1024"
                  src={
                    "https://c5w.com.br/wp-content/uploads/2021/06/cezars.jpg"
                  }
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
                  experience with web development. Below is a quick overview of
                  my main technical skill sets and technologies I use. Want to
                  find o ut more about my experience? Check out my{" "}
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

            <div className="d-flex flex-wrap justify-content-start w-100">
              {" "}
              {this.state.Tecnologias.map((tecnologia) => (
                <div
                  key={tecnologia.id}
                  className="icons-content d-flex flex-wrap mt-5 w-25 w100-1024 fx-center-1024 justify-content-start"
                >
                  {tecnologia.tecnologia &&
                    tecnologia.tecnologia.map((tec2) => (
                      <div key={tec2.id}>
                        <ReactTooltip id={tec2.hash} place="top" effect="solid">
                          {tec2.caption}
                        </ReactTooltip>
                        <img
                          className="icon mr-2 mt-2"
                          src={"http://localhost:1337" + tec2.url}
                          data-tip
                          data-for={tec2.hash}
                          alt="{tec2.caption}"
                        />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </CCardBody>
        </CCard>
      </>
    ) : (
      "carregando"
    );
  }
}

export default Dashboard;
