import './ProductForm.css';
import { useState } from 'react';

function ProductForm(props) {

    const [newTitle, setTitle] = useState(' ');
    const [newDate, setDate] = useState(" ");

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
        console.log(newDate);
    }

    function submitHandler(event) {
        event.preventDefault();
        const Product = {
            title: newTitle,
            date: newDate
        }
        
        props.onSaveProduct(Product);
        setTitle('');
        setDate('');
    }
    return (
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={newTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            min="1-1-2023"
            max="31-12-2023"
            value={newDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div>
          <button type="submit">Add Product</button>
        </div>
      </form>
    );
}

export default ProductForm;