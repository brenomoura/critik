import IProductItem from "../../types/productItemInterface"

const ProductItem: React.FC<{ product: IProductItem }> = ({ product }) => {
    return (
        <div>{product.id}</div>
    )
}

export default ProductItem
