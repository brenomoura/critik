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
import generateReviews from "../mock_data/generate_review"
import { useMediaQuery } from "@mantine/hooks"
import generateUsersPosts from "../mock_data/generate_user_posts"
import UserPostList from "../components/user/UserPostList"
import UserReviewCommentList from "../components/user/UserReviewCommentList"
import generateUserReviewComments from "../mock_data/generate_review_comments"


interface ViewProps {
    scrollAreaProductDiscussionComponent: any
    userDetailsSummaryComponent: any
    isAdmin: boolean
}


const ScrollAreaProductDiscussion = () => {
    const userReviews = generateReviews()
    const userPosts = generateUsersPosts()
    const userReviewComments = generateUserReviewComments()

    return (
        <ScrollArea.Autosize mah='90vh' >
            <Tabs defaultValue="reviews">
                <Tabs.List grow>
                    <Tabs.Tab value="reviews">
                        Reviews
                    </Tabs.Tab>
                    <Tabs.Tab value="reviews_comments">
                        Reviews Comments
                    </Tabs.Tab>
                    <Tabs.Tab value="posts">
                        Posts
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="reviews">
                    <UserReviewList userReviews={userReviews} />
                </Tabs.Panel>
                <Tabs.Panel value="reviews_comments">
                    <UserReviewCommentList userReviewComments={userReviewComments} />
                </Tabs.Panel>
                <Tabs.Panel value="posts">
                    <UserPostList userPosts={userPosts} />
                </Tabs.Panel>
            </Tabs>
        </ScrollArea.Autosize>
    )
}

const DesktopView = ({ scrollAreaProductDiscussionComponent, userDetailsSummaryComponent, isAdmin }: ViewProps) => {
    return (
        <Grid>
            <Grid.Col span={2}>
                {userDetailsSummaryComponent}
            </Grid.Col>
            <Grid.Col span={10}>
                {scrollAreaProductDiscussionComponent}
            </Grid.Col>
        </Grid>
    )
}

const PortableView = ({ scrollAreaProductDiscussionComponent, userDetailsSummaryComponent, isAdmin }: ViewProps) => {
    return (
        <>
            {userDetailsSummaryComponent}
            {scrollAreaProductDiscussionComponent}
        </>
    )
}

const UserProfile = () => {
    const isPortable = useMediaQuery(`(max-width: ${em(1300)})`);

    const isAdmin = false

    const scrollAreaProductDiscussionComponent = <ScrollAreaProductDiscussion />
    const userDetailsSummary = <UserDetailsSummary isPortable={isPortable} />

    const mainComponent = isPortable
        ? <PortableView scrollAreaProductDiscussionComponent={scrollAreaProductDiscussionComponent} userDetailsSummaryComponent={userDetailsSummary} isAdmin={isAdmin} />
        : <DesktopView scrollAreaProductDiscussionComponent={scrollAreaProductDiscussionComponent} userDetailsSummaryComponent={userDetailsSummary} isAdmin={isAdmin} />

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