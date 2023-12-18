import Discussions from "../components/home/Discussions"
import FeaturedProductList from "../components/home/FeaturedProductList"
import SearchBar from "../components/shared/SearchBar"

const Home = () => {

    return (
        <div>
            <SearchBar />
            Home
            <Discussions />
            <FeaturedProductList />
        </div>
    )
}

export default Home