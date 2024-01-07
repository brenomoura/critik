import { Space } from "@mantine/core"
import ProductReviewForm from "../components/form/ProductReviewForm"
import ProductReviewList from "../components/product/ProductReviewList"
import ProductSummaryHorizontal from "../components/product/ProductSummaryHorizontal"
import SearchBar from "../components/shared/SearchBar"

const ProductDetails = () => {
    return (
        <div>
            <SearchBar />
            <Space h="md" />
            <ProductSummaryHorizontal />
            <ProductReviewForm />
            <ProductReviewList />
        </div>
    )
}

export default ProductDetails