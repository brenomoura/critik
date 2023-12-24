import IProductItem from "../../types/productItemInterface"
import ProductItem from "../shared/ProductItem"



const SortingOptionsBar = () => {
    return (
        <div></div>
    )
}

const FeaturedProductList = () => {
    const featuredProductList: IProductItem[] = []
    return (
        <div>
            <SortingOptionsBar />
            {featuredProductList.map((productItem) => (
                <ProductItem product={productItem} />
            ))}
        </div>
    )
}

export default FeaturedProductList