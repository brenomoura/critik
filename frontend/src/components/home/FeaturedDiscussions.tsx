import {
    Card,
    Text,
    Badge,
    Group,
    Center,
    Avatar,
    Stack,
    Container,
    Grid,
    HoverCard,
} from '@mantine/core';
import { Chat } from '@phosphor-icons/react'
import classes from './Discussions.module.css';
import moment from 'moment'
import Title from '../shared/Title';
import generateDiscussions from '../../mock_data/generate_discussions';


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
    showTitle?: boolean;
}


const discussions: IProductDiscussion[] = generateDiscussions()

const ProductDiscussionItem = ({ productDiscussion }: ProductDiscussionItemProps) => {

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

const FeaturedDiscussions = ({ showTitle = true }: DiscussionProps) => {
    const titleComponent = () => {
        if (showTitle) {
            return <Title label="Discussions"/>
        }
        return null
    }
    return (
        <Container fluid>
            <Stack gap="sm">
                {titleComponent()}
                {discussions.map((discussionItem) => (
                    <ProductDiscussionItem key={discussionItem.id} productDiscussion={discussionItem} />
                ))}
            </Stack>
        </Container>
    )
}

export default FeaturedDiscussions