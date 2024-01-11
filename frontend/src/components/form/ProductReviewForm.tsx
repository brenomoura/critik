import { Button, rem } from '@mantine/core';
import { ListPlus } from '@phosphor-icons/react'
import { useState } from 'react';
import ProductReviewFormModal from './modal/ProductReviewFormModal';

// TODO - Create a confirm modal to avoid user miss click when he is creating/editing the discussion

const AddProductReview = () => {
    const [modalOpened, setModalOpened] = useState<true | false>(false);

    return (
        <div>
            <Button
                leftSection={<ListPlus style={{ width: rem(20), height: rem(20) }} />}
                onClick={() => setModalOpened(true)}
            >
                Click here to left your review about the product
            </Button>
            <ProductReviewFormModal opened={modalOpened} setOpened={setModalOpened} />
        </div>
    )
}

export default AddProductReview