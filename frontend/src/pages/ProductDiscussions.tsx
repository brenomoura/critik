import { Space, Grid, ScrollArea, em, Group, Select } from "@mantine/core"
import ProductSummaryReviews from "../components/product/ProductSummaryDiscussions"
import SearchBar from "../components/shared/SearchBar"
import AddProductDiscusssion from "../components/form/ProductTopic"
import ProductDiscussions from "../components/product/ProductDiscussions"
import { useMediaQuery } from "@mantine/hooks"

interface ScrollAreaProductDiscussionProps {
    isMobile: boolean
}


const ScrollAreaProductDiscussion = ({ isMobile }: ScrollAreaProductDiscussionProps) => {
    return (
        <ScrollArea.Autosize mah='90vh' >
            <Group justify="flex-end">
                <Select
                    defaultValue='last_updated'
                    data={[
                        { label: 'Last Updated', value: 'last_updated' },
                        { label: 'Most Commented', value: 'most_commented' },
                    ]}
                />
                <AddProductDiscusssion />
            </Group>
            <ProductDiscussions isMobile={isMobile} />
        </ScrollArea.Autosize>
    )
}

const DesktopView = () => {
    return (
        <Grid>
            <Grid.Col span={2}>
                <ProductSummaryReviews isPortable={false} />
            </Grid.Col>
            <Grid.Col span={10}>
                <ScrollAreaProductDiscussion isMobile={false} />
            </Grid.Col>
        </Grid>
    )
}

const PortableView = () => {
    return (
        <>
            <ProductSummaryReviews isPortable={true} />
            <ScrollAreaProductDiscussion isMobile={true} />
        </>
    )
}

const ProductDiscussion = () => {
    const isPortable = useMediaQuery(`(max-width: ${em(1800)})`);
    const mainComponent = isPortable ? <PortableView /> : <DesktopView />

    return (
        <div>
            <SearchBar />
            <Space h="md" />
            {mainComponent}
        </div>
    )
}

export default ProductDiscussion