import { Modal, Image } from '@mantine/core';
import { Carousel, Embla } from '@mantine/carousel';
import { useState } from 'react';

interface PhotosModalProps {
    opened: boolean,
    setOpened: any,
    photosUrls: string[]
}

function PhotosModal({ opened, setOpened, photosUrls }: PhotosModalProps) {
    const TRANSITION_DURATION = 200;
    const [embla, setEmbla] = useState<Embla | null>(null);

    const slides = photosUrls.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} />
        </Carousel.Slide>
    ));

    return (
        <Modal
            opened={opened}
            withCloseButton={false}
            transitionProps={{ duration: TRANSITION_DURATION }}
            onClose={() => setOpened(false)}
        >
            <Carousel loop getEmblaApi={setEmbla}>
                {slides}
            </Carousel>
        </Modal>
    );
}

export default PhotosModal