import { faker } from '@faker-js/faker';
import IPendingProductItem from '../types/pendingProductItemInterface';


const generatePendingProduct = (): IPendingProductItem => {
    const pendingProduct: IPendingProductItem = {
        id: faker.number.int(),
        avatar: faker.image.url(),
        description: faker.lorem.text(),
        name: faker.commerce.product(),
        category: faker.commerce.department(),
        media: [
            ...Array.from({ length: faker.number.int({ min: 0, max: 3 }) }, () => faker.image.url()),
            ...Array.from({ length: faker.number.int({ min: 0, max: 1 }) }, () => "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4") // each video must have their own id
        ]
    };

    return pendingProduct;
};


const generatePendingProducts = () => {
    const pendingProducts: IPendingProductItem[] = Array.from({ length: 10 }, generatePendingProduct);
    return pendingProducts
}

export default generatePendingProducts
