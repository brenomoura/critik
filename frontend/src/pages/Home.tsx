import Discussions from "../components/home/Discussions"
import FeaturedProductList from "../components/home/FeaturedProductList"
import SearchBar from "../components/shared/SearchBar"
import { Container, Grid, em, Tabs, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import classes from './Home.module.css';


const DesktopView = () => {
    return (
        <Grid>
            <Grid.Col span={6}><Discussions /></Grid.Col>
            <Grid.Col span={6}><FeaturedProductList /></Grid.Col>
        </Grid>
    )
}

const MobileView = () => {
    return (
        <Tabs defaultValue="discussions">
            <Tabs.List grow>
                <Tabs.Tab value="discussions">
                    <Text>Discussions</Text>
                </Tabs.Tab>
                <Tabs.Tab value="featured">
                    <Text>Featured</Text>
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="discussions">
                <Discussions />
            </Tabs.Panel>
            <Tabs.Panel value="featured">
                <FeaturedProductList />
            </Tabs.Panel>
        </Tabs>
    )
}

const Home = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(1030)})`);
    const mainComponent = isMobile ? MobileView() : DesktopView()



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