import { useState } from "react";
import CommonForm from "../common-form";
import { registerFormElements } from "../../config";

const initialRegistrationFormData = {
  name: "",
  email: "",
  password: "",
};

function RegisterComponent() {
  const [registerFormData, setRegisterFormData] = useState(
    initialRegistrationFormData
  );

  function handleRegisterOnSubmit(event) {
    event.preventDefault()
    console.log(registerFormData)
    setRegisterFormData(initialRegistrationFormData)
  }
  return (
    <div>
      <h1>Register page/component</h1>

      <CommonForm
        formControls={registerFormElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={"Register"}
        onHandleSubmit={handleRegisterOnSubmit}
      />
    </div>
  );
}

export default RegisterComponent;
