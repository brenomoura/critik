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
    Modal,
    Container,
    Badge,
    Center
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useContext, useEffect, useState } from 'react';
import MediaModal from '../../shared/modal/MediaModal';
import { ModalFormContext } from '../../../helper/context';
import { Trash } from '@phosphor-icons/react';
import IPendingReportItem from '../../../types/pendingReportItemInterface';

interface ReportFormProps {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    approvedReport: IPendingReportItem;
}


const ApprovalReportFormModal = ({ opened, setOpened, approvedReport }: ReportFormProps) => {
    const { setSelectedPendingReport } = useContext(ModalFormContext)

    const [mediaModalOpened, setMediaModalOpened] = useState<boolean>(false)
    const [initialSlideIndex, setInitialSlideIndex] = useState<number>(0)
    const [allMediaUrls, setAllMediaUrls] = useState<string[]>([])
    const [oldMedia, setOldMedia] = useState<string[]>(approvedReport.media);
    const [newMedia, setNewMedia] = useState<FileWithPath[]>([]);


    const form = useForm({
        initialValues: {
            name: approvedReport.name,
            category: approvedReport.category,
            description: approvedReport.description,
        },
    });


    const removeMedia = (mediaIndex: number) => {
        setOldMedia(oldMedia.filter((_, index) => index !== mediaIndex))
        setNewMedia(newMedia.filter((_, index) => oldMedia.length + index !== mediaIndex))
        setAllMediaUrls(allMediaUrls.filter((_, index) => index !== mediaIndex))
    }

    const imageComponent = (src: string, index: number) => {
        return (
            <Container key={index}>
                <Image
                    src={src}
                    onClick={() => {
                        setMediaModalOpened(true)
                        setInitialSlideIndex(index)
                    }}
                    style={{ cursor: "pointer", aspectRatio: "4/3" }}
                />
                <Center>
                    <Badge
                        leftSection={<Trash size={15} />}
                        color="red"
                        mt={5}
                        onClick={() => removeMedia(index)}
                        style={{ cursor: "pointer" }}
                    >
                        Remove
                    </Badge>
                </Center>
            </Container>
        )
    }


    const allMediaPreviews = allMediaUrls.map((src, index) => {
        if (src.includes(".mp4")) {
            src = "../../../../public/play_button_gray_bg.jpg"
        }
        return imageComponent(src, index)
    })

    useEffect(() => {
        setAllMediaUrls([...oldMedia, ...newMedia.map(file => URL.createObjectURL(file))])
    }, [oldMedia, newMedia])

    return (
        <Modal
            opened={opened}
            onClose={() => {
                setSelectedPendingReport(null)
                setOpened(false)
            }}
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
                            setNewMedia([...newMedia, ...mediaToBeAdded])
                        }}
                    >
                        <Text ta="center">Drop images or videos of the desired product here</Text>
                    </Dropzone>
                    <SimpleGrid cols={{ base: 1, sm: 4 }} mt={allMediaPreviews.length > 0 ? 'xl' : 0}>
                        {allMediaPreviews}
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
                mediaUrls={allMediaUrls}
                initialSlideIndex={initialSlideIndex}
            />
        </Modal>
    )
}

export default ApprovalReportFormModal