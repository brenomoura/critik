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
    Tooltip
} from "@mantine/core";
import { Star, Video } from '@phosphor-icons/react'
import generateMain from "../../mock_data/generate_review";
import moment from "moment";
import MediaModal from "../shared/modal/MediaModal";
import { useState } from "react";



// The same interface from the API
interface UserReviewAnswer {
    id: number,
    username: string,
    user_avatar_url: string,
    comment: string
}

interface UserReviewProps {
    username: string,
    userAvatarUrl: string,
    createdAt: string,
    review: string,
    score: number,
    answers: UserReviewAnswer[]
    mediaUrls: string[],
}

const UserReview = ({ username, userAvatarUrl, createdAt, review, score, answers, mediaUrls }: UserReviewProps) => {
    const [mediaModalOpened, setMediaModalOpened] = useState<true | false>(false);
    const [initialSlideIndex, setInitialSlideIndex] = useState<number | undefined>()

    const mediaComponent = (url: string) => {
        if (url.includes(".mp4")) {
            return (
                <Image src="../../../public/play_button_gray_bg.jpg" maw={80} style={{ aspectRatio: "4/3" }}/>
            )
        }
        return (
            <Image src={url} maw={80} style={{ aspectRatio: "4/3" }}/>
        )
    }
    const mediaComponentOnClick = (initialSlide: number) => {
        setInitialSlideIndex(initialSlide)
        setMediaModalOpened(true)
    }

    return (
        <Paper withBorder style={{ padding: "var(--mantine-spacing-lg) var(--mantine-spacing-xl)" }}>
            <Grid>
                <Grid.Col span="auto">
                    <Group>
                        <Avatar
                            src={userAvatarUrl}
                            alt={username}
                            radius="xl"
                        />
                        <div>
                            <Text size="sm">{username}</Text>
                            <Text size="xs" c="dimmed">
                                {` ${moment(createdAt).fromNow()}`}
                            </Text>
                        </div>
                    </Group>
                    <Text pl={54} pt="sm" size="sm">
                        {review}
                    </Text>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Center>
                        <div style={{ cursor: 'pointer' }}>
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
            <MediaModal opened={mediaModalOpened} setOpened={setMediaModalOpened} mediaUrls={mediaUrls} initialSlideIndex={initialSlideIndex} />
        </Paper>
    );
}

const ProductReviewList = () => {
    const userReviews = generateMain()

    return (
        <>
            {userReviews.map(userReview => (
                <UserReview
                    key={userReview.id}
                    username={userReview.username}
                    userAvatarUrl={userReview.user_avatar_url}
                    createdAt={userReview.created_at}
                    review={userReview.review}
                    score={userReview.score}
                    answers={userReview.answers}
                    mediaUrls={[...userReview.photos_urls, ...userReview.videos_urls]}
                />
            ))}

        </>
    )
}

export default ProductReviewList