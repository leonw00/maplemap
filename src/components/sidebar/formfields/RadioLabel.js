import "./FormFields.css";
import "./fieldcss/RadioLabel.css";

const RadioLabel = ({title, label1, label2}) => {
  return (
    <div className="form-field-radio-label">
      <div className="radio-label-title">{title}</div>
      <div className="radio-button">
        <input type="radio" id={label1} name={title} checked/>
        <label for={label1}>{label1}</label>
        <input type="radio" id={label2} name={title}/>
        <label for={label2}>{label2}</label>
      </div>
    </div>
  );
};

export default RadioLabel;
