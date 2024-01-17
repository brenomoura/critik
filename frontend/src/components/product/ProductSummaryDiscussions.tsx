import { Card, Avatar, Text, Group, Button, Badge, rem, em, Center } from '@mantine/core';
import classes from './ProductSummaryDiscussions.module.css';
import generateProduct from '../../mock_data/generate_product';
import { Star } from '@phosphor-icons/react';
import IProductItem from '../../types/productItemInterface';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import StyledLink from '../shared/StyledLink';


interface ProductSummaryDiscussionsProps {
    product: IProductItem
    reviewsPageRoute: string
}

const ProductSummaryDiscussionsDesktop = ({ product, reviewsPageRoute }: ProductSummaryDiscussionsProps) => {
    return (
        <Card padding="xl" radius="xs" style={{ backgroundColor: 'transparent' }}>
            <Avatar
                src={product.avatar}
                size={150}
                radius={20}
                mx="auto"
                mt={30}
                className={classes.avatar}
            />
            <Text ta="center" fz="lg" fw={500} mt="sm">
                {product.name}
            </Text>
            <Text ta="center" fz="sm" c="dimmed">
                {product.category}
            </Text>
            <Group mt="md" justify="center" gap={30}>
                <div>
                    <Text ta="center" fz="lg" fw={500}>
                        <Badge leftSection={<Star style={{ width: rem(15), height: rem(15) }} />} color="transparent">
                            <Text ta="center" fz="lg" fw={500}>
                                {product.rating.toFixed(1)}
                            </Text>
                        </Badge>
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                        Rating
                    </Text>
                </div>
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
            <StyledLink to={reviewsPageRoute}>
                <Button fullWidth radius="md" mt="xl" size="md" variant="default">
                    Go to Product Reviews
                </Button>
            </StyledLink>
        </Card>
    );
}

const ProductSummaryDiscussionsPortable = ({ product, reviewsPageRoute }: ProductSummaryDiscussionsProps) => {

    return (
        <Center>
            <Group mb={10}>
                <Avatar
                    src={product.avatar}
                    size={100}
                    radius="md"
                />
                <div>
                    <div>
                        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                            {product.category}
                        </Text>
                        <Text fz="lg" fw={500} className={classes.name}>
                            {product.name}
                        </Text>
                    </div>

                    <Group mt="md" justify="center" gap={30}>
                        <div>
                            <Text ta="center" fz="xs" c="dimmed">
                                <Badge leftSection={<Star style={{ width: rem(15), height: rem(15) }} />} color="transparent">
                                    <Text ta="center" fz="lg" fw={500}>
                                        {product.rating.toFixed(1)}
                                    </Text>
                                </Badge>
                            </Text>
                            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                                Rating
                            </Text>
                        </div>
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
                </div>
            </Group>
            <StyledLink to={reviewsPageRoute}>
                <Button radius="md" variant="default" ml={10}>
                    Go To Product Reviews
                </Button>
            </StyledLink>
        </Center>
    )
}

const ProductSummaryDiscussions = ({ isPortable }: { isPortable: boolean | undefined }) => {
    const product = generateProduct()

    const productSummaryProps: ProductSummaryDiscussionsProps = {
        product: product,
        reviewsPageRoute: `/product/${product.id}`
    }
    const mainComponent = isPortable
        ? <ProductSummaryDiscussionsPortable {...productSummaryProps} />
        : <ProductSummaryDiscussionsDesktop {...productSummaryProps} />

    return mainComponent;
}

export default ProductSummaryDiscussions;