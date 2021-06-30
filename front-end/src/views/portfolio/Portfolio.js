import React, { Profiler } from "react";
import { CCard, CCardBody, CCardGroup, CRow, CCol } from "@coreui/react";

class Portfolio extends React.Component {
  state = {
    portfolios: [],
    error: null,
  };
  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    // Parses the JSON returned by a network request
    const parseJSON = (resp) => (resp.json ? resp.json() : resp);

    // Checks if a network request came back fine, and throws an error if not
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
      const portfolios = await fetch("http://localhost:1337/portfolios", {
        method: "GET",
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ portfolios });
    } catch (error) {
      this.setState({ error });
    }
  };
  render() {
    const { error, portfolios } = this.state;
    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <>
        <CCard className="bg-transparent">
          <CCardBody>
            <h1 className="text-center">PORTFOLIO</h1>
            <p className="text-center h4">
              Welcome to my online portfolio. I'm taking on freelance work at
              the moment. Want some help building your project?
            </p>
          </CCardBody>
        </CCard>
        <hr className="w-100"></hr>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <CCardGroup columns className="cols-2 cols-md-1 col-12">
            {this.state.portfolios.map((portfolio) => (
              <CCard key={portfolio.id} className="bg-case mt-2">
                <CCardBody className="case-body p-0 h-100">
                  <CRow className="">
                    <CCol
                      className="case-left d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: `${portfolio.hexa_fundo}` }}
                    >
                      <div className="filter-kek"></div>
                      {portfolio.logo &&
                        portfolio.logo.map((img) => (
                          <img
                            key={img.id}
                            className="logo-case"
                            src={"http://localhost:1337" + img.url}
                            alt="Logo"
                          />
                        ))}
                    </CCol>
                    <CCol className="p-4 position-relative">
                      <h2>{portfolio.name}</h2>
                      <h5 className="">{portfolio.description}</h5>
                      <h6 className="mt-4">
                        <i class="fas fa-users mr-1"></i>
                        <i className="mr-2">Client:</i>
                        {portfolio.name}
                      </h6>
                      <h6>
                        <i class="fas fa-handshake mr-1"></i>
                        <i className="mr-2">Intermediary:</i>
                        <a href={portfolio.intermediary_link}>
                          {portfolio.intermediary}
                        </a>
                      </h6>
                      <h6>
                        <i class="fas fa-link mr-1"></i>
                        <i className="mr-2">Link:</i>
                        <a href={portfolio.link_link}>{portfolio.link}</a>
                      </h6>
                      <h6>
                        <i class="fas fa-paint-brush mr-1"></i>
                        <i className="mr-2">UX & UI Designer:</i>
                        <a href={portfolio.designer_link}>
                          {portfolio.designer}
                        </a>
                      </h6>
                      <h6>
                        <i class="fas fa-list-ul mr-1"></i>
                        <i className="mr-2">Contributions/Technologies:</i>
                        {portfolio.categories &&
                          portfolio.categories.map((cat) => (
                            <a href="">
                              <span className="mr-1">{cat.name},</span>
                            </a>
                          ))}
                      </h6>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            ))}
          </CCardGroup>
        </div>
        <div></div>
      </>
    );
  }
}

export default Portfolio;
