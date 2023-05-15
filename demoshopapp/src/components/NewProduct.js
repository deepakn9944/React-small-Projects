import './NewProduct.css'
import ProductForm from './ProductForm'
function NewProduct(props) {

    function saveProduct(product) {
        console.log('I am inside new Product');
        console.log(product);
        props.onNewProduct(product);
    }
    return (
        <ProductForm onSaveProduct={ saveProduct } />
    )
}

export default NewProduct;