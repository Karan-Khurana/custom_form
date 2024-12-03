import React, { useState } from "react";
import FormContainer from "./components/FormContainer";

const formConfig = [
  { type: "text", name: "name", label: "Name", required: true, maxlength: 50 },
  {
    type: "email",
    name: "email",
    label: "Email",
    required: true,
    pattern: "\\S+@\\S+\\.\\S+",
    maxlength: 50,
  },
  {
    type: "select",
    name: "country",
    label: "Country",
    options: [
      { label: "Select Country", value: "" },
      { label: "India", value: "india" },
      { label: "Canada", value: "canada" },
    ],
    required: true,
  },
  {
    type: "checkbox",
    name: "working",
    label: "Working",
    options: [{ label: "Yes", value: "on" }],
    required: true,
  },
  {
    type: "textarea",
    name: "description",
    label: "Description",
    placeholder: "Write your description here...",
    required: true,
  },
  {
    type: "radio",
    name: "gender",
    label: "Gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
    required: true,
  },
  { type: "switch", name: "active", label: "Active", value: true },
  { type: "date", name: "dob", label: "Date of Birth", required: true },
];

function Form() {
  const [userData, setUserData] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
    setUserData(data);
    setIsFormVisible(false);
  };

  const handleBack = () => {
    setIsFormVisible(true);
    setUserData(null);
  };

  return (
    <div className="main_container">
      <div className="form_container">
        <h1>Office Registration Form</h1>

        {isFormVisible ? (
          <FormContainer formConfig={formConfig} onSubmit={handleSubmit} />
        ) : (
          <>
            <h2>Employee Detail</h2>
            <table>
              <tr>
                <td><strong>Name: </strong></td>
                <td>{userData.name}</td>
              </tr>
              <tr>
                <td><strong>Email: </strong></td>
                <td><td>{userData.email}</td></td>
              </tr>
              <tr>
                <td><strong>Country: </strong></td>
                <td>{userData.country}</td>
              </tr>
              <tr>
                <td><strong>Working: </strong></td>
                <td>{userData.working === "on" ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td><strong>Description: </strong></td>
                <td>{userData.description}</td>
              </tr>
              <tr>
                <td><strong>Gender: </strong></td>
                <td>{userData.gender}</td>
              </tr>
              <tr>
                <td><strong>Date of Birth: </strong></td>
                <td>{userData.dob}</td>
              </tr>
            </table>
            <button onClick={handleBack}>Back to Form</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Form;
