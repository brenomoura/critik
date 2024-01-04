import {
    Card,
    Text,
    Badge,
    Group,
    Center,
    Avatar,
    useMantineTheme,
    Stack,
    Container,
    Grid,
    HoverCard,
} from '@mantine/core';
import { Chat } from '@phosphor-icons/react'
import classes from './Discussions.module.css';
import moment from 'moment'
import Title from '../shared/Title';


interface IProductDiscussion {
    id: number,
    topic_title: string,
    product_avatar: string,
    topic_content_shortened: string,
    product_name: string,
    topic_creator_username: string
    topic_creator_user_avatar: string,
    topic_creation_datetime: string,
    topic_posts_count: number,
    last_post_datetime: string
    last_post_username: string
    last_post_user_avatar: string
}

interface ProductDiscussionItemProps {
    productDiscussion: IProductDiscussion;
}

interface DiscussionProps {
    isMobile: boolean;
}


const discussions: IProductDiscussion[] = [
    {
        "id": 21358,
        "topic_title": "Ut eum at eaque earum doloremque aut voluptatem laboriosam.",
        "product_avatar": "https://picsum.photos/200/300",
        "topic_content_shortened": "Ut ex velit nam dignissimos odio.",
        "topic_creation_datetime": "2023-12-17T18:28:48.917Z",
        "product_name": "Tasty Granite Chicken",
        "topic_creator_username": "Jermain92",
        "topic_creator_user_avatar": "https://picsum.photos/200/300",
        "topic_posts_count": 7825,
        "last_post_datetime": "2023-12-17T18:28:48.917Z",
        "last_post_username": "balsed123",
        "last_post_user_avatar": "https://picsum.photos/200/300",
    },
    {
        "id": 16054,
        "topic_title": "Sapiente voluptatem enim exercitationem nulla.",
        "product_avatar": "https://picsum.photos/200/300",
        "topic_content_shortened": "At rerum voluptatem minus. Vel perspiciatis quo laboriosam illum. Deleniti nulla sint quia est distinctio fuga alias sint aut. Quae veniam repellendus corrupti suscipit non ut maiores. Aut incidunt dolores debitis eum molestiae at ipsam placeat.\n \rUt soluta iure est minus sed sint in. Fugit ut et. Aliquid vel enim molestias accusantium repellendus quam autem ut. Atque sed accusamus ex earum saepe dignissimos neque.\n \rEst distinctio excepturi consequatur architecto ut sunt officiis qui. Vel et et vero ad doloribus velit. Non reprehenderit delectus alias maxime dicta aut et. Numquam praesentium consectetur dolore est quaerat suscipit. Beatae enim est aspernatur corrupti voluptas.",
        "topic_creation_datetime": "2023-12-17T18:28:48.917Z",
        "product_name": "Awesome Plastic Fish",
        "topic_creator_username": "Hailey20",
        "topic_creator_user_avatar": "https://picsum.photos/200/300",
        "topic_posts_count": 20857,
        "last_post_datetime": "2023-12-07T02:13:27.345Z",
        "last_post_username": "kitty_master_123",
        "last_post_user_avatar": "https://picsum.photos/200/300",
    },
    {
        "id": 75655,
        "topic_title": "Consequuntur quia quod minima fugiat.",
        "product_avatar": "https://picsum.photos/200/300",
        "topic_content_shortened": "Unde nihil qui blanditiis debitis necessitatibus.",
        "topic_creation_datetime": "2023-12-17T18:28:48.917Z",
        "product_name": "Unbranded Wooden Pizza",
        "topic_creator_username": "Alexa95",
        "topic_creator_user_avatar": "https://picsum.photos/200/300",
        "topic_posts_count": 49122,
        "last_post_datetime": "2023-12-15T19:07:12.163Z",
        "last_post_username": "lasdqq123",
        "last_post_user_avatar": "https://picsum.photos/200/300",
    },
    {
        "id": 94236,
        "topic_title": "Est est ad.",
        "product_avatar": "https://picsum.photos/200/300",
        "topic_content_shortened": "vitae",
        "topic_creation_datetime": "2023-12-17T18:28:48.917Z",
        "product_name": "Intelligent Concrete Chips",
        "topic_creator_username": "Duncan_Labadie",
        "topic_creator_user_avatar": "https://picsum.photos/200/300",
        "topic_posts_count": 37314,
        "last_post_datetime": "2023-12-03T02:32:41.562Z",
        "last_post_username": "lupanndda0",
        "last_post_user_avatar": "https://picsum.photos/200/300",
    },
    {
        "id": 6917,
        "topic_title": "Aliquid rerum non ullam possimus velit placeat id.",
        "product_avatar": "https://picsum.photos/200/300",
        "topic_content_shortened": "In sit velit sint. Repudiandae cupiditate deserunt distinctio ipsum molestiae inventore sed. Eaque et harum sit. Est blanditiis incidunt dolorem eum error sequi.",
        "topic_creation_datetime": "2023-12-17T18:28:48.917Z",
        "product_name": "Handmade Soft Shirt",
        "topic_creator_username": "Shad_Durgan",
        "topic_creator_user_avatar": "https://picsum.photos/200/300",
        "topic_posts_count": 8017,
        "last_post_datetime": "2023-12-25T01:58:11.859Z",
        "last_post_username": "balsed123",
        "last_post_user_avatar": "https://picsum.photos/200/300",
    }
]

const ProductDiscussionItem: React.FC<ProductDiscussionItemProps> = ({ productDiscussion }) => {
    const theme = useMantineTheme();

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Grid>
                <Grid.Col span="auto">
                    <Center>
                        <HoverCard shadow="md" withArrow position='right'>
                            <HoverCard.Target>
                                <Avatar
                                    src={productDiscussion.product_avatar}
                                    size={120}
                                    radius="xl"
                                    mr="xs"
                                />
                            </HoverCard.Target>
                            <HoverCard.Dropdown>
                                <Group justify="space-between">
                                    <Avatar
                                        src={productDiscussion.product_avatar}
                                        size={70}
                                        radius="xl"
                                        mr="xs"
                                    />
                                    <Text fw={700}>
                                        {productDiscussion.product_name}
                                    </Text>
                                </Group>
                            </HoverCard.Dropdown>
                        </HoverCard>
                    </Center>
                </Grid.Col>
                <Grid.Col span={10}>
                    <Text fw={500}>
                        {productDiscussion.topic_title}
                    </Text>
                    <Text fz="sm" c="dimmed" lineClamp={4}>
                        {`${productDiscussion.topic_content_shortened}`.substring(0, 100) + '...'}
                    </Text>
                    <Stack
                        // h={70}
                        justify="flex-end"
                    >
                        <Group justify="space-between" className={classes.footer}>
                            <Stack
                                align='flex-start'
                                justify='flex-end'
                                style={{ whiteSpace: "pre-wrap", margin: 0 }}
                            >
                                <Center>
                                    <Text fz="xs">
                                        {"Created by "}
                                    </Text>
                                    <Avatar
                                        src={productDiscussion.product_avatar}
                                        size={20}
                                        radius="xl"
                                    />
                                    <Text fz="xs" fw={700}>
                                        {` ${productDiscussion.topic_creator_username}`}
                                    </Text>
                                </Center>
                            </Stack>
                            <Group gap={8} mr={0}>
                                <Text fz="xs">
                                    {"Last post by "}
                                </Text>
                                <Avatar
                                    src={productDiscussion.last_post_user_avatar}
                                    size={20}
                                    radius="xl"
                                />
                                <Text fz="xs" fw={700}>
                                    {` ${productDiscussion.last_post_username}`}
                                </Text>
                                <Text fz="xs">
                                    {` ${moment(productDiscussion.last_post_datetime).fromNow()}`}
                                </Text>

                                <Badge color="gray" size={'xl'} variant="transparent" radius={'md'} rightSection={<Chat size={28} />}>
                                    {productDiscussion.topic_posts_count}
                                </Badge>
                            </Group>
                        </Group>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Card>
    );
}

const Discussions: React.FC<DiscussionProps> = ({ isMobile }) => {
    return (
        <Container fluid>
            <Stack gap="sm">
                <Title label="Discussions" isMobile={isMobile} />
                {discussions.map((discussionItem) => (
                    <ProductDiscussionItem key={discussionItem.id} productDiscussion={discussionItem} />
                ))}
            </Stack>
        </Container>
    )
}

export default Discussions