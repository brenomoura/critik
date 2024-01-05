import {
    Card,
    Text,
    Badge,
    Center,
    Avatar,
    Grid,
    rem,
    Title,
    em,
    Stack,
    SimpleGrid,
    Tooltip,
} from '@mantine/core';
import { Star, Images, Video } from '@phosphor-icons/react'
import classes from './ProductSummaryHorizontal.module.css';
import IProductItem from '../../types/productItemInterface';
import { useMediaQuery } from '@mantine/hooks';


const DesktopGridView = ({ product }: { product: IProductItem }) => {
    return (
        <Grid align="center" >
            <Grid.Col span="auto">
                <Center>
                    <Avatar
                        src={product.avatar}
                        size={250}
                        radius="xl"
                        mr="xs"
                    />
                    <Stack>
                        <Tooltip label='Click here to see the product photos' position='right' withArrow>
                            <Badge leftSection={<Images style={{ width: rem(40), height: rem(40) }} />} py={57} px={27} color="gray" radius="xl">
                                <Text>+99</Text>
                            </Badge>
                        </Tooltip>
                        <Tooltip label='Click here to see the product videos' position='right' withArrow>
                            <Badge leftSection={<Video style={{ width: rem(40), height: rem(40) }} />} py={57} px={27} color="gray" radius="xl">
                                <Text>+99</Text>
                            </Badge>
                        </Tooltip>
                    </Stack>
                </Center>
            </Grid.Col>
            <Grid.Col span={6}>
                <Stack>
                    <Text fz="xl">
                        {product.name}
                    </Text>
                    <Text fz="sm" c="dimmed" fw={500}>
                        {product.category}
                    </Text>
                    <Text fz="sm" lineClamp={4}>
                        {product.description}
                    </Text>
                </Stack>
            </Grid.Col>
            <Grid.Col span="auto">
                <Center>
                    <Badge leftSection={<Star style={{ width: rem(20), height: rem(20) }} />} py={150} color="transparent">
                        <Title size={100}>{product.score}</Title>
                    </Badge>
                </Center>
            </Grid.Col>
        </Grid>
    )
}

const MobileGridView = ({ product }: { product: IProductItem }) => {
    return (
        <Stack>
            <SimpleGrid cols={2}>
                <Center>
                    <Avatar
                        src={product.avatar}
                        size={210}
                        radius="xl"
                        mr="xs"
                    />
                    <Stack>
                        <Tooltip label='Click here to see the product photos' position='right' withArrow>
                            <Badge leftSection={<Images style={{ width: rem(40), height: rem(40) }} />} py={47} px={17} color="gray" radius="lg">
                                <Text>+99</Text>
                            </Badge>
                        </Tooltip>
                        <Tooltip label='Click here to see the product videos' position='right' withArrow>
                            <Badge leftSection={<Video style={{ width: rem(40), height: rem(40) }} />} py={47} px={17} color="gray" radius="lg">
                                <Text>+99</Text>
                            </Badge>
                        </Tooltip>
                    </Stack>

                </Center>
                <Center>
                    <Badge leftSection={<Star style={{ width: rem(20), height: rem(20) }} />} py={150} color="transparent">
                        <Title size={100}>{product.score}</Title>
                    </Badge>
                </Center>
            </SimpleGrid>
            <div>
                <Text fz="xl">
                    {product.name}
                </Text>
                <Text fz="sm" c="dimmed" fw={500}>
                    {product.category}
                </Text>
                <Text fz="sm" lineClamp={4}>
                    {product.description}
                </Text>

            </div>
        </Stack>
    );
}


const ProductSummaryHorizontal = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(1335)})`);
    const product = {
        "id": 28848,
        "avatar": "https://picsum.photos/200/300",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        "name": "Unbranded Steel Shoes",
        "score": 7.9,
        "category": "electronic"
    }

    const productHeaderComponent = isMobile ? <MobileGridView product={product} /> : <DesktopGridView product={product} />
    return (
        <Card withBorder className={classes.card}>
            {productHeaderComponent}
        </Card>
    );
}

export default ProductSummaryHorizontal