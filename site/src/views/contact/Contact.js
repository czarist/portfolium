import React, { Profiler } from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      url: this.props.location.search == "?pt"
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 text-center text-white">
          <h1>
            {this.state.url ? "CONTATO" : "CONTACT"}
          </h1>
          <div className="justify-content-center d-flex align-items-center">
            <p className="w-75 h4">
              {this.state.url ? "Interessado em me contratar para o seu projeto ou apenas quer dizer oi? Você pode preencher o formulário de contato abaixo ou me enviar um e-mail para" : "Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to"}
              <a href="#" className="blue-link">
                {" czartrentin@gmail.com "}
              </a>
              {this.state.url ? " Quer se conectar? Siga-me nas redes sociais abaixo." : " Want to get connected? Follow me on the social channels below. "}
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="d-flex w-100 align-items-center justify-content-center">
          <div className="col-6 mt-5">
            <form
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.state.url ? "Nome" : "Name"}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder={this.state.url ? "Endereço de e-mail" : "Email address"}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder={this.state.url ? "Mensagem" : "Message"}
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn linkbutton w-100">
                {this.state.url ? "Enviar" : "Send Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) { }
}

export default Contact;
