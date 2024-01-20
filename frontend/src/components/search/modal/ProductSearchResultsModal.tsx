import { Input, Modal, em, rem } from "@mantine/core"
import ProductList from "../../product/ProductList"
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
  

    const fetchData = (value: string) => {
        const productList: IProductItem[] = generateFeaturedProducts()
        setProductList(productList)
      }
    
      const handleSearchInputChange = (value: string) => {
        if (value) {
          fetchData(value)
          setSearchValue(value)
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
            />
            <ProductList productList={productList} isPortable={isPortable} />
        </Modal>
    )
}

export default ProductSearchModal