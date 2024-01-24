import { Container } from "@mantine/core"
import PendingProductList from "../components/admin/PendingProductList"
import SearchBar from "../components/shared/SearchBar"


const ProductApproval = () => {
    return (
        <div>
            <SearchBar />
            <Container>
                <PendingProductList />
            </Container>
        </div>
    )
}

export default ProductApproval