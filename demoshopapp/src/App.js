import './App.css';
import Products from './components/Products';
import NewProduct from './components/NewProduct'

function App() {
  const response = [
    {
      title: "Nirma",
      amount: 100,
      date: {
        day: 12,
        month: "june",
        year: 2003,
      },
    },
    {
      title: "Surf Excel",
      amount: 200,
      date: {
        day: 2,
        month: "March",
        year: 2004,
      },
    },
    {
      title: "555",
      amount: 50,
      date: {
        day: 21,
        month: "july",
        year: 1999
      },
    },
    {
      title: "Tide",
      amount: 75,
      date: {
        day: 30,
        month: "August",
        year: 2007,
      },
    },
  ];

  function newProduct(product) {
    console.log("I am inside app");
    console.log(product);
  }
  return (
    <div>
      <NewProduct onNewProduct={newProduct}></NewProduct>
      <Products products={response}></Products>
    </div>
  );
}

export default App;
