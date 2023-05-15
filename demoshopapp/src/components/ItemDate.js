import './ItemDate.css'

function ItemDate(props) {

    return (
      <div className="product-date">
        <div className="product-date_day">{props.date.day}</div>
        <div className="product-date_month">{props.date.month}</div>
        <div className="product-date_year">{props.date.year}</div>
      </div>
    );
}

export default ItemDate;