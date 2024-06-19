import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../reducers/ProductsSlice";

function ProductsList() {

    const products = useSelector(state => state.products.array);

    const dispatch = useDispatch();

    const handleDeleteProduct = (item) => {
        dispatch(deleteProduct(item));
    }

    return (

        <div>
            <h2>Products List</h2>
            <ul>
                {products.map(item => (
                    <li key={item.id} style={{ listStyleType: "none" }}>
                        <div>
                            id_{item.id} - {item.name} - {item.price} - {item.description}
                            <input type="checkbox" id="available" name="available" value="availability" checked={item.available} readOnly />
                            <label htmlFor="available">Available</label>
                            <button onClick={() => handleDeleteProduct(item)}>Delete product</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default ProductsList;