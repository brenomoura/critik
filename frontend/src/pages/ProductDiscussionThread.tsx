import {
    Button,
    Text,
    Title,
    Paper,
    Space,
    Stack,
    Group,
    Avatar,
    Container,
    Tooltip
} from "@mantine/core"
import SearchBar from "../components/shared/SearchBar"
import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react"
import moment from "moment";
import generateProductDiscussions from "../mock_data/generate_product_discussions";


interface IDiscussionMessage {
    id: number
    userAvatarUrl: string,
    username: string,
    createdAt: string,
    content: string,
    likeCount: number,
    deslikeCount: number,
}


interface DiscussionMessageProps {
    productDiscussion: IDiscussionMessage
}


const DiscussionMessage = ({ productDiscussion: discussionMessage }: DiscussionMessageProps) => {
    return (
        <Paper
            withBorder
            mb={10}
            radius='sm'
            style={{
                padding: "var(--mantine-spacing-lg) var(--mantine-spacing-xl)",
                backgroundColor: "var(--mantine-color-dark-6)"
            }}
        >
            <Stack justify="flex-end">
                <Group>
                    <Avatar
                        src={discussionMessage.userAvatarUrl}
                        alt={discussionMessage.username}
                        radius="xl"
                        size="lg"
                    />
                    <div>
                        <Text size="sm">{discussionMessage.username}</Text>
                        <Tooltip label={`${moment(discussionMessage.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`} position="right">
                            <Text size="xs" c="dimmed">
                                {`${moment(discussionMessage.createdAt).fromNow()}`}
                            </Text>
                        </Tooltip>
                    </div>
                </Group>
                <div style={{ marginLeft: 70 }}>
                    <Text pt="sm" size="sm" style={{ whiteSpace: "pre-line" }}>
                        {discussionMessage.content}
                    </Text>
                </div>
                <div style={{ marginLeft: 60 }}>
                    <Button.Group>
                        <Button variant="transparent" color="gray" leftSection={<ThumbsUp />}>{discussionMessage.likeCount}</Button>
                        <Button variant="transparent" color="gray" leftSection={<ThumbsDown />}>{discussionMessage.deslikeCount}</Button>
                    </Button.Group>
                </div>
            </Stack>
        </Paper>
    )
}

const ProductDiscussionThread = () => {
    const productDiscussionThread = generateProductDiscussions()

    return (
        <div>
            <SearchBar />
            <Space h="md" />
            <Container>
                <Title
                    order={2}
                    size="h4"
                    style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                    ta="left"
                    mt={20}
                    mb={10}
                >
                    {productDiscussionThread.discussion_name}
                </Title>

                {productDiscussionThread.messages.map(discussionMessage => (
                    <DiscussionMessage productDiscussion={discussionMessage} key={discussionMessage.id} />
                ))}
            </Container>

        </div>
    )
}

export default ProductDiscussionThread