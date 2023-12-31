import { Center, SegmentedControl, rem, Text, Container, Stack } from "@mantine/core"
import IProductItem from "../../types/productItemInterface"
import ProductItem from "../shared/ProductItem"
import { useState } from "react"
import { Fire, AlignBottom, Star } from '@phosphor-icons/react'




const FeaturedProductList = () => {
    const [section, setSection] = useState<'feature_products' | 'top' | 'new'>('feature_products');
    const featuredProductList: IProductItem[] = []

    return (
        <Container fluid>
            <Stack gap="sm">
                <Center>
                    <Text fw={700} size="xl">
                        Featured
                    </Text>
                </Center>
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
                            value: 'top',
                            label: (
                                <Center style={{ gap: 10 }}>
                                    <AlignBottom style={{ width: rem(16), height: rem(16) }} />
                                    <span>Top</span>
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
                    ]}
                />
            </Stack>
            {featuredProductList.map((productItem) => (
                <ProductItem product={productItem} />
            ))}
        </Container>
    )
}

export default FeaturedProductList