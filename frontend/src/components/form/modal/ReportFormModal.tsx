import {
    Textarea,
    Group,
    Button,
    Space,
    Modal,
} from '@mantine/core';
import { useForm } from '@mantine/form';

interface ReportFormProps {
    opened: boolean,
    setOpened: any,
}

const ReportFormModal = ({ opened, setOpened }: ReportFormProps) => {
    const form = useForm({
        initialValues: {
            report: '',
        },
    });

    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Report Post"
            size="xl"
            centered
        >
            <form onSubmit={form.onSubmit(() => { })} style={{ padding: 10 }}>
                <Textarea
                    mt="md"
                    placeholder="Please, type details about the report. Once submitted, the admins will check and take the necessary providence."
                    maxRows={10}
                    minRows={5}
                    autosize
                    name="message"
                    variant="filled"
                    {...form.getInputProps('report')}
                />
                <Space h="xl" />
                <Group justify="left" mt="xl">
                    <Button type="submit" size="md">
                        Submit!
                    </Button>
                </Group>
            </form>
        </Modal>
    )
}

export default ReportFormModal