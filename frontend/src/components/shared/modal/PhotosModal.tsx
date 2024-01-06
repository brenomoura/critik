import { Modal, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

interface PhotosModalProps {
    opened: boolean,
    setOpened: any,
    photosUrls: string[]
}

function PhotosModal({ opened, setOpened, photosUrls }: PhotosModalProps) {
    const TRANSITION_DURATION = 200;
    

    const slides = photosUrls.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} />
        </Carousel.Slide>
    ));

    return (
        <Modal
            opened={opened}
            transitionProps={{ duration: TRANSITION_DURATION }}
            withCloseButton={false}
            onClose={() => setOpened(false)}
            size={1000}
        >
            <Carousel loop>
                {slides}
            </Carousel>
        </Modal>
    );
}

export default PhotosModal