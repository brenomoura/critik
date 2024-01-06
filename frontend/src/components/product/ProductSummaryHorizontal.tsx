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
} from '@mantine/core';
import { Star, Images, Video } from '@phosphor-icons/react'
import classes from './ProductSummaryHorizontal.module.css';
import IProductItem from '../../types/productItemInterface';
import { useMediaQuery } from '@mantine/hooks';
import PhotosModal from '../shared/modal/PhotosModal';
import { useState } from 'react';
import VideosModal from '../shared/modal/VideosModal';


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
                    <Text fz="sm" lineClamp={4}>
                        {product.description}
                    </Text>
                </Stack>
            </Grid.Col>
            <Grid.Col span="auto">
                <Center>
                    <Badge leftSection={<Star style={{ width: rem(20), height: rem(20) }} />} py={150} color="transparent">
                        <Title size={100}>{product.score}</Title>
                    </Badge>
                </Center>
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
                    <Badge leftSection={<Star style={{ width: rem(20), height: rem(20) }} />} py={150} color="transparent">
                        <Title size={100}>{product.score}</Title>
                    </Badge>
                </Center>
            </SimpleGrid>
            <div>
                <Text fz="xl">
                    {product.name}
                </Text>
                <Text fz="sm" c="dimmed" fw={500}>
                    {product.category}
                </Text>
                <Text fz="sm" lineClamp={4}>
                    {product.description}
                </Text>

            </div>
        </Stack>
    );
}


const ProductSummaryHorizontal = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(1335)})`);
    const [photosModalOpened, setPhotosModalOpened] = useState<true | false>(false);
    const [videosModalOpened, setVideosModalOpened] = useState<true | false>(false);

    const product = {
        "id": 28848,
        "avatar": "https://picsum.photos/200/300",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        "name": "Unbranded Steel Shoes",
        "score": 7.9,
        "category": "electronic"
    }
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
        : <DesktopGridView product={product} setPhotosModalOpened={setPhotosModalOpened} setVideosModalOpened={setVideosModalOpened}  photosCount={productPhotosUrls.length} videosCount={productVideosUrls.length} />
    return (
        <>
            <Card withBorder className={classes.card}>
                {productHeaderComponent}
            </Card>
            <PhotosModal opened={photosModalOpened} setOpened={setPhotosModalOpened} photosUrls={productPhotosUrls} />
            <VideosModal opened={videosModalOpened} setOpened={setVideosModalOpened} videosUrls={productVideosUrls} />
        </>
    );
}

export default ProductSummaryHorizontal