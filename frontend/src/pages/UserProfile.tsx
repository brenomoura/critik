import {
    Space,
    Grid,
    ScrollArea,
    em,
    Tabs
} from "@mantine/core"
import SearchBar from "../components/shared/SearchBar"
import UserDetailsSummary from "../components/user/UserDetailsSummary"
import UserReviewList from "../components/user/UserReviewList"
import generateMain from "../mock_data/generate_review"
import { useMediaQuery } from "@mantine/hooks"
import generateUsersPosts from "../mock_data/generate_user_posts"
import UserPostList from "../components/user/UserPostList"


const ScrollAreaProductDiscussion = () => {
    const userReviews = generateMain()
    const userPosts = generateUsersPosts()

    return (
        <ScrollArea.Autosize mah='90vh' >
            <Tabs defaultValue="first">
                <Tabs.List grow>
                    <Tabs.Tab value="reviews">
                        Reviews
                    </Tabs.Tab>
                    <Tabs.Tab value="posts">
                        Posts
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="reviews">
                    <UserReviewList userReviews={userReviews} />
                </Tabs.Panel>
                <Tabs.Panel value="posts">
                    <UserPostList userPosts={userPosts} />
                </Tabs.Panel>
            </Tabs>
        </ScrollArea.Autosize>
    )
}

const DesktopView = () => {
    return (
        <Grid>
            <Grid.Col span={2}>
                <UserDetailsSummary isPortable={false} />
            </Grid.Col>
            <Grid.Col span={10}>
                <ScrollAreaProductDiscussion />
            </Grid.Col>
        </Grid>
    )
}

const PortableView = () => {
    return (
        <>
            <UserDetailsSummary isPortable={true} />
            <ScrollAreaProductDiscussion />
        </>
    )
}

const UserProfile = () => {
    const isPortable = useMediaQuery(`(max-width: ${em(1300)})`);
    const mainComponent = isPortable ? <PortableView /> : <DesktopView />

    return (
        <div>
            <SearchBar />
            <div style={{ margin: 10 }}>
                <Space h="md" />
                {mainComponent}
            </div>
        </div>
    )
}

export default UserProfile