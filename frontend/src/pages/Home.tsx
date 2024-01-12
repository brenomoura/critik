import FeaturedDiscussions from "../components/home/FeaturedDiscussions"
import FeaturedProductList from "../components/home/FeaturedProductList"
import SearchBar from "../components/shared/SearchBar"
import { Container, Grid, em, Tabs, Text, Space } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'


const DesktopView = () => {
    return (
        <Grid>
            <Grid.Col span={6}><FeaturedDiscussions /></Grid.Col>
            <Grid.Col span={6}><FeaturedProductList /></Grid.Col>
        </Grid>
    )
}

const PortableView = () => {
    return (
        <Tabs defaultValue="discussions">
            <Tabs.List grow>
                <Tabs.Tab value="discussions">
                    <Text fw={700} size="xl">Discussions</Text>
                </Tabs.Tab>
                <Tabs.Tab value="featured">
                    <Text fw={700} size="xl">Featured</Text>
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="discussions">
                <Space h="lg" />
                <FeaturedDiscussions showTitle={false} />
            </Tabs.Panel>
            <Tabs.Panel value="featured">
                <Space h="lg" />
                <FeaturedProductList showTitle={false} />
            </Tabs.Panel>
        </Tabs>
    )
}

const Home = () => {
    const isPortable = useMediaQuery(`(max-width: ${em(1150)})`);
    const mainComponent = isPortable ? <PortableView /> : <DesktopView />

    return (
        <div>
            <SearchBar />
            <Container fluid mt={20}>
                {mainComponent}
            </Container>
        </div>
    )
}

export default Home