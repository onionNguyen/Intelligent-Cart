import Carousel from "react-bootstrap/Carousel";
//import { Link } from "react-router-dom";
import "../components/carousel.css"

//Carousel component to generate carosel on home page
function UncontrolledExample() {
  return (
    <div class="row p-3">
      <div class="col-md-8 mx-auto bg-dark">
        <Carousel>
          <Carousel.Item>
              <img 
                class="d-block  img-fluid mx-auto"
                src="https://m.media-amazon.com/images/I/61JeQsaMV8S._AC_SL1500_.jpg"
                alt="First slide"
              />
          </Carousel.Item>
          <Carousel.Item>
            <img
              class="d-block  img-fluid mx-auto"
              src="https://m.media-amazon.com/images/I/6195p4a5WJL._AC_SL1500_.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              class="d-block  img-fluid mx-auto"
              src="https://m.media-amazon.com/images/I/51utxdpV8cS._AC_SL1500_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default UncontrolledExample;
