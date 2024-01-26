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
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useState } from 'react';
import IPendingProductItem from '../../../types/pendingProductItemInterface';
import MediaModal from '../../shared/modal/MediaModal';

interface ReportFormProps {
    opened: boolean,
    setOpened: any,
    approvedProduct?: IPendingProductItem | null
}

// const getFileFromUrlWithPath = async (url: string, name: string, defaultType: string = 'image/jpeg'): Promise<FileWithPath> => {
//     const response = await fetch(url);
//     const data = await response.blob();

//     const fileWithPath: FileWithPath = Object.assign(new File([data], name, { type: data.type || defaultType }), { path: url });
//     return fileWithPath;
// };


const ApprovalProductFormModal = ({ opened, setOpened, approvedProduct }: ReportFormProps) => {
    // TODO - FIX chunk-VG3LJI6G.js?v=9eb6630f:2375 Warning: Internal React error: Expected static flag was missing. Please notify the React team. ON CONSOLE
    if (!approvedProduct) {
        return <></>
    }

    const [mediaModalOpened, setMediaModalOpened] = useState<boolean>(false)
    const [initialSlideIndex, setInitialSlideIndex] = useState<number>(0)



    const form = useForm({
        initialValues: {
            name: approvedProduct.name,
            category: approvedProduct.category,
            description: approvedProduct.description,
        },
    });

    const [media, setMedia] = useState<string[]>(approvedProduct.media);

    const removeMedia = (indexToRemove: number) => {
        setMedia(media.filter((_, index) => index !== indexToRemove))
    }

    const imageComponent = (src: string, index: number) => {
        return (
            <Tooltip label="Press the scroll button to remove the media" key={index}>
                <Image
                    key={index}
                    src={src}
                    onClick={() => {
                        setMediaModalOpened(true)
                        setInitialSlideIndex(index)
                    }}
                    // TODO - FIND WAY TO DELETE THE IMAGE, ADD SOME CLOSE 
                    onScrollCapture={() => removeMedia(index)}
                    style={{ cursor: "pointer", aspectRatio: "4/3" }}
                />
            </Tooltip>
        )
    }

    const previews = media.map((src, index) => {
        if (src.includes(".mp4")) {
            src = "../../../../public/play_button_gray_bg.jpg"
        }
        return imageComponent(src, index)
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
                    {...form.getInputProps('name')}
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
                            setMedia([...media, ...mediaToBeAdded.map((item) => item.path).filter((path): path is string => path !== undefined)])
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
            <MediaModal
                opened={mediaModalOpened}
                setOpened={setMediaModalOpened}
                mediaUrls={media}
                initialSlideIndex={initialSlideIndex}
            />
        </Modal>
    )
}

export default ApprovalProductFormModal