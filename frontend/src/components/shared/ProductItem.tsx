import IProductItem from "../../types/productItemInterface"

const ProductItem = ({ product }: { product: IProductItem }) => {
    return (
        <div>{product.id}</div>
    )
}

export default ProductItem
