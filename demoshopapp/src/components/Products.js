import './Products.css'
import ProductItem from "./ProductItem";
import Card from "./Card";

function Products(props){
    return (
      <Card className="products">
        <ProductItem
          name={props.products[0].title}
          amount={props.products[0].amount}
          date={props.products[0].date}
        ></ProductItem>
        <ProductItem
          name={props.products[1].title}
          amount={props.products[1].amount}
          date={props.products[1].date}
        ></ProductItem>
        <ProductItem
          name={props.products[2].title}
          amount={props.products[2].amount}
          date={props.products[2].date}
        ></ProductItem>
        <ProductItem
          name={props.products[3].title}
          amount={props.products[3].amount}
          date={props.products[3].date}
        ></ProductItem>
      </Card>
    );
}

export default Products;