import Header from "./Header/Header"
import FormProduct from "./FormProduct/FormProducts";
import { useState } from "react";
import { ItemProducts } from "../../types/ItemProduct";
import { ListProduct } from "./ListProduct/ListProduct";


function AppProduct(){
    const [products, setProducts] = useState<ItemProducts[]>([])

    const handleAddProduct = (newItem : ItemProducts) =>{
        setProducts((prev) => [...prev, newItem])
    }


    return(
        <div>
            <Header></Header>
            <h2 className="text-center">Formulario</h2>
            <FormProduct handleAddProduct={handleAddProduct}></FormProduct>
            <h2 className="text-center">Productos</h2>
            {
                products.length > 0 ? 
                <ListProduct arrItems={products}></ListProduct>
                : <h3 className="text-center"> No hay productos</h3>
            }
            
        </div>
    )
}

export default AppProduct;