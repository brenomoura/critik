import IProductItem from "../../types/productItemInterface"
import { useEffect, useState } from "react"
import { AlignBottom, ChartLineDown, Fire, Star } from '@phosphor-icons/react'
import generateFeaturedProducts from "../../mock_data/generate_featured_products"
import StyledLink from "../shared/StyledLink"
import classes from './RankingList.module.css';
import { useMediaQuery } from "@mantine/hooks"
import {
    Center,
    Stack,
    em,
    rem,
    Grid,
    Container,
    Card,
    SegmentedControl,
    Select,
} from "@mantine/core"
import generateCategories from "../../mock_data/generate_categories"
import ProductView from "../product/ProductView"


const RankingList = () => {
    const isPortable = useMediaQuery(`(max-width: ${em(970)})`);
    const [section, setSection] = useState<'feature_products' | 'top' | 'new' | 'low'>('feature_products');
    const [period, setPeriod] = useState<'today' | 'week' | 'month' | 'year' | 'all_time'>('today');
    const [categoryValue, setCategoryValue] = useState<string | null>();
    const [categories, setCategories] = useState<any>([{ label: 'All Categories', value: 'all' },]);
    const [productList, setProductList] = useState<IProductItem[]>([]);

    useEffect(() => {
        const fetchedCategories = generateCategories()
        setCategories([{ label: 'All Categories', value: 'all' }, ...fetchedCategories])
        const productList: IProductItem[] = generateFeaturedProducts()
        setProductList(productList)
    }, [categoryValue, section, period])



    const topPeriodSegmentControl = () => {
        if (['top', 'lower_rated'].includes(section)) {
            return (
                <SegmentedControl
                    value={period}
                    onChange={(value: any) => setPeriod(value)}
                    data={[
                        { label: 'Today', value: 'today' },
                        { label: 'Week', value: 'week' },
                        { label: 'Month', value: 'month' },
                        { label: 'Year', value: 'year' },
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
                    <Grid.Col span={5}>
                        <Select
                            defaultValue='all'
                            data={categories}
                            onChange={setCategoryValue}
                        />
                    </Grid.Col>
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
                                            <span>Featured</span>
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
                                    value: 'low',
                                    label: (
                                        <Center style={{ gap: 10 }}>
                                            <ChartLineDown style={{ width: rem(16), height: rem(16) }} />
                                            <span>Low</span>
                                        </Center>
                                    ),
                                },
                            ]}
                        />
                    </Grid.Col>
                </Grid>
                {topPeriodSegmentControl()}
            </Stack>

            {productList.map((product) => {
                return (
                    <StyledLink to={`/product/${product.id}`} key={product.id}>
                        <Card withBorder className={classes.card} m={10} key={product.id}>
                            <ProductView product={product} isPortable={isPortable} />
                        </Card>
                    </StyledLink>
                )
            })}
        </Container>
    )
}

export default RankingList