import CanadaMap from "react-canada-map";
import CompassIcon from "./asset/compass.png";
import "./TopoMap.css";

function TopoMap() {
  const mapClickHandler = (province, event) => {
    console.log("province clicked: ", province);
  };

  var provinces = {
    "ON": {},
    "MB": {},
    "BC": {},
    "AB": {},
    "SK": {},
    "QC": {},
    "NB": {},
    "NS": {},
    "PE": {},
    "NL": {},
    "YT": {},
    "NT": {},
    "NU": {}
  };

  const customizeProvince = () => {
    return {
      // ON: {
      //   fillColor: "#EEEEEE",
      //   onHoverColor: "#EEEEEE",
      // },
    };
  };

  return (
    <div className="map-area">
      <img src={CompassIcon} alt="compass-icon"/>
      <CanadaMap
        width="95%"
        height="100%"
        fillColor="#999e99"
        onHoverColor="#FE7124"
        customize={customizeProvince()}
        onClick={mapClickHandler}
      ></CanadaMap>
    </div>
  );
}

export default TopoMap;
