import { useState } from "react";

function FormComponent() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue,setEmailValue] = useState('')

  function handleInputChange(event) {
    console.log(event);
    // const {value} = event.target
    setNameValue(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault()

    //call API here and then pass the name value
    console.log(nameValue,emailValue,"nameValue")
  }

  function handleOnChange(event){
    console.log(event.target.name)
  }

  function handleEmailChange(event){
    const {value} = event.target
    setEmailValue(value)
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border"
          value={nameValue}
          name="name"
          id="id"
          placeholder="Enter your name"
          type="text"
          onChange={handleOnChange}
        />

        <input type="email" name="email" id="email" placeholder="enter your email"  onChange={handleOnChange} value={emailValue}/>
        <button type="submit" >Submit</button>
      </form>

    </div>
  );
}

export default FormComponent;