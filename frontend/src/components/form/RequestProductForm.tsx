import {
    Textarea,
    Group,
    Title,
    Button,
    Space,
    Text,
    Image,
    SimpleGrid,
    Container,
    Input,
    Tooltip
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { useState } from 'react';


const ProductRequestForm = () => {
    const form = useForm({
        initialValues: {
            name: '',
            category: '',
            description: '',
        },
    });

    const [media, setMedia] = useState<FileWithPath[]>([]);

    const removeMedia = (indexToRemove: number) => {
        setMedia(media.filter((_, index) => index !== indexToRemove))
    }


    const previews = media.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
            <Tooltip label="Double click to remove the media">
                <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} onDoubleClick={() => removeMedia(index)} style={{ cursor: "pointer" }} />
            </Tooltip>
        )
    });


    return (
        <Container>
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

        </Container>
    )
}

export default ProductRequestForm