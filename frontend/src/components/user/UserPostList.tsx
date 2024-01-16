import {
    Group,
    Paper,
    Text,
    Grid,
    Stack,
    Button,
    Tooltip
} from "@mantine/core";
import { ThumbsUp, ThumbsDown } from '@phosphor-icons/react'
import moment from "moment";



// The same interface from the API

interface UserPostsProps {
    createdAt: string,
    content: string,
    likeCount: number,
    deslikeCount: number,
    topicTitle: string,
}

interface UserPost {
    id: number,
    username: string,
    topicTitle: string;
    createdAt: string,
    updatedAt: string,
    content: string,
    likeCount: number,
    deslikeCount: number,
}


interface UserPostListProps {
    userPosts: UserPost[]
}


const UserPost = ({ createdAt, content, likeCount, deslikeCount, topicTitle }: UserPostsProps) => {

    return (
        <Paper withBorder style={{ padding: "var(--mantine-spacing-lg) var(--mantine-spacing-xl)" }} m={15}>
            <Stack
                justify="flex-end"
            >
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