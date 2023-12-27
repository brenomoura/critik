import Discussions from "../components/home/Discussions"
import FeaturedProductList from "../components/home/FeaturedProductList"
import SearchBar from "../components/shared/SearchBar"

const Home = () => {
    // Todo : make it responsive for smartphones
    return (
        <div>
            <SearchBar />
            <Discussions />
            <FeaturedProductList />
        </div>
    )
}

export default Home