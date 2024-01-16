import { Button, rem } from '@mantine/core';
import { NotePencil } from '@phosphor-icons/react'
import { useState } from 'react';
import ProductDiscussionFormModal from '../form/modal/ProductDiscussionFormModal';

// TODO - Create a confirm modal to avoid user miss click when he is creating/editing the discussion

const AddProductDiscusssion = () => {
    const [modalOpened, setModalOpened] = useState<true | false>(false);

    return (
        <div style={{ margin: 30, textAlign: 'right' }}>
            <Button
                leftSection={<NotePencil style={{ width: rem(20), height: rem(20) }} />}
                onClick={() => setModalOpened(true)}
            >
                Create a new discussion
            </Button>
            <ProductDiscussionFormModal
                opened={modalOpened}
                setOpened={setModalOpened}
                modalTitle='Create a new discussion'
                isReply={false}
            />
        </div>
    )
}

export default AddProductDiscusssion