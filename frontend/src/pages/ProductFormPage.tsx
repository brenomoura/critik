import ProductForm from "../components/form/ProductForm"
import SearchBar from "../components/shared/SearchBar"

const ProductFormPage = () => {
    return (
        <div>
            <SearchBar />
            <ProductForm url="add product" />
        </div>
    )
}

export default ProductFormPage