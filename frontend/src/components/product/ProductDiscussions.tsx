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
    Tooltip,
} from '@mantine/core';
import { Chat } from '@phosphor-icons/react'
import classes from './ProductDiscussions.module.css';
import moment from 'moment'
import Title from '../shared/Title';
import generateDiscussions from '../../mock_data/generate_discussions';
import StyledLink from '../shared/StyledLink';


interface IProductDiscussion {
    id: number,
    product_id: number,
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
    isPortable?: boolean
}

interface DiscussionProps {
    showTitle?: boolean;
    isPortable?: boolean;
}


const discussions: IProductDiscussion[] = generateDiscussions()

const ProductDiscussionItem = ({ productDiscussion, isPortable }: ProductDiscussionItemProps) => {
    const userAvatarDesktop = isPortable
        ? null
        : (
            <Grid.Col span={2}>
                <Center>
                    <Tooltip withArrow label={productDiscussion.topic_creator_username} position='right'>
                        <Avatar
                            src={productDiscussion.topic_creator_user_avatar}
                            size={90}
                            radius="xl"
                            mr="xs"
                        />
                    </Tooltip>
                </Center>
            </Grid.Col>
        )
    const userAvatarPortable = isPortable
        ? (
            <>
                <Avatar
                    src={productDiscussion.product_avatar}
                    size={20}
                    radius="xl"
                />
            </>
        )
        : null

    return (
        <StyledLink to={`/product/${productDiscussion.product_id}/discussions/${productDiscussion.id}`}>
            <Card withBorder radius="md" className={classes.card}>
                <Grid>
                    {userAvatarDesktop}
                    <Grid.Col span={10}>
                        <Text fw={500}>
                            {productDiscussion.topic_title}
                        </Text>
                        <Text fz="sm" c="dimmed" lineClamp={4}>
                            {`${productDiscussion.topic_content_shortened}`.substring(0, 100) + '...'}
                        </Text>
                        <Stack
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
                                        {userAvatarPortable}
                                        <Text fz="xs" fw={700}>
                                            {` ${productDiscussion.topic_creator_username}`}
                                        </Text>
                                        <Tooltip label={`${moment(productDiscussion.last_post_datetime).format('MMMM Do YYYY, h:mm:ss a')}`} position="right">
                                            <Text fz="xs">
                                                {` ${moment(productDiscussion.last_post_datetime).fromNow()}`}
                                            </Text>
                                        </Tooltip>

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
                                    <Tooltip label={`${moment(productDiscussion.last_post_datetime).format('MMMM Do YYYY, h:mm:ss a')}`} position="right">
                                        <Text fz="xs">
                                            {` ${moment(productDiscussion.last_post_datetime).fromNow()}`}
                                        </Text>
                                    </Tooltip>
                                    <Badge color="gray" size={'xl'} variant="transparent" radius={'md'} rightSection={<Chat size={28} />}>
                                        {productDiscussion.topic_posts_count}
                                    </Badge>
                                </Group>
                            </Group>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Card >
        </StyledLink>
    );
}

const ProductDiscussions = ({ showTitle = true, isPortable = false }: DiscussionProps) => {
    const titleComponent = () => {
        if (showTitle) {
            return <Title label="Discussions" />
        }
        return null
    }
    return (
        <Container fluid>
            <Stack gap="sm">
                {titleComponent()}
                {discussions.map((discussionItem) => (
                    <ProductDiscussionItem
                        key={discussionItem.id}
                        productDiscussion={discussionItem}
                        isPortable={isPortable}
                    />
                ))}
            </Stack>
        </Container>
    )
}

export default ProductDiscussions