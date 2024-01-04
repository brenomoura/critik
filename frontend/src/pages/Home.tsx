import Discussions from "../components/home/Discussions"
import FeaturedProductList from "../components/home/FeaturedProductList"
import SearchBar from "../components/shared/SearchBar"
import { Container, Grid, em, Tabs, Text, Space } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'


const DesktopView = () => {
    return (
        <Grid>
            <Grid.Col span={6}><Discussions isMobile={false} /></Grid.Col>
            <Grid.Col span={6}><FeaturedProductList isMobile={false} /></Grid.Col>
        </Grid>
    )
}

const MobileView = () => {
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
                <Discussions isMobile={true} />
            </Tabs.Panel>
            <Tabs.Panel value="featured">
                <Space h="lg" />
                <FeaturedProductList isMobile={true} />
            </Tabs.Panel>
        </Tabs>
    )
}

const Home = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(1150)})`);
    const mainComponent = isMobile ? <MobileView /> : <DesktopView />

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