import { useState } from 'react';
import ItemDate from './ItemDate';
import './ProductItem.css'
import Card from './Card'


function ProductItem(props) {

    const [title, setTitle] = useState(props.name);
    function clickHandler() {
        setTitle("popcorn");
        console.log("hey props");
    }

    return (
      <Card className="product-detail">
        <ItemDate date={props.date}></ItemDate>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <button onClick={clickHandler}>Add To Cart</button>
      </Card>
    );
}

export default ProductItem;