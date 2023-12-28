import {
    Card,
    Image,
    Text,
    ActionIcon,
    Badge,
    Group,
    Center,
    Avatar,
    useMantineTheme,
    rem,
    Stack,
    Container,
    SimpleGrid,
    Grid
} from '@mantine/core';
import { Chat } from '@phosphor-icons/react'
import classes from './Discussions.module.css';

interface IProductDiscussion {
    id: number,
    topic_title: string,
    product_avatar: string,
    topic_content_shortened: string,
    product_name: string,
    topic_creator_username: string
    topic_posts_count: number,
    last_post_datetime: string
}

const discussions: IProductDiscussion[] = [
    {
        "id": 21358,
        "topic_title": "Ut eum at eaque earum doloremque aut voluptatem laboriosam.",
        "product_avatar": "https://picsum.photos/200/300",
        "topic_content_shortened": "Ut ex velit nam dignissimos odio.",
        "product_name": "Tasty Granite Chicken",
        "topic_creator_username": "Jermain92",
        "topic_posts_count": 7825,
        "last_post_datetime": "2024-05-17T18:28:48.917Z"
    },
    {
        "id": 16054,
        "topic_title": "Sapiente voluptatem enim exercitationem nulla.",
        "product_avatar": "https://picsum.photos/200/300",
        "topic_content_shortened": "At rerum voluptatem minus. Vel perspiciatis quo laboriosam illum. Deleniti nulla sint quia est distinctio fuga alias sint aut. Quae veniam repellendus corrupti suscipit non ut maiores. Aut incidunt dolores debitis eum molestiae at ipsam placeat.\n \rUt soluta iure est minus sed sint in. Fugit ut et. Aliquid vel enim molestias accusantium repellendus quam autem ut. Atque sed accusamus ex earum saepe dignissimos neque.\n \rEst distinctio excepturi consequatur architecto ut sunt officiis qui. Vel et et vero ad doloribus velit. Non reprehenderit delectus alias maxime dicta aut et. Numquam praesentium consectetur dolore est quaerat suscipit. Beatae enim est aspernatur corrupti voluptas.",
        "product_name": "Awesome Plastic Fish",
        "topic_creator_username": "Hailey20",
        "topic_posts_count": 20857,
        "last_post_datetime": "2082-02-07T02:13:27.345Z"
    },
    {
        "id": 75655,
        "topic_title": "Consequuntur quia quod minima fugiat.",
        "product_avatar": "https://picsum.photos/200/300",
        "topic_content_shortened": "Unde nihil qui blanditiis debitis necessitatibus.",
        "product_name": "Unbranded Wooden Pizza",
        "topic_creator_username": "Alexa95",
        "topic_posts_count": 49122,
        "last_post_datetime": "2091-06-15T19:07:12.163Z"
    },
    {
        "id": 94236,
        "topic_title": "Est est ad.",
        "product_avatar": "https://picsum.photos/200/300",
        "topic_content_shortened": "vitae",
        "product_name": "Intelligent Concrete Chips",
        "topic_creator_username": "Duncan_Labadie",
        "topic_posts_count": 37314,
        "last_post_datetime": "2008-10-03T02:32:41.562Z"
    },
    {
        "id": 6917,
        "topic_title": "Aliquid rerum non ullam possimus velit placeat id.",
        "product_avatar": "https://picsum.photos/200/300",
        "topic_content_shortened": "In sit velit sint. Repudiandae cupiditate deserunt distinctio ipsum molestiae inventore sed. Eaque et harum sit. Est blanditiis incidunt dolorem eum error sequi.",
        "product_name": "Handmade Soft Shirt",
        "topic_creator_username": "Shad_Durgan",
        "topic_posts_count": 8017,
        "last_post_datetime": "2065-01-25T01:58:11.859Z"
    }
]

const ProductDiscussionItem = (discussionItem: any) => {
    const theme = useMantineTheme();
    const productDiscussion = discussionItem.productDiscussion

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Grid>
                <Grid.Col span={2}>
                    <Avatar
                        src={productDiscussion.product_avatar}
                        size={100}
                        radius="xl"
                        mr="xs"
                    />
                </Grid.Col>
                <Grid.Col span={10}>
                    <div>
                        <Text fw={500}>
                            {productDiscussion.topic_title}
                        </Text>
                        <Text fz="sm" c="dimmed" lineClamp={4}>
                            {`${productDiscussion.topic_content_shortened}`.substring(0, 100) + '...'}
                        </Text>
                        <Group justify="space-between" className={classes.footer}>
                            <Center>
                                <Avatar
                                    src={productDiscussion.product_avatar}
                                    size={24}
                                    radius="xl"
                                    mr="xs"
                                />
                                <Text fz="sm">
                                    {productDiscussion.topic_creator_username}
                                </Text>
                            </Center>
                            <Group gap={8} mr={0}>
                                <Badge color="gray" size={'xl'} variant="transparent" radius={'md'} rightSection={<Chat size={28} />}>
                                    {productDiscussion.topic_posts_count}
                                </Badge>
                            </Group>
                        </Group>
                    </div>
                </Grid.Col>
            </Grid>
        </Card>
    );
}

const Discussions = () => {

    return (
        <Container fluid>
            <Stack gap="sm">
                {discussions.map((discussionItem) => (
                    <ProductDiscussionItem productDiscussion={discussionItem} />
                ))}
            </Stack>
        </Container>
    );
}

export default Discussions