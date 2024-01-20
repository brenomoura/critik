import {
    Badge,
    Center,
    Stack,
    Title,
    Group,
    Text,
    rem,
    Grid,
    Avatar,
    SimpleGrid,
} from "@mantine/core"
import IProductItem from "../../types/productItemInterface"
import { Star } from "@phosphor-icons/react"


interface ProductViewProps {
    isPortable: boolean | undefined
    product: IProductItem
}

interface GridViewProps {
    product: IProductItem,
}

interface ProductProps {
    product: IProductItem
}



const ProductStatsComponent = ({ product }: ProductProps) => {
    return (
        <Center>
            <Stack>
                <Center>
                    <Badge leftSection={<Star style={{ width: rem(20), height: rem(20) }} />} py={100} mt={-50} color="transparent">
                        <Title size={50}>{product.rating.toFixed(1)}</Title>
                    </Badge>
                </Center>
                <Center>
                    <Group mt={-110} justify="center" >
                        <div>
                            <Text ta="center" fz="lg" fw={500}>
                                {product.reviewsCount}
                            </Text>
                            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                                Total Ratings
                            </Text>
                        </div>
                        <div>
                            <Text ta="center" fz="lg" fw={500}>
                                {product.discussionsCount}
                            </Text>
                            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                                Total Discussions
                            </Text>
                        </div>
                    </Group>
                </Center>
            </Stack>
        </Center>
    )
}


const DesktopGridView = ({ product }: GridViewProps) => {
    return (
        <Grid align="center" >
            <Grid.Col span="auto">
                <Center>
                    <Avatar
                        src={product.avatar}
                        size={150}
                        radius="xl"
                        mr="xs"
                    />
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
                <ProductStatsComponent product={product} />
            </Grid.Col>
        </Grid>
    )
}

const PortableGridView = ({ product }: GridViewProps) => {

    return (
        <Stack>
            <SimpleGrid cols={2}>
                <Center>
                    <Avatar
                        src={product.avatar}
                        size={110}
                        radius="xl"
                        mr="xs"
                    />
                </Center>
                <ProductStatsComponent product={product} />
            </SimpleGrid>
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

const ProductView = ({ product, isPortable }: ProductViewProps) => {

    return (
        <>
            {isPortable
                ? <PortableGridView product={product} />
                : <DesktopGridView product={product} />
            }
        </>
    )
}

export default ProductView
