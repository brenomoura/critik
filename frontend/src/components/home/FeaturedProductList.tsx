import {
    Center,
    SegmentedControl,
    rem,
    Text,
    Container,
    Stack,
    Avatar,
    Table,
    Group,
    Badge
} from "@mantine/core"
import IProductItem from "../../types/productItemInterface"
import { useState } from "react"
import { Fire, AlignBottom, Star } from '@phosphor-icons/react'
import Title from "../shared/Title"
import generateFeaturedProducts from "../../mock_data/generate_featured_products"

interface FeaturedProductListprops {
    showTitle?: boolean
}


const FeaturedProductList = ({ showTitle = true }: FeaturedProductListprops) => {
    const [section, setSection] = useState<'feature_products' | 'top' | 'new'>('feature_products');
    const [period, setPeriod] = useState<'today' | 'week' | 'month' | 'year' | 'all_time'>('today');
    const featuredProductList: IProductItem[] = generateFeaturedProducts()

    const rows = featuredProductList.map((featuredProductItem) => (
        <Table.Tr key={featuredProductItem.id}>
            <Table.Td>
                <Group gap="sm">
                    <Avatar size={100} src={featuredProductItem.avatar} radius={40} />
                    <div>
                        <Text fz="xl" fw={700}>
                            {featuredProductItem.name}
                        </Text>
                    </div>
                </Group>
            </Table.Td>
            <Table.Td>
                <Badge leftSection={<Star style={{ width: rem(12), height: rem(12) }} />} py={15} color="transparent">
                    <Text fz="xl" fw={800}>{featuredProductItem.rating.toFixed(1)}</Text>
                </Badge>
            </Table.Td>
        </Table.Tr>
    ));

    const topPeriodSegmentControl = () => {
        if (section === 'top') {
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

    const titleComponent = () => {
        if (showTitle) {
            return <Title label="Featured" />
        }
        return null
    }


    return (
        <Container fluid>
            <Stack gap="sm">
                {titleComponent()}
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
                    ]}
                />
                {topPeriodSegmentControl()}
            </Stack>
            <Table>
                <Table verticalSpacing="md">
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Table>
        </Container>
    )
}

export default FeaturedProductList