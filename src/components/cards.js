import { img_url } from "../utils/data";
import "../style.css"
import Header from "./Header";
const Cards = (props) => {
  const { name, rating, des, img_id, hello, del_time, func1 } = props;


  return (

    <div className="cards">


      <img src={img_url + img_id} alt="" />
      <div className="text">
        <h2 className="heading">{name}</h2>
        <p>{"⭐" + rating}  ⌛{del_time + "mins"}</p>
        <p className="des">{des}</p>

        <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={func1}
          >
            Add to cart
          </button>


        </div>
      </div>
    </div>
  );
};

export default Cards;
