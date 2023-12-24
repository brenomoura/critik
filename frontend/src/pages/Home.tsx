import Grid from "@mui/material/Grid"
import Discussions from "../components/home/Discussions"
import FeaturedProductList from "../components/home/FeaturedProductList"
import SearchBar from "../components/shared/SearchBar"

const Home = () => {
// Todo : make it responsive for smartphones
    return (
        <div>
            
            <SearchBar />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Discussions />
                </Grid>
                <Grid item xs={6}>
                    <FeaturedProductList />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home