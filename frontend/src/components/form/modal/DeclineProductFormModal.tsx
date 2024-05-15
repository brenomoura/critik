import {
    Textarea,
    Group,
    Button,
    Space,
    Modal,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import IPendingProductItem from '../../../types/pendingProductItemInterface';
import { ProductModalFormContext } from '../../../helper/context';
import { useContext } from 'react';

interface ReportFormProps {
    opened: boolean,
    setOpened: any,
    declinedProduct: IPendingProductItem
}

const DeclineProductFormModal = ({ opened, setOpened, declinedProduct }: ReportFormProps) => {
    const { setSelectedPendingProduct } = useContext(ProductModalFormContext)

    const form = useForm({
        initialValues: {
            report: '',
        },
    });

    return (
        <Modal
            opened={opened}
            onClose={() => {
                setSelectedPendingProduct(null)
                setOpened(false)
            }}
            size="xl"
            centered
        >
            <form onSubmit={form.onSubmit(() => { })} style={{ padding: 10 }}>
                <Textarea
                    mt="md"
                    placeholder="Please, type reason for the declination"
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

export default DeclineProductFormModal