import {
    Space,
    Grid,
    ScrollArea,
    em,
    Group,
    Select,
    Stack,
    Center
} from "@mantine/core"
import ProductSummaryReviews from "../components/product/ProductSummaryDiscussions"
import SearchBar from "../components/shared/SearchBar"
import AddProductDiscusssion from "../components/product/AddProductDiscussion"
import ProductDiscussions from "../components/product/ProductDiscussions"
import { useMediaQuery } from "@mantine/hooks"

interface ScrollAreaProductDiscussionProps {
    isPortable: boolean
}

interface ViewProps {
    scrollAreaProductDiscussionComponent: any
    productSummaryReviewsComponent: any
}


const ScrollAreaProductDiscussion = ({ isPortable }: ScrollAreaProductDiscussionProps) => {
    const isMobile = useMediaQuery(`(max-width: ${em(580)})`);

    const mobileView = () => {
        return isMobile
            ? <Center my={20}>
                <Stack>
                    <AddProductDiscusssion />
                    <Select
                        defaultValue='last_updated'
                        data={[
                            { label: 'Last Updated', value: 'last_updated' },
                            { label: 'Most Commented', value: 'most_commented' },
                        ]}
                    />
                </Stack>
            </Center>
            : null
    }

    const regularView = () => {
        return isMobile
            ? null
            : <Group justify="flex-end">
                <Select
                    defaultValue='last_updated'
                    data={[
                        { label: 'Last Updated', value: 'last_updated' },
                        { label: 'Most Commented', value: 'most_commented' },
                    ]}
                />
                <AddProductDiscusssion />
            </Group>
    }
    return (
        <>
            {mobileView()}
            {regularView()}
            <ScrollArea.Autosize mah='90vh' >
                <ProductDiscussions isPortable={isPortable} />
            </ScrollArea.Autosize>
        </>
    )
}

const DesktopView = ({ productSummaryReviewsComponent, scrollAreaProductDiscussionComponent }: ViewProps) => {
    return (
        <Grid>
            <Grid.Col span={2}>
                {productSummaryReviewsComponent}
            </Grid.Col>
            <Grid.Col span={10}>
                {scrollAreaProductDiscussionComponent}
            </Grid.Col>
        </Grid>
    )
}

const PortableView = ({ productSummaryReviewsComponent, scrollAreaProductDiscussionComponent }: ViewProps) => {
    return (
        <>
            {productSummaryReviewsComponent}
            {scrollAreaProductDiscussionComponent}
        </>
    )
}

const ProductDiscussion = () => {
    const isPortable = useMediaQuery(`(max-width: ${em(1800)})`);

    const productSummaryReviewsComponent = <ProductSummaryReviews isPortable={isPortable} />
    const scrollAreaProductDiscussionComponent = <ScrollAreaProductDiscussion isPortable={true} />


    const mainComponent = isPortable
        ? <PortableView
            productSummaryReviewsComponent={productSummaryReviewsComponent}
            scrollAreaProductDiscussionComponent={scrollAreaProductDiscussionComponent}
        />
        : <DesktopView
            productSummaryReviewsComponent={productSummaryReviewsComponent}
            scrollAreaProductDiscussionComponent={scrollAreaProductDiscussionComponent}
        />

    return (
        <div>
            <SearchBar />
            <div style={{ margin: 10 }}>
                <Space h="md" />
                {mainComponent}
            </div>
        </div>
    )
}

export default ProductDiscussion