import {
    Textarea,
    Group,
    Title,
    Button,
    Slider,
    Space,
    Modal,
    Text,
    Image,
    SimpleGrid
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { useState } from 'react';


interface ProductReviewFormProps {
    opened: boolean,
    setOpened: any,
}

const ProductReviewFormModal = ({ opened, setOpened }: ProductReviewFormProps) => {
    const marks = [
        { value: 0, label: 'Horrible' },
        { value: 1, label: 'Very Bad' },
        { value: 2, label: 'Bad' },
        { value: 3, label: 'Not So Good' },
        { value: 4, label: 'Regular' },
        { value: 5, label: 'OK' },
        { value: 6, label: 'Good' },
        { value: 7, label: 'Very Good' },
        { value: 8, label: 'Excellent' },
        { value: 9, label: 'Fantastic' },
        { value: 10, label: 'Incredible' },
    ];

    const form = useForm({
        initialValues: {
            review: '',
        },
    });

    const [files, setFiles] = useState<FileWithPath[]>([]);

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
    });

    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Left your review about the product"
            size="xl"
            centered
        >
            <form onSubmit={form.onSubmit(() => { })} style={{ padding: 10 }}>
                <Textarea
                    mt="md"
                    placeholder="Left your impressions about the product here..."
                    maxRows={10}
                    minRows={5}
                    autosize
                    name="message"
                    variant="filled"
                    {...form.getInputProps('review')}
                />
                <Space h="xl" />
                <Title
                    order={2}
                    size="h4"
                    style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                    ta="left"
                >
                    What rating do you give to the product?
                </Title>
                <Slider
                    defaultValue={5}
                    label={(val) => marks.find((mark) => mark.value === val)!.label}
                    max={10}
                    step={1}
                    marks={marks}
                    styles={{ markLabel: { display: 'none' } }}
                    style={{ padding: 20 }}
                />
                <Space h="xl" />
                <div>
                    <Dropzone accept={[...IMAGE_MIME_TYPE, 'video/mp4']} onDrop={setFiles}>
                        <Text ta="center">Drop images or videos here</Text>
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
        </Modal>
    )
}

export default ProductReviewFormModal