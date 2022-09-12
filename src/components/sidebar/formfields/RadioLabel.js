import "./FormFields.css";
import "./fieldcss/RadioLabel.css";

const RadioLabel = () => {
  return (
    <div className="form-field-radio-label">
      <div className="radio-label-title">Buy or Rent</div>
      <div className="radio-button">
        <input type="radio" id="radio1" name="radios"/>
        <label for="radio1">Buy</label>
        <input type="radio" id="radio2" name="radios"/>
        <label for="radio2">Rent</label>
        <input type="radio" id="radio3" name="radios"/>
        <label for="radio3">Quizzes</label>
      </div>
    </div>
  );
};

export default RadioLabel;
