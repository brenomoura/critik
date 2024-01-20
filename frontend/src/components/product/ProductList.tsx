import IProductItem from "../../types/productItemInterface"
import StyledLink from "../shared/StyledLink"
import classes from './ProductList.module.css';
import { useMediaQuery } from "@mantine/hooks"
import {
    em,
    Container,
    Card,
} from "@mantine/core"
import ProductView from "./ProductView";


interface ProductListProps {
    productList: IProductItem[]
    isPortable?: boolean
}

const ProductList = ({ productList, isPortable }: ProductListProps) => {
    if (!isPortable) {
        isPortable = useMediaQuery(`(max-width: ${em(970)})`);
    }

    return (
        <Container fluid mt={20}>
            {productList.map((product) => (
                <StyledLink to={`/product/${product.id}`} key={product.id}>
                    <Card withBorder className={classes.card} m={10} key={product.id}>
                        <ProductView product={product} isPortable={isPortable} />
                    </Card>
                </StyledLink>
            ))}
        </Container>
    )
}

export default ProductList