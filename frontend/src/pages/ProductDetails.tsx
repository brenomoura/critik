import { Space } from "@mantine/core"
import ProductReviewForm from "../components/form/ProductReviewForm"
import ProductReviewList from "../components/product/ProductReviewList"
import ProductSummaryHorizontal from "../components/product/ProductSummaryHorizontal"
import SearchBar from "../components/shared/SearchBar"
import generateMain from "../mock_data/generate_review"

const ProductDetails = () => {
    const userReviews = generateMain()
    console.log(userReviews)

    return (
        <div>
            <SearchBar />
            <Space  h="md" />
            <ProductSummaryHorizontal />
            <ProductReviewForm />
            <ProductReviewList />
        </div>
    )
}

export default ProductDetails