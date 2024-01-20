import {
    Avatar,
    Center,
    Group,
    Paper,
    Text,
    Badge,
    rem,
    Title,
    Grid,
    SimpleGrid,
    Image,
    Divider,
    Stack,
    Button,
    Tooltip
} from "@mantine/core";
import { Star, ThumbsUp, ThumbsDown, Siren } from '@phosphor-icons/react'
import moment from "moment";
import MediaModal from "../shared/modal/MediaModal";
import { useState } from "react";
import ReportFormModal from "../form/modal/ReportFormModal";
import StyledLink from "../shared/StyledLink";



// The same interface from the API
interface IUserReviewAnswer {
    id: number
    username: string,
    user_avatar_url: string,
    comment: string,
    created_at: string
}

interface UserReviewProps {
    username: string,
    userId: number,
    userAvatarUrl: string,
    createdAt: string,
    review: string,
    score: number,
    answers: IUserReviewAnswer[]
    mediaUrls: string[],
    likeCount: number,
    deslikeCount: number
}

interface UserReview {
    id: number,
    user_id: number,
    username: string,
    user_avatar_url: string,
    review: string,
    user_rating: number,
    created_at: string,
    updated_at: string,
    photos_urls: string[],
    videos_urls: string[],
    answers: UserReviewAnswer[],
    likeCount: number,
    deslikeCount: number,
}

interface UserReviewAnswer {
    id: number,
    username: string,
    user_avatar_url: string,
    comment: string,
    created_at: string
}


interface ProductReviewListProps {
    userReviews: UserReview[]
}

const UserReviewAnswer = ({ id, username, user_avatar_url, comment, created_at }: IUserReviewAnswer) => {
    const [reportModalOpened, setReportModalOpened] = useState<true | false>(false);

    return (
        <section id={`${id}`}>
            <Divider
                my="xs"
                style={{
                    marginLeft: 30
                }}
            />
            <div style={{ marginLeft: 30 }}>
                <Group>
                    <Avatar
                        src={user_avatar_url}
                        alt={username}
                        radius="xl"
                    />
                    <div>
                        <Text size="sm">{username}</Text>
                        <Tooltip label={`${moment(created_at).format('MMMM Do YYYY, h:mm:ss a')}`} position="right">
                            <Text size="xs" c="dimmed">
                                {`${moment(created_at).fromNow()}`}
                            </Text>
                        </Tooltip>
                    </div>
                </Group>
                <Group justify="space-between">
                    <Text pl={54} pt="sm" size="sm" style={{ whiteSpace: "pre-line" }}>
                        {comment}
                    </Text>
                    <Button variant="transparent" color="gray" leftSection={<Siren />} onClick={() => setReportModalOpened(true)}>
                        <Text size="xs" c="dimmed">
                            Report
                        </Text>
                    </Button>
                </Group>
            </div>
            <ReportFormModal opened={reportModalOpened} setOpened={setReportModalOpened} />
        </section>
    )
}

const UserReview = ({ username, userId, userAvatarUrl, createdAt, review, score, answers, mediaUrls, likeCount, deslikeCount }: UserReviewProps) => {
    const [mediaModalOpened, setMediaModalOpened] = useState<true | false>(false);
    const [reportModalOpened, setReportModalOpened] = useState<true | false>(false);
    const [initialSlideIndex, setInitialSlideIndex] = useState<number | undefined>()

    const mediaComponent = (url: string) => {
        if (url.includes(".mp4")) {
            return (
                <Image src="../../../public/play_button_gray_bg.jpg" maw={80} style={{ aspectRatio: "4/3" }} />
            )
        }
        return (
            <Image src={url} maw={80} style={{ aspectRatio: "4/3" }} />
        )
    }
    const mediaComponentOnClick = (initialSlide: number) => {
        setInitialSlideIndex(initialSlide)
        setMediaModalOpened(true)
    }

    return (
        <Paper
            withBorder
            style={{
                padding: "var(--mantine-spacing-lg) var(--mantine-spacing-xl)",
                backgroundColor: "var(--mantine-color-dark-6)"
            }}
            m={15}
        >
            <Stack
                justify="flex-end"
            >
                <Grid>
                    <Grid.Col span="auto">
                        <Group>
                            <StyledLink to={`/profile/${userId}`}>
                                <Avatar
                                    src={userAvatarUrl}
                                    alt={username}
                                    radius="xl"
                                />
                            </StyledLink>
                            <div>
                                <Text size="sm">{username}</Text>
                                <Tooltip label={`${moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}`} position="right">
                                    <Text size="xs" c="dimmed">
                                        {`${moment(createdAt).fromNow()}`}
                                    </Text>
                                </Tooltip>
                            </div>
                        </Group>
                        <Text pl={54} pt="sm" size="sm" style={{ whiteSpace: "pre-line" }}>
                            {review}
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Center>
                            <div>
                                <SimpleGrid cols={3} spacing="xs" verticalSpacing="xs">
                                    {mediaUrls.map((url, index) => (
                                        <div style={{ cursor: 'pointer' }} onClick={() => (mediaComponentOnClick(index))} key={index}>
                                            {mediaComponent(url)}
                                        </div>
                                    ))}
                                </SimpleGrid>
                            </div>
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Center>
                            <Badge leftSection={<Star style={{ width: rem(20), height: rem(20) }} />} py={40} color="transparent">
                                <Title size={40}>{score}</Title>
                            </Badge>
                        </Center>
                    </Grid.Col>
                </Grid>
                <Group ml={50} justify="space-between">
                    <Button.Group>
                        <Button variant="transparent" color="gray" leftSection={<ThumbsUp />}>{likeCount}</Button>
                        <Button variant="transparent" color="gray" leftSection={<ThumbsDown />}>{deslikeCount}</Button>
                    </Button.Group>
                    <Button variant="transparent" color="gray" leftSection={<Siren />} onClick={() => setReportModalOpened(true)}>
                        <Text size="xs" c="dimmed">
                            Report
                        </Text>
                    </Button>
                </Group>
            </Stack>
            {answers.map((answer, index) => (
                <UserReviewAnswer
                    key={index}
                    id={answer.id}
                    username={answer.username}
                    user_avatar_url={answer.user_avatar_url}
                    comment={answer.comment}
                    created_at={answer.created_at}
                />
            ))}
            <MediaModal opened={mediaModalOpened} setOpened={setMediaModalOpened} mediaUrls={mediaUrls} initialSlideIndex={initialSlideIndex} />
            <ReportFormModal opened={reportModalOpened} setOpened={setReportModalOpened} />
        </Paper>
    );
}

const ProductReviewList = ({ userReviews }: ProductReviewListProps) => {

    return (
        <>
            {userReviews.map(userReview => (
                <section id={`${userReview.id}`} key={userReview.id}>
                    <UserReview
                        key={userReview.id}
                        username={userReview.username}
                        userId={userReview.user_id}
                        userAvatarUrl={userReview.user_avatar_url}
                        createdAt={userReview.created_at}
                        review={userReview.review}
                        score={userReview.user_rating}
                        answers={userReview.answers}
                        mediaUrls={[...userReview.photos_urls, ...userReview.videos_urls]}
                        likeCount={userReview.likeCount}
                        deslikeCount={userReview.deslikeCount}
                    />
                </section>
            ))}
        </>
    )
}

export default ProductReviewList