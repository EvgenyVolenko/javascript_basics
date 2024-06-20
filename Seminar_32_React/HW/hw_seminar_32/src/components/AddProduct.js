import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../reducers/ProductsSlice";

function AddProduct() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.array);

    function setId(array) {
        let maxId = 0;
        array.forEach(element => {
            if (element.id > maxId) {
                maxId = element.id;
            }
        });
        return ++maxId;
    }

    function submitProduct(formData) {
        const id = setId(products);
        const name = formData.get('name');
        const description = formData.get('description');
        const available = formData.get('available') === null ? false : true;
        console.log(name, description, available);
        dispatch(addProduct({ id: id, name: name, description: description, available: available }));
    }

    return (
        <>
            <form action={submitProduct} style={{ display: 'flex', flexDirection: 'column' }}>
                <label>
                    Название товара:
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Product_X"
                        required
                        autoFocus
                    />
                </label>

                <label>
                    Описание товара:
                    <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Description_X"
                        required
                    />
                </label>

                <label>
                    Доступен ли товар
                    <input type="checkbox" name="available" />
                </label>

                <button type="submit" style={{ width: '100px' }}>Add product</button>
            </form>
        </>
    );
}

export default AddProduct;