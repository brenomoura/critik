import IProductItem from "../../types/productItemInterface"
import { useEffect, useState } from "react"
import { AlignBottom, ChartLineDown, Fire, GridFour, Star } from '@phosphor-icons/react'
import generateFeaturedProducts from "../../mock_data/generate_featured_products"
import StyledLink from "../shared/StyledLink"
import classes from './RankingList.module.css';
import { useMediaQuery } from "@mantine/hooks"
import {
    Badge,
    Center,
    Stack,
    em,
    Title,
    Group,
    Text,
    rem,
    Grid,
    Avatar,
    SimpleGrid,
    Container,
    Card,
    SegmentedControl,
    Select,
    ComboboxData
} from "@mantine/core"
import generateCategories from "../../mock_data/generate_categories"


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


const RankingList = () => {
    const isPortable = useMediaQuery(`(max-width: ${em(950)})`);
    const [section, setSection] = useState<'feature_products' | 'top' | 'new' >('feature_products');
    const [period, setPeriod] = useState<'today' | 'week' | 'month' | 'year' | 'all_time'>('today');
    const [categoryValue, setCategoryValue] = useState<string | null>();
    const [categories, setCategories] = useState<any>([{ label: 'All Categories', value: 'all' }, ]);
    const [productList, setProductList] = useState<IProductItem[]>([]);

    useEffect(() => {
        const fetchedCategories =  generateCategories()
        setCategories([{ label: 'All Categories', value: 'all' }, ...fetchedCategories])
        const productList: IProductItem[] = generateFeaturedProducts()
        setProductList(productList)
    }, [categoryValue, section, period])

    

    const productItemComponent = ({ product }: ProductProps) => {
        if (isPortable) {
            return <PortableGridView product={product} />
        }
        return <DesktopGridView product={product} />
    }

    const topPeriodSegmentControl = () => {
        if (['top', 'lower_rated'].includes(section)) {
            return (
                <SegmentedControl
                    value={period}
                    onChange={(value: any) => setPeriod(value)}
                    data={[
                        { label: 'Today', value: 'today' },
                        { label: 'This Week', value: 'week' },
                        { label: 'This Month', value: 'month' },
                        { label: 'This Year', value: 'year' },
                        { label: 'All Time', value: 'all_time' },
                    ]}
                />
            )
        }
        return null
    }

    return (
        <Container fluid mt={20}>
            <Stack gap="sm">
                <Grid>
                    <Grid.Col span='auto'>
                        <SegmentedControl
                            value={section}
                            onChange={(value: any) => setSection(value)}
                            transitionTimingFunction="ease"
                            fullWidth
                            data={[
                                {
                                    value: 'feature_products',
                                    label: (
                                        <Center style={{ gap: 10 }}>
                                            <Fire style={{ width: rem(16), height: rem(16) }} />
                                            <span>Featured Products</span>
                                        </Center>
                                    ),
                                },
                                {
                                    value: 'new',
                                    label: (
                                        <Center style={{ gap: 10 }}>
                                            <Star style={{ width: rem(16), height: rem(16) }} />
                                            <span>New</span>
                                        </Center>
                                    ),
                                },
                                {
                                    value: 'top',
                                    label: (
                                        <Center style={{ gap: 10 }}>
                                            <AlignBottom style={{ width: rem(16), height: rem(16) }} />
                                            <span>Top</span>
                                        </Center>
                                    ),
                                },
                                {
                                    value: 'lower_rated',
                                    label: (
                                        <Center style={{ gap: 10 }}>
                                            <ChartLineDown style={{ width: rem(16), height: rem(16) }} />
                                            <span>Lower-Rated</span>
                                        </Center>
                                    ),
                                },
                            ]}
                        />
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <Select
                            defaultValue='all'
                            data={categories}
                            onChange={setCategoryValue}
                        />
                    </Grid.Col>
                </Grid>
                {topPeriodSegmentControl()}
            </Stack>

            {productList.map((product) => {
                return (
                    <StyledLink to={`/product/${product.id}`} key={product.id}>
                        <Card withBorder className={classes.card} m={10} key={product.id}>
                            {productItemComponent({ product })}
                        </Card>
                    </StyledLink>
                )
            })}
        </Container>
    )
}

export default RankingList