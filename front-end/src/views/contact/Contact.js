import React, { Profiler } from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
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
          <h1>CONTACT</h1>
          <div className="justify-content-center d-flex align-items-center">
            <p className="w-75 h4">
              Interested in hiring me for your project or just want to say hi?
              You can fill in the contact form below or send me an email to{" "}
              <a href="#" className="blue-link">
                czartrentin@gmail.com
              </a>{" "}
              Want to get connected? Follow me on the social channels below.
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
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn linkbutton w-100">
                Send Now
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

  handleSubmit(event) {}
}

export default Contact;
