import {
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
    Stack,
    Button,
    Tooltip
} from "@mantine/core";
import { Star, ThumbsUp, ThumbsDown, Siren } from '@phosphor-icons/react'
import moment from "moment";
import MediaModal from "../shared/modal/MediaModal";
import { useState } from "react";
import StyledLink from "../shared/StyledLink";
import ReportFormModal from "../form/modal/ReportFormModal";



// The same interface from the API
interface IUserReviewAnswer {
    id: number
    username: string,
    user_avatar_url: string,
    comment: string,
    created_at: string
}

interface UserReviewAndAnswersProps {
    id: number,
    username: string,
    userAvatarUrl: string,
    createdAt: string,
    review: string,
    score: number,
    productId: number,
    answers: IUserReviewAnswer[]
    mediaUrls: string[],
    likeCount: number,
    deslikeCount: number
}

interface UserReview {
    id: number,
    username: string,
    user_avatar_url: string,
    review: string,
    user_rating: number,
    created_at: string,
    updated_at: string,
    photos_urls: string[],
    videos_urls: string[],
    answers: UserReviewAnswer[],
    product_id: number,
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


interface UserReviewListProps {
    userReviews: UserReview[]
}


const UserReviewAndAnswers = ({ id, createdAt, review, score, mediaUrls, likeCount, deslikeCount, productId, answers }: UserReviewAndAnswersProps) => {
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
        <div>
            <Paper withBorder style={{ padding: "var(--mantine-spacing-lg) var(--mantine-spacing-xl)" }} m={15}>
                <Stack
                    justify="flex-end"
                >
                    <Grid>
                        <Grid.Col span="auto">
                            <StyledLink to={`/product/${productId}/#${id}`}>
                                <Group>
                                    <div>
                                        <Tooltip label={`${moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}`} position="right">
                                            <Text size="xs" c="dimmed">
                                                {`${moment(createdAt).fromNow()}`}
                                            </Text>
                                        </Tooltip>
                                    </div>
                                </Group>
                                <Text pt="sm" size="sm" style={{ whiteSpace: "pre-line" }}>
                                    {review}
                                </Text>
                            </StyledLink>
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
                                <StyledLink to={`/product/${productId}/#${id}`}>
                                    <Badge leftSection={<Star style={{ width: rem(20), height: rem(20) }} />} py={40} color="transparent">
                                        <Title size={40}>{score}</Title>
                                    </Badge>
                                </StyledLink>
                            </Center>
                        </Grid.Col>
                    </Grid>
                    <Group justify="space-between">
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
            </Paper>
            {answers.map((answer) => {
                return <Paper withBorder style={{ padding: "var(--mantine-spacing-lg) var(--mantine-spacing-xl)" }} m={15}>
                    <Stack
                        justify="flex-end"
                    >
                        <Grid>
                            <Grid.Col span="auto">
                                <StyledLink to={`/product/${productId}/#${answer.id}`}>
                                    <Group>
                                        <div>
                                            <Tooltip label={`${moment(answer.created_at).format('MMMM Do YYYY, h:mm:ss a')}`} position="right">
                                                <Text size="xs" c="dimmed">
                                                    {`${moment(answer.created_at).fromNow()}`}
                                                </Text>
                                            </Tooltip>
                                        </div>
                                    </Group>
                                    <Text pt="sm" size="sm" style={{ whiteSpace: "pre-line" }}>
                                        {answer.comment}
                                    </Text>
                                </StyledLink>
                            </Grid.Col>
                        </Grid>
                        <Group justify="end">
                            <Button variant="transparent" color="gray" leftSection={<Siren />} onClick={() => setReportModalOpened(true)}>
                                <Text size="xs" c="dimmed">
                                    Report
                                </Text>
                            </Button>
                        </Group>
                    </Stack>
                </Paper>
            })}
            <MediaModal opened={mediaModalOpened} setOpened={setMediaModalOpened} mediaUrls={mediaUrls} initialSlideIndex={initialSlideIndex} />
            <ReportFormModal opened={reportModalOpened} setOpened={setReportModalOpened} />
        </div>
    );
}

const UserReviewList = ({ userReviews }: UserReviewListProps) => {
    return (
        <>
            {userReviews.map(userReview => (
                <UserReviewAndAnswers
                    key={userReview.id}
                    id={userReview.id}
                    productId={userReview.product_id}
                    username={userReview.username}
                    userAvatarUrl={userReview.user_avatar_url}
                    createdAt={userReview.created_at}
                    review={userReview.review}
                    score={userReview.user_rating}
                    answers={userReview.answers}
                    mediaUrls={[...userReview.photos_urls, ...userReview.videos_urls]}
                    likeCount={userReview.likeCount}
                    deslikeCount={userReview.deslikeCount}
                />
            ))}
        </>
    )
}

export default UserReviewList