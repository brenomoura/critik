import { Button, Center, rem } from '@mantine/core';
import { ListPlus } from '@phosphor-icons/react'
import { useState } from 'react';
import ProductReviewFormModal from './modal/ProductReviewFormModal';


const ProductReviewForm = () => {
    const [modalOpened, setModalOpened] = useState<true | false>(false);

    return (
        <div style={{ margin: 30 }}>
            <Center>
                <Button 
                    leftSection={<ListPlus style={{ width: rem(20), height: rem(20) }} />}
                    onClick={() => setModalOpened(true)}
                >
                    Click here to left your review about the product
                </Button>
            </Center>
            <ProductReviewFormModal opened={modalOpened} setOpened={setModalOpened} />
        </div>
    )
}

export default ProductReviewForm