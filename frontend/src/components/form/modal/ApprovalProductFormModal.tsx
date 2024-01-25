import {
    Textarea,
    Group,
    Title,
    Button,
    Space,
    Text,
    Image,
    SimpleGrid,
    Input,
    Tooltip,
    Modal
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { useState } from 'react';
import IPendingProductItem from '../../../types/pendingProductItemInterface';

interface ReportFormProps {
    opened: boolean,
    setOpened: any,
    pendingProduct: IPendingProductItem
}

const getFileFromUrlWithPath = async (url: string, name: string, defaultType: string = 'image/jpeg'): Promise<FileWithPath> => {
    const response = await fetch(url);
    const data = await response.blob();

    const fileWithPath: FileWithPath = Object.assign(new File([data], name, { type: data.type || defaultType }), { path: url });
    return fileWithPath;
};


const ApprovalProductFormModal = ({ opened, setOpened, pendingProduct }: ReportFormProps) => {
    const form = useForm({
        initialValues: {
            name: pendingProduct.name,
            category: pendingProduct.category,
            description: pendingProduct.description,
        },
    });

    const [media, setMedia] = useState<FileWithPath[]>([]);

    // FIX THIS LOGIC HERE

    if(opened) {
        const fetchMediaFiles = async () => {
            const mediaAsFilePromises = pendingProduct.media.map(async (item) => {
                const fileName = new URL(item).pathname.split('/').pop();
                return getFileFromUrlWithPath(item, fileName || '');
            });
    
            const mediaAsFile = await Promise.all(mediaAsFilePromises);
            setMedia(mediaAsFile);
        };
    
        fetchMediaFiles();
    }

    const removeMedia = (indexToRemove: number) => {
        setMedia(media.filter((_, index) => index !== indexToRemove))
    }

    const imageComponent = (srcUrl: string, index: number) => {
        return (
            <Tooltip label="Double click to remove the media">
                <Image
                    key={index}
                    src={srcUrl}
                    onLoad={() => URL.revokeObjectURL(srcUrl)}
                    onDoubleClick={() => removeMedia(index)}
                    style={{ cursor: "pointer", aspectRatio: "4/3" }}
                />
            </Tooltip>
        )
    }


    const previews = media.map((file, index) => {
        if (!file.path) {
            return null
        }
        let mediaUrl: string = file.path
        if (mediaUrl.includes(".mp4")) {
            mediaUrl = "../../../../public/play_button_gray_bg.jpg"
        }
        return imageComponent(mediaUrl, index)
    });


    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            size="xl"
            title="If needed, you can edit the product information!"
            centered
        >
            <form onSubmit={form.onSubmit(() => { })} style={{ padding: 10 }}>
                <Title
                    order={2}
                    size="h4"
                    style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                    ta="left"
                >
                    Product Name
                </Title>
                <Space h="xs" />
                <Input
                    placeholder="Type here the product name"
                    {...form.getInputProps('description')}
                />
                <Space h="xl" />
                <Title
                    order={2}
                    size="h4"
                    style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                    ta="left"
                >
                    Product Category
                </Title>
                <Space h="xs" />
                <Input
                    placeholder="Type here the product category"
                    {...form.getInputProps('category')}
                />
                <Space h="xl" />
                <Title
                    order={2}
                    size="h4"
                    style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                    ta="left"
                >
                    Desired Product Description
                </Title>
                <Space h="xs" />
                <Textarea
                    placeholder="Describe the desired product to be added here..."
                    maxRows={10}
                    minRows={5}
                    autosize
                    name="message"
                    variant="filled"
                    {...form.getInputProps('description')}
                />
                <Space h="xl" />
                <Title
                    order={2}
                    size="h4"
                    style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                    ta="left"
                >
                    Desired Product Attachments
                </Title>
                <Space h="xs" />
                <div>
                    <Dropzone
                        accept={[...IMAGE_MIME_TYPE, 'video/mp4']}
                        onDrop={(mediaToBeAdded) => {
                            setMedia([...media, ...mediaToBeAdded])
                        }}
                    >
                        <Text ta="center">Drop images or videos of the desired product here</Text>
                    </Dropzone>
                    <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? 'xl' : 0}>
                        {previews}
                    </SimpleGrid>
                </div>

                <Group justify="left" mt="xl">
                    <Button type="submit" size="md">
                        Submit!
                    </Button>
                </Group>
            </form>
            {/* <MediaModal
                opened={mediaModalOpened}
                setOpened={setMediaModalOpened}
                mediaUrls={media.map((item) => item.path).filter(Boolean) as string[]}
                initialSlideIndex={initialSlideIndex}
            /> */}
        </Modal>
    )
}

export default ApprovalProductFormModal