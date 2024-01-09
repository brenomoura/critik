import {
    Card,
    Text,
    Badge,
    Center,
    Avatar,
    Grid,
    rem,
    Title,
    em,
    Stack,
    SimpleGrid,
    Tooltip,
    Group,
} from '@mantine/core';
import { Star, Images, Video } from '@phosphor-icons/react'
import classes from './ProductSummaryReviews.module.css';
import IProductItem from '../../types/productItemInterface';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import MediaModal from '../shared/modal/MediaModal';
import generateProduct from '../../mock_data/generate_product';


interface UserReview {
    id: number,
    username: string,
    review: string,
    score: number,
    created_at: string,
    updated_at: string,
    photos_urls: string[],
    videos_urls: string[],
    answers: UserReviewAnswer[]
}

interface UserReviewAnswer {
    id: number,
    username: string,
    comment: string
}


const DesktopGridView = ({ product, setPhotosModalOpened, setVideosModalOpened, videosCount, photosCount }: { product: IProductItem, setPhotosModalOpened: any, setVideosModalOpened: any, videosCount: number, photosCount: number }) => {
    return (
        <Grid align="center" >
            <Grid.Col span="auto">
                <Center>
                    <Avatar
                        src={product.avatar}
                        size={250}
                        radius="xl"
                        mr="xs"
                        onClick={() => (setPhotosModalOpened(true))}
                        style={{ cursor: "pointer" }}
                    />
                    <Stack>
                        <Tooltip label='Click here to see the product photos' position='right' withArrow>
                            <div style={{ cursor: 'pointer' }} onClick={() => (setPhotosModalOpened(true))}>
                                <Badge leftSection={<Images style={{ width: rem(40), height: rem(40) }} />} py={57} px={27} color="gray" radius="xl">
                                    <Text>{photosCount > 99 ? "+99" : photosCount}</Text>
                                </Badge>
                            </div>
                        </Tooltip>
                        <Tooltip label='Click here to see the product videos' position='right' withArrow>
                            <div style={{ cursor: 'pointer' }} onClick={() => (setVideosModalOpened(true))}>
                                <Badge leftSection={<Video style={{ width: rem(40), height: rem(40) }} />} py={57} px={27} color="gray" radius="xl">
                                    <Text>{videosCount > 99 ? "+99" : videosCount}</Text>
                                </Badge>
                            </div>
                        </Tooltip>
                    </Stack>
                </Center>
            </Grid.Col>
            <Grid.Col span={6}>
                <Stack>
                    <Text fz="xl">
                        {product.name}
                    </Text>
                    <Text fz="sm" c="dimmed" fw={500}>
                        {product.category}
                    </Text>
                    <Text fz="sm">
                        {product.description}
                    </Text>
                </Stack>
            </Grid.Col>
            <Grid.Col span="auto">
                <Stack>
                    <Center>
                        <Badge leftSection={<Star style={{ width: rem(20), height: rem(20) }} />} py={150} color="transparent">
                            <Title size={100}>{product.rating.toFixed(1)}</Title>
                        </Badge>
                    </Center>
                    <Center>
                        <Group mt={-150} justify="center" >
                            <div>
                                <Text ta="center" fz="lg" fw={500}>
                                    {product.reviewsCount}
                                </Text>
                                <Text ta="center" fz="sm" c="dimmed" lh={1}>
                                    Total Ratings
                                </Text>
                            </div>
                            <div>
                                <Text ta="center" fz="lg" fw={500}>
                                    {product.discussionsCount}
                                </Text>
                                <Text ta="center" fz="sm" c="dimmed" lh={1}>
                                    Total Discussions
                                </Text>
                            </div>
                        </Group>
                    </Center>
                </Stack>
            </Grid.Col>
        </Grid>
    )
}

const MobileGridView = ({ product, setPhotosModalOpened, setVideosModalOpened, videosCount, photosCount }: { product: IProductItem, setPhotosModalOpened: any, setVideosModalOpened: any, videosCount: number, photosCount: number }) => {

    return (
        <Stack>
            <SimpleGrid cols={2}>
                <Center>
                    <Avatar
                        src={product.avatar}
                        size={210}
                        radius="xl"
                        mr="xs"
                        onClick={() => (setPhotosModalOpened(true))}
                        style={{ cursor: "pointer" }}

                    />
                    <Stack>
                        <Tooltip label='Click here to see the product photos' position='right' withArrow>
                            <div style={{ cursor: 'pointer' }} onClick={() => (setPhotosModalOpened(true))}>
                                <Badge leftSection={<Images style={{ width: rem(40), height: rem(40) }} />} py={47} px={17} color="gray" radius="lg">
                                    <Text>{photosCount > 99 ? "+99" : photosCount}</Text>
                                </Badge>
                            </div>
                        </Tooltip>
                        <Tooltip label='Click here to see the product videos' position='right' withArrow>
                            <div style={{ cursor: 'pointer' }} onClick={() => (setVideosModalOpened(true))}>
                                <Badge leftSection={<Video style={{ width: rem(40), height: rem(40) }} />} py={47} px={17} color="gray" radius="lg">
                                    <Text>{videosCount > 99 ? "+99" : videosCount}</Text>
                                </Badge>
                            </div>
                        </Tooltip>
                    </Stack>
                </Center>
                <Center>
                    <Stack>
                        <Center>
                            <Badge leftSection={<Star style={{ width: rem(20), height: rem(20) }} />} py={150} color="transparent">
                                <Title size={100}>{product.rating.toFixed(1)}</Title>
                            </Badge>
                        </Center>
                        <Center>
                            <Group mt={-150} justify="center" >
                                <div>
                                    <Text ta="center" fz="lg" fw={500}>
                                        {product.reviewsCount}
                                    </Text>
                                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                                        Total Ratings
                                    </Text>
                                </div>
                                <div>
                                    <Text ta="center" fz="lg" fw={500}>
                                        {product.discussionsCount}
                                    </Text>
                                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                                        Total Discussions
                                    </Text>
                                </div>
                            </Group>
                        </Center>
                    </Stack>
                </Center>
            </SimpleGrid>
            <div>
                <Text fz="xl">
                    {product.name}
                </Text>
                <Text fz="sm" c="dimmed" fw={500}>
                    {product.category}
                </Text>
                <Text fz="sm">
                    {product.description}
                </Text>

            </div>
        </Stack>
    );
}


const ProductSummaryReviews = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(1335)})`);
    const [photosModalOpened, setPhotosModalOpened] = useState<true | false>(false);
    const [videosModalOpened, setVideosModalOpened] = useState<true | false>(false);

    const product = generateProduct()
    const productPhotosUrls = [
        "https://picsum.photos/id/1/1000/1000",
        "https://picsum.photos/id/2/1000/1000",
        "https://picsum.photos/id/3/1000/1000",
        "https://picsum.photos/id/4/1000/1000",
        "https://picsum.photos/id/5/1000/1000",
    ]

    const productVideosUrls = [
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    ]


    const productHeaderComponent = isMobile
        ? <MobileGridView product={product} setPhotosModalOpened={setPhotosModalOpened} setVideosModalOpened={setVideosModalOpened} photosCount={productPhotosUrls.length} videosCount={productVideosUrls.length} />
        : <DesktopGridView product={product} setPhotosModalOpened={setPhotosModalOpened} setVideosModalOpened={setVideosModalOpened} photosCount={productPhotosUrls.length} videosCount={productVideosUrls.length} />

    // TODO: The image used in the avatar must be the first image in the photos urls array!
    return (
        <>
            <Card withBorder className={classes.card}>
                {productHeaderComponent}
            </Card>
            <MediaModal opened={photosModalOpened} setOpened={setPhotosModalOpened} mediaUrls={productPhotosUrls} />
            <MediaModal opened={videosModalOpened} setOpened={setVideosModalOpened} mediaUrls={productVideosUrls} />
        </>
    );
}

export default ProductSummaryReviews;