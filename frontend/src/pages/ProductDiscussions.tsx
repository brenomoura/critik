import AddProductTopic from "../components/form/ProductTopic"
import ProductDiscussionList from "../components/product/ProductDiscussionList"
import ProductSummaryVertical from "../components/product/ProductSummaryVertical"

const ProductDiscussion = () => {
    return (
        <div>
            ProductDiscussion
            <ProductSummaryVertical />
            <AddProductTopic />
            <ProductDiscussionList />
        </div>
    )
}

export default ProductDiscussion