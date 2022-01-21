import React, { Profiler } from "react";
import { CCard, CCardBody, CCardGroup, CCardHeader } from "@coreui/react";

class Certifications extends React.Component {
  state = {
    certifications: [],
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
      const certifications = await fetch(
        "http://localhost:1337/certifications",
        {
          method: "GET",
          headers: headers,
        }
      )
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ certifications });
    } catch (error) {
      this.setState({ error });
    }
  };
  render() {
    const { error, certifications } = this.state;
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <div className="">
        <div className="row">
          <div className="col-12 text-center text-white">
            <h1>CERTIFICATIONS</h1>
          </div>
        </div>
        <hr className="w-100 mb-5"></hr>
        <CCardGroup columns className="cols-2">
          {this.state.certifications.map((certification) => (
            <CCard key={certification.id} className="the-card">
              {certification.imagem &&
                certification.imagem.map((img) => (
                  <CCardBody
                    className="card-certification"
                    style={{
                      backgroundImage:
                        `url("http://localhost:1337` + img.url + `")`,
                    }}
                  ></CCardBody>
                ))}
              <CCardHeader className="bg-blue1 header-t">
                <div className="row">
                  <div className="col-8 d-flex align-items-center justify-content-center">
                    <h4 className="title w-100 text-left">
                      {certification.Titulo}
                    </h4>
                  </div>
                  <div className="col-4 align-items-center justify-content-center ">
                    {certification.pdf &&
                      certification.pdf.map((pdfs) => (
                        <a
                          href={"http://localhost:1337" + pdfs.url}
                          download
                          className="linkbutton link-card"
                        >
                          <i class="fas fa-file-pdf mr-2"></i>
                          Download
                        </a>
                      ))}
                  </div>
                </div>
              </CCardHeader>
            </CCard>
          ))}
        </CCardGroup>
      </div>
    );
  }
}

export default Certifications;
