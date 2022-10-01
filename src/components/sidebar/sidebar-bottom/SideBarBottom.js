import "./SideBarBottom.css";
import { CCarousel, CCarouselItem } from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AboutModal from "../../modal/AboutModal";
import SourceModal from "../../modal/SourceModal";

function SideBarBottom() {
  const [aboutModalVisible, setAboutVisible] = useState(false);
  const [sourceModalVisible, setSourceVisible] = useState(false);

  return (
    <div className="side-bar-bottom-component">
      <div className="side-bar-bottom-main">
        <CCarousel controls dark interval={10000}>
          <CCarouselItem>
            <div
              className="carousel-content"
              onClick={() => setAboutVisible(!aboutModalVisible)}
            >
              <div className="carousel-content-logo">
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
              <div className="carousel-content-title">About</div>
            </div>
          </CCarouselItem>
          <CCarouselItem>
            <div
              className="carousel-content"
              onClick={() => setSourceVisible(!sourceModalVisible)}
            >
              <div className="carousel-content-logo">
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <div className="carousel-content-title">Source</div>
            </div>
          </CCarouselItem>
        </CCarousel>
      </div>

      <AboutModal visible={aboutModalVisible} onClose={() => setAboutVisible(false)} />
      <SourceModal visible={sourceModalVisible} onClose={() => setSourceVisible(false)} />
    </div>
  );
}

export default SideBarBottom;
