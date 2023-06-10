import React from "react";
import "./registration.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

function Registration() {
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="./images/engineering.jpg"
              alt="login form"
              className="rounded w-120"
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <h1 style={{ font: "bold italic 100px/3 cursive" }}>SES</h1>
              </div>
              <h2 style={{ font: "bold  50px/1.5 sans-serif" }}>
                REGISTRATION
              </h2>
              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Please fill in the registration details
              </h5>
              <MDBInput wrapperClass="mb-4" label="ID" id="form1" type="text" />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form3"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="First Name"
                id="form4"
                type="text"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Last Name"
                id="form5"
                type="text"
              />

              <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                Register
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Already have an account? Sign In
              </a>

              <div className="d-flex flex-row justify-content-start mt-4">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Registration;
