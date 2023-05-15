import { useState } from 'react';


function Card({ id, name, info, image, price, removeTour}) {

    const [readMore, setReadMore] = useState(false);
    const description = readMore ? `${info} ` : `${info.substring(0, 200)}.... `;
    function readmoreHandler() {
        setReadMore(!readMore);
    }
    
    return (
      <div className="card">
        <img src={image} className="image"></img>
        <div className="tour-info">
          <h2 className="tour-price">₹ {price}</h2>
          <h2 className="tour-name">{name}</h2>
        </div>
        <div>
          {description}
          <span onClick={readmoreHandler} className="read-more">
            {readMore ? "show less" : "read more"}
          </span>
        </div>
        <button onClick={() => removeTour(id)} className="btn-red">
          Not Interested
        </button>
      </div>
    );
}

export default Card;