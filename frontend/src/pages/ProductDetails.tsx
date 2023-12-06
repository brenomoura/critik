import ProductReviewForm from "../components/form/ProductReviewForm"
import ProductReviewList from "../components/product/ProductReviewList"
import ProductSummaryHorizontal from "../components/product/ProductSummaryHorizontal"

const ProductDetails = () => {   
    return (
        <div>
            ProductDetails
            <ProductSummaryHorizontal />
            <ProductReviewForm />
            <ProductReviewList />
        </div>
    )
}

export default ProductDetails