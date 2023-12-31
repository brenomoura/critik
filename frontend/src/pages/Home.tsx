import Discussions from "../components/home/Discussions"
import FeaturedProductList from "../components/home/FeaturedProductList"
import SearchBar from "../components/shared/SearchBar"
import { Container, Grid } from '@mantine/core';

const Home = () => {
    // Todo : make it responsive for smartphones
    return (
        <div>
            <SearchBar />
            <Container fluid mt={20}>
                <Grid>
                    <Grid.Col span={6}><Discussions /></Grid.Col>
                    <Grid.Col span={6}><FeaturedProductList /></Grid.Col>
                </Grid>
            </Container>
        </div>
    )
}

export default Home