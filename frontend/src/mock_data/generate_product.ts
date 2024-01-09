import { faker } from '@faker-js/faker';
import IProductItem from '../types/productItemInterface';


const generateProduct = (): IProductItem => {
    const review: IProductItem = {
        id: faker.number.int(),
        avatar: faker.image.url(),
        description: faker.lorem.text(),
        name: faker.commerce.product(),
        rating: faker.number.float({min: 0.0, max: 10.0}),
        category: faker.commerce.department(),
        discussionsCount: faker.number.int({min: 5, max: 541}),
        reviewsCount: faker.number.int({min: 5, max: 982}),
    };

    return review;
};

export default generateProduct
