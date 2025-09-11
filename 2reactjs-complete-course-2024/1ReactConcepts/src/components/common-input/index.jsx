

function CommonInput({ label, onChange, name, id, placeholder, value ,type}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        name={name}
        id={id}
        placeholder={placeholder || "Enter value here"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CommonInput;
