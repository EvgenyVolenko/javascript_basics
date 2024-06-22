import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, changeAvailable } from "../reducers/ProductsSlice";

function ProductsList() {

    const products = useSelector(state => state.products.array);
    const dispatch = useDispatch();

    const handleDeleteProduct = (item) => {
        dispatch(deleteProduct(item));
    }

    const handleChangeAvailable = (item) => {
        dispatch(changeAvailable(item));
    }

    const handleChangeProduct = (item, e) => {
        e.preventDefault();
        const form = document.querySelector('.newProduct');
        const nameProduct = form.querySelector('#name');
        nameProduct.value = item.name;
        const descriptionProduct = form.querySelector('#description');
        descriptionProduct.value = item.description;
        const availableProduct = form.querySelector('[name="available"]');
        availableProduct.checked = item.available;
        const button = form.querySelector('.button');
        button.innerText = 'Save changes';
        const price = form.querySelector('#price');
        price.value = item.price;
        const id = form.querySelector('#id');
        id.value = item.id;
    }

    return (

        <div>
            <h2>Products List</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {products.map(item => (
                    <li key={item.id} style={{ listStyleType: "none" }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            id_{item.id} - {item.name} - {item.price} - {item.description}
                            <input type="checkbox" id="available" name="available" value="availability" checked={item.available}
                                onChange={() => handleChangeAvailable(item)} />
                            <label htmlFor="available">Available</label>
                            <button onClick={() => handleDeleteProduct(item)}>Delete product</button>
                            <button onClick={(e) => handleChangeProduct(item, e)}>Change product</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default ProductsList;