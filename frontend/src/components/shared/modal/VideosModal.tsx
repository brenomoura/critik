import { Modal, rem } from '@mantine/core';
import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel';
import { useState } from 'react';


interface VideosModalProps {
    opened: boolean,
    setOpened: any,
    videosUrls: string[]
}

function VideosModal({ opened, setOpened, videosUrls }: VideosModalProps) {
    const TRANSITION_DURATION = 200;
    const [embla, setEmbla] = useState<Embla | null>(null);


    const slides = videosUrls.map((url) => (
        <Carousel.Slide key={url}>
            <video width="1024" height="768" controls>
                <source src={url} type="video/mp4" />
            </video>
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
            <Carousel loop getEmblaApi={setEmbla}>
                {slides}
            </Carousel>
        </Modal>
    );
}

export default VideosModal