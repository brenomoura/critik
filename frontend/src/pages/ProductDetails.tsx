import { Space } from "@mantine/core"
import AddProductReview from "../components/form/ProductReviewForm"
import ProductReviewList from "../components/product/ProductReviewList"
import ProductSummaryHorizontal from "../components/product/ProductSummaryReviews"
import SearchBar from "../components/shared/SearchBar"

const ProductDetails = () => {
    return (
        <div>
            <SearchBar />
            <Space h="md" />
            <ProductSummaryHorizontal />
            <AddProductReview />
            <ProductReviewList />
        </div>
    )
}

export default ProductDetails