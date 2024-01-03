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
    ActionIcon,
    Menu,
    Badge
} from "@mantine/core"
import IProductItem from "../../types/productItemInterface"
import ProductItem from "../shared/ProductItem"
import { useState } from "react"
import { Fire, AlignBottom, Star } from '@phosphor-icons/react'




const FeaturedProductList = () => {
    const [section, setSection] = useState<'feature_products' | 'top' | 'new'>('feature_products');
    const featuredProductList: IProductItem[] = [
        {
            "id": 5558,
            "avatar": "https://picsum.photos/200/300",
            "description": "Sed ab porro.",
            "name": "Refined Plastic Soap",
            "score": 10
        },
        {
            "id": 62653,
            "avatar": "https://picsum.photos/200/300",
            "description": "Reprehenderit quisquam doloremque. Sed animi ut enim. Velit laborum rem voluptatum. Expedita accusamus est. Quisquam eos cumque sint sapiente error quaerat exercitationem maxime.",
            "name": "Fantastic Wooden Bike",
            "score": 9.9
        },
        {
            "id": 58696,
            "avatar": "https://picsum.photos/200/300",
            "description": "Hic et in voluptatem vel porro. Ut totam quisquam doloribus est dolor blanditiis culpa ut. Est non non dolorem odio repellat dolor ut facere omnis. Non quas sit dolorum architecto. In facilis voluptatem saepe sed voluptatem. Sit natus aut et dignissimos et et voluptatem.",
            "name": "Small Metal Salad",
            "score": 8.4
        },
        {
            "id": 48839,
            "avatar": "https://picsum.photos/200/300",
            "description": "Distinctio eum ad ab. Tenetur voluptatem ut officiis soluta et a. Vel officiis provident velit consequatur possimus itaque et. Perferendis possimus quae similique quia quae eum.",
            "name": "Gorgeous Metal Salad",
            "score": 8.3
        },
        {
            "id": 20957,
            "avatar": "https://picsum.photos/200/300",
            "description": "Sit magnam nihil possimus officiis aut et necessitatibus sint nam. Expedita ipsa magni. Et non fugiat.\n \rQui quia est sed eos amet. Quis nihil sed sit ut. Voluptatem doloribus ut. Provident provident sint occaecati libero sapiente qui. In dolorum cum veniam.\n \rDebitis aperiam autem facilis. Enim et quas accusamus aperiam. Itaque eum ut est qui veritatis. Quia dolorem molestiae alias aut velit. Explicabo magnam quo consectetur.",
            "name": "Generic Wooden Towels",
            "score": 8.1
        },
        {
            "id": 39666,
            "avatar": "https://picsum.photos/200/300",
            "description": "Doloribus quae illum vel quas quia quae voluptates. Aut impedit doloremque eum. Cum sint et sint est laboriosam quibusdam facilis temporibus. Alias corrupti ea voluptates harum eum qui assumenda perferendis. Dolores minus aliquam distinctio rem quisquam modi ab maiores deleniti.",
            "name": "Ergonomic Concrete Cheese",
            "score": 8.0
        },
        {
            "id": 28848,
            "avatar": "https://picsum.photos/200/300",
            "description": "expedita",
            "name": "Unbranded Steel Shoes",
            "score": 7.9
        },
        {
            "id": 4289,
            "avatar": "https://picsum.photos/200/300",
            "description": "Ut non fugiat soluta eligendi harum consequatur est officiis. Architecto in enim cum ut aliquid fugit similique ex. Soluta non quis perferendis ipsam soluta. Consequatur ab explicabo commodi.\n \rVoluptatibus illum accusamus laborum et unde. Aut quia autem voluptas quis eligendi deserunt et ipsa. Odio delectus repudiandae non ducimus qui ipsa sequi distinctio cumque. Nesciunt voluptates nihil eos omnis facere.\n \rNemo qui mollitia et eaque nisi. Id tenetur et deleniti sunt ex quis molestiae. Distinctio at eos rerum consequatur numquam dolore est sunt. In et inventore quasi eum aut voluptatem corporis ratione. Modi laborum natus et natus numquam nihil recusandae.",
            "name": "Intelligent Rubber Bike",
            "score": 7.8
        },
        {
            "id": 76611,
            "avatar": "https://picsum.photos/200/300",
            "description": "quia",
            "name": "Licensed Frozen Soap",
            "score": 7.4
        },
        {
            "id": 69391,
            "avatar": "https://picsum.photos/200/300",
            "description": "Ipsa sint molestias. Ex est non maiores ab quo quo explicabo vel.",
            "name": "Generic Fresh Fish",
            "score": 7.1
        }
    ]

    const productDescriptionParser = (productDescription: string) => {
        const max_length = 100
        if (productDescription.length > max_length) {
            return `${productDescription}`.substring(0, max_length) + '...'
        }
        return productDescription
    }

    const rows = featuredProductList.map((featuredProductItem) => (
        <Table.Tr key={featuredProductItem.id}>
            <Table.Td>
                <Group gap="sm">
                    <Avatar size={100} src={featuredProductItem.avatar} radius={40} />
                    <div>
                        <Text fz="xl" fw={700}>
                            {featuredProductItem.name}
                        </Text>
                        <Text c="dimmed" fz="xs">
                            {productDescriptionParser(featuredProductItem.description)}
                        </Text>
                    </div>
                </Group>
            </Table.Td>
            <Table.Td>
                <Badge leftSection={<Star style={{ width: rem(12), height: rem(12) }} />} py={15} color="transparent">
                    <Text fz="xl" fw={800}>{featuredProductItem.score.toFixed(1)}</Text>
                </Badge>
            </Table.Td>
        </Table.Tr>
    ));

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
            <Table.ScrollContainer minWidth={800}>
                <Table verticalSpacing="md">
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </Container>
    )
}

export default FeaturedProductList