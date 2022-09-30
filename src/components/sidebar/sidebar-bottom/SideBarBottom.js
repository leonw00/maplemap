import "./SideBarBottom.css";
import { CCarousel, CCarouselItem } from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AboutModal from "../../modal/AboutModal";

function SideBarBottom() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="side-bar-bottom-component">
      <div className="side-bar-bottom-main">
        <CCarousel controls dark interval={10000}>
          <CCarouselItem>
            <div
              className="carousel-content"
              onClick={() => setVisible(!visible)}
            >
              <div className="carousel-content-logo">
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
              <div className="carousel-content-title">About</div>
            </div>
          </CCarouselItem>
          <CCarouselItem>
            <div className="carousel-content">
              <div className="carousel-content-logo">
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <div className="carousel-content-title">Source</div>
            </div>
          </CCarouselItem>
        </CCarousel>
      </div>

      <AboutModal visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
}

export default SideBarBottom;
