import UserDetailsSummary from "../components/user/UserDetailsSummary"
import UserPostList from "../components/user/UserPostList"
import UserReviewList from "../components/user/UserReviewList"

const UserProfile = () => (
    <div>
        UserProfile
        <UserDetailsSummary />
        <UserReviewList />
        <UserPostList />
    </div>
)

export default UserProfile