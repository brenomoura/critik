import {
    Group,
    Paper,
    Text,
    Stack,
    Button,
    Tooltip
} from "@mantine/core";
import { ThumbsUp, ThumbsDown } from '@phosphor-icons/react'
import moment from "moment";
import StyledLink from "../shared/StyledLink";



// The same interface from the API

interface UserPostsProps {
    id: number
    createdAt: string,
    content: string,
    likeCount: number,
    deslikeCount: number,
    topicTitle: string,
    productId: number
    discussionId: number
}

interface IUserPost {
    id: number,
    username: string,
    topicTitle: string;
    createdAt: string,
    updatedAt: string,
    content: string,
    likeCount: number,
    deslikeCount: number,
    productId: number
    discussionId: number
}


interface UserPostListProps {
    userPosts: IUserPost[]
}


const UserPost = ({ id, createdAt, content, likeCount, deslikeCount, topicTitle, productId, discussionId }: UserPostsProps) => {

    return (
        <Paper withBorder style={{ padding: "var(--mantine-spacing-lg) var(--mantine-spacing-xl)" }} m={15}>
            <Stack
                justify="flex-end"
            >
                <StyledLink to={`/product/${productId}/discussions/${discussionId}#${id}`}>
                    <Group>
                        <div>
                            <Text size="sm" fw={700}>
                                {topicTitle}
                            </Text>

                            <Tooltip label={`${moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}`} position="right">
                                <Text size="xs" c="dimmed">
                                    {`Posted ${moment(createdAt).fromNow()}`}
                                </Text>
                            </Tooltip>
                        </div>
                    </Group>
                    <Text pt="sm" size="sm" style={{ whiteSpace: "pre-line" }}>
                        {content}
                    </Text>
                </StyledLink>
                <div>
                    <Button.Group>
                        <Button variant="transparent" color="gray" leftSection={<ThumbsUp />}>{likeCount}</Button>
                        <Button variant="transparent" color="gray" leftSection={<ThumbsDown />}>{deslikeCount}</Button>
                    </Button.Group>
                </div>
            </Stack>
        </Paper>
    );
}

const UserPostList = ({ userPosts }: UserPostListProps) => {
    return (
        <>
            {userPosts.map(userPost => (
                <UserPost
                    key={userPost.id}
                    id={userPost.id}
                    discussionId={userPost.discussionId}
                    productId={userPost.productId}
                    topicTitle={userPost.topicTitle}
                    createdAt={userPost.createdAt}
                    content={userPost.content}
                    likeCount={userPost.likeCount}
                    deslikeCount={userPost.deslikeCount}
                />
            ))}
        </>
    )
}

export default UserPostList