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
        let id = null;
        
        if (!formData.get('id')) {
            id = setId(products);
        } else {
            id = formData.get('id');
        }
        const name = formData.get('name');
        const description = formData.get('description');
        const available = formData.get('available') === null ? false : true;
        const price = formData.get('price');
        dispatch(addProduct({ id: id, name: name, description: description, available: available, price: price }));
    }

    return (
        <div className="newProduct">
            <form action={submitProduct} style={{ display: 'flex', flexDirection: 'column' }}>

                <label  >
                    id:
                    <input
                        type="number"
                        name="id"
                        id="id"
                        readOnly={true}
                    />
                </label>

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
                    Цена:
                    <input
                        type="number"
                        name="price"
                        id="price"
                        placeholder="price"
                        required
                    />
                </label>

                <label>
                    Доступен ли товар
                    <input type="checkbox" name="available" />
                </label>

                <button className='button' type="submit" style={{ width: '120px' }}>Add product</button>
            </form>
        </div>
    );
}

export default AddProduct;