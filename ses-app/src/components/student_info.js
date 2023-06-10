import React, { useState } from "react";
import "./student_info.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function StudentInfo() {
  const [studentInfo, setStudentInfo] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    highSchoolDiploma: "",
    bachelorDegree: "",
    englishLanguageSkills: "",
    countryOfOrigin: "",
    countryOfResidence: "",
    address: "",
    zipCode: "",
    studyProgramme: "",
    startDate: "",
    termsandconditions: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setStudentInfo({
      ...studentInfo,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the studentInfo data, such as submitting to a server
    console.log(studentInfo);
  };

  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
      // eslint-disable-next-line react/jsx-no-duplicate-props
      className1="p-4 background-image overflow-hidden"
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Student Information
          </h1>

          <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            Please provide the necessary information for the student.
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <form onSubmit={handleSubmit}>
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={studentInfo.firstName}
                      onChange={handleInputChange}
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={studentInfo.lastName}
                      onChange={handleInputChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Date of Birth"
                  id="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  value={studentInfo.dateOfBirth}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="email"
                  type="email"
                  name="email"
                  value={studentInfo.email}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Phone number"
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  value={studentInfo.phoneNumber}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="High School Diploma"
                  id="highSchoolDiploma"
                  type="text"
                  name="highSchoolDiploma"
                  value={studentInfo.highSchoolDiploma}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Bachelor's Degree"
                  id="bachelorDegree"
                  type="text"
                  name="bachelorDegree"
                  value={studentInfo.bachelorDegree}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="English Language Skills"
                  id="englishLanguageSkills"
                  type="text"
                  name="englishLanguageSkills"
                  value={studentInfo.englishLanguageSkills}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Country of Origin"
                  id="countryOfOrigin"
                  type="text"
                  name="countryOfOrigin"
                  value={studentInfo.countryOfOrigin}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Country of Residence"
                  id="countryOfResidence"
                  type="text"
                  name="countryOfResidence"
                  value={studentInfo.countryOfResidence}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Address"
                  id="address"
                  type="text"
                  name="address"
                  value={studentInfo.address}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Zip Code"
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  value={studentInfo.zipCode}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Study Programme(s) of Interest"
                  id="studyProgramme"
                  type="text"
                  name="studyProgramme"
                  value={studentInfo.studyProgramme}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Start Date of Studies"
                  id="startDate"
                  type="date"
                  name="startDate"
                  value={studentInfo.startDate}
                  onChange={handleInputChange}
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="termsandconditions"
                    value=""
                    id="flexCheckDefault"
                    label="Terms and Conditions"
                    checked={studentInfo.subscribeNewsletter}
                    onChange={handleInputChange}
                  />
                </div>

                <MDBBtn className="w-100 mb-4" size="md" type="submit">
                  Sign Up
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default StudentInfo;
