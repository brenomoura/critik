import { Space, Grid, ScrollArea, em } from "@mantine/core"
import ProductSummaryReviews from "../components/product/ProductSummaryDiscussions"
import SearchBar from "../components/shared/SearchBar"
import AddProductDiscusssion from "../components/form/ProductTopic"
import ProductDiscussions from "../components/product/ProductDiscussions"
import { useMediaQuery } from "@mantine/hooks"

const DesktopView = () => {
    return (
        <Grid>
            <Grid.Col span={2}>
                <ProductSummaryReviews />
            </Grid.Col>
            <Grid.Col span={10}>
                <ScrollArea.Autosize mah='90vh' >
                    <AddProductDiscusssion />
                    <ProductDiscussions isMobile={false}/>
                </ScrollArea.Autosize>
            </Grid.Col>
        </Grid>
    )
}

const MobileView = () => {
    return (
        <>
            <ProductSummaryReviews />
            <ScrollArea.Autosize mah='90vh' >
                <AddProductDiscusssion />
                <ProductDiscussions isMobile={true}/>
            </ScrollArea.Autosize>
        </>
    )
}

const ProductDiscussion = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(1150)})`);
    const mainComponent = isMobile ? <MobileView /> : <DesktopView />

    return (
        <div>
            <SearchBar />
            <Space h="md" />
            {mainComponent}
        </div>
    )
}

export default ProductDiscussion