
import {
    Center,
    Stack,
    Text,
    Grid,
    Avatar,
    SimpleGrid,
    em,
    Card,
    Button,
    Pagination,
    Tooltip,
} from "@mantine/core"
import { Check, X } from "@phosphor-icons/react"
import { useMediaQuery } from "@mantine/hooks"
import IPendingProductItem from "../../types/pendingProductItemInterface"
import generatePendingProducts from "../../mock_data/generate_pending_product"
import classes from './PendingProductList.module.css';
import { useContext, useEffect, useState } from "react"
import MediaModal from "../shared/modal/MediaModal"
import DeclineProductFormModal from "../form/modal/DeclineProductFormModal"
import ApprovalProductFormModal from "../form/modal/ApprovalProductFormModal"
import { ProductModalFormContext } from "../../helper/context"


interface ProductViewProps {
    isPortable: boolean | undefined
    product: IPendingProductItem
}

interface GridViewProps {
    product: IPendingProductItem,
}

interface PendingProductProps {
    pendingProduct: IPendingProductItem
}

interface PendingProductAvatarProps {
    avatar: string,
    size: number,
    mediaUrls: string[]
}


const ApprovalSectionComponent = ({ pendingProduct }: PendingProductProps) => {
    const {
        setDeclineModalOpened,
        setApproveModalOpened,
        setSelectedPendingProduct
    } = useContext(ProductModalFormContext)
    return (
        <>
            <Center>
                <Button.Group>
                    <div>
                        <Button
                            variant="transparent"
                            color="green"
                            leftSection={<Check weight="bold" size={34} />}
                            onClick={() => {
                                setSelectedPendingProduct(pendingProduct)
                                setApproveModalOpened(true)
                            }}
                        />
                    </div>
                    <div>
                        <Button
                            variant="transparent"
                            color="red"
                            leftSection={<X weight="bold" size={34} />}
                            onClick={() => {
                                setSelectedPendingProduct(pendingProduct)
                                setDeclineModalOpened(true)
                            }}
                        />
                    </div>
                </Button.Group>
            </Center>
        </>
    )
}

const PendingProductAvatar = ({ avatar, size, mediaUrls }: PendingProductAvatarProps) => {
    const [mediaModalOpened, setMediaModalOpened] = useState<true | false>(false);

    return (
        <>
            <Tooltip position="top" label="Click to see more pictures">
                <Avatar
                    src={avatar}
                    size={size}
                    radius="xl"
                    mr="xs"
                    onClick={() => setMediaModalOpened(true)}
                    style={{ cursor: "pointer" }}
                />
            </Tooltip>
            <MediaModal opened={mediaModalOpened} setOpened={setMediaModalOpened} mediaUrls={mediaUrls} initialSlideIndex={0} />
        </>
    )
}


const DesktopGridView = ({ product }: GridViewProps) => {
    return (
        <Grid align="center" >
            <Grid.Col span="auto">
                <Center>
                    <PendingProductAvatar avatar={product.avatar} size={150} mediaUrls={product.media} />
                </Center>
            </Grid.Col>
            <Grid.Col span={6}>
                <Stack gap={0}>
                    <Text fz="xl">
                        {product.name}
                    </Text>
                    <Text fz="sm" c="dimmed" fw={500}>
                        {product.category}
                    </Text>
                    <Text fz="sm">
                        {product.description}
                    </Text>
                </Stack>
            </Grid.Col>
            <Grid.Col span="auto">
                <ApprovalSectionComponent pendingProduct={product} />
            </Grid.Col>
        </Grid>
    )
}

const PortableGridView = ({ product }: GridViewProps) => {
    const isMobile = useMediaQuery(`(max-width: ${em(500)})`);

    const avatarComponent = (
        <Center>
            <PendingProductAvatar avatar={product.avatar} size={110} mediaUrls={product.media} />
        </Center>
    )

    const portableView = () => {
        return (
            isMobile
                ? null
                : <SimpleGrid cols={2}>
                    {avatarComponent}
                    <ApprovalSectionComponent pendingProduct={product} />
                </SimpleGrid>

        )
    }

    const mobileView = () => {
        return (
            isMobile
                ? <Stack>
                    <Center>
                        {avatarComponent}
                    </Center>
                    <ApprovalSectionComponent pendingProduct={product} />
                </Stack>
                : null

        )
    }


    return (
        <Stack>
            {mobileView()}
            {portableView()}
            <Stack gap={0} mx={10} mb={10}>
                <Text fz="xl">
                    {product.name}
                </Text>
                <Text fz="sm" c="dimmed" fw={500}>
                    {product.category}
                </Text>
                <Text fz="sm">
                    {product.description}
                </Text>
            </Stack>
        </Stack>
    );
}

const PendingProductView = ({ product, isPortable }: ProductViewProps) => {

    return (
        <>
            {isPortable
                ? <PortableGridView product={product} />
                : <DesktopGridView product={product} />
            }
        </>
    )
}


const PendingProductList = () => {
    const [activePage, setPage] = useState(1);
    const isPortable = useMediaQuery(`(max-width: ${em(970)})`);

    const [declineModalOpened, setDeclineModalOpened] = useState<true | false>(false);
    const [approveModalOpened, setApproveModalOpened] = useState<true | false>(false);
    const [pendingProductList, setPendingProductList] = useState<IPendingProductItem[]>([]);
    const [selectedPendingProduct, setSelectedPendingProduct] = useState<IPendingProductItem | null>(null)
    
    useEffect(() => {
        const pendingProductList = generatePendingProducts()
        setPendingProductList(pendingProductList)
    }, [activePage])
    return (
        <ProductModalFormContext.Provider value={{ setDeclineModalOpened, setApproveModalOpened, setSelectedPendingProduct }}>
            {pendingProductList.map((product) => {
                return (
                    <Card withBorder className={classes.card} m={10} key={product.id}>
                        <PendingProductView product={product} isPortable={isPortable} />
                    </Card>
                )
            })}
            <Center>
                <Pagination total={pendingProductList.length} value={activePage} onChange={setPage} mt="sm" />
            </Center>
            {
                selectedPendingProduct 
                ? <ApprovalProductFormModal opened={approveModalOpened} setOpened={setApproveModalOpened} approvedProduct={selectedPendingProduct} />
                : null
            }
            {
                selectedPendingProduct
                ? <DeclineProductFormModal opened={declineModalOpened} setOpened={setDeclineModalOpened} declinedProduct={selectedPendingProduct} />
                : null
            }
        </ProductModalFormContext.Provider>
    )
}

export default PendingProductList