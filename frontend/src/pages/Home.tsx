import Discussions from "../components/home/Discussions"
import FeaturedProductList from "../components/home/FeaturedProductList"
import SearchBar from "../components/shared/SearchBar"
import { Grid } from '@mantine/core';

const Home = () => {
    // Todo : make it responsive for smartphones
    return (
        <div>
            <SearchBar />
            <Grid>
                <Grid.Col span={6}><Discussions /></Grid.Col>
                <Grid.Col span={6}><FeaturedProductList /></Grid.Col>
            </Grid>
        </div>
    )
}

export default Home