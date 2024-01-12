import { Center, Collapse, Group, RangeSlider, Select, Space, Text } from "@mantine/core"
import AddProductReview from "../components/form/ProductReviewForm"
import ProductReviewList from "../components/product/ProductReviewList"
import ProductSummaryHorizontal from "../components/product/ProductSummaryReviews"
import SearchBar from "../components/shared/SearchBar"
import generateMain from "../mock_data/generate_review"
import { useEffect, useState } from "react"

const ProductDetails = () => {
    const userReviews = generateMain()

    const [reviewsFilterValue, setReviewsFilterValue] = useState<string | null>('');
    const [collpaseOpened, setCollpaseOpened] = useState<boolean>(false);
    const marks = [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }, { value: 10 }];

    useEffect(() => {
        if (reviewsFilterValue === 'rating_filter') {
            setCollpaseOpened(true)
        } else {
            setCollpaseOpened(false)
        }
    }, [reviewsFilterValue])


    return (
        <div>
            <SearchBar />
            <Space h="md" />
            <ProductSummaryHorizontal />
            <Group justify="center" py={20}>
                <Select
                    defaultValue='best_reviews'
                    data={[
                        { label: 'Best Reviews', value: 'best_reviews' },
                        { label: 'Worst Reviews', value: 'worst_reviews' },
                        { label: 'Useful Reviews', value: 'useful_reviews' },
                        { label: 'Filter by Rating', value: 'rating_filter' },
                    ]}
                    onChange={setReviewsFilterValue}
                />
                <Select
                    defaultValue='most_recents'
                    data={[
                        { label: 'Most Recents', value: 'most_recents' },
                        { label: 'Older Reviews', value: 'older_reviews' },
                    ]}
                />
                <AddProductReview />
            </Group>
            <Collapse in={collpaseOpened} py={10} px={100}>
                <Center>
                    <Text>Filter by Rating</Text>
                </Center>
                <RangeSlider
                    minRange={0}
                    min={0}
                    max={10}
                    step={1}
                    defaultValue={[0, 10]}
                    marks={marks}
                    styles={{ markLabel: { display: 'none' } }}
                    style={{ padding: 20 }}
                />
            </Collapse>
            <ProductReviewList userReviews={userReviews} />
        </div>
    )
}

export default ProductDetails