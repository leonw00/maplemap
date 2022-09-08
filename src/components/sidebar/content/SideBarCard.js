import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideBarCard.css";

function SideBarCard(props) {
  return (
    <li className="side-bar-card">
      <div className="card-header">
        <div className="card-logo"><FontAwesomeIcon icon={props.icon} />{props.logo}</div>
        <div className="card-title">{props.title}</div>
      </div>
      <div className="card-content">
        {props.children}
      </div>
    </li>
  );
}

export default SideBarCard;
