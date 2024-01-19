import { faker } from '@faker-js/faker';

interface UserReviewComment {
    id: number,
    product_id: number,
    created_at: string,
    comment: string,
    product_name: string
}

const generateUserReviewComment = (): UserReviewComment => {
    const comment: UserReviewComment = {
        id: faker.number.int(),
        product_id: faker.number.int(),
        product_name: faker.commerce.product(),
        comment: faker.lorem.text(),
        created_at: faker.date.past().toISOString(),
    };

    return comment;
};


const generateUserReviewComments = () => {
    const userReviewComments: UserReviewComment[] = Array.from({ length: 10 }, generateUserReviewComment);
    return userReviewComments
}

export default generateUserReviewComments
