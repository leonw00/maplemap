import "./FormFields.css";
import "./fieldcss/ToggleSwitch.css";

const ToggleSwitch = ({ title }) => {
  return (
    <div className="form-field-toggle-switch">
      <label class="toggle">
        <input class="toggle-checkbox" type="checkbox" />
        <div class="toggle-switch"></div>
      </label>
      <span class="toggle-label">{title}</span>
    </div>
  );
};

export default ToggleSwitch;
