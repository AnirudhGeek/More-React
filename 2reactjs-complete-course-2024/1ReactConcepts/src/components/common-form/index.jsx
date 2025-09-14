import CommonInput from "../common-input";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "text",
};

function CommonForm({
  formControls = [],
  formData,
  setFormData,
  buttonText,
  onHandleSubmit,
}) {
  function renderFormElement(getCurrentElement) {
    let content = null;

    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );

        break;

      default:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return content;
  }

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map((singleFormElementItem) =>
            renderFormElement(singleFormElementItem)
          )
        : null}

      <div className="mt-5">
        <button className="border">{buttonText || "Submit"}</button>
      </div>
    </form>
  );
}

export default CommonForm;
