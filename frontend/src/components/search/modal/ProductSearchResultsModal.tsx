import { Input, Modal, ScrollArea, em, rem } from "@mantine/core"
import ProductList from "../../shared/ProductList"
import IProductItem from "../../../types/productItemInterface"
import { useMediaQuery } from "@mantine/hooks"
import { IconSearch } from "@tabler/icons-react"
import { useState } from "react"
import generateFeaturedProducts from "../../../mock_data/generate_featured_products"

interface ProductSearchModalProps {
    opened: boolean,
    setOpened: any,
}

const ProductSearchModal = ({
    opened,
    setOpened,
}: ProductSearchModalProps) => {
    const isPortable = useMediaQuery(`(max-width: ${em(1390)})`);
    const [productList, setProductList] = useState<IProductItem[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [modalHeight, setModalHeight] = useState<number>()


    const fetchData = (value: string) => {
        console.log("product to search", value)
        const productList: IProductItem[] = generateFeaturedProducts()
        setProductList(productList)
    }

    const handleSearchInputChange = (value: string) => {
        if (value.length > 0) {
            fetchData(value)
            setSearchValue(value)
        }

        if (productList.length >= 2 && value.length > 0) {
            setModalHeight(800)
        } else {
            setModalHeight(0)
        }
    }


    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            size="80%"
            withCloseButton={false}
            p={10}
        >
            <Input
                defaultValue={searchValue}
                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                onChange={(event) => handleSearchInputChange(event.currentTarget.value)}
                miw={250}
                placeholder="Type to search a product..."

            />
            <ScrollArea h={rem(modalHeight)}>
                <ProductList productList={productList} isPortable={isPortable} />
            </ScrollArea>
        </Modal>
    )
}

export default ProductSearchModal