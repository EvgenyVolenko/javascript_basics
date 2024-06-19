import './App.css';
import ProductsList from './components/ProductsList.js';
import productsData from './data.js';
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "./reducers/ProductsSlice";
import AddProduct from './components/AddProduct.js';

function App() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  if (products.array.length === 0) {
    productsData.map((item) => {
      dispatch(addProduct(item));
    });
  }

  return (
    <>
      <ProductsList />
      <AddProduct />
    </>
  );
}

export default App;
