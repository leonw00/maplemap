import CanadaMap from "react-canada-map";
import "./TopoMap.css";

function TopoMap() {
  const mapClickHandler = (province, event) => {
    console.log("province clicked: ", province);
  };

  return (
    <div className="map-area">
      <CanadaMap
        width="90%"
        height="90%"
        fillColor="ForestGreen"
        onHoverColor="Gold"
        onClick={mapClickHandler}
      ></CanadaMap>
    </div>
  );
}

export default TopoMap;
