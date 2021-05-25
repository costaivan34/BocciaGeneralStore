export const Input = ({ id, label, type, value, onChange }) => {
  return (
    <div className="input">
      <label className="">{label}</label>
      <input
        type={type}
        onChange={({ target }) => onChange(id, target.value)}
        value={value}
      ></input>
    </div>
  );  
};



