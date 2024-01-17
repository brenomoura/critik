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
    Tooltip,
    rem
} from "@mantine/core"
import SearchBar from "../components/shared/SearchBar"
import { ListPlus, Siren, ThumbsDown, ThumbsUp } from "@phosphor-icons/react"
import moment from "moment";
import generateProductDiscussions from "../mock_data/generate_product_discussions";
import { useState } from "react";
import ProductDiscussionFormModal from "../components/form/modal/ProductDiscussionFormModal";
import ReportFormModal from "../components/form/modal/ReportFormModal";


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
    discussionMessage: IDiscussionMessage
    setReplyModalOpened: any
    setReportModalOpened: any
    isFirst: boolean
    postId: number
}


const DiscussionMessage = ({ postId, discussionMessage, setReplyModalOpened, setReportModalOpened, isFirst }: DiscussionMessageProps) => {
    const replyButtonComponent = isFirst
        ? null
        : <Button
            leftSection={<ListPlus style={{ width: rem(20), height: rem(20) }} />}
            onClick={() => setReplyModalOpened(true)}
            variant="default"
        >
            Reply
        </Button>
    return (
        <section id={`${postId}`}>
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
                        <Group justify="space-between">
                            <Button.Group>
                                <Button variant="transparent" color="gray" leftSection={<ThumbsUp />}>{discussionMessage.likeCount}</Button>
                                <Button variant="transparent" color="gray" leftSection={<ThumbsDown />}>{discussionMessage.deslikeCount}</Button>
                            </Button.Group>
                            <Button.Group>
                                <Button
                                    leftSection={<Siren style={{ width: rem(17), height: rem(17) }} />}
                                    onClick={() => setReportModalOpened(true)}
                                    variant="transparent"
                                >
                                    <Text size="xs" c="dimmed">
                                        Report Post
                                    </Text>
                                </Button>
                                <div>
                                    {replyButtonComponent}
                                </div>
                            </Button.Group>
                        </Group>
                    </div>
                </Stack>
            </Paper>
        </section>
    )
}

const ProductDiscussionThread = () => {
    const productDiscussionThread = generateProductDiscussions()
    const [modalReplyOpened, setReplyModalOpened] = useState<true | false>(false)
    const [modalReportOpened, setReportModalOpened] = useState<true | false>(false)

    return (
        <div>
            <SearchBar />
            <Space h="md" />
            <Container>
                <Group justify="space-between">
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
                    <Button
                        leftSection={<ListPlus style={{ width: rem(20), height: rem(20) }} />}
                        onClick={() => setReplyModalOpened(true)}
                    >
                        Post Reply
                    </Button>
                </Group>
                {productDiscussionThread.messages.map((discussionMessage, index) => (
                    <DiscussionMessage
                        discussionMessage={discussionMessage}
                        key={discussionMessage.id}
                        postId={discussionMessage.id}
                        setReplyModalOpened={setReplyModalOpened}
                        setReportModalOpened={setReportModalOpened}
                        isFirst={index === 0}
                    />
                ))}
            </Container>
            <ProductDiscussionFormModal
                opened={modalReplyOpened}
                setOpened={setReplyModalOpened}
                modalTitle='Post a reply'
                isReply={true}
            />
            <ReportFormModal
                opened={modalReportOpened}
                setOpened={setReportModalOpened}
            />
        </div>
    )
}

export default ProductDiscussionThread