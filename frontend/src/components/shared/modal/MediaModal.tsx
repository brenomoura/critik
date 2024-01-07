import { Modal, Image } from '@mantine/core';
import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel';
import { useState } from 'react';


interface MediaModalProps {
    opened: boolean,
    setOpened: any,
    mediaUrls: string[]
    initialSlideIndex?: number
}

function MediaModal({ opened, setOpened, mediaUrls, initialSlideIndex }: MediaModalProps) {
    const TRANSITION_DURATION = 200;
    const [embla, setEmbla] = useState<Embla | null>(null);

    useAnimationOffsetEffect(embla, TRANSITION_DURATION);

    const mediaComponent = (url: string) => {
        if (url.includes(".mp4")) {
            return (
                <video width="1024" height="768" controls>
                    <source src={url} type="video/mp4" />
                </video>
            )
        }
        return (
            <Image src={url} />
        )
    }


    const slides = mediaUrls.map((url) => (
        <Carousel.Slide key={url}>
            {mediaComponent(url)}
        </Carousel.Slide>
    ));

    return (
        <Modal
            opened={opened}
            transitionProps={{ duration: TRANSITION_DURATION }}
            withCloseButton={false}
            onClose={() => setOpened(false)}
            size={1100}
        >
            <Carousel loop getEmblaApi={setEmbla} initialSlide={initialSlideIndex}>
                {slides}
            </Carousel>
        </Modal>
    );
}

export default MediaModal