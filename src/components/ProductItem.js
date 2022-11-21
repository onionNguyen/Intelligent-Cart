import React,{useState} from "react";
import Card from'./Card';
import './ProductItem.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Modal from "react-modal";
import Rating from "@mui/material/Rating";



const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ProductItem =(props)=>{
      let subtitle;

      const [showProduct, setShowProduct] = useState(false);

      const openProductHandler = () => {setShowProduct(true); console.log('yes')}

      const closeProductHandler = () => setShowProduct(false);

      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "#f00";
      }
    return (
      <React.Fragment>
        <Modal
          isOpen={showProduct}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeProductHandler}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="place-item__image">
            <img src={props.thumb} alt={props.name} />
          </div>
          <div className="place-item__info">
            <p className="text-dark">{props.name}</p>
            <p className="text-success">{props.description}</p>
            <p className="text-danger">{props.price}$</p>
            <Rating
              name="size-small"
              defaultValue={props.Rating}
              size="small"
            />
          </div>
          <div classname="text-center">
            <AwesomeButton onPress={closeProductHandler} type="danger">
              Add to Wishlist
            </AwesomeButton>
            <br />
            <br />

            <AwesomeButton onPress={closeProductHandler} type="danger">
              close
            </AwesomeButton>
          </div>
        </Modal>
        <li className="place-item">
          <Card className="place-item__content">
            <div className="place-item__image">
              <img src={props.thumb} alt={props.name} />
            </div>
            <div className="place-item__info">
              <h2 className="text-dark">{props.name}</h2>
              <p className="text-danger">{props.price}$</p>
              <Rating
                name="size-small"
                defaultValue={props.Rating}
                size="small"
              />
            </div>
            <div className="place-item__actions">
              <AwesomeButton
                visible={!showProduct}
                onPress={openProductHandler}
                type="secondary"
              >
                View Product
              </AwesomeButton>
            </div>
          </Card>
        </li>
      </React.Fragment>
    );
}
export default ProductItem;